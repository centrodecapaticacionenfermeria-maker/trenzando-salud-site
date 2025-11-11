const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

// CSP segura (evita ruido del traductor pero permite tus recursos locales)
app.use(helmet({
  crossOriginEmbedderPolicy: false,
  contentSecurityPolicy: {
    useDefaults: true,
    directives: {
      "default-src": ["'self'"],
      "base-uri": ["'self'"],
      "form-action": ["'self'"],
      "img-src": ["'self'", "data:", "blob:"],
      "media-src": ["'self'", "data:", "blob:"],
      "script-src": ["'self'"],
      "style-src": ["'self'"],
      "connect-src": ["'self'"],
      "object-src": ["'none'"],
      "frame-ancestors": ["'self'"]
    }
  }
}));

app.use(compression());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// estáticos
app.use(express.static(path.join(__dirname, 'public')));

// ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rutas (incluye /galeria ANTES de app.listen)
app.get('/', (req, res) => res.render('index', { title: 'Trenzando la Salud' }));
app.get('/quienes-somos', (req, res) => res.render('quienes', { title: 'Quiénes somos' }));
app.get('/mision', (req, res) => res.render('mision', { title: 'Misión' }));
app.get('/vision', (req, res) => res.render('vision', { title: 'Visión' }));
app.get('/programas', (req, res) => res.render('programas', { title: 'Oferta académica' }));
app.get('/contacto', (req, res) => res.render('contacto', { title: 'Contacto' }));
app.get('/registro', (req, res) => res.render('registro', { title: 'Registro a diplomados' }));
app.get('/galeria', (req, res) => res.render('galeria', { title: 'Galería' }));

// API
app.post('/api/preinscripcion', (req, res) => {
  const data = req.body || {};
  console.log('Preinscripción recibida:', data);
  return res.json({ ok: true, message: '¡Gracias! te contactaremos pronto.' });
});

// 404
app.use((req, res) => res.status(404).send('No encontrado'));

// 500 (log detallado para ver el error real de EJS en Render logs)
app.use((err, req, res, next) => {
  console.error('ERROR 500:', err.stack || err);
  res.status(500).send(err.message || 'Error interno del servidor');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor escuchando en puerto ${port}`));

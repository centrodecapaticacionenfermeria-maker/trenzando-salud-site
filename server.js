
const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
app.use(helmet({ contentSecurityPolicy: false }));
app.use(compression());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render('index', { title: 'Trenzando la Salud' }));
app.get('/quienes-somos', (req, res) => res.render('quienes', { title: 'Quiénes somos' }));
app.get('/mision', (req, res) => res.render('mision', { title: 'Misión' }));
app.get('/vision', (req, res) => res.render('vision', { title: 'Visión' }));
app.get('/programas', (req, res) => res.render('programas', { title: 'Oferta académica' }));
app.get('/contacto', (req, res) => res.render('contacto', { title: 'Contacto' }));
app.get('/registro', (req, res) => res.render('registro', { title: 'Registro a diplomados' }));


app.post('/api/preinscripcion', (req, res) => {
  const data = req.body || {}
  console.log('Preinscripción recibida:', data);
  return res.json({ ok: true, message: '¡Gracias! te contactaremos pronto.' });
});

const port = process.env.PORT || 10000;
app.listen(port, () => console.log(`Servidor escuchando en puerto ${port}`));

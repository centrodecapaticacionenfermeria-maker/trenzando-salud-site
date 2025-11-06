# Trenzando la Salud — Sitio Comercial (Node/Express + EJS)

## Paleta (extraída del PDF)
#b54321, #5a3f31, #ad9c88, #7b735b, #d0c5b3, #1e1817

## Requisitos
- Node 18+ (Windows: VS Code)
- Git y GitHub
- Cuenta en Render.com

## Cómo correr local
```bash
npm install
npm run start
# abre http://localhost:3000
```

## Deploy en Render (Web Service)
1. Sube este proyecto a un repositorio de GitHub.
2. En Render → New → Web Service → conecta el repo.
3. Build Command: `npm install`
4. Start Command: `node server.js`
5. Runtime: Node 18+
6. Render asigna `PORT` automáticamente.
7. Deploy y copia la URL pública.

## Personalización
- `views/` páginas EJS.
- `public/css/styles.css` → variables `--c1..--c6` (colores del PDF).
- `server.js` rutas y endpoint de preinscripción (demo).

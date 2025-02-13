const express = require('express');
const app = express();
const PORT = 3000;

// Configuración de EJS como motor de vistas
app.set('view engine', 'ejs');

// Middleware para archivos estáticos (CSS, imágenes, scripts)
app.use(express.static('public'));

// Ruta principal
app.get('/', (req, res) => {
    res.render('index'); // Renderiza el archivo index.ejs
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

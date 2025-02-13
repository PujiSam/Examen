const express = require('express');
const path = require('path');

const app = express();

// Configurar el motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos (CSS, imágenes, scripts)
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/halo', (req, res) => {
    res.render('halo');
});

app.get('/devilmaycry', (req, res) => {
    res.render('devilmaycry');
});

app.get('/dota2', (req, res) => {
    res.render('dota2');
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

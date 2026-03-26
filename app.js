const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the current directory
app.use(express.static(__dirname));

// Send index.html for any route to simulate SPA or just serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Assets are also handled by express.static, but we can be explicit if needed
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.listen(3000, () => {
    console.log(`
    ========================================
    PokéDex Ultra — Servidor Iniciado!
    Acesse em: http://localhost:3000
    ========================================
    `);
});

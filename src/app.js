const express = require('express');
const cors = require('cors');
const app = express();

// * Archivos externos
const { logger } = require('../config/logger'); // * Logger de consola
const router = require('./routes/router.js'); // * Archivo barril de rutas

app.use(cors()); // * Configuracion de Cross
app.use(logger);
app.use(express.json());

app.use(router);

module.exports = app;

const { Router } = require('express');
// TODO Importar las rutas
const index = require('./index.routes.js');

// TODO Agregar las rutas
const router = Router();
router.use('/', index); //* Ruta Raiz

module.exports = router;

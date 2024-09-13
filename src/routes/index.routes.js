const { Router } = require('express');
const index = Router();

// TODO Controladores
const getIndex = require('../controllers/index/getIndex.js');

// TODO Rutas del raiz
index.get('/', getIndex);

module.exports = index;

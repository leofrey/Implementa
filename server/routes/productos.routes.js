const express = require('express');
const router = express.Router();
const productos = require('../controlador/productos.controlador');

router.get('/', productos.getProductos);
router.get('/:CODIGO', productos.getProductosId);

module.exports = router;
const express = require ('express');
const router = express.Router();

const productosController = require ('../controllers/productosController');

router.get('/', productosController.productosTotales);

router.get('/detalle/:id', productosController.detalle);
router.get('/agregar', productosController.agregar);
router.get('/editar', productosController.editar);

module.exports = router;  
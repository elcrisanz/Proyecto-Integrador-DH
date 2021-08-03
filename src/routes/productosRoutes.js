const express = require ('express');
const router = express.Router();

const productosController = require ('../controllers/productosController');

router.get('/', productosController.productosTotales);

router.get('/detalle/:id', productosController.detalle);
router.get('/agregar', productosController.agregar);
router.put('/editar/:id', productosController.editar);

module.exports = router;  
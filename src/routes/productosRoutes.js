const express = require ('express');
const router = express.Router();

const productosController = require ('../controllers/productosController');

router.get('/', productosController.index);
router.get('/login', productosController.login);
router.get('/carrito', productosController.carrito);
router.get('/producto', productosController.producto);
router.get('/registro', productosController.registro);
router.get('/agregar', productosController.agregar);
router.get('/editar', productosController.editar);

module.exports = router;
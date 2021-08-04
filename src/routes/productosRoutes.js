const express = require ('express');
const router = express.Router();

const productosController = require ('../controllers/productosController');

router.get('/', productosController.productosTotales);

router.get('/detalle/:id', productosController.detalle);

router.get('/agregar', productosController.agregar);
router.post('/agregar', productosController.store);

router.get('/editar/:id', productosController.editar);
router.put('/editar/:id', productosController.update);

router.delete('/:id', productosController.destroy)


module.exports = router;  
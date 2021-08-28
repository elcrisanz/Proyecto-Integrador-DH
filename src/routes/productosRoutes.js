const express = require ('express');
const router = express.Router();
const uploadFile = require('../middlewares/multerMiddleware.js');

const productosController = require('../controllers/productosController');

router.get('/', productosController.productosTotales);

router.get('/detalle/:id', productosController.detalle);

router.get('/agregar', productosController.agregar);
router.post('/agregar',uploadFile.single('fotoProducto'), productosController.store);

router.get('/editar/:id', productosController.editar);
router.put('/editar/:id', uploadFile.single('fotoProducto'), productosController.update);

router.delete('/:id', productosController.destroy)


module.exports = router;  
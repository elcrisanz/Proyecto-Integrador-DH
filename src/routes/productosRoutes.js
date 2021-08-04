const express = require ('express');
const router = express.Router();

const productosController = require ('../controllers/productosController');

router.get('/', productosController.productosTotales);

router.get('/detail/:id', productosController.detalle);

router.get('/create', productosController.agregar);
router.post('/create', productosController.store);

router.get('/edit/:id', productosController.editar);
router.put('/edit/:id', productosController.update);

router.delete('/:id', productosController.destroy)


module.exports = router;  
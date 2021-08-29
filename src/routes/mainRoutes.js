const express = require ('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
router.get('/carrito', mainController.carrito);
// router.get('/perfil', mainController.perfil)

module.exports = router;
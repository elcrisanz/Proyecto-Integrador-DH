const express = require ('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
router.get('/carrito', mainController.carrito);
// router.get('/perfil', mainController.perfil)
router.get('/aboutUs', mainController.aboutUs);
router.get('/contacto', mainController.contacto);
router.post('/contacto', mainController.message);



module.exports = router;
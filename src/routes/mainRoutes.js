const express = require ('express');
const router = express.Router();
const { body } = require('express-validator');


const mainController = require('../controllers/mainController');
const validations = [
    body ('name').notEmpty().withMessage('Debes escribir tu nombre'),
    body ('email')
        .notEmpty().withMessage('Debes escribir tu email').bail()
        .isEmail().withMessage('Debes escribir un formato valido de correo'),
    body ('telephone').notEmpty().withMessage('Debes escribir tu numero de telefono'),
    body ('message').notEmpty().withMessage('Debes enviarnos un mensaje')
]

router.get('/', mainController.index);
router.get('/carrito', mainController.carrito);
// router.get('/perfil', mainController.perfil)
router.get('/aboutUs', mainController.aboutUs);
router.get('/contacto', mainController.contacto);
router.post('/contacto', validations, mainController.message);



module.exports = router;
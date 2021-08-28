const express = require ('express');
const router = express.Router();
const { body } = require('express-validator');
const uploadFile = require('../middlewares/multerMiddleware.js');
const usersController = require('../controllers/usersController');


//VALIDACIONES//

const validacionesRegistro = [
    body('name').notEmpty().withMessage("Este campo no puede estar vacío"),
    body('lastName').notEmpty().withMessage("Este campo no puede estar vacío"),
    body('password').notEmpty().withMessage("Este campo no puede estar vacío"),
    body('passwordConfirm').notEmpty().withMessage("Este campo no puede estar vacío"),
    body('email').isEmail().withMessage("Ingresa un email válido"),
    body('emailConfirm').notEmpty().withMessage("Ingresa un email válido")
]

// router.post('/login', usersController.login);
router.get('/login', usersController.login);
router.post('/login', usersController.loginProcess);
router.get('/registro', usersController.registro);
router.post('/registro',validacionesRegistro, uploadFile.single('avatar'),usersController.userStore);

// router.get('/profile', usersController.profile)

module.exports = router;
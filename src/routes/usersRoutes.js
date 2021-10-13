const express = require ('express');
const router = express.Router();
const { body } = require('express-validator');
const uploadFile = require('../middlewares/multerMiddleware.js');
const usersController = require('../controllers/usersController');

//Middlewares
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

//validaciones
const validations = [
    body ('name').notEmpty().withMessage('Debes escribir tu nombre'),
    body ('lastName').notEmpty().withMessage('Debes escribir tu apellido'),
    body ('password').notEmpty().withMessage('Debes introducir tu contraseña'),
    body ('passwordConfirm').notEmpty().withMessage('Debes confirmar tu contraseña'),
    body ('mailRegistro')
    .notEmpty().withMessage('Debes escribir tu email').bail()
    .isEmail().withMessage('Debes escribir un formato valido de correo'),
    body ('mailRegistro')
    .notEmpty().withMessage('Debes escribir tu email').bail()
    .isEmail().withMessage('Debes escribir un formato valido de correo'),
    body ('emailConfirm').notEmpty().withMessage('Debes confirmar tu email'),
    body ('avatar').custom ((value, {req}) => {
        let file = req.file;
        if (!file) {
            throw new Error ('Tienes que subir una imagen');
        }
        return true;
    })

]

// router.post('/login', usersController.login);
router.get('/login', guestMiddleware, usersController.login);
router.post('/login', usersController.loginProcess);
router.get('/registro', guestMiddleware, usersController.registro);
router.get('/perfil', usersController.profile)
router.get('/logout', usersController.logout);
router.post('/registro', uploadFile.single('avatar'),usersController.userStore);

// router.get('/profile', usersController.profile)

module.exports = router;
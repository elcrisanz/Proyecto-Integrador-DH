const express = require ('express');
const router = express.Router();
const { body } = require('express-validator');
const uploadFile = require('../middlewares/multerMiddleware.js');
const usersController = require('../controllers/usersController');

//Middlewares
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');


// router.post('/login', usersController.login);
router.get('/login', guestMiddleware, usersController.login);
router.post('/login', usersController.loginProcess);
router.get('/registro', guestMiddleware, usersController.registro);
// router.get('/profile', authMiddleware, usersController.profile)
router.get('/logout', usersController.logout);
router.post('/registro',validacionesRegistro, uploadFile.single('avatar'),usersController.userStore);

// router.get('/profile', usersController.profile)

module.exports = router;
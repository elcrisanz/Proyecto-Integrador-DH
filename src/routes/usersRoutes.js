const express = require ('express');
const router = express.Router();

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


module.exports = router;
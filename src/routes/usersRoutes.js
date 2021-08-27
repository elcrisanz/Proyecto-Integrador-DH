const express = require ('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

// router.post('/login', usersController.login);
router.get('/login', usersController.login);
router.post('/login', usersController.loginProcess);
router.get('/registro', usersController.registro);
// router.get('/profile', usersController.profile)

module.exports = router;
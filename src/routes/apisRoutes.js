const express = require ('express');
const router = express.Router();
const apisController = require ('../controllers/apisController')

router.get('/apiProductos', apisController.productList);
router.get('/apiProductos/:id', apisController.oneProduct);
router.get('/apiUsuarios', apisController.usersList);
router.get('/apiUsuarios/:id', apisController.oneUser);
router.get('/apiCategorias', apisController.categories);


module.exports= router;
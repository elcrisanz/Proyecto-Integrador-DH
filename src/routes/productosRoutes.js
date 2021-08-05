const express = require ('express');
const router = express.Router();
const path = require('path')
const multer = require('multer')


const productosController = require('../controllers/productosController');

const multerDiskStorage = multer.diskStorage({
    destination: function(req, file, cb) {       
     cb(null, path.join(__dirname,'../../public/img/'));   
    },
    filename: function(req, file, cb) {      
     let imageName = Date.now() + path.extname(file.originalname);  
     cb(null, imageName);         
    }
});

const uploadFile = multer({ storage: multerDiskStorage });



router.get('/', productosController.productosTotales);

router.get('/detalle/:id', productosController.detalle);

router.get('/agregar', productosController.agregar);
router.post('/agregar', uploadFile.single('productImg'), productosController.store);

router.get('/editar/:id', productosController.editar);
router.put('/editar/:id',uploadFile.single('productImg'), productosController.update);

router.delete('/:id', productosController.destroy)


module.exports = router;  
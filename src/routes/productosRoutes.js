const express = require ('express');
const router = express.Router();
const multer = require('multer')
const path = require ('path')

const productosController = require('../controllers/productosController');
const multerDiskStorage = multer.diskStorage({
    destination: function(req, file, cb) {       // request, archivo y callback que almacena archivo en destino
     cb(null, path.join(__dirname,'../../public/img'));    // Ruta donde almacenamos el archivo
    },
    filename: function(req, file, cb) {          // request, archivo y callback que almacena archivo en destino
     let imageName = Date.now() + path.extname(file.originalname);   // milisegundos y extensión de archivo original
     cb(null, imageName);         
    }
});
const uploadFile = multer({ storage: multerDiskStorage });


router.get('/', productosController.productosTotales);

router.get('/detalle/:id', productosController.detalle);

router.get('/agregar', productosController.agregar);
router.post('/agregar',uploadFile.single('fotoProducto'), productosController.store);

router.get('/editar/:id', productosController.editar);
router.put('/editar/:id', uploadFile.single('fotoProducto'), productosController.update);

router.delete('/:id', productosController.destroy)


module.exports = router;  
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, './../data/productsDB.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controlador = {
   
    agregar: (req,res) =>{
        res.render('./products/agregar-producto');
    },

    editar: (req,res) =>{
        res.render('./products/editar-producto');
    },
      
    detalle: (req,res) =>{
        let id= req.params.id
        let productoEncontrado;

        for (let p of products){
            if ( p.id==id){
                productoEncontrado = p;
                break;
            }
        }
        res.render('./products/producto', {productoDetalle: productoEncontrado});
    },

    productosTotales: (req,res) =>{
        res.render('./products/productosTotales', {productos: products});
    },
};

module.exports = controlador;
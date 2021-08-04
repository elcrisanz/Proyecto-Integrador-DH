const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, './../data/productsDB.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controlador = {
   
    agregar: (req,res) =>{
        res.render('./products/agregar-producto');
    },

    store: (req, res) => {
        let idNuevo = 0;
        
        for (let e of products) {
            if (idNuevo < products.id) {
                idNuevo = products.id
            }
        }
        idNuevo++;

        let productoNuevo = {
            id: idNuevo,
            name: req.body.name,
            price: req.body.price,
            measure: req.body.measure,
            stock: req.body.stock,
            //falta imagen
            img: "pulsera2.jpeg"
        }

        products.push(productoNuevo);

        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
        res.redirect('/products/')

    },

    editar: (req, res) => {
        let id= req.params.id
        let productoEncontrado;

        for (let p of products){
            if ( p.id==id){
                productoEncontrado = p;
                break;
            }
        }
        res.render('./products/editar-producto', { productoAEditar: productoEncontrado });
    },

    update: (req, res) => {
        let id= req.params.id

        for (let p of products){
            if ( p.id==id){
                p.name = req.body.name;
                p.price = req.body.price;
                p.measure = req.body.measure;
                p.stock = parseInt(req.body.stock);
                // p.image= req.body.image,
                break;
            }
        }

        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
        res.redirect('/products/')
        
    },
    destroy: (req, res) => {
        let id = req.params.id;
        let nProducts = products.filter(function (e) {
           return id != e.id;
        });
        fs.writeFileSync(productsFilePath, JSON.stringify(nProducts, null, ' '));
        res.redirect('/products/')
        
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

    productosTotales: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('./products/productosTotales', {productos: products});
    },
};

module.exports = controlador;
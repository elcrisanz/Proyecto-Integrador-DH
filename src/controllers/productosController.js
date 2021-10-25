const fs = require('fs');
const path = require('path');
let db = require ('../../database/models');
const Op = db.Sequelize.Op;

// const productsFilePath = path.join(__dirname, './../data/productsDB.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controlador = {
   
    agregar: (req, res) => {
        let pedidoCategories = db.categories.findAll();
        let pedidoMeasures = db.measures.findAll();

        Promise.all([pedidoCategories, pedidoMeasures])
            .then(function([categories, measures]){
            res.render('./products/agregar-producto', {categories: categories, measures: measures})
        })
    },

    store: (req, res) => {
     
            db.products.create({
            include: [{association: "category"}],
            name: req.body.name,
            price: req.body.price,
           // measure: req.body.measure,
           // stock: req.body.stock,
            image: req.file.filename,
            id_category: req.body.category
            })
        // let idNuevo = 0;
        
        // for (let e of products) {
        //     if (idNuevo < e.id) {
        //         idNuevo = e.id;
        //     }
        // }
        // idNuevo++;

        // let productoNuevo = {
        //     id: idNuevo,
        //     name: req.body.name,
        //     price: req.body.price,
        //     measure: req.body.measure,
        //     stock: req.body.stock,
        //     image: req.file.filename
        // }

        // products.push(productoNuevo);

        // fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
        res.redirect('/products/')

    },

    editar: (req, res) => {
        let pedidoCategories = db.categories.findAll();
        let pedidoMeasures = db.measures.findAll();
        let pedidoProduct = db.products.findByPk(req.params.id, {
            include: [{association: "category"}, {association: "measures"}]
        })
        
        Promise.all([pedidoCategories, pedidoProduct, pedidoMeasures])
        .then(function([categories, product, measures]){
            res.render('./products/editar-producto', { categories: categories, productoAEditar: product, measures: measures});
            })
        // let id= req.params.id
        // let productoEncontrado;

        // for (let p of products){
        //     if ( p.id==id){
        //         productoEncontrado = p;
        //         break;
        //     }
        // }
        // res.render('./products/editar-producto', { productoAEditar: productoEncontrado });
    },

    update: (req, res) => {
        console.log(req.body);
        let updateProducts = db.products.update({
            name: req.body.name,
            price: req.body.price,
            id_category: req.body.category,
           // measure: req.body.measure,
           // stock: req.body.stock,
            image: req.file.filename
        }, {
            where: {
                id: req.params.id
            }
        })
        let updateStockS = db.products_measures.update({
            stock: req.body.SStock
        }, {
            where: {
                id: req.params.id,
                id_measure: 1
            }
        })
        let updateStockM = db.products_measures.update({
            stock: req.body.MStock
        }, {
            where: {
                id: req.params.id,
                id_measure: 2
            }
        })
        let updateStockL = db.products_measures.update({
            stock: req.body.LStock
        }, {
            where: {
                id: req.params.id,
                id_measure: 3
            }
        })
        let updateStockXL = db.products_measures.update({
            stock: req.body.XLStock
        }, {
            where: {
                id: req.params.id,
                id_measure: 4
            }
        })
        Promise.all([updateProducts, updateStockS,updateStockM,updateStockL,updateStockXL])
        .then(function([products, stockS,stockM,stockL,stockXL]){
            res.redirect('/products/')
            })

        // let id = req.params.id
        
        // let image = req.file.filename

        // for (let p of products){
        //     if ( p.id==id){
        //         p.name = req.body.name;
        //         p.price = req.body.price;
        //         p.measure = req.body.measure;
        //         p.stock = parseInt(req.body.stock);
        //         p.image = image;
        //         break;
        //     }
        // }

        // fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
        
        
    },
    destroy: (req, res) => {
        db.products.destroy({
            where: {
                id: req.params.id
            }
        })
        // let id = req.params.id;
        // let nProducts = products.filter(function (e) {
        //    return id != e.id;
        // });
        // fs.writeFileSync(productsFilePath, JSON.stringify(nProducts, null, ' '));
        res.redirect('/products/')
        
    },
      
    detalle: (req, res) => {
        db.products.findByPk(req.params.id)
            .then(function (productoEncontrado) {
                res.render('./products/producto', {productoDetalle: productoEncontrado});
            })
        // let id= req.params.id
        // let productoEncontrado;

        // for (let p of products){
        //     if ( p.id==id){
        //         productoEncontrado = p;
        //         break;
        //     }
        // }
        // res.render('./products/producto', {productoDetalle: productoEncontrado});
    },

    productosTotales: (req, res) => {
        // const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
            db.products.findAll()
                .then(function (products){
                    res.render('./products/productosTotales', { productos: products });
                })
    },
    productosAnillos: (req, res) => {
        // const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
            db.products.findAll()
                .then(function (products){
                    res.render('./products/productosAnillos', { productos: products });
                })
    },
    productosAritos: (req, res) => {
        // const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
            db.products.findAll()
                .then(function (products){
                    res.render('./products/productosAritos', { productos: products });
                })
    },
    productosCollares: (req, res) => {
        // const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
            db.products.findAll()
                .then(function (products){
                    res.render('./products/productosCollares', { productos: products });
                })
    },
    productosPulseras: (req, res) => {
        // const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
            db.products.findAll()
                .then(function (products){
                    res.render('./products/productosPulseras', { productos: products });
                })
    },
        // res.render('./products/productosTotales', {productos: products});
    // },
    search: (req, res) => {
        let search= req.query.query
            db.products.findAll({
                where:{
                    name:{
                         [Op.like]: '%'+search+'%'
                        }
                     }
                 })
                .then(function (products){
                    res.render('./products/productosBuscados', { productos: products });
         })               
     }
}

module.exports = controlador;

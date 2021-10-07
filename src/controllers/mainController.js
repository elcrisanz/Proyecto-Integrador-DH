let db = require ("../../database/models")

const controlador = {
    
    index: (req,res) =>{
        res.render('index');
    },
    carrito: (req,res) =>{
        res.render('./products/carrito-de-compras');
    },
    perfil: (req, res) => {
        res.render('./users/perfil');
    }
};

module.exports = controlador;
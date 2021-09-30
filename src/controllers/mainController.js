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
    },
    aboutUs: (req, res) => {
        res.render('./aboutUs');
    },
    contacto: (req, res) => {
        res.render('./contacto');
    },
    message: (req, res) => {
        let mensaje = {
            name: req.body.name,
            email: req.body.email,
            telephone: req.body.telephone,
            message: req.body.message
        }
        console.log(mensaje)
        res.render('./index');
    },

};

module.exports = controlador;
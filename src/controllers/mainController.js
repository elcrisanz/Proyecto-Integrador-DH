let db = require ("../../database/models");
const { validationResult } = require ( 'express-validator');


const controlador = {
    
    index: (req,res) =>{
        res.render('index');
    },
    carrito: (req,res) =>{
        res.render('./products/carrito-de-compras');
    },
    favoritos: (req,res) =>{
        res.render('./products/favoritos');
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
        const resultValidations = validationResult(req)
        if (resultValidations.errors.length > 0){
            return res.render('./contacto', {
                errors: resultValidations.mapped(),
                oldData: req.body
            });
        }
    }
};

module.exports = controlador;
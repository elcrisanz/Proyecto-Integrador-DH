const controlador = {
    index: (req,res) =>{
        res.render('index');
    },
    carrito: (req,res) =>{
        res.render('./products/carrito-de-compras');
    }
};

module.exports = controlador;
const controlador = {
    index: (req,res) =>{
        res.render('index');
    },
    
    login: (req,res) =>{
        res.render('./users/login');
    },

    registro: (req,res) =>{
        res.render('./users/registro');
    },
      
    carrito: (req,res) =>{
        res.render('./products/carrito-de-compras');
    },

    agregar: (req,res) =>{
        res.render('./products/agregar-producto');
    },

    editar: (req,res) =>{
        res.render('./products/editar-producto');
    },
      
    producto: (req,res) =>{
        res.render('./products/producto');
    }
};

module.exports = controlador;
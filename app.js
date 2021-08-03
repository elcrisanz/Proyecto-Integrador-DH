const express = require('express')
const app = express()

const productosRouter = require ('./src/routes/productosRoutes')
const mainRouter = require('./src/routes/mainRoutes')

const methodOverride = require('method-override');

app.use ('/', mainRouter);
app.use ('/products', productosRouter);

app.use(express.static('public'));
app.use(methodOverride('_method')); 

app.set ('view engine', 'ejs');

app.listen(process.env.PORT || 3000, function() {
  console.log("Corriendo servidor en el puerto 3000");
});
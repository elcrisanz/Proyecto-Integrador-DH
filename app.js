const express = require('express')
const app = express()

const productosRouter = require ('./src/routes/productosRoutes')

app.use ('/', productosRouter);

app.use(express.static('public'));


app.set ('view engine', 'ejs');

app.listen(process.env.PORT || 3000, function() {
  console.log("Corriendo servidor en el puerto 3000");
});
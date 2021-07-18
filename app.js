const express = require('express')
const app = express()
const path = require('path');

app.get('/', (req,res) =>{
  res.render(path.resolve(__dirname, './views/index.ejs'));
});

app.get('/Login', (req,res) =>{
  res.render(path.resolve(__dirname, './views/login.ejs'));
});

app.get('/Registro', (req,res) =>{
  res.render(path.resolve(__dirname, './views/registro.ejs'));
});

app.get('/Carrito', (req,res) =>{
  res.render(path.resolve(__dirname, './views/carrito-de-compras.ejs'));
});

app.get('/Producto', (req,res) =>{
  res.render(path.resolve(__dirname, './views/producto.ejs'));
});

app.get('/Editar', (req,res) =>{
  res.render(path.resolve(__dirname, './views/editar-producto.ejs'));
});

app.get('/Agregar', (req,res) =>{
  res.render(path.resolve(__dirname, './views/agregar-producto.ejs'));
});

app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.static(path.resolve(__dirname, './views')));

app.listen(process.env.PORT || 3000, function() {
  console.log("Corriendo servidor en el puerto 3000");
});
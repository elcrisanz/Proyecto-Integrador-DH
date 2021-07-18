const express = require('express')
const app = express()
const path = require('path');

app.get('/', (req,res) =>{
  res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.get('/Login', (req,res) =>{
  res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.get('/Registro', (req,res) =>{
  res.sendFile(path.resolve(__dirname, './views/registro.html'));
});

app.get('/Carrito', (req,res) =>{
  res.sendFile(path.resolve(__dirname, './views/carrito-de-compras.html'));
});

app.get('/Producto', (req,res) =>{
  res.sendFile(path.resolve(__dirname, './views/producto.html'));
});

app.get('/Editar', (req,res) =>{
  res.sendFile(path.resolve(__dirname, './views/editar-producto.html'));
});

app.get('/Agregar', (req,res) =>{
  res.sendFile(path.resolve(__dirname, './views/agregar-producto.html'));
});

app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.static(path.resolve(__dirname, './views')));

app.listen(process.env.PORT || 3000, function() {
  console.log("Corriendo servidor en el puerto 3000");
});
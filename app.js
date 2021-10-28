const express = require('express')
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express()
const cors = require('cors');


// ************ Middlewares - (don't touch) ************
const userLoggedMiddleware = require ('./src/middlewares/userLoggedMiddleware')

app.use(session( {
  secret: "Rukha",
  resave: false,
  saveUninitialized: false,
} ));

app.use(cookieParser());
app.use(userLoggedMiddleware);
app.use(cors())


const productosRouter = require ('./src/routes/productosRoutes')
const usersRouter = require ('./src/routes/usersRoutes')
const mainRouter = require('./src/routes/mainRoutes')
const apisRouter = require ('./src/routes/apisRoutes')

const methodOverride = require('method-override');
// const { findByEmail } = require('./src/controllers/usersController');

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use ('/', mainRouter);
app.use('/products', productosRouter);
app.use('/products/anillos', productosRouter);
app.use('/products/collares', productosRouter);
app.use('/products/aritos', productosRouter);
app.use('/products/pulseras', productosRouter);
app.use('/user', usersRouter);
app.use('/api', apisRouter);


app.use(express.static('public'));


app.set ('view engine', 'ejs');

app.listen(process.env.PORT || 3001, function () {
  console.log("Corriendo servidor en el puerto 3000");
});
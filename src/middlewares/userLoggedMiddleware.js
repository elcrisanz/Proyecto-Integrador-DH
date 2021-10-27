const usersController = require('../controllers/usersController');
let db = require ('../../database/models')



function userLoggedMiddleware(req,res,next) {
    res.locals.isLogged = true;

    let allDbUsers = [];
    db.users.findAll().then(function (users) {
        allDbUsers = users
        });
    
    let emailInCookie = req.cookies.userEmail;
    let userFromCookie;
    allDbUsers.forEach(element => {
        if (element.email == emailInCookie) {
            userFromCookie = element
        }
    });

    console.log(userFromCookie)

    if (userFromCookie){
        req.session.userLogged=userFromCookie;
    }

    if(req.session.userLogged){
    res.locals.isLogged=false; 
    res.locals.userLogged=req.session.userLogged;
    res.locals.isAdmin = JSON.stringify(res.locals.userLogged.admin);
    // console.log("isAdmin: " + res.locals.isAdmin)
    
    }
    next();
}

module.exports= userLoggedMiddleware;
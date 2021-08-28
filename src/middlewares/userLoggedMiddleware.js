function userLoggedMiddleware(req,res,next) {
    res.locals.isLogged=true;

    if(req.session.userLogged){
    res.locals.isLogged=false; 
    res.locals.userLogged=req.session.userLogged;

    }

    let emailInCookie = req.cookies.userEmail;



    next();
}

module.exports= userLoggedMiddleware;
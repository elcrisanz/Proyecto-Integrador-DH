function guestMiddleware(req,res,next) {
    if(req.session.usserLogged) {
        return res.redirect('/perfil')
    }
    next();    
}

module.exports = guestMiddleware;
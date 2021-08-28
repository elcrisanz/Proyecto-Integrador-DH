function guestMiddleware(req,res,next) {
    if(req.session.usserLogged) {
        return res.redirect('/')
    }
    next();    
}

module.exports = guestMiddleware;
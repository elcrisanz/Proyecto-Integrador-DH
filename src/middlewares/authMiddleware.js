function authMiddleware(req,res,next) {
    if(!req.session.usserLogged) {
        return res.redirect('/login')
    }
    next();    
}

module.exports = authMiddleware;
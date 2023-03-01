exports.ensureAuthenticated= (res, req, next) => {
    if(req.isAuthenticated()){
        next();
    } else {
        res.status(403).redirect('/auth/signin/form');
    }
}
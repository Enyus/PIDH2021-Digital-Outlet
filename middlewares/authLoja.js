function authLoja(req, res, next) {
    if (typeof(req.session.loja) != 'undefined') {
        return next();
    } else {
        return res.redirect ('/login');
    }
};

module.exports = authLoja
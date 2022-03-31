function authCarrinho(req, res, next) {
    if (typeof(carrinho.length > 0) != 'undefined') {
        return next();
    } else {
        return res.redirect ('/carrinho');
    }
};

module.exports = authCarrinho;
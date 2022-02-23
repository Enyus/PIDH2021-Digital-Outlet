module.exports = {
    index: (req, res, next) => {
        res.render('carrinho-sacola', {title: "Sacola", usuario: req.session.usuario });
    },
    sacola: (req, res, next) => {
        res.render('carrinho-sacola', {title: "Sacola", usuario: req.session.usuario });
    },
    identificacao: (req, res, next) => {
        res.render('carrinho-identificacao', {title: "Identificacao", usuario: req.session.usuario })
    },
    entrega: (req, res, next) => {
        res.render('carrinho-entrega', {title: "Entrega", usuario: req.session.usuario })
    },
    pagamento: (req, res, next) => {
        res.render('carrinho-pagamento', {title: "Pagamento", usuario: req.session.usuario })
    }
}
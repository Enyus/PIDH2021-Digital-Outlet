module.exports = {
    index: (req, res, next) => {
        res.render('carrinho-sacola', {title: "Sacola"});
    },
    sacola: (req, res, next) => {
        res.render('carrinho-sacola', {title: "Sacola"});
    },
    entrega: (req, res, next) => {
        res.render('carrinho-entrega', {title: "Entrega"})
    },
    pagamento: (req, res, next) => {
        res.render('carrinho-pagamento', {title: "Pagamento"})
    }
}
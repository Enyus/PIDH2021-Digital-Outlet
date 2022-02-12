const userData = require("../data/userData.js");

module.exports = {
    index: (req, res, next) => {
        res.render('carrinho-sacola', {title: "Sacola", userData});
    },
    sacola: (req, res, next) => {
        res.render('carrinho-sacola', {title: "Sacola", userData});
    },
    identificacao: (req, res, next) => {
        res.render('carrinho-identificacao', {title: "Identificacao", userData})
    },
    entrega: (req, res, next) => {
        res.render('carrinho-entrega', {title: "Entrega", userData})
    },
    pagamento: (req, res, next) => {
        res.render('carrinho-pagamento', {title: "Pagamento", userData})
    }
}
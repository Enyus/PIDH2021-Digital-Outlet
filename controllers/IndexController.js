module.exports = {
    index: (req, res, next) => {
        res.render('index', { title: 'Digital Outlet $' });
    },
    faq: (req, res, next) => {
        res.render('faq', {title:"Dúvidas Frequentes"});
    },
    sobre: (req, res, next) => {
        res.render('sobre', {title:"Sobre a DO$"})
    },
    contato: (req, res, next) => {
        res.render('contato', {title:"Contato"})
    },
    resultadobusca: (req, res, next) => {
        res.render('resultadobusca', {title:"Resultado da Busca"})
    },
    produto: (req, res, next) => {
        res.render('produto', {title:"Produto"})
    },
    carrinho: (req, res, next) => {
        res.render('carrinho-sacola', {title:"Carrinho"})
    },
    trabalheconosco: (req, res, next) => {
        res.render('trabalheconosco', {title:"Trabalhe Conosco!"})
    },
    cadastroloja: (req, res, next) => {
        res.render('cadastroloja', {title:"Seja nosso Parceiro!"})
    },
    cadastroproduto: (req, res, next) => {
        res.render('cadastroproduto', {title:"Cadastro de Produto"})
    },
    paginacliente: (req, res, next) => {
        res.render('paginacliente', {title:"Bem-Vindo!"})
    },
    paginaloja: (req, res, next) => {
        res.render('paginaloja', {title:"Bem-Vindo!"})
    }

}
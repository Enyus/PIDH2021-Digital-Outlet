const db = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const userData = require("../data/userData.js");

module.exports = {
    index: (req, res, next) => {
        res.render('index', { title: 'Digital Outlet $', userData });
    },
    faq: (req, res, next) => {
        res.render('faq', {title:"Dúvidas Frequentes", userData});
    },
    sobre: (req, res, next) => {
        res.render('sobre', {title:"Sobre a DO$", userData})
    },
    contato: (req, res, next) => {res.render('contato', {title:"Contato", userData})},
    enviaContato: async (req, res) => {
        const { nome, email, telefone, mensagem } = req.body;

        const mensagemContato = await db.FaleConosco.create ({
            nome,
            email,
            telefone,
            mensagem
        })

        // console.log(mensagemContato)
        
        return res.redirect('/contato')
    },
    resultadobusca: (req, res, next) => {
        res.render('resultadobusca', {title:"Resultado da Busca", userData})
    },
    produto: (req, res, next) => {
        res.render('produto', {title:"Produto", userData})
    },
    carrinho: (req, res, next) => {
        res.render('carrinho-sacola', {title:"Carrinho", userData})
    },
    trabalheconosco: (req, res, next) => {
        res.render('trabalheconosco', {title:"Trabalhe Conosco!", userData})
    },
    cadastroloja: (req, res, next) => {
        res.render('cadastroloja', {title:"Seja nosso Parceiro!", userData})
    },
    cadastroproduto: (req, res, next) => {
        res.render('cadastroproduto', {title:"Cadastro de Produto", userData})
    },
    paginacliente: (req, res, next) => {
        res.render('paginacliente', {title:"Bem-Vindo!", userData})
    },
    paginaloja: (req, res, next) => {
        res.render('paginaloja', {title:"Bem-Vindo!", userData})
    }

}
const db = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = {
    index: (req, res, next) => {
        res.render('index', { title: 'Digital Outlet $', usuario: req.session.usuario});
    },
    faq: (req, res, next) => {
        res.render('faq', {title:"Dúvidas Frequentes"});
    },
    sobre: (req, res, next) => {
        res.render('sobre', {title:"Sobre a DO$"})
    },
    contato: (req, res, next) => {res.render('contato', {title:"Contato"})},
    enviaContato: async (req, res) => {
        const { nome, email, telefone, mensagem } = req.body;

        const mensagemContato = await db.FaleConosco.create ({
            nome,
            email,
            telefone,
            mensagem
        })

        return res.redirect('/contato')
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
    cadastrarCurriculo: async (req, res, next) => {
        const { email, nome, departamento, disp, mensagem } = req.body;

        const curriculo = await db.TrabalheConosco.create({
            email,
            nome,
            departamento,
            disp,
            mensagem
        });

        // console.log(curriculo);

        return res.render('trabalheconosco', {title: 'Sucesso', message: "Currículo enviado com Sucesso!"});
    },
    cadastroloja: (req, res, next) => {
        res.render('cadastroloja', {title:"Seja nosso Parceiro!"})
    },
    cadastroproduto: (req, res, next) => {
        res.render('cadastroproduto', {title:"Cadastro de Produto"})
    },
    paginacliente: (req, res, next) => {
        res.render('paginacliente', {title:"Bem-Vindo!", usuario: req.session.usuario})
    },
    paginaloja: (req, res, next) => {
        res.render('paginaloja', {title:"Bem-Vindo!"})
    }

}
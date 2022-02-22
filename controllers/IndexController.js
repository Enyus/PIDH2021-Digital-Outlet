const db = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = {
    index: (req, res, next) => {
        res.render('index', { title: 'Digital Outlet $', usuario: req.session.usuario});
    },
    faq: (req, res, next) => {
        res.render('faq', {title:"Dúvidas Frequentes", usuario: req.session.usuario});
    },
    sobre: (req, res, next) => {
        res.render('sobre', {title:"Sobre a DO$", usuario: req.session.usuario})
    },
    contato: (req, res, next) => {res.render('contato', {title:"Contato", usuario: req.session.usuario})},
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
        res.render('resultadobusca', {title:"Resultado da Busca", usuario: req.session.usuario})
    },
    produto: (req, res, next) => {
        res.render('produto', {title:"Produto", usuario: req.session.usuario})
    },
    carrinho: (req, res, next) => {
        res.render('carrinho-sacola', {title:"Carrinho", usuario: req.session.usuario})
    },
    trabalheconosco: (req, res, next) => {
        res.render('trabalheconosco', {title:"Trabalhe Conosco!", usuario: req.session.usuario})
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

        return res.render('trabalheconosco', {title: 'Sucesso', message: "Currículo enviado com Sucesso!", usuario: req.session.usuario});
    },
    cadastroloja: (req, res, next) => {
        res.render('cadastroloja', {title:"Seja nosso Parceiro!", usuario: req.session.usuario})
    },
    // cadastroproduto: (req, res, next) => {
    //     res.render('cadastroproduto', {title:"Cadastro de Produto", usuario: req.session.usuario})
    // },
    paginacliente: (req, res, next) => {
        res.render('paginacliente', {title:"Bem-Vindo!", usuario: req.session.usuario})
    },
    paginaloja: (req, res, next) => {
        res.render('paginaloja', {title:"Bem-Vindo!", usuario: req.session.usuario})
    }

}
const db = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const userData = require("../data/userData.js");

module.exports = {
    index: (req, res) => res.render('paginacliente', {title:"Bem-Vindo!", userData}),
    login: (req, res) => res.render('login', {title:"Bem-Vindo!", userData}),
    cadastro: (req, res) => res.render('cadastrousuario', {title:"Seja nosso Cliente!", userData}),
    cadastrarUsuario: async (req, res) => {
        const { email, nome, sobrenome, dataNasc, cpf, senha } = req.body;

        const usuarioCriado = await db.Usuarios.create ({
            email,
            nome,
            sobrenome,
            dataNasc,
            cpf,
            senha,
        })

        console.log(usuarioCriado)
        return res.redirect('/')
    },
    cadastroLoja: (req, res) => res.render('cadastroloja', {title:"Seja nosso Parceiro!", userData}),
    carrinho: (req, res) => res.render('carrinho-sacola', {title:"Carrinho!", userData})
}
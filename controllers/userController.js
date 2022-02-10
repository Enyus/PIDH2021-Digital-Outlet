const db = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = {
    index: (req, res) => res.render('paginacliente', {title:"Bem-Vindo!"}),
    login: (req, res) => res.render('login', {title:"Bem-Vindo!"}),
    cadastro: (req, res) => res.render('cadastrousuario', {title:"Seja nosso Cliente!"}),
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
    cadastroLoja: (req, res) => res.render('cadastroloja', {title:"Seja nosso Parceiro!"}),
    carrinho: (req, res) => res.render('carrinho-sacola', {title:"Carrinho!"})
}
const db = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const bcrypt = require('bcrypt');

module.exports = {
    index: (req, res) => res.render('paginacliente', { title: "Bem-Vindo!" }),

    login: (req, res) => res.render('login', { title: "Digite seu login para continuar." }),

    logarUsuario: async (req, res) => {
        const { email, senha } = req.body;

        if(!email || !senha) {res.render('login', {title: "Campos Invalidos"})};

        const user = await db.Usuarios.findOne({ 
            where: {
                email: email,
            }
        });

        if (!bcrypt.compareSync(senha, user.senha)) {
            return res.send("Senha invalida");
        } else {
            res.redirect('/');
        }
    },

    cadastro: (req, res) => res.render('cadastrousuario', { title: "Seja nosso Cliente!" }),

    cadastrarUsuario: async (req, res) => {
        const { email, nome, sobrenome, dataNasc, cpf, senha } = req.body;

        const hash = bcrypt.hashSync(senha, 10);
        const usuarioCriado = await db.Usuarios.create({
            email,
            nome,
            sobrenome,
            dataNasc,
            cpf,
            senha: hash,
        })
        console.log(usuarioCriado)
        return res.redirect('/')
    },

    cadastroLoja: (req, res) => res.render('cadastroloja', { title: "Seja nosso Parceiro!" }),

    cadastrarLoja: async (req, res) => {
        const { email, razaoSocial, nomeFantasia, inscEst, cnpj, senha, logradouro, numero, cidade, estado, cep } = req.body;
        const lojaCriada = await db.Lojas.create({
            email,
            razaoSocial,
            nomeFantasia,
            inscEst,
            cnpj,
            senha,
            logradouro,
            numero,
            cidade,
            estado,
            cep,
        })

        console.log(lojaCriada);
        return res.redirect('/');
    },

    carrinho: (req, res) => res.render('carrinho-sacola', { title: "Carrinho!" })
}
const db = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const bcrypt = require('bcrypt');


module.exports = {
    index: (req, res) => res.render('paginacliente', { title: "Bem-Vindo!", usuario: req.session.usuario }),

    login: (req, res) => res.render('login', { title: "Digite seu login para continuar." , usuario: req.session.usuario}),

    logarUsuario: async (req, res) => {
        const { email, senha } = req.body;

        if(!email || !senha) {res.render('login', {title: "Campos Invalidos", usuario: req.session.usuario})};

        const user = await db.Usuarios.findOne({ 
            where: {
                email: email,
            }
        });

        // console.log(user);

        if (!bcrypt.compareSync(senha, user.senha)) {
            return res.send("Senha invalida");
        } else {
            req.session.usuario = {
                idUsuario: user.idUsuario,
                email: user.email,
                nome: user.nome,
                sobrenome: user.sobrenome,
                dataNasc: user.dataNasc.toISOString().slice(0,10),
                cpf: user.cpf,
                fotoPerfil: user.fotoPerfil
            }
            return res.redirect('/cliente');
        }
    },

    logout: (req, res) => {
        req.session.usuario = undefined;
        return res.redirect('/');
    },

    cadastro: (req, res) => res.render('cadastrousuario', { title: "Seja nosso Cliente!", usuario: req.session.usuario }),

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
        // console.log(usuarioCriado)
        return res.redirect('/login')
    },

    cadastroLoja: (req, res) => res.render('cadastroloja', { title: "Seja nosso Parceiro!", usuario: req.session.usuario }),

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

    carrinho: (req, res) => res.render('carrinho-sacola', { title: "Carrinho!", usuario: req.session.usuario }),

    alterarCliente: async (req,res) => {
        const { idUsuario, email, nome, sobrenome, dataNasc, cpf, senha } = req.body;

        const hash = bcrypt.hashSync(senha, 10);

        try {
            const usuarioAlterado = await db.Usuarios.update(
                {email, nome, sobrenome, dataNasc, cpf, senha:hash},
                {where:{idUsuario}}
            )

            console.log(usuarioAlterado);

            req.session.usuario = undefined;
            return res.redirect('/login');

        } catch (err) {

            return res.status(400).render('error', {title: 'Falha', error: err, message: "Ih deu erro" })

        }
    }
}
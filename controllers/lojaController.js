const db = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = {
    cadastroLoja: (req, res) => res.render('cadastroloja', { title: "Seja nosso Parceiro!" }),

    paginaloja: (req, res, next) => {res.render('paginaloja', {title:"Bem-Vindo!"})},

    cadastrarLoja: async (req, res) => {
        const { email, razaoSocial, nomeFantasia, inscEst, cnpj, senha, logradouro, numero, cidade, estado, cep } = req.body;
        try {
            const hash = bcrypt.hashSync(senha, 10);
            const lojaCriada = await db.Lojas.create({
                email,
                razaoSocial,
                nomeFantasia,
                inscEst,
                cnpj,
                senha: hash,
                logradouro,
                numero,
                cidade,
                estado,
                cep,
            })
            // console.log(lojaCriada);
            return res.redirect('/');
        } catch (error) {
            console.log(error)
            return res.status(400).render('error', {title: 'Falha', error, message: "Ih deu erro" })
        }
    },

    logout: (req, res) => {
        req.session.loja = undefined;
        res.cookie('idLoja', undefined);
        return res.redirect('/');
    },
};
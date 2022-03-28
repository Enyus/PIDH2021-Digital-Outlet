const db = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const bcrypt = require('bcrypt');

module.exports = {
    cadastroLoja: (req, res) => res.render('cadastroloja', { title: "Seja nosso Parceiro!" }),

    paginaloja: async (req, res, next) => {
        const {idLoja} = req.session.loja;
        let listaProdutos = [];

        try {
            const produtos = await db.Produtos.findAll({
                where: {idLoja},
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            });
            // console.log(produtos);

            for (i=0;i<produtos.length;i++) {
                listaProdutos.push(
                    {
                        idProduto: produtos[i].idProduto,
                        nomeProduto: produtos[i].nomeProduto,
                        marca: produtos[i].idMarca,
                        Categoria: produtos[i].idCategoria,
                        preco: produtos[i].preco,
                        desconto: produtos[i].promocao,
                        estoque: 123,
                    }
                );
            };
            console.log(listaProdutos);

            return res.render('paginaloja', {title:"Bem-Vindo!", listaProdutos});

        } catch (err) {
            console.log(err);
            return res.status(400).render('error', {title: 'Falha', error: err, message: "Ih deu erro" })
        }
    },

    cadastrarLoja: async (req, res) => {
        const { email, razaoSocial, nomeFantasia, inscEst, cnpj, senha, logradouro, numero, complemento, cidade, estado, cep } = req.body;
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
                complemento,
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
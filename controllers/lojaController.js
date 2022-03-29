const db = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const bcrypt = require('bcrypt');

module.exports = {
    cadastroLoja: (req, res) => res.render('cadastroloja', { title: "Seja nosso Parceiro!" }),

    paginaloja: async (req, res, next) => {
        const {idLoja} = req.session.loja;
        let listaProdutos = [];
        let listaPedidos = [];

        try {
            const produtos = await db.Produtos.findAll({
                where: {idLoja},
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'desc']
                },
                include: [
                    {
                        model: db.Marcas,
                        attributes: ['idMarca', 'nomeMarca']
                    }, {
                        model: db.Categorias,
                        attributes: ['idCategoria', 'nomeCategoria']
                    },
                    {
                        model: db.Estoque,
                        attributes: ['idProduto', 'quantidade']
                    }
                ]
            });
            // console.log(produtos[0].Estoque);


            for (i=0;i<produtos.length;i++) {
                listaProdutos.push(
                    {
                        idProduto: produtos[i].idProduto,
                        nomeProduto: produtos[i].nomeProduto,
                        marca: produtos[i].Marca.nomeMarca,
                        categoria: produtos[i].Categoria.nomeCategoria,
                        preco: produtos[i].preco,
                        desconto: produtos[i].promocao,
                        estoque: produtos[i].Estoque.quantidade,
                    }
                );
            };
            // console.log(listaProdutos);

            const pedidos = await db.Pedidos.findAll({
                where: {idLoja},
                attributes:{
                    exclude: ['createdAt', 'updatedAt']
                },
                include: [
                    {
                        model: db.Produtos,
                        attributes: ['idProduto', 'nomeProduto', 'preco', 'promocao']
                    } , {
                        model: db.Usuarios,
                        attributes: ['idUsuario', 'cpf']
                    } , {
                        model: db.StatusPedido,
                        attributes: ['idStatusPedido', 'idPedido', 'dataProcess', 'dataTransp', 'dataEntrega']
                    }
                ]
            });

            // console.log(pedidos[0].Produtos[0].PedidosProdutos);


            return res.render('paginaloja', {title:"Bem-Vindo!", listaProdutos, pedidos});

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

    alterarLoja: async (req, res) => {
        const { idLoja, email, razaoSocial, nomeFantasia, senha, logradouro, numero, complemento, cidade, estado, cep } = req.body;
        const hash = bcrypt.hashSync(senha, 10);

        try {
            const lojaAlterada = await db.Lojas.update(
                { 
                    email:email,
                    razaoSocial: razaoSocial,
                    nomeFantasia: nomeFantasia,
                    senha:hash,
                    logradouro: logradouro,
                    numero: numero,
                    complemento: complemento,
                    cidade: cidade,
                    estado:estado,
                    cep: cep
                },
                {where:{idLoja}}
            );

            console.log(lojaAlterada);
            
            req.session.loja = undefined;
            res.cookie('idLoja', undefined);
            return res.redirect('/login');

        } catch(error) {
            console.log(error)
            return res.status(400).render('error', {title: 'Falha', error, message: "Ih deu erro" })
        }

    }
};
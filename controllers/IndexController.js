const db = require('../models')
const Sequelize = require('sequelize');
const { where } = require('sequelize');
const Op = Sequelize.Op

module.exports = {
    index: async (req, res, next) => {
        try {
            const count = await db.Produtos.count();
            // console.log(count);

            // Escolhendo 8 produtos aleatórios:
            let list = [];
            for ( i=0 ; i < count ; i++ ) {
                list[i] = i + 1;
            };
            // console.log(list);
            for (i = list.length ; i ; ) {
                randomNumber = Math.random() * i-- | 0;
                tmp = list[randomNumber];
                list[randomNumber] = list[i];
                list[i] = tmp;
            }
            list = list.splice(0,8);
            // console.log(list);
            
            // Puxando os dados do banco de dados dos 8 produtos de id aleatório:
            let produtos = await db.Produtos.findAll({where: {idProduto: list}, include: {model: db.Fotos}});

            let listaProdutos = []

            for (i=0; i<list.length; i++) {
                listaProdutos.push(
                    {
                        idProduto: produtos[i].idProduto,
                        nomeProduto: produtos[i].nomeProduto,
                        preco: produtos[i].preco,
                        promocao: produtos[i].promocao,
                        foto: produtos[i].Fotos[0].urlFoto
                    }
                );
            };
            // console.log(listaProdutos);

            return res.render('index', { title: 'Digital Outlet $', usuario: req.session.usuario, produtos: listaProdutos});

        } catch(err) {
            return res.status(400).render('error', {title: 'Falha', error: err, message: "vish" })
        }
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

    resultadobusca: async (req, res, next) => {
        const {busca, categoria} = req.query;

        // console.log("A busca é " + busca)
        // console.log("A categoria é: " + categoria)

        if ( busca != 'undefined') {
            try {
                const resultadoBuscaId = await db.Produtos.findAll({
                    where: {
                        nomeProduto: {
                            [Op.like]: `%${busca}%`
                            }
                    }, 
                    attributes: ['idProduto']
                });
    
                let listaIdsBuscados = []
                
                for (i=0; i<resultadoBuscaId.length; i++) {
                    listaIdsBuscados.push(resultadoBuscaId[i].idProduto);
                };
    
                // console.log(listaIdsBuscados);
    
                const buscaFinal = await db.Produtos.findAll({
                    where: {idProduto: {
                        [Op.in]: listaIdsBuscados
                    }},
                    include: {model: db.Fotos}
                });
    
                let listaFinal = [];
    
                for (i=0; i<resultadoBuscaId.length; i++) {
                    listaFinal.push({
                        idProduto: buscaFinal[i].idProduto,
                        nomeProduto: buscaFinal[i].nomeProduto,
                        preco: buscaFinal[i].preco,
                        promocao: buscaFinal[i].promocao,
                        foto: buscaFinal[i].Fotos[0].urlFoto
                    });
                };
    
                // console.log(listaFinal);
    
                return res.render('resultadobusca', {title:"Resultado da Busca", usuario: req.session.usuario, produtos: listaFinal});

            } catch(err) {

                return res.status(400).render('error', {title: 'Falha', error: err, message: "vish" });

            }


        }

        
    },

    produto: async (req, res, next) => {
        let idProduto = req.params.idProduto

        try {
            const produtoDB = await db.Produtos.findOne({ where: { idProduto: idProduto } });

            const marcaDB = await db.Marcas.findOne({ where: { idMarca: produtoDB.idMarca } })

            const categoriaDB = await db.Categorias.findOne({where: {idCategoria: produtoDB.idCategoria } })

            const lojaDB = await db.Lojas.findOne({ where: { idLoja: produtoDB.idLoja } })

            const fotosProdutoDB = await db.Fotos.findAll({ where: { idProduto: produtoDB.idProduto } });

            const descTecProdutoDB = await db.DescTec.findAll({ where: { idProduto: produtoDB.idProduto } });

            const produtoLoad = {
                nome: produtoDB.nomeProduto,
                marca: marcaDB.nomeMarca,
                preco: produtoDB.preco,
                categoria: categoriaDB.nomeCategoria,
                desc: produtoDB.desc,
                loja: lojaDB.nomeFantasia,
                promocao: produtoDB.promocao,
                fotos: fotosProdutoDB.map( element => element.dataValues.urlFoto),
                nomeDescTec: descTecProdutoDB.map( element => element.dataValues.nomeDescTec ),
                valorDescTec: descTecProdutoDB.map( element => element.dataValues.valor)
            };

            // console.log(produtoLoad);

            return res.render('produto', {title:"Produto", usuario: req.session.usuario, produto: produtoLoad});
        
        } catch(err) {
            return res.status(400).render('error', {title: 'Falha', error: err, message: err.errors[0].message })
        }

    },

    carrinho: (req, res, next) => {
        res.render('carrinho-sacola', {title:"Carrinho", usuario: req.session.usuario})
    },

    trabalheconosco: (req, res, next) => {
        res.render('trabalheconosco', {title:"Trabalhe Conosco!", usuario: req.session.usuario})
    },

    cadastrarCurriculo: async (req, res, next) => {
        const { email, nome, departamento, disp, mensagem } = req.body;

        try {
            const curriculo = await db.TrabalheConosco.create({
                email,
                nome,
                departamento,
                disp,
                mensagem,
                curriculo: req.file.path.slice(-39)
            });

            // console.log(req.file.path.slice(-39));

            // console.log(curriculo);

            return res.render('trabalheconosco', {title: 'Sucesso', message: "Currículo enviado com Sucesso!", usuario: req.session.usuario});
        } catch (err) {
            console.log(err)
            return res.status(400).render('error', {title: 'Falha', error: err, message: err.errors[0].message })
        };
    },

    cadastroloja: (req, res, next) => {
        res.render('cadastroloja', {title:"Seja nosso Parceiro!", usuario: req.session.usuario})
    },

    cadastroproduto: (req, res, next) => {
        res.render('cadastroproduto', {title:"Cadastro de Produto", usuario: req.session.usuario})
    },

    paginacliente: (req, res, next) => {
        res.render('paginacliente', {title:"Bem-Vindo!", usuario: req.session.usuario})
    },

    paginaloja: (req, res, next) => {
        res.render('paginaloja', {title:"Bem-Vindo!", usuario: req.session.usuario})
    }

}
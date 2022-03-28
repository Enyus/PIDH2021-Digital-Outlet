const db = require('../models')
const Sequelize = require('sequelize');
const sequelize = require('sequelize');
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

            return res.render('index', { title: 'Digital Outlet $', produtos: listaProdutos});

        } catch(err) {
            return res.status(400).render('error', {title: 'Falha', error: err, message: "vish" })
        }
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

    resultadobusca: async (req, res, next) => {
        const {busca, categoria, filtropreco, page} = req.query;
        let listaFinal = [];
        let objetoBusca = {};
        let totalItens = null;
        let totalPaginas = null;

        // console.log(busca)
        // console.log(busca[busca.lastIndexOf('')-1])

        if ( categoria != undefined ) {objetoBusca.idCategoria = {[Op.like]: `%${categoria}%`}};

        if ( busca != undefined && busca != "") {
            if (busca[busca.lastIndexOf('')-1] == 's') {
                objetoBusca.nomeProduto = {[Op.like]: `%${busca.slice(0,busca.length-1)}%`}
            } else {
                objetoBusca.nomeProduto = {[Op.like]: `%${busca}%`}
            };
        };

        switch (filtropreco) {
            case 'menorpreco':
                filtro = Sequelize.literal('preco');
                break;
            case 'maiorpreco':
                filtro = Sequelize.literal('preco DESC');
                break;
            case 'promocao':
                filtro = Sequelize.literal('promocao DESC');
                break;
            default:
                filtro = [];
        }

        
        try {
            totalItens = await db.Produtos.count({where: objetoBusca})
            
            const resultadoBuscaId = await db.Produtos.findAll({
                where: objetoBusca,
                attributes: ['idProduto'],
                limit: 6,
                offset: page*6-6,
                order: filtro
            });

            let listaIdsBuscados = []
            
            for (i=0; i<resultadoBuscaId.length; i++) {
                listaIdsBuscados.push(resultadoBuscaId[i].idProduto);
            };

            const buscaFinal = await db.Produtos.findAll({
                where: {idProduto: {
                    [Op.in]: listaIdsBuscados
                }},
                include: {model: db.Fotos},
                order: filtro
            });


            for (i=0; i<resultadoBuscaId.length; i++) {
                listaFinal.push({
                    idProduto: buscaFinal[i].idProduto,
                    nomeProduto: buscaFinal[i].nomeProduto,
                    preco: buscaFinal[i].preco,
                    promocao: buscaFinal[i].promocao,
                    foto: buscaFinal[i].Fotos[0].urlFoto
                });
            };

        } catch(err) {
            
            return res.status(400).render('error', {title: 'Falha', error: err, message: "vish" });

        };

        if (totalItens%6 == 0) {
            totalPaginas = totalItens/6;
        } else {
            totalPaginas = Math.ceil(totalItens/6);
        };
        // console.log(totalPaginas);

        return res.render('resultadobusca', {title:"Resultado da Busca", produtos: listaFinal, busca, categoria, filtropreco, page: req.query.page, totalPaginas});

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

            if( usuario != undefined) {
                if (!usuario.buscasRecentes.includes(idProduto)) {
                    usuario.buscasRecentes.unshift(idProduto)
                };
                if(usuario.buscasRecentes.length > 6) {
                    usuario.buscasRecentes.splice(6)
                };
            }

            return res.render('produto', {title:"Produto", produto: produtoLoad});
        
        } catch(err) {
            return res.status(400).render('error', {title: 'Falha', error: err, message: "vish" })
        }

    },

    carrinho: (req, res, next) => {
        res.render('carrinho-sacola', {title:"Carrinho"})
    },

    trabalheconosco: (req, res, next) => {
        res.render('trabalheconosco', {title:"Trabalhe Conosco!"})
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

            return res.render('trabalheconosco', {title: 'Sucesso', message: "Currículo enviado com Sucesso!"});
        } catch (err) {
            console.log(err)
            return res.status(400).render('error', {title: 'Falha', error: err, message: err.errors[0].message })
        };
    },

    cadastroproduto: (req, res, next) => {
        res.render('cadastroproduto', {title:"Cadastro de Produto"})
    },

    paginacliente: (req, res, next) => {
        res.render('paginacliente', {title:"Bem-Vindo!"})
    },

};
const db = require('../models')
const Sequelize = require('sequelize');
const sequelize = require('sequelize');
const Op = Sequelize.Op;
const { calcularPrecoPrazo } = require('correios-brasil');

module.exports = {
    index: async (req, res, next) => {
        try {
            const count = await db.Produtos.findAll({attributes:['idProduto']});
            // Escolhendo 8 produtos aleatórios:
            let list = [];
            for (i = 0; i < count.length; i++) {
                list[i] = count[i].idProduto;
            };
            for (i = list.length; i;) {
                randomNumber = Math.random() * i-- | 0;
                tmp = list[randomNumber];
                list[randomNumber] = list[i];
                list[i] = tmp;
            }
            list = list.splice(0, 8);
            console.log(list)
            // Puxando os dados do banco de dados dos 8 produtos de id aleatório:
            let produtos = await db.Produtos.findAll({ where: { idProduto: list }, include: { model: db.Fotos } });

            let listaProdutos = []

            for (i = 0; i < list.length; i++) {
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
            return res.render('index', { title: 'Digital Outlet $', produtos: listaProdutos });
        } catch (err) {
            return res.status(400).render('error', { title: 'Falha', error: err, message: "vish" })
        }
    },

    faq: (req, res, next) => {
        res.render('faq', { title: "Dúvidas Frequentes" });
    },

    sobre: (req, res, next) => {
        res.render('sobre', { title: "Sobre a DO$" })
    },

    contato: (req, res, next) => { res.render('contato', { title: "Contato" }) },

    enviaContato: async (req, res) => {
        const { nome, email, telefone, mensagem } = req.body;
        try {
            await db.FaleConosco.create({
                nome,
                email,
                telefone,
                mensagem
            })
        } catch (error) {
            console.log(error);
            return res.status(400).render('error', {title: 'Falha ao enviar o contato', error: error, message: 'vish, houve falha ao enviar o contato'});
        }
        return res.redirect('/contato')
    },

    resultadobusca: async (req, res, next) => {
        const { busca, categoria, filtropreco, page } = req.query;
        let listaFinal = [];
        let objetoBusca = {};
        let totalItens = null;
        let totalPaginas = null;

        if (categoria != undefined) { objetoBusca.idCategoria = { [Op.like]: `%${categoria}%` } };

        if (busca != undefined && busca != "") {
            if (busca[busca.lastIndexOf('') - 1] == 's') {
                objetoBusca.nomeProduto = { [Op.like]: `%${busca.slice(0, busca.length - 1)}%` }
            } else {
                objetoBusca.nomeProduto = { [Op.like]: `%${busca}%` }
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
            totalItens = await db.Produtos.count({ where: objetoBusca })
            const resultadoBuscaId = await db.Produtos.findAll({
                where: objetoBusca,
                attributes: ['idProduto'],
                limit: 6,
                offset: page * 6 - 6,
                order: filtro
            });
            let listaIdsBuscados = []

            for (i = 0; i < resultadoBuscaId.length; i++) {
                listaIdsBuscados.push(resultadoBuscaId[i].idProduto);
            };

            const buscaFinal = await db.Produtos.findAll({
                where: {
                    idProduto: {
                        [Op.in]: listaIdsBuscados
                    }
                },
                include: { model: db.Fotos },
                order: filtro
            });
            for (i = 0; i < resultadoBuscaId.length; i++) {
                listaFinal.push({
                    idProduto: buscaFinal[i].idProduto,
                    nomeProduto: buscaFinal[i].nomeProduto,
                    preco: buscaFinal[i].preco,
                    promocao: buscaFinal[i].promocao,
                    foto: buscaFinal[i].Fotos[0].urlFoto
                });
            };

        } catch (err) {
            return res.status(400).render('error', { title: 'Falha', error: err, message: "vish" });
        };

        if (totalItens % 6 == 0) {
            totalPaginas = totalItens / 6;
        } else {
            totalPaginas = Math.ceil(totalItens / 6);
        };
        return res.render('resultadobusca', { title: "Resultado da Busca", produtos: listaFinal, busca, categoria, filtropreco, page: req.query.page, totalPaginas });

    },

    produto: async (req, res, next) => {
        let idProduto = req.params.idProduto;
        let {frete, prazo} = req.query;
        console.log(frete);

        try {
            const produtoDB = await db.Produtos.findOne({ where: { idProduto: idProduto } });

            const marcaDB = await db.Marcas.findOne({ where: { idMarca: produtoDB.idMarca } })

            const categoriaDB = await db.Categorias.findOne({ where: { idCategoria: produtoDB.idCategoria } })

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
                cepLoja: lojaDB.cep,
                promocao: produtoDB.promocao,
                fotos: fotosProdutoDB.map(element => element.dataValues.urlFoto),
                nomeDescTec: descTecProdutoDB.map(element => element.dataValues.nomeDescTec),
                valorDescTec: descTecProdutoDB.map(element => element.dataValues.valor)
            };

            if (usuario != undefined) {
                if (!usuario.buscasRecentes.includes(idProduto)) {
                    usuario.buscasRecentes.unshift(idProduto)
                };
                if (usuario.buscasRecentes.length > 6) {
                    usuario.buscasRecentes.splice(6)
                };
            }

            if (frete != undefined) {
                produtoLoad.frete = frete;
                produtoLoad.prazo = prazo;
            } else {
                produtoLoad.frete = '-';
                produtoLoad.prazo = '';
            };

            return res.render('produto', { title: "Produto", idProduto, produto: produtoLoad });

        } catch (err) {
            return res.status(400).render('error', { title: 'Falha', error: err, message: "vish" })
        }
    },

    trabalheconosco: (req, res, next) => {
        res.render('trabalheconosco', { title: "Trabalhe Conosco!", message:'' })
    },

    cadastrarCurriculo: async (req, res, next) => {
        const { email, nome, departamento, disp, mensagem } = req.body;

        try {
            await db.TrabalheConosco.create({
                email,
                nome,
                departamento,
                disp,
                mensagem,
                curriculo: req.file.path.slice(-39)
            });
            return res.render('trabalheconosco', { title: 'Sucesso', message: "Currículo enviado com Sucesso!" });
        } catch (err) {
            console.log(err)
            return res.status(400).render('error', { title: 'Falha', error: err, message: err.errors[0].message })
        };
    },

    apiFrete: async (req, res, next) => {
        let {cep, idProduto, cepLoja} = req.body;

        let args = {
            // Não se preocupe com a formatação dos valores de entrada do cep, qualquer uma será válida (ex: 21770-200, 21770 200, 21asa!770@###200 e etc),
            sCepOrigem: cepLoja,
            sCepDestino: cep,
            nVlPeso: '1',
            nCdFormato: '1',
            nVlComprimento: '20',
            nVlAltura: '20',
            nVlLargura: '20',
            nCdServico: ['04510'], //Array com os códigos de serviço
            nVlDiametro: '0',
        };

        calcularPrecoPrazo(args).then((response) => {
            return res.redirect(`/produto/${idProduto}?frete=${response[0].Valor.replace(',', '.')}&prazo=${response[0].PrazoEntrega}`);
        });
    },

    cadastroproduto: async (req, res, next) => {
        const marcadb = await db.Marcas.findAll({
            order: [['nomeMarca', 'ASC']]
        });
        const categoriadb = await db.Categorias.findAll({
            order: [['nomeCategoria', 'ASC']]
        });

        res.render('cadastroproduto', {
            title:"Cadastro de Produto",
            usuario: req.session.loja.Loja, //verificar se cliente ou loja
            marcas: marcadb,
            categorias: categoriadb
        });
    }
};
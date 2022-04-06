const db = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
    cadastroView: async (req, res, next) => {
        res.render('cadastroproduto', {
            title:"Cadastro de Produto",
            usuario: req.session.usuario
        })
    },
    create: async (req, res, next) => {
        const dadosProdutos = req.body;

        try {
            const marcadb = await db.Marcas.findOne({
                where: {
                    nomeMarca: dadosProdutos.marca,
                }
            });
            const categoriadb = await db.Categorias.findOne({
                where: {
                    nomeCategoria: dadosProdutos.categoria,
                }
            });
            const produtoCreate = await db.Produtos.create({
                nomeProduto: dadosProdutos.nomeproduto,
                idMarca: marcadb.idMarca,
                preco: dadosProdutos.preco,
                idCategoria: categoriadb.idCategoria, 
                desc: dadosProdutos.descproduto,
                idLoja: req.session.loja,
            })
            
            // idProduto para salvar nos outras tabelas
            const idProduto = produtoCreate.idProduto;
            
            const descricaoProduto = dadosProdutos.descTecValor;
            descricaoProduto.forEach(async element => {
                const positionElement = descricaoProduto.indexOf(element)
                if (element && positionElement % 2 == 0) {
                    const descProdCreate = await db.DescTec.create({
                        idProduto: idProduto,
                        nomeDescTec: descricaoProduto[positionElement],
                        valor: descricaoProduto[positionElement + 1],
                    });
                };
            });

            req.files.forEach(async element => {
                const urlFoto = element.path.
                                slice(element.path.indexOf('images')-1, element.path.length).
                                replace(/[\\"]/gi, "/");
                const fotosCreate = await db.Fotos.create({
                    idProduto: idProduto,
                    urlFoto: urlFoto
                });
            });
            return res.send(produtoCreate);
        } catch (error) {
            console.log(error);
        }
    },
}
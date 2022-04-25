const db = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const fs = require('fs')
const path = require('path');

module.exports = {
    create: async (req, res, next) => {
        const dadosProduto = req.body;
        
        try {
            const marcadb = await db.Marcas.findOne({
                where: {
                    nomeMarca: dadosProduto.marca,
                }
            });
            const categoriadb = await db.Categorias.findOne({
                where: {
                    nomeCategoria: dadosProduto.categoria,
                }
            });
            const loja = req.session.loja.idLoja;
            const produtoCreate = await db.Produtos.create({
                nomeProduto: dadosProduto.nomeproduto,
                idMarca: marcadb.idMarca,
                preco: dadosProduto.preco.replace(",","."),
                idCategoria: categoriadb.idCategoria, 
                desc: dadosProduto.descproduto,
                idLoja: loja,
                promocao: dadosProduto.promocao,
            })
            // idProduto para salvar nos outras tabelas
            const idProduto = produtoCreate.idProduto;
            
            const descricaoProduto = dadosProduto.descTecValor;
            descricaoProduto.forEach(async element => {
                const positionElement = descricaoProduto.indexOf(element)
                if (element && positionElement % 2 == 0) {
                   await db.DescTec.create({
                        idProduto: idProduto,
                        nomeDescTec: descricaoProduto[positionElement],
                        valor: descricaoProduto[positionElement + 1],
                    });
                };
            });
            // console.log(req.files)
            req.files.forEach(async element => {
                const urlFoto = element.path
                                .slice(element.path.indexOf('images')-1, element.path.length)
                                .replace(/[\\"]/gi, "/");
                const fotosCreate = await db.Fotos.create({
                    idProduto: idProduto,
                    urlFoto: urlFoto
                });
            });

            const estoqueCreate = await db.Estoque.create({
                idLoja: loja,
                idProduto: idProduto,
                quantidade: dadosProduto.estoque,
            })

            return res.redirect("/cadastroproduto");
            
        } catch (error) {
            console.log(error);
            return res.status(400).render('error', {title: 'Falha', error: err, message: "Ih deu erro" })
        }
    },
    showProduto: async (req, res, next) => {
        const {idProduto} = req.params;
        const {descTecValor} = req.body;
        
        try {
            const produto = await db.Produtos.findByPk(idProduto);
            
            const marca = await db.Marcas.findOne({where: produto.idMarca})
            const marcadb = await db.Marcas.findAll({order: [['nomeMarca', 'ASC']]});
            const categoria = await db.Categorias.findOne({where: produto.idCategoria})
            const categoriadb = await db.Categorias.findAll({order: [['nomeCategoria', 'ASC']]});
            const desctec = await db.DescTec.findAll({where: {idProduto}})
            const fotosdb = await db.Fotos.findAll({where: {idProduto}})
            const estoquedb = await db.Estoque.findOne({where: {idProduto}})

            const dadosDescTec = []
            desctec.forEach(element => {
                dadosDescTec.push({
                    nomeDescTec: element.nomeDescTec,
                    valor: element.valor
                })
            })
            
            res.render('editarproduto', {
                title: 'Editar Produto',
                usuario: req.session.loja, //verificar se cliente ou loja
                idProduto: idProduto,
                produto,
                marcaProduto: marca,
                marcas: marcadb,
                categoriaProduto: categoria,
                categorias: categoriadb,
                fotos: fotosdb,
                descTec: dadosDescTec,
                estoque: estoquedb,
                promocao: produto.promocao
            })

        } catch (error) {
            console.log(error);            
            return res.status(400).render('error', {title: 'Falha', error: err, message: "Ih deu erro" })
        }
    },
    update: async (req, res) => {
        const dadosProduto = req.body;
        const idProduto = dadosProduto.idProduto;
        
        try {
            const marcadb = await db.Marcas.findOne({
                where: {
                    nomeMarca: dadosProduto.marca,
                }
            });
            const categoriadb = await db.Categorias.findOne({
                where: {
                    nomeCategoria: dadosProduto.categoria,
                }
            });
            const loja = req.session.loja.idLoja;
            
            const produtoUpdate = await db.Produtos.update({
                nomeProduto: dadosProduto.nomeproduto,
                idMarca: marcadb.idMarca,
                preco: dadosProduto.preco.replace(",","."),
                idCategoria: categoriadb.idCategoria, 
                desc: dadosProduto.descproduto,
                idLoja: loja,
                promocao: dadosProduto.promocao,
            },
            { where: {idProduto}})
            // console.log(produtoUpdate)

            // Deletar dados da tabela DescTec e recriar
            await db.DescTec.destroy({where: {idProduto}});

            const descricaoProduto = dadosProduto.descTecValor;
            descricaoProduto.forEach(async element => {
                const positionElement = descricaoProduto.indexOf(element);
                if (element && positionElement % 2 == 0) {
                    const descProdCreate = await db.DescTec.create({
                        idProduto: idProduto,
                        nomeDescTec: descricaoProduto[positionElement],
                        valor: descricaoProduto[positionElement + 1],
                    });
                };
            });

            // Deletando imagens alteradas do Banco e da pasta 'images'
            for (let i=1; i <= 6; i++) {
                console.log(dadosProduto[`changed${i}`])
                if (dadosProduto[`changed${i}`] == 'true' && dadosProduto[`changed${i}`] != undefined ) {                    
                    await db.Fotos.destroy({where: {urlFoto: dadosProduto[`gallery${i}`]}})
                    fs.unlinkSync(__dirname + '/../public'+ dadosProduto[`gallery${i}`])
                }
            }
            
            req.files.forEach(async element => {
                const urlFoto = element.path.
                                slice(element.path.indexOf('images')-1, element.path.length).
                                replace(/[\\"]/gi, "/");
                const fotosCreate = await db.Fotos.create({
                    idProduto: idProduto,
                    urlFoto: urlFoto
                });
            });
            //
            const estoqueUpdate = await db.Estoque.update({
                idLoja: loja,
                idProduto: idProduto,
                quantidade: dadosProduto.estoque,
            },
                {where: {idProduto}}
            )

            return res.redirect("/loja");
        } catch (err) {
            console.log(err)
            return res.status(400).render('error', {title: 'Falha', error: err, message: "Ih deu erro" })
        }

    },
    delete: async (req, res) => {
        const {idProduto} = req.params;
        try {
            // await db.Estoque.destroy({where: {idProduto}});
            // await db.Fotos.destroy({where: {idProduto}});
            // await db.DescTec.destroy({where: {idProduto}});
            await db.Produtos.destroy({where: {idProduto}});
            res.redirect("/loja");
        } catch (err) {
            console.log(err)
            return res.status(400).render('error', {title: 'Falha', error: err, message: "Ih deu erro" })            
        }

    }
}
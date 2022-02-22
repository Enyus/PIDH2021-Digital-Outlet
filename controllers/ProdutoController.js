const db = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = {
    cadastroView: (req, res, next) => {
        res.render('cadastroproduto', {title:"Cadastro de Produto", usuario: req.session.usuario})
    },
    cadastrarproduto: async (req, res, next) => {
        const { nomeproduto, marca, preco, categoria, descproduto } = req.body;

        const marcadb = await db.Marcas.findOne({
            where: {
                nomeMarca: marca,
            }
        })
        const categoriadb = await db.Categorias.findOne({
            where: {
                nomeCategoria: categoria,
            }
        })
        const produtoCriado = await db.Produtos.create({
            nomeProduto: nomeproduto,
            idMarca: marcadb.idMarca,
            preco,
            idCategoria: categoriadb.idCategoria, 
            desc: descproduto,
            idLoja: 1
        })
        //console.log(produtoCriado)
        return res.send('Funcionou')
    },
}
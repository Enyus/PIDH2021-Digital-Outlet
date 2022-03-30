const db = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = {
    index: async (req, res, next) => {
        let carrinho = req.session.carrinho;
        
        const listaIDs = [];
        carrinho.forEach( element => {listaIDs.push(element.idProduto)});
        let carrinhoDB=[];

        try {

            if (carrinho.length > 0) {

                carrinhoDB = await db.Produtos.findAll({
                    where: {
                        idProduto: {
                            [Op.in]: listaIDs
                        }
                    },
                    attributes: ['idProduto', 'nomeProduto', 'idLoja', 'preco', 'promocao'],
                    include: [
                        { model: db.Fotos,
                        attributes: ['urlFoto'] },
                        { model: db.DescTec,
                        attributes: ['nomeDescTec', 'valor'] }
                    ],
                    order: Sequelize.literal( `FIELD(Produtos.idProduto, ${listaIDs})`)
                });
                // console.log(carrinhoDB[0].idProduto);
                // console.log(carrinho);
                // console.log(carrinho.findIndex( element => element.idProduto == carrinhoDB[0].idProduto));
                
                /* carrinhoDB retorna:
                    [
                        {
                            idProduto: 6,
                            nomeProduto: 'Paletó Off White Masculino',
                            idLoja: 1,
                            preco: 220,
                            promocao: '0',
                            Fotos: [
                                {
                                    ulFoto = xxx
                                },
                                ...
                            ],
                            DescTecs: [
                                {
                                    nomeDescTec: xxx,
                                    valor: xxx
                                },
                                ...
                            ]
                        },
                        ...
                    ]
                */

               res.render('carrinho-sacola', {title: "Sacola", carrinho, carrinhoDB});

            } else {
                
                res.render('carrinho-sacola', {title: "Sacola", carrinho, carrinhoDB});

            }

        } catch(error) {

            console.log(error);
            return res.status(400).render('error', {title: 'Falha', error, message: "Ih deu erro" });

        };
    },

    identificacao: (req, res, next) => {
        res.render('carrinho-identificacao', {title: "Identificacao" })
    },

    entrega: (req, res, next) => {
        res.render('carrinho-entrega', {title: "Entrega" })
    },

    pagamento: (req, res, next) => {
        res.render('carrinho-pagamento', {title: "Pagamento" })
    },

    addCart: (req, res, next) => {
        const {idProduto, source} = req.body

        let index = req.session.carrinho.findIndex( element => element.idProduto == idProduto)

        if ( index == -1) {
            req.session.carrinho.push(
                {
                  idProduto: idProduto,
                  quantidade: 1,
                  frete: null //ainda precisa implementar
                }
            );
        } else {
            req.session.carrinho[index].quantidade += 1;
        };
        
        res.redirect(`${source}`);
    },

    removeCart: (req, res, next) => {
        const {idProduto, source} = req.body

        let index = req.session.carrinho.findIndex( element => element.idProduto == idProduto);

        if ( req.session.carrinho[index].quantidade > 1) {
            req.session.carrinho[index].quantidade -= 1;
        } else {
            req.session.carrinho.splice(index,1);
        };
        
        res.redirect(`${source}`);
    },

    comprar: (req, res, next) => {
        const {idProduto} = req.body

        let index = req.session.carrinho.findIndex( element => element.idProduto == idProduto)

        if ( index == -1) {
            req.session.carrinho.push(
                {
                  idProduto: idProduto,
                  quantidade: 1,
                  frete: 0 //ainda precisa implementar
                }
            );
        } else {
            req.session.carrinho[index].quantidade += 1;
        };

        res.redirect(`/carrinho`);
    },
}
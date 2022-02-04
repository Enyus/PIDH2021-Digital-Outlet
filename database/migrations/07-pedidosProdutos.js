'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('pedidosProdutos', {
            idPedidoProduto: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            idProduto: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Produtos",
                    key: 'idProduto'
                }
            },
            idPedido: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Pedidos",
                    key: 'idPedido'
                }
            },
            quantidade: Sequelize.INTEGER,
            preco: Sequelize.FLOAT,
            desconto: Sequelize.FLOAT,
            frete: Sequelize.FLOAT,
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('pedidosProdutos');
    }
};
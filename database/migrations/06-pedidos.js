'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Pedidos', {
            idPedido: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            idUsuario: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Usuarios",
                    key: 'idUsuario'
                }
            },
            idLoja: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Lojas",
                    key: 'idLoja'
                }
            },
            idProduto: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Produtos",
                    key: 'idProduto'
                }
            },
            dataPedido: Sequelize.DATE,
            valor: Sequelize.INTEGER,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Pedidos');
    }
};
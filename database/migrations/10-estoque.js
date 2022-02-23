'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Estoque', {
            idEstoque: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
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
            quantidade: Sequelize.INTEGER,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Estoque');
    }
};
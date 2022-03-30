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
            quantidade: {
                type: Sequelize.INTEGER,
                allowNull: false,
                validate: {
                  isInt: {msg: "O campo de quantidade de itens em estoque deve ser composto caracteres numéricos"}
                }
              },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Estoque');
    }
};
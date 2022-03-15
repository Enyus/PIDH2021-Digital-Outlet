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
            dataPedido: {
                type: Sequelize.DATE,
                allowNull: false,
                validate: {
                  isDate: {msg: "O campo da data de nascimento deve ser preenchido com uma data válida."},
                }
              },
            valor: {
                type: Sequelize.FLOAT,
                allowNull: false,
                validate: {
                    isFloat: {msg: "O valor do pedido deve ser um número do tipo FLOAT"}
                }
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Pedidos');
    }
};
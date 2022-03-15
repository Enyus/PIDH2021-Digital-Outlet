'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('PedidosProdutos', {
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
            quantidade: {
                type: Sequelize.INTEGER,
                allowNull: false,
                validate: {
                  isInt: {msg: "O campo de número da residência deve ser composto caracteres numéricos"}
                }
              },
            preco: {
                type: Sequelize.FLOAT,
                allowNull: false,
                validate: {
                    isFloat: {msg: "O preço deve ser um número do tipo FLOAT"}
                }
            },
            desconto: {
                type: Sequelize.FLOAT,
                allowNull: false,
                validate: {
                    isFloat: {msg: "O desc6nt6 deve ser um número do tipo FLOAT"}
                }
            },
            frete: {
                type: Sequelize.FLOAT,
                allowNull: false,
                validate: {
                    isFloat: {msg: "O frete deve ser um número do tipo FLOAT"}
                }
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('PedidosProdutos');
    }
};
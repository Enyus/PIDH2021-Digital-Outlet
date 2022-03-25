'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('StatusPedido', {
            idStatus: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            idPedido: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Pedidos",
                    key: 'idPedido'
                }
            },
            dataProcess: {
                type: Sequelize.DATE,
                allowNull: true,
                validate: {
                  isDate: {msg: "O campo data de processamento deve ser preenchido com uma data válida."},
                }
            },
            dataTransp: {
                type: Sequelize.DATE,
                allowNull: true,
                validate: {
                  isDate: {msg: "O campo data de transporte deve ser preenchido com uma data válida."},
                }
            },
            dataEntrega: {
                type: Sequelize.DATE,
                allowNull: true,
                validate: {
                  isDate: {msg: "O campo data de entrega deve ser preenchido com uma data válida."},
                }
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('StatusPedido');
    }
};
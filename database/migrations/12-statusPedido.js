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
            dataProcess: Sequelize.DATE,
            dataTransp: Sequelize.DATE,
            dataEntrega: Sequelize.DATE,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('StatusPedido');
    }
};
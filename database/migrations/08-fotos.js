'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Fotos', {
            idFoto: {
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
            urlFoto: Sequelize.STRING,
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Fotos');
    }
};
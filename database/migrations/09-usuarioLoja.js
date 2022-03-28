'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('UsuarioLoja', {
            idUsuarioLoja: {
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
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
            deletedAt: Sequelize.DATE
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('UsuarioLoja');
    }
};
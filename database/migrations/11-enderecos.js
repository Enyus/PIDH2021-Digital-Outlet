'use strict';

const sequelize = require("sequelize");

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('enderecos', {
            idEndereco: {
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
            logradouro: Sequelize.STRING,
            numero: Sequelize.INTEGER,
            complemento: Sequelize.STRING,
            cidade: Sequelize.STRING,
            estado: Sequelize.STRING,
            cep: sequelize.STRING,
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('enderecos');
    }
};
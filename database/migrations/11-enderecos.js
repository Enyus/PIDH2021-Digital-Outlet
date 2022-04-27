'use strict';

const sequelize = require("sequelize");

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Enderecos', {
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
            logradouro: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            numero: {
                type: Sequelize.INTEGER,
                allowNull: false,
                validate: {
                    isInt: {msg: "O campo de número da residência deve ser composto caracteres numéricos"}
                }
            },
            complemento: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            cidade: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            estado: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            cep: {
                type: Sequelize.STRING(8),
                allowNull: false,
                validate: {
                  isInt: {msg: "O campo de CEP deve ser composto de oito caracteres numéricos"},
                  len: {
                    args: [8,8],
                    msg: "O campo de CEP deve ser composto de oito caracteres numéricos"
                  }
                }
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Enderecos');
    }
};
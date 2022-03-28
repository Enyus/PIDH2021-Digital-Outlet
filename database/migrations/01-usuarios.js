'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return  queryInterface.createTable('Usuarios', {
      idUsuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {msg: "O campo de e-mail deve ser preenchido com um e-mail válido."},
        }
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sobrenome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dataNasc: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          isDate: {msg: "O campo da data de nascimento deve ser preenchido com uma data válida."},
        }
      },
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: true,
        validate: {
          isNumeric: {msg: "O campo de cpf deve ser preenchido apenas com números."},
          len: {
            args: [11,11],
            msg: "O campo de cpf deve ter 11 caracteres."
          }
        }
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fotoPerfil: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      deletedAt: Sequelize.DATE
    });
  },
  down: (queryInterface, Sequelize) => {
   return  queryInterface.dropTable('Usuarios');
  }
};

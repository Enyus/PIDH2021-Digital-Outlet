'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return  queryInterface.createTable('Usuarios', {
      idUsuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: Sequelize.STRING,
      nome: Sequelize.STRING,
      sobrenome: Sequelize.STRING,
      dataNasc: Sequelize.DATE,
      cpf: Sequelize.STRING(11),
      senha: Sequelize.STRING,
      fotoPerfil: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },
  down: (queryInterface, Sequelize) => {
   return  queryInterface.dropTable('Usuarios');
  }
};

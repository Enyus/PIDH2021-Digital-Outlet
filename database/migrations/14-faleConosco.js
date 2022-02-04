'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return  queryInterface.createTable('faleConosco', {
      idFaleConosco: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: Sequelize.STRING,
      email: Sequelize.STRING,
      telefone: Sequelize.STRING,
      mensagem: Sequelize.STRING,
    });
  },
  down: (queryInterface, Sequelize) => {
   return  queryInterface.dropTable('faleConosco');
  }
};

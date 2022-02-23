'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return  queryInterface.createTable('FaleConosco', {
      idFaleConosco: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: Sequelize.STRING,
      email: Sequelize.STRING,
      telefone: Sequelize.STRING,
      mensagem: Sequelize.TEXT,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },
  down: (queryInterface, Sequelize) => {
   return  queryInterface.dropTable('FaleConosco');
  }
};

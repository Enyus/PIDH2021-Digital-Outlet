'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return  queryInterface.createTable('TrabalheConosco', {
      idTrabalheConosco: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: Sequelize.STRING,
      nome: Sequelize.STRING,
      departamento: Sequelize.STRING,
      disp: Sequelize.STRING,
      mensagem: Sequelize.TEXT,
      curriculo: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },
  down: (queryInterface, Sequelize) => {
   return  queryInterface.dropTable('TrabalheConosco');
  }
};

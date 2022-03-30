'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return  queryInterface.createTable('FaleConosco', {
      idFaleConosco: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: {msg: "O campo de e-mail deve ser preenchido com um e-mail válido."},
        }
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mensagem: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },
  down: (queryInterface, Sequelize) => {
   return  queryInterface.dropTable('FaleConosco');
  }
};

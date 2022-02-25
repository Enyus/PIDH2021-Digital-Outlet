'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return  queryInterface.createTable('TrabalheConosco', {
      idTrabalheConosco: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {msg: "Este campo deve ter um e-mail válido."},
        }
      },
        nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
          departamento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      disp: {
        type: Sequelize.STRING,
        allowNull: false,
      },
        mensagem: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      curriculo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },
  down: (queryInterface, Sequelize) => {
   return  queryInterface.dropTable('TrabalheConosco');
  }
};

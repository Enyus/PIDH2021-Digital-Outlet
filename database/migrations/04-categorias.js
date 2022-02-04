'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return  queryInterface.createTable('categorias', {
        idCategoria: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomeCategoria: Sequelize.STRING,
    });
  },
  down: (queryInterface, Sequelize) => {
   return  queryInterface.dropTable('categorias');
  }
};
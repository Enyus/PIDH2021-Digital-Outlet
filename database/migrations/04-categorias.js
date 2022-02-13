'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return  queryInterface.createTable('Categorias', {
        idCategoria: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomeCategoria: Sequelize.STRING,
    });
  },
  down: (queryInterface, Sequelize) => {
   return  queryInterface.dropTable('Categorias');
  }
};
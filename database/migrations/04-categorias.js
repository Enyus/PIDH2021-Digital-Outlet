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
        createdAt: Sequelize.DATE,
		    updatedAt: Sequelize.DATE
    });
  },
  down: (queryInterface, Sequelize) => {
   return  queryInterface.dropTable('Categorias');
  }
};
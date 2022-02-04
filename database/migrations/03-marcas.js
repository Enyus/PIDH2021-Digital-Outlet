'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return  queryInterface.createTable('marcas', {
        idMarca: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomeMarca: Sequelize.STRING,
    });
  },
  down: (queryInterface, Sequelize) => {
   return  queryInterface.dropTable('marcas');
  }
};
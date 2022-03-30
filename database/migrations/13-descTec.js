'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return  queryInterface.createTable('DescTec', {
        idDescTec: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idProduto: {
          type: Sequelize.INTEGER,
          references: {
              model: "Produtos",
              key: 'idProduto'
          }
        },
        nomeDescTec: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        valor: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
    });
  },
  down: (queryInterface, Sequelize) => {
   return  queryInterface.dropTable('DescTec');
  }
};
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return  queryInterface.createTable('Produtos', {
        idProduto: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idMarca: {
            type: Sequelize.INTEGER,
            references: {
                model: "Marcas",
                key: 'idMarca'
            }
        },
        preco: Sequelize.FLOAT,
        idCategoria: {
            type: Sequelize.INTEGER,
            references: {
                model: "Categorias",
                key: 'idCategoria'
            }
        },
        desc: Sequelize.STRING,
        idLoja: {
            type: Sequelize.INTEGER,
            references: {
                model: "Lojas",
                key: 'idLoja'
            }
        },
        promocao: Sequelize.DECIMAL,
    });
  },
  down: (queryInterface, Sequelize) => {
   return  queryInterface.dropTable('Produtos');
  }
};
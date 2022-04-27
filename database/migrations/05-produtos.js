'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return  queryInterface.createTable('Produtos', {
        idProduto: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomeProduto: {
            type: Sequelize.STRING,
            allowNull: false
          },
        idMarca: {
            type: Sequelize.INTEGER,
            references: {
                model: "Marcas",
                key: 'idMarca'
            }
        },
        preco: {
            type: Sequelize.FLOAT,
            allowNull: false,
            validate: {
                isFloat: {msg: "O preço deve ser um número do tipo FLOAT"}
            }
        },
        idCategoria: {
            type: Sequelize.INTEGER,
            references: {
                model: "Categorias",
                key: 'idCategoria'
            }
        },
        desc: {
            type: Sequelize.TEXT,
            allowNull: false
          },
        idLoja: {
            type: Sequelize.INTEGER,
            references: {
                model: "Lojas",
                key: 'idLoja'
            }
        },
        promocao: {
            type: Sequelize.DECIMAL,
            allowNull: false,
            defaultValue: 0,
            validate: {
                isDecimal: {msg: "O desconto deve ser um número do tipo DECIMAL"}
            }
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
        deletedAt: Sequelize.DATE 
    });
  },
  down: (queryInterface, Sequelize) => {
   return  queryInterface.dropTable('Produtos');
  }
};
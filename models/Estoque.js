const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
    const Estoque = sequelize.define('Estoque', {
        idEstoque: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idLoja: {
            type: DataType.STRING,
            references: {
                model:'Lojas',
                key: 'idLoja'
            }
        },
        idProduto: {
            type: DataType.STRING,
            references: {
                model:'Produtos',
                key: 'idProduto'
            }
        },
        quantidade: {
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
              isInt: {msg: "O campo de quantidade de itens em estoque deve ser composto caracteres numéricos"}
            }
          },
		createdAt: DataType.DATE,
		updatedAt: DataType.DATE
    }, {
        tableName: 'Estoque',
    });
    return Estoque;
};
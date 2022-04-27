const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
    const Estoque = sequelize.define('Estoque', {

        idEstoque: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        idLoja: DataType.INTEGER,

        idProduto: DataType.INTEGER,

        quantidade: {
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
              isInt: {msg: "O campo de quantidade de itens em estoque deve ser composto caracteres numéricos"}
            }
        },
		createdAt: DataType.DATE,
		updatedAt: DataType.DATE,        
    }, {
        tableName: 'Estoque',
        paranoid: true, 
    });

    Estoque.associate = (models) => {
        Estoque.belongsTo(models.Lojas, {
            foreignKey: 'idLoja'
        });

        Estoque.belongsTo(models.Produtos, {
            foreignKey: 'idProduto'
        });
    };

    return Estoque;
};
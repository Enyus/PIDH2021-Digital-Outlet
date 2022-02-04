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
        quantidade: DataType.INTEGER,
    }, {
        tableName: 'Estoque',
    });
    return Estoque;
};
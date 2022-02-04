const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
    const Fotos = sequelize.define('Fotos', {
        idFoto: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idProduto: {
            type: DataType.STRING,
            references: {
                model: 'Produtos',
                key: 'idProduto'
            }
        },
        urlFoto: DataType.STRING,
    }, {
        tableName: 'Fotos',
    });
    return Fotos;
};
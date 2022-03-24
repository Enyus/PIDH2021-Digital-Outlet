const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
    const Fotos = sequelize.define('Fotos', {

        idFoto: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        idProduto: DataType.INTEGER,

        urlFoto: {
            type: DataType.STRING,
            allowNull: false,
        },

		createdAt: DataType.DATE,

		updatedAt: DataType.DATE
        
    }, {
        tableName: 'Fotos',
    });

    Fotos.associate = (models) => {
        Fotos.belongsTo(models.Produtos, {
            foreignKey: 'idProduto'
        })
    };

    return Fotos;
};
const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
    const UsuarioLoja = sequelize.define('UsuarioLoja', {

        idUsuarioLoja: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        idUsuario: DataType.INTEGER,

        idLoja: DataType.INTEGER,

		createdAt: DataType.DATE,

		updatedAt: DataType.DATE
        
    }, {
        tableName: 'UsuarioLoja'
    });
    return UsuarioLoja;
};
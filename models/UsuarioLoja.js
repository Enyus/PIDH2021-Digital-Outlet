const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
    const UsuarioLoja = sequelize.define('UsuarioLoja', {
        idUsuarioLoja: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idUsuario: {
            type: DataType.STRING,
            references: {
                model:'Usuarios',
                key: 'idUsuario'
            }
        },
        idLoja: {
            type: DataType.STRING,
            references: {
                model:'Lojas',
                key: 'idLoja'
            }
        },
    }, {
        tableName: 'UsuarioLoja',
    });
    return UsuarioLoja;
};
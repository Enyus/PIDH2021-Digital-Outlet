const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
    const Estoque = sequelize.define('Enderecos', {
        idEndereco: {
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
        logradouro: DataType.STRING,
        numero: DataType.INTEGER,
        complemento: DataType.STRING,
        cidade: DataType.STRING,
        estado: DataType.STRING,
        cep: DataType.STRING,
    }, {
        tableName: 'Enderecos',
    });
    return Enderecos;
};
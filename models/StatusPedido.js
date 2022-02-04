const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
    const StatusPedido = sequelize.define('StatusPedido', {
        idStatusPedido: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idPedido: {
            type: DataType.STRING,
            references: {
                model:'Pedidos',
                key: 'idPedido'
            }
        },
        dataProcess: DataType.DATE,
        dataTransp: DataType.DATE,
        dataEntrega: DataType.DATE,
    }, {
        tableName: 'StatusPedido',
    });
    return StatusPedido;
};
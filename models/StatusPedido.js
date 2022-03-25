const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
    const StatusPedido = sequelize.define('StatusPedido', {

        idStatusPedido: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        idPedido: DataType.INTEGER,

        dataProcess: {
            type: DataType.DATE,
            allowNull: true,
            validate: {
              isDate: {msg: "O campo data de processamento deve ser preenchido com uma data válida."},
            }
        },

        dataTransp: {
            type: DataType.DATE,
            allowNull: true,
            validate: {
              isDate: {msg: "O campo data de transporte deve ser preenchido com uma data válida."},
            }
        },

        dataEntrega: {
            type: DataType.DATE,
            allowNull: true,
            validate: {
              isDate: {msg: "O campo data de entrega deve ser preenchido com uma data válida."},
            }
        },

		createdAt: DataType.DATE,

		updatedAt: DataType.DATE
        
    }, {
        tableName: 'StatusPedido',
    });

    StatusPedido.associate = (models) => {
        StatusPedido.belongsTo(models.Pedidos, {
            foreignKey: 'idPedido'
        });
    };

    return StatusPedido;
};
const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
    const Pedidos = sequelize.define('Pedidos', {

        idPedido: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        idUsuario: DataType.INTEGER,

        idLoja: DataType.INTEGER,

        dataPedido: {
            type: DataType.DATE,
            allowNull: false,
            validate: {
              isDate: {msg: "O campo da data de nascimento deve ser preenchido com uma data válida."},
            }
        },

        valor: {
            type: DataType.FLOAT,
            allowNull: false,
            validate: {
                isFloat: {msg: "O valor do pedido deve ser um número do tipo FLOAT"}
            }
        },

		createdAt: DataType.DATE,

		updatedAt: DataType.DATE
    }, {
        tableName: 'Pedidos',
    });

    Pedidos.associate = (models) => {
        Pedidos.belongsTo(models.Usuarios, {
            foreignKey: 'idUsuario'
        });

        Pedidos.belongsTo(models.Lojas, {
            foreignKey: 'idLoja'
        });

        Pedidos.hasOne(models.StatusPedido, {
            foreignKey: 'idPedido'
        });
        
        Pedidos.belongsToMany(models.Produtos, {
            through: models.PedidosProdutos,
            foreignKey: 'idPedido'
        });
    };

    return Pedidos;
};
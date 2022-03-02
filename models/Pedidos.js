const Sequelize = require('sequelize');
// const {Usuarios, Lojas, Produtos} = require("./index");

module.exports = (sequelize, DataType) => {
    const Pedidos = sequelize.define('Pedidos', {
        idPedido: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idUsuario: DataType.STRING,

        idLoja: {
            type: DataType.STRING,
            references: {
                model: 'Lojas',
                key: 'idLoja'
            }
        },
        idProduto: {
            type: DataType.STRING,
            references: {
                model: 'Produtos',
                key: 'idProduto'
            }
        },
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
    return Pedidos;
};
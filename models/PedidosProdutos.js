const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
    const PedidosProdutos = sequelize.define('PedidosProdutos', {

        idPedidoProduto: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        idProduto: DataType.INTEGER,

        idPedido: DataType.INTEGER,

        quantidade: {
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
              isInt: {msg: "O campo de número da residência deve ser composto caracteres numéricos"}
            }
        },

        preco: {
            type: DataType.FLOAT,
            allowNull: false,
            validate: {
                isFloat: {msg: "O preço deve ser um número do tipo FLOAT"}
            }
        },

        desconto: {
            type: DataType.FLOAT,
            allowNull: false,
            validate: {
                isFloat: {msg: "O desc6nt6 deve ser um número do tipo FLOAT"}
            }
        },

        frete: {
            type: DataType.FLOAT,
            allowNull: false,
            validate: {
                isFloat: {msg: "O frete deve ser um número do tipo FLOAT"}
            }
        },

		createdAt: DataType.DATE,
        
		updatedAt: DataType.DATE
    }, {
        tableName: 'PedidosProdutos',
    });
    return PedidosProdutos;
};
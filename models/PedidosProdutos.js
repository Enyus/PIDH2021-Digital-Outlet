const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
    const PedidosProdutos = sequelize.define('PedidosProdutos', {
        idPedidoProduto: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idProduto: {
            type: DataType.STRING,
            references: {
                model:'Produtos',
                key: 'idProduto'
            }
        },
        idPedido: {
            type: DataType.STRING,
            references: {
                model:'Pedidos',
                key: 'idPedido'
            }
        },
        quantidade: DataType.INTEGER,
        preco: DataType.FLOAT,
        desconto: DataType.FLOAT,
        frete: DataType.FLOAT,
    }, {
        tableName: 'PedidosProdutos',
    });
    return PedidosProdutos;
};
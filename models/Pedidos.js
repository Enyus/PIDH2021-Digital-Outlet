const Sequelize = require('sequelize');
const {Usuarios, Lojas, Produtos} = require("./index");

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
        dataPedido: DataType.DATE,
        valor: DataType.INTEGER,
    }, {
        tableName: 'Pedidos',
    });
    return Pedidos;
};
const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
    const Produtos = sequelize.define('Produtos', {
        idProduto: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idMarca:Sequelize.INTEGER,
        preco: Sequelize.FLOAT,
        idCategoria:  Sequelize.INTEGER,
        desc: Sequelize.STRING,
        idLoja: Sequelize.INTEGER,
        promocao: Sequelize.DECIMAL,
    });
    return Produtos;
};
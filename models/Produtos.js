const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
    const Produtos = sequelize.define('Produtos', {
        idProduto: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomeProduto: Sequelize.STRING,
        idMarca:Sequelize.INTEGER,
        preco: Sequelize.FLOAT,
        idCategoria:  Sequelize.INTEGER,
        desc: Sequelize.TEXT,
        idLoja: Sequelize.INTEGER,
        promocao: Sequelize.DECIMAL,
        createdAt: DataType.DATE,
		updatedAt: DataType.DATE
    });
    return Produtos;
};
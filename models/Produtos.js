const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
    const Produtos = sequelize.define('Produtos', {

        idProduto: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nomeProduto: {
            type: DataType.STRING,
            allowNull: false
          },

        idMarca: DataType.INTEGER,

        preco: {
            type: DataType.FLOAT,
            allowNull: false,
            validate: {
                isFloat: {msg: "O preço deve ser um número do tipo FLOAT"}
            }
        },

        idCategoria: DataType.INTEGER,

        desc: {
            type: DataType.TEXT,
            allowNull: false
        },

        idLoja: DataType.INTEGER,

        promocao: {
            type: DataType.DECIMAL,
            allowNull: false,
            validate: {
                isDecimal: {msg: "O desconto deve ser um número do tipo DECIMAL"}
            }
        },

		createdAt: DataType.DATE,

		updatedAt: DataType.DATE

    });

    Produtos.associate = (models) => {
        Produtos.belongsTo(models.Marcas, {
            foreignKey: 'idMarca'
        });

        Produtos.belongsTo(models.Categorias, {
            foreignKey: 'idCategoria'
        });

        Produtos.belongsTo(models.Lojas, {
            foreignKey:'idLoja'
        });

        Produtos.hasOne(models.Estoque, {
            foreignKey: 'idProduto'
        });

        Produtos.hasMany(models.Fotos, {
            foreignKey: 'idProduto'
        });

        Produtos.hasMany(models.DescTec, {
            foreignKey: 'idProduto'
        });
        
        Produtos.belongsToMany(models.Pedidos, {
            through: models.PedidosProdutos,
            foreignKey: 'idProduto'
        });
    };

    return Produtos;
};
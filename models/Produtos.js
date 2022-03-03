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
        idMarca: {
            type: DataType.INTEGER,
            references: {
                model: "Marcas",
                key: 'idMarca'
            }
        },
        preco: {
            type: DataType.FLOAT,
            allowNull: false,
            validate: {
                isFloat: {msg: "O preço deve ser um número do tipo FLOAT"}
            }
        },
        idCategoria: {
            type: DataType.INTEGER,
            references: {
                model: "Categorias",
                key: 'idCategoria'
            }
        },
        desc: {
            type: DataType.TEXT,
            allowNull: false
          },
        idLoja: {
            type: DataType.INTEGER,
            references: {
                model: "Lojas",
                key: 'idLoja'
            }
        },
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
        Produtos.hasMany(models.Fotos, {
            foreignKey: 'idProduto'
        })
    };

    return Produtos;
};
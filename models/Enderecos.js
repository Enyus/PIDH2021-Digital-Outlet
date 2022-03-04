const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
    const Enderecos = sequelize.define('Enderecos', {
        idEndereco: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idUsuario: {
            type: DataType.STRING,
            references: {
                model:'Usuarios',
                key: 'idUsuario'
            }
        },
        logradouro: {
            type: DataType.STRING,
            allowNull: false,
        },
        numero: {
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                isInt: {msg: "O campo de número da residência deve ser composto caracteres numéricos"}
            }
        },
        complemento: {
            type: DataType.STRING,
            allowNull: false,
        },
        cidade: {
            type: DataType.STRING,
            allowNull: false,
        },
        estado: {
            type: DataType.STRING,
            allowNull: false,
        },
        cep: {
            type: DataType.INTEGER(8),
            allowNull: false,
            validate: {
              isInt: {msg: "O campo de CEP deve ser composto de oito caracteres numéricos"},
              len: {
                args: [8,8],
                msg: "O campo de CEP deve ser composto de oito caracteres numéricos"
              }
            }
        },
		createdAt: DataType.DATE,
		updatedAt: DataType.DATE
    }, {
        tableName: 'Enderecos',
    });

    Enderecos.associate = (models) => {
        Enderecos.belongsTo(models.Usuarios, {
            foreignKey: 'idUsuario'
        });
    };

    return Enderecos;
};
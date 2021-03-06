const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
	const Lojas = sequelize.define('Lojas', {

	    idLoja: {
	      type: DataType.INTEGER,
	      primaryKey: true,
	      autoIncrement: true
	    },

    	email: {
			type: DataType.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: {msg: "O campo de e-mail deve ser preenchido com um e-mail válido."},
			}
		},

		razaoSocial: {
			type: DataType.STRING,
			allowNull: false
		},

		nomeFantasia: {
			type: DataType.STRING,
			allowNull: false
		},

		inscEst: {
			type: DataType.STRING(9),
			allowNull: false,
			unique: true,
			validate: {
				isInt: {msg: "O campo de Inscrição Estadual deve ser composto entre 9 a 12 dígitos numéricos"},
				len: {
				args: [9,12],
				msg: "O campo de Inscrição Estadual deve ser composto entre 9 a 12 dígitos numéricos"
				}
			}
		},

		cnpj: {
			type: DataType.STRING(14),
			allowNull: false,
			unique: true,
			validate: {
				isInt: {msg: "O campo de CNPJ deve ser composto de 14 dígitos numéricos"},
				len: {
				args: [14,14],
				msg: "O campo de CNPJ deve ser composto de 14 dígitos numéricos"
				}
			}
		},

		senha: {
			type: DataType.STRING,
			allowNull: false,
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
            allowNull: true,
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
			type: DataType.STRING(8),
			allowNull: false,
			validate: {
				isInt: {msg: "O campo de CEP deve ser composto de oito caracteres numéricos"},
				len: {
				args: [8,8],
				msg: "O campo de CEP deve ser composto de oito caracteres numéricos"
				}
			}
		},

		fotoPerfil: {
			type: DataType.STRING,
			allowNull: true,
			defaultValue: null
		},

		createdAt: DataType.DATE,

		updatedAt: DataType.DATE

	},{
	   tableName: 'Lojas',
	   paranoid: true,
	});

	Lojas.associate = (models) => {
		Lojas.hasMany(models.Produtos, {
			foreignKey: 'idLoja'
		});

		Lojas.hasMany(models.Estoque, {
			foreignKey: 'idLoja'
		});

		Lojas.hasMany(models.Pedidos, {
			foreignKey: 'idLoja'
		});
		
		Lojas.belongsToMany(models.Usuarios, {
			through: models.UsuarioLoja,
			foreignKey: 'idLoja'
		});
	};

	return Lojas;
};
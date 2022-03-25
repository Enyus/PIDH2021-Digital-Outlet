const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
	const Usuarios = sequelize.define('Usuarios', {

	    idUsuario: {
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

		nome: {
			type: DataType.STRING,
			allowNull: false,
		},

		sobrenome: {
			type: DataType.STRING,
			allowNull: false,
		},

		dataNasc: {
			type: DataType.DATE,
			allowNull: false,
			validate: {
				isDate: {msg: "O campo da data de nascimento deve ser preenchido com uma data válida."},
			}
		},

		cpf: {
			type: DataType.STRING(11),
			allowNull: false,
			unique: true,
			validate: {
				isNumeric: {msg: "O campo de cpf deve ser preenchido apenas com números."},
				len: {
				arg: [11,11],
				msg: "O campo de cpf deve ter 11 caracteres."
				}
			}
		},

		senha: {
			type: DataType.STRING,
			allowNull: false,
		},

		fotoPerfil: {
			type: DataType.STRING,
			allowNull: true,
			defaultValue: null
		},

		createdAt: DataType.DATE,

		updatedAt: DataType.DATE

	},{
	   tableName: 'Usuarios',
	});

	Usuarios.associate = (models) => {
		Usuarios.hasMany(models.Enderecos, {
			foreignKey: 'idUsuario'
		});

		Usuarios.hasMany(models.Pedidos, {
			foreignKey: 'idUsuario'
		});
		
		Usuarios.belongsToMany(models.Lojas, {
			through: models.UsuarioLoja,
			foreignKey: 'idUsuario'
		});
	};

	return Usuarios;
};
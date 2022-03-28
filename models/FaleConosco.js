const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
	const FaleConosco = sequelize.define('FaleConosco', {

	    idFaleConosco: {
	      type: DataType.INTEGER,
	      primaryKey: true,
	      autoIncrement: true
	    },

	    nome: {
			type: DataType.STRING,
			allowNull: false,
		},

		email: {
			type: DataType.STRING,
			allowNull: false,
			validate: {
			  isEmail: {msg: "O campo de e-mail deve ser preenchido com um e-mail válido."},
			}
		},

		telefone: {
			type: DataType.STRING,
			allowNull: false,
		},

		mensagem: {
			type: DataType.TEXT,
			allowNull: false
		},

		createdAt: DataType.DATE,

		updatedAt: DataType.DATE
		
	},{
	   tableName: 'FaleConosco',
	});
	return FaleConosco;
};
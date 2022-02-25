const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
	const FaleConosco = sequelize.define('FaleConosco', {
	    idFaleConosco: {
	      type: DataType.INTEGER,
	      primaryKey: true,
	      autoIncrement: true
	    },
	    nome: DataType.STRING,
        email: DataType.STRING,
	    telefone: DataType.STRING,
        mensagem: DataType.TEXT,
		createdAt: DataType.DATE,
		updatedAt: DataType.DATE
	},{
	   tableName: 'FaleConosco',
	});
	return FaleConosco;
};
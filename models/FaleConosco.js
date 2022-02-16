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
        mensagem: DataType.STRING,
		createdAt: DataType.DATE,
		updateAt: DataType.DATE
	},{
	   tableName: 'FaleConosco',
	});
	return FaleConosco;
};
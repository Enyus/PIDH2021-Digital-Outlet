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
	},{
	   tableName: 'FaleConosco',
	});
	return FaleConosco;
};
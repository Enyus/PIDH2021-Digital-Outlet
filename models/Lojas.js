const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
	const Lojas = sequelize.define('Lojas', {
	    idLoja: {
	      type: DataType.INTEGER,
	      primaryKey: true,
	      autoIncrement: true
	    },
    	email: DataType.STRING,
	    razaoSocial: DataType.STRING,
	    nomeFantasia: DataType.STRING,
	    inscEst: DataType.INTEGER(9),
        cnpj: DataType.INTEGER(14),
        senha: DataType.STRING,
        logradouro: DataType.STRING,
        numero: DataType.INTEGER,
        cidade: DataType.STRING,
        estado: DataType.STRING,
        cep: DataType.INTEGER(8),
	},{
	   tableName: 'Lojas',
	});
	return Lojas;
};
const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
	const TrabalheConosco = sequelize.define('TrabalheConosco', {
	    idTrabalheConosco: {
	      type: DataType.INTEGER,
	      primaryKey: true,
	      autoIncrement: true
	    },
		email: DataType.STRING,
	    nome: DataType.STRING,
        departamento: DataType.STRING,
		disp: DataType.STRING,
	    mensagem: DataType.TEXT,
		curriculo: DataType.STRING,
		createdAt: DataType.DATE,
		updateAt: DataType.DATE
	},{
	   tableName: 'TrabalheConosco',
	});
	return TrabalheConosco;
};
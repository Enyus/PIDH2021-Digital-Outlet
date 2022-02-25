const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
	const TrabalheConosco = sequelize.define('TrabalheConosco', {
	    idTrabalheConosco: {
	      type: DataType.INTEGER,
	      primaryKey: true,
	      autoIncrement: true
	    },
		email: {
			type: DataType.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: {msg: "Este campo deve ter um e-mail válido."},
			}
		},
	    nome: {
			type: DataType.STRING,
			allowNull: false,
		},
        departamento: {
			type: DataType.STRING,
			allowNull: false,
		},
		disp: {
			type: DataType.STRING,
			allowNull: false,
		},
	    mensagem: {
			type: DataType.TEXT,
			allowNull: false,
		},
		curriculo: {
			type: DataType.STRING,
			allowNull: false,
		},
		createdAt: DataType.DATE,
		updatedAt: DataType.DATE
	},{
	   tableName: 'TrabalheConosco',
	});
	return TrabalheConosco;
};
const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
	const Usuarios = sequelize.define('Usuarios', {
	    idUsuario: {
	      type: DataType.INTEGER,
	      primaryKey: true,
	      autoIncrement: true
	    },
    	email: DataType.STRING,
	    nome: DataType.STRING,
	    sobrenome: DataType.STRING,
	    dataNasc: DataType.DATE,
        cpf: DataType.STRING(11),
        senha: DataType.STRING,
        fotoPerfil: DataType.STRING
	},{
	   tableName: 'Usuarios',
	});
	return Usuarios;
};
const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
	const Marcas = sequelize.define('Marcas', {
	    idMarca: {
	      type: DataType.INTEGER,
	      primaryKey: true,
	      autoIncrement: true
	    },
    	nomeMarca: DataType.STRING,
	},{
	   tableName: 'Marcas',
	});
	return Marcas;
};
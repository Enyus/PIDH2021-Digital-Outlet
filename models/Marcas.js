const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
	const Marcas = sequelize.define('Marcas', {
	    idMarca: {
	      type: DataType.INTEGER,
	      primaryKey: true,
	      autoIncrement: true
	    },
    	nomeMarca: DataType.STRING,
		createdAt: DataType.DATE,
		updatedAt: DataType.DATE
	},{
	   tableName: 'Marcas',
	});
	return Marcas;
};
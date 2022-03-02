const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
	const Marcas = sequelize.define('Marcas', {
	    idMarca: {
	      type: DataType.INTEGER,
	      primaryKey: true,
	      autoIncrement: true
	    },
    	nomeMarca: {
			type: DataType.STRING,
			allowNull: false,
			unique: true
		  },
		createdAt: DataType.DATE,
		updatedAt: DataType.DATE
	},{
	   tableName: 'Marcas',
	});
	return Marcas;
};
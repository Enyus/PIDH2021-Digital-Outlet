const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
	const Categorias = sequelize.define('Categorias', {
	    idCategoria: {
	      type: DataType.INTEGER,
	      primaryKey: true,
	      autoIncrement: true
	    },
    	nomeCategoria: DataType.STRING,
	},{
	   tableName: 'Categorias',
	});
	return Categorias;
};
const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
	const DescTec = sequelize.define('DescTec', {
	    idDescTec: {
	      type: DataType.INTEGER,
	      primaryKey: true,
	      autoIncrement: true
	    },
    	nomeDescTec: DataType.STRING,
        valor: DataType.STRING,
	},{
	   tableName: 'DescTec',
	});
	return DescTec;
};
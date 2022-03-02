const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
	const DescTec = sequelize.define('DescTec', {
	    idDescTec: {
	      type: DataType.INTEGER,
	      primaryKey: true,
	      autoIncrement: true
	    },
		idProduto: {
            type: DataType.STRING,
            references: {
                model:'Produtos',
                key: 'idProduto'
            }
        },
    	nomeDescTec: {
			type: DataType.STRING,
			allowNull: false,
		},
		valor: {
			type: DataType.STRING,
			allowNull: false,
		},
		createdAt: DataType.DATE,
		updatedAt: DataType.DATE
	},{
	   tableName: 'DescTec',
	});
	return DescTec;
};
const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
	const DescTec = sequelize.define('DescTec', {

	    idDescTec: {
	      type: DataType.INTEGER,
	      primaryKey: true,
	      autoIncrement: true
	    },

		idProduto: DataType.INTEGER,
    	
		nomeDescTec: {
			type: DataType.STRING,
			allowNull: false,
		},
		
		valor: {
			type: DataType.STRING,
			allowNull: false,
		},
		createdAt: DataType.DATE,
		updatedAt: DataType.DATE,		
	},{
	   tableName: 'DescTec',
	   paranoid: true,
	});

	DescTec.associate = (models) => {
		DescTec.belongsTo(models.Produtos, {
			foreignKey: 'idProduto'
		});
	};

	return DescTec;
};
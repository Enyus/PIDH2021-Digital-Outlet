const Sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
	const Categorias = sequelize.define('Categorias', {
	    idCategoria: {
	      type: DataType.INTEGER,
	      primaryKey: true,
	      autoIncrement: true
	    },
    	nomeCategoria: {
			type: DataType.STRING,
			allowNull: false,
			unique: true,
			validate: {
				notEmpty: {msg: "Esse campo não pode ser vazio"},
			}
		},
		createdAt: DataType.DATE,
		updatedAt: DataType.DATE
	},{
	   tableName: 'Categorias',
	});

	Categorias.associate = (models) => {
		Categorias.hasMany(models.Produtos, {
			foreignKey: 'idCategoria'
		});
	};

	return Categorias;
};
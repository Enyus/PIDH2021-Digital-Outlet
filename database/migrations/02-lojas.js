'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return  queryInterface.createTable('Lojas', {
	    idLoja: {
	      type: Sequelize.INTEGER,
	      primaryKey: true,
	      autoIncrement: true
	    },
    	email: Sequelize.STRING,
	    razaoSocial: Sequelize.STRING,
	    nomeFantasia: Sequelize.STRING,
	    inscEst: Sequelize.INTEGER(9),
        cnpj: Sequelize.INTEGER(14),
        senha: Sequelize.STRING,
        logradouro: Sequelize.STRING,
        numero: Sequelize.INTEGER,
        cidade: Sequelize.STRING,
        estado: Sequelize.STRING,
        cep: Sequelize.INTEGER(8),
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
	});
  },
  down: (queryInterface, Sequelize) => {
   return  queryInterface.dropTable('Lojas');
  }
};
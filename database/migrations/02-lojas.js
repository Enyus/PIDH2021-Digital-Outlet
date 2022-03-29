'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return  queryInterface.createTable('Lojas', {
	    idLoja: {
	      type: Sequelize.INTEGER,
	      primaryKey: true,
	      autoIncrement: true
	    },
    	email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {msg: "O campo de e-mail deve ser preenchido com um e-mail válido."},
        }
      },
	    razaoSocial: {
        type: Sequelize.STRING,
        allowNull: false
      },
	    nomeFantasia: {
        type: Sequelize.STRING,
        allowNull: false
      },
	    inscEst: {
        type: Sequelize.INTEGER(9),
        allowNull: false,
        unique: true,
        validate: {
          isInt: {msg: "O campo de Inscrição Estadual deve ser composto entre 9 a 12 dígitos numéricos"},
          len: {
            args: [9,12],
            msg: "O campo de Inscrição Estadual deve ser composto entre 9 a 12 dígitos numéricos"
          }
        }
      },
      cnpj: {
        type: Sequelize.BIGINT(14),
        allowNull: false,
        unique: true,
        validate: {
          isInt: {msg: "O campo de CNPJ deve ser composto de 14 dígitos numéricos"},
          len: {
            args: [14,14],
            msg: "O campo de CNPJ deve ser composto de 14 dígitos numéricos"
          }
        }
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      logradouro: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          isInt: {msg: "O campo de número da residência deve ser composto caracteres numéricos"}
        }
      },
      cidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cep: {
        type: Sequelize.INTEGER(8),
        allowNull: false,
        validate: {
          isInt: {msg: "O campo de CEP deve ser composto de oito caracteres numéricos"},
          len: {
            args: [8,8],
            msg: "O campo de CEP deve ser composto de oito caracteres numéricos"
          }
        }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      deletedAt: Sequelize.DATE
	});
  },
  down: (queryInterface, Sequelize) => {
   return  queryInterface.dropTable('Lojas');
  }
};
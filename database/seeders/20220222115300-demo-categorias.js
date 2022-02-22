'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categorias', [{
      nomeCategoria: 'Roupas'
    },
    {
      nomeCategoria: 'Livros'
    },
    {
      nomeCategoria: 'Calçados'
    },
    {
      nomeCategoria: 'Acessórios'
    },
    {
      nomeCategoria: 'Para a Casa'
    },
    {
      nomeCategoria: 'Esporte'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categorias', null, {});
  }
};

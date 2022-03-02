'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categorias', [{
      nomeCategoria: 'Roupas',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nomeCategoria: 'Livros',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nomeCategoria: 'Calçados',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nomeCategoria: 'Acessórios',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nomeCategoria: 'Para a Casa',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nomeCategoria: 'Esporte',
      createdAt: new Date(),
      updatedAt: new Date()
    },], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categorias', null, {});
  }
};

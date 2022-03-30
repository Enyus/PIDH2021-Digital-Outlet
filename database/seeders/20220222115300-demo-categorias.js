'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categorias', [
    //idCategoria=1
      {
      nomeCategoria: 'Roupas',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    //idCategoria=2
    {
      nomeCategoria: 'Livros',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    //idCategoria=3
    {
      nomeCategoria: 'Calçados',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    //idCategoria=4
    {
      nomeCategoria: 'Acessórios',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    //idCategoria=5
    {
      nomeCategoria: 'Para a Casa',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    //idCategoria=6
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

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Estoque', [
    // idEstoque=1
    {
      idLoja: 1,
      idProduto: 1,
      quantidade: 51,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idEstoque=2
    {
      idLoja: 1,
      idProduto: 2,
      quantidade: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idEstoque=3
    {
      idLoja: 1,
      idProduto: 3,
      quantidade: 250,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idEstoque=4
    {
      idLoja: 1,
      idProduto: 4,
      quantidade: 120,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idEstoque=5
    {
      idLoja: 1,
      idProduto: 5,
      quantidade: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idEstoque=6
    {
      idLoja: 1,
      idProduto: 6,
      quantidade: 18,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Estoque', null, {});
  }
};

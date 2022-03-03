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
    },
    // idEstoque=7
    {
      idLoja: 1,
      idProduto: 7,
      quantidade: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idEstoque=8
    {
      idLoja: 1,
      idProduto: 8,
      quantidade: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idEstoque=9
    {
      idLoja: 1,
      idProduto: 9,
      quantidade: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idEstoque=10
    {
      idLoja: 1,
      idProduto: 10,
      quantidade: 150,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idEstoque=11
    {
      idLoja: 1,
      idProduto: 11,
      quantidade: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idEstoque=12
    {
      idLoja: 1,
      idProduto: 12,
      quantidade: 70,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idEstoque=13
    {
      idLoja: 1,
      idProduto: 13,
      quantidade: 180,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idEstoque=14
    {
      idLoja: 1,
      idProduto: 14,
      quantidade: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idEstoque=15
    {
      idLoja: 1,
      idProduto: 15,
      quantidade: 50,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idEstoque=16
    {
      idLoja: 1,
      idProduto: 16,
      quantidade: 95,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idEstoque=17
    {
      idLoja: 1,
      idProduto: 17,
      quantidade: 62,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Estoque', null, {});
  }
};

'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Estoque', [
      // idEstoque=1
      {
        idLoja: 1,
        idProduto: 1,
        quantidade: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idEstoque=2
      {
        idLoja: 1,
        idProduto: 2,
        quantidade: 157,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idEstoque=3
      {
        idLoja: 1,
        idProduto: 3,
        quantidade: 84,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idEstoque=4
      {
        idLoja: 1,
        idProduto: 4,
        quantidade: 258,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idEstoque=5
      {
        idLoja: 1,
        idProduto: 5,
        quantidade: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idEstoque=6
      {
        idLoja: 1,
        idProduto: 6,
        quantidade: 614,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idEstoque=7
      {
        idLoja: 1,
        idProduto: 7,
        quantidade: 123,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idEstoque=8
      {
        idLoja: 1,
        idProduto: 8,
        quantidade: 94,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idEstoque=9
      {
        idLoja: 1,
        idProduto: 9,
        quantidade: 47,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idEstoque=10
      {
        idLoja: 1,
        idProduto: 10,
        quantidade: 400,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idEstoque=11
      {
        idLoja: 1,
        idProduto: 11,
        quantidade: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idEstoque=12
      {
        idLoja: 1,
        idProduto: 12,
        quantidade: 456,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idEstoque=13
      {
        idLoja: 1,
        idProduto: 13,
        quantidade: 789,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idEstoque=14
      {
        idLoja: 1,
        idProduto: 14,
        quantidade: 65,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idEstoque=15
      {
        idLoja: 1,
        idProduto: 15,
        quantidade: 321,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idEstoque=16
      {
        idLoja: 1,
        idProduto: 16,
        quantidade: 987,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idEstoque=17
      {
        idLoja: 1,
        idProduto: 17,
        quantidade: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idEstoque=18
      {
        idLoja: 2,
        idProduto: 18,
        quantidade: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idEstoque=19
      {
        idLoja: 2,
        idProduto: 19,
        quantidade: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idEstoque=20
      {
        idLoja: 2,
        idProduto: 20,
        quantidade: 150,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idEstoque=21
      {
        idLoja: 2,
        idProduto: 21,
        quantidade: 8000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idEstoque=22
      {
        idLoja: 2,
        idProduto: 22,
        quantidade: 519,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idEstoque=23
      {
        idLoja: 2,
        idProduto: 23,
        quantidade: 800,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idEstoque=24
      {
        idLoja: 2,
        idProduto: 24,
        quantidade: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idEstoque=25
      {
        idLoja: 2,
        idProduto: 25,
        quantidade: 67,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Estoque', null, {});
  }
};

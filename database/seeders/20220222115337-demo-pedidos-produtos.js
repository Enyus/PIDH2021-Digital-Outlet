'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PedidosProdutos', [
      // idPedidosProdutos=1
      {
      idProduto: 1,
      idPedido: 1,
      quantidade: 1,
      preco: 110,
      desconto: 10,
      frete: 20,
      createdAt: new Date("2021-12-01T03:24:00"),
      updatedAt: new Date("2021-12-01T03:24:00")
      },
      // idPedidosProdutos=2
      {
        idProduto: 4,
        idPedido: 1,
        quantidade: 2,
        preco: 160,
        desconto: 0,
        frete: 20,
        createdAt: new Date("2021-12-01T03:24:00"),
        updatedAt: new Date("2021-12-01T03:24:00")
        },
        // idPedidosProdutos=3
      {
        idProduto: 9,
        idPedido: 2,
        quantidade: 1,
        preco: 570,
        desconto: 15,
        frete: 12,
        createdAt: new Date("2022-01-28T18:14:00"),
        updatedAt: new Date("2022-01-28T18:14:00")
        }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PedidosProdutos', null, {});
  }
};

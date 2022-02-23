'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PedidosProdutos', [{
      idProduto: 1,
      idPedido: 1,
      quantidade: 1,
      preco: 110,
      desconto: 10,
      frete: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PedidosProdutos', null, {});
  }
};

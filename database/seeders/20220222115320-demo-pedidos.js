'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pedidos', [{
      idUsuario: 1,
      idLoja: 1,
      idProduto: 1,
      dataPedido: new Date(),
      valor: 100
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pedidos', null, {});
  }
};

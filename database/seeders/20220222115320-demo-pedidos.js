'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pedidos', [
      // idPedido=1
      {
      idUsuario: 1,
      idLoja: 1,
      dataPedido: new Date("2021-12-01T03:24:00"),
      valor: 299,
      createdAt: new Date("2021-12-01T03:24:00"),
      updatedAt: new Date("2021-12-01T03:24:00")
      },

      // idPedido=2
      {
        idUsuario: 1,
        idLoja: 1,
        dataPedido: new Date("2022-01-28T18:14:00"),
        valor: 80,
        createdAt: new Date("2022-01-28T18:14:00"),
        updatedAt: new Date("2022-01-28T18:14:00")
        }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pedidos', null, {});
  }
};

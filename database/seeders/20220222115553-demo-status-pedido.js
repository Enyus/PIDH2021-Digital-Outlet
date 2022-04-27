'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('StatusPedido', [
      // idStatusPedido=1
      {
      idPedido: 1,
      dataProcess: new Date("2021-12-02T07:24:00"),
      dataTransp: new Date("2021-12-05T09:59:00"),
      dataEntrega: new Date("2021-12-23T18:02:00"),
      createdAt: new Date("2021-12-01T03:24:00"),
      updatedAt: new Date("2021-12-23T18:02:00")
      },
      // idStatusPedido=2
      {
        idPedido: 2,
        dataProcess: new Date("2022-01-28T18:15:00"),
        dataTransp: new Date("2022-01-31T07:28:00"),
        dataEntrega: null,
        createdAt: new Date("2022-01-28T18:14:00"),
        updatedAt: new Date("2022-01-31T07:28:00")
      },
      // idStatusPedido=3
      {
        idPedido: 3,
        dataProcess: null,
        dataTransp: null,
        dataEntrega: null,
        createdAt: new Date("2022-02-28T18:14:00"),
        updatedAt: new Date("2022-02-28T18:14:00")
      },
      // idStatusPedido=4
      {
        idPedido: 4,
        dataProcess: new Date("2022-03-06T19:14:00"),
        dataTransp: null,
        dataEntrega: null,
        createdAt: new Date("2022-03-05T18:14:00"),
        updatedAt: new Date("2022-03-05T18:14:00")
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('StatusPedido', null, {});
  }
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('StatusPedido', [{
      idPedido: 1,
      dataProcess: new Date(),
      dataTransp: new Date(),
      dataEntrega: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('StatusPedido', null, {});
  }
};

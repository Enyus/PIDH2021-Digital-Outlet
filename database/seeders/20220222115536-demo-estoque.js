'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Estoque', [{
      idLoja: 1,
      idProduto: 1,
      quantidade: 51
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Estoque', null, {});
  }
};

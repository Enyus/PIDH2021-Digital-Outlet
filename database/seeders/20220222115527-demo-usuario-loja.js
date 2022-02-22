'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UsuarioLoja', [{
      idUsuario: 1,
      idLoja: 1
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UsuarioLoja', null, {});
  }
};

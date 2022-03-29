'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UsuarioLoja', [{
      idUsuario: 1,
      idLoja: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UsuarioLoja', null, {});
  }
};

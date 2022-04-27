'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('FaleConosco', [{
      nome: 'Dan',
      email: 'dan@email.com',
      telefone: '1212345678',
      mensagem: 'Queria pedir desculpas por ser um babaca',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('FaleConosco', null, {});
  }
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TrabalheConosco', [{
      email: 'cassio@email.com',
      nome: 'Cássio',
      departamento: 'Desenvolvedor',
      disp: 'freela',
      mensagem: 'Me contrata, pelo amor de Deus!!!',
      curriculo: '/curriculos/curriculo-1648590723793.pdf',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TrabalheConosco', null, {});
  }
};

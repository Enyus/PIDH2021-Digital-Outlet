'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [{
      email: "cassio@email.com",
      nome: "Cássio",
      sobrenome: "Sandrigo Santini",
      dataNasc: new Date(),
      cpf: "12312312312",
      senha: "123",
      fotoPerfil: "/profilepics/cassio.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

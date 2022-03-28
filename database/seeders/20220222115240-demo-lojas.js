'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Lojas', [{
      email: 'do$@email.com',
      razaoSocial: 'Digital Outlet LTDA',
      nomeFantasia: 'DO$',
      inscEst: 123456789,
      cnpj: 12345678000101,
      senha: bcrypt.hashSync("do$123", 10),
      logradouro: 'Rua Juvenal das Neves',
      numero: '1234',
      complemento: 'sala 15',
      cidade: 'São Paulo',
      estado: 'São Paulo',
      cep: parseInt("01030010"),
      fotoPerfil: "/profilepics/do$.png",
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    }], {});
},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Lojas', null, {});
  }
};
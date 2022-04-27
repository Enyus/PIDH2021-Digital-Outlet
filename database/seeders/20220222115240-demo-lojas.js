'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Lojas', [
      // iLoja=1
      {
        email: 'do$@email.com',
        razaoSocial: 'Digital Outlet LTDA',
        nomeFantasia: 'DO$',
        inscEst: "123456789",
        cnpj: "12345678000101",
        senha: bcrypt.hashSync("do$123", 10),
        logradouro: 'Rua Juvenal das Neves',
        numero: '1234',
        complemento: 'sala 15',
        cidade: 'São Paulo',
        estado: 'São Paulo',
        cep: "01030010",
        fotoPerfil: "/profilepics/do$.png",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      // iLoja=2
      {
        email: 'topshoes@email.com',
        razaoSocial: 'Top Shoes',
        nomeFantasia: 'Sapatos Topzera Inc.',
        inscEst: "456789123",
        cnpj: "12345678000102",
        senha: bcrypt.hashSync("topshoes123", 10),
        logradouro: 'Avenida Penha de França',
        numero: '4567',
        complemento: 'Acima da Igreja Matriz',
        cidade: 'Franca',
        estado: 'São Paulo',
        cep: "03606010",
        fotoPerfil: "/profilepics/topshoes.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Lojas', null, {});
  }
};
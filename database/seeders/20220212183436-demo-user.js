'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuarios', [{
      email: "cassio@email.com",
      nome: "Cássio",
      sobrenome: "Santini",
      dataNasc: new Date(),
      cpf: "12312312312",
      senha: bcrypt.hashSync("cassio123", 10),
      fotoPerfil: "/profilepics/cassio.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        email: "flavio@email.com",
        nome: "Flávio",
        sobrenome: "Prado",
        dataNasc: new Date(),
        cpf: "12312312312",
        senha: bcrypt.hashSync("flavio123", 10),
        fotoPerfil: "/profilepics/flavio.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        email: "gabrielle@email.com",
        nome: "Gabrielle",
        sobrenome: "Toledo",
        dataNasc: new Date(),
        cpf: "12312312312",
        senha: bcrypt.hashSync("gabrielle123", 10),
        fotoPerfil: "/profilepics/gabrielle.png",
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
          email: "stephanie@email.com",
          nome: "Stéphanie",
          sobrenome: "Hames",
          dataNasc: new Date(),
          cpf: "12312312312",
          senha: bcrypt.hashSync("stephanie123", 10),
          fotoPerfil: "/profilepics/stephanie.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
          }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};

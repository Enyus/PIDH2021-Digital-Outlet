'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Enderecos', [{
      idUsuario: 1,
      logradouro: "Rua João das Neves",
      numero: 123,
      complemento: 'apt 01',
      cidade: 'Birigui',
      estado: 'São Paulo',
      cep: 16200000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idUsuario: 2,
      logradouro: "Rua Frederico Tesouro",
      numero: 456,
      complemento: 'apt 02',
      cidade: 'São Paulo',
      estado: 'São Paulo',
      cep: parseInt('0103000'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idUsuario: 3,
      logradouro: "Rua José Chaves",
      numero: 789,
      complemento: 'apt 03',
      cidade: 'São Paulo',
      estado: 'São Paulo',
      cep: parseInt('0103000'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idUsuario: 4,
      logradouro: "Rua do Madruga",
      numero: 147,
      complemento: 'apt 04',
      cidade: 'Porto Alegre',
      estado: 'Rio Grande do Sul',
      cep: 90010210,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Enderecos', null, {});
  }
};

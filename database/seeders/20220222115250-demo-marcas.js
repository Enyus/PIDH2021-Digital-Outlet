'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Marcas', [
    // idMarca=1
    {
      nomeMarca: 'DO$',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idMarca=2
    {
      nomeMarca: 'Calças AÊ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idMarca=3
    {
      nomeMarca: 'Gucci',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idMarca=4
    {
      nomeMarca: 'Louis Vitton',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idMarca=5
    {
      nomeMarca: 'Get Over',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Marcas', null, {});
  }
};

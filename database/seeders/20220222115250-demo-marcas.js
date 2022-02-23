'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Marcas', [{
      nomeMarca: 'DO$',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nomeMarca: 'Calças AÊ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nomeMarca: 'Gucci',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nomeMarca: 'Louis Vitton',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Marcas', null, {});
  }
};

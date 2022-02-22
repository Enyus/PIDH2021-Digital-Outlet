'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Marcas', [{
      nomeMarca: 'DO$'
    },
    {
      nomeMarca: 'Calças AÊ'
    },
    {
      nomeMarca: 'Gucci'
    },
    {
      nomeMarca: 'Louis Vitton'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Marcas', null, {});
  }
};

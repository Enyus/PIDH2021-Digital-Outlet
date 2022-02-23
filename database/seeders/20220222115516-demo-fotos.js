'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Fotos', [{
      idProduto: 1,
      urlFoto: '/images/calca-bege.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idProduto: 1,
      urlFoto: '/images/calca-bege.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idProduto: 1,
      urlFoto: '/images/calca-bege.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idProduto: 1,
      urlFoto: '/images/calca-bege.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Fotos', null, {});
  }
};

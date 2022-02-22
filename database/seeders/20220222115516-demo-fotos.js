'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Fotos', [{
      idProduto: 1,
      urlFoto: '/images/calca-bege.png'
    },
    {
      idProduto: 1,
      urlFoto: '/images/calca-bege.png'
    },
    {
      idProduto: 1,
      urlFoto: '/images/calca-bege.png'
    },
    {
      idProduto: 1,
      urlFoto: '/images/calca-bege.png'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Fotos', null, {});
  }
};

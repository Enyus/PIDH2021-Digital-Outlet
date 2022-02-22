'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('DescTec', [{
      nomeDescTec: 'Cor',
      valor: 'Bege'
    },
    {
      nomeDescTec: 'Marca',
      valor: 'Calças AÊ'
    },
    {
      nomeDescTec: 'Tamanho',
      valor: 'G'
    },
    {
      nomeDescTec: 'Categoria',
      valor: 'Calças'
    },
    {
      nomeDescTec: 'Composição',
      valor: '100% Algodão'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('DescTec', null, {});
  }
};

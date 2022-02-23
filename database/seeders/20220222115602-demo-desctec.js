'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('DescTec', [{
      idProduto: 1,
      nomeDescTec: 'Cor',
      valor: 'Bege',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idProduto: 1,
      nomeDescTec: 'Marca',
      valor: 'Calças AÊ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idProduto: 1,
      nomeDescTec: 'Tamanho',
      valor: 'G',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idProduto: 1,
      nomeDescTec: 'Categoria',
      valor: 'Calças',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idProduto: 1,
      nomeDescTec: 'Composição',
      valor: '100% Algodão',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('DescTec', null, {});
  }
};

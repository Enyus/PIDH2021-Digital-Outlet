'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('DescTec', [
    // idDescTec=1  
    {
      idProduto: 1,
      nomeDescTec: 'Cor',
      valor: 'Bege',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=2
    {
      idProduto: 1,
      nomeDescTec: 'Marca',
      valor: 'Calças AÊ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=3
    {
      idProduto: 1,
      nomeDescTec: 'Tamanho',
      valor: 'G',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=4
    {
      idProduto: 1,
      nomeDescTec: 'Categoria',
      valor: 'Calças',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=5
    {
      idProduto: 1,
      nomeDescTec: 'Composição',
      valor: '100% Algodão',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=6
    {
      idProduto: 2,
      nomeDescTec: 'Modelo',
      valor: 'MOM',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=7
    {
      idProduto: 2,
      nomeDescTec: 'Cintura',
      valor: 'Alta',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=8
    {
      idProduto: 2,
      nomeDescTec: 'Fechamento',
      valor: 'Zíper e Botão',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=9
    {
      idProduto: 2,
      nomeDescTec: 'Lavagem',
      valor: 'Jeans médio',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=10
    {
      idProduto: 2,
      nomeDescTec: 'Tecido',
      valor: 'Jeans',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=11
    {
      idProduto: 2,
      nomeDescTec: 'Composição',
      valor: '100% Algodão',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=12
    {
      idProduto: 3,
      nomeDescTec: 'Malha',
      valor: 'Estonada',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=13
    {
      idProduto: 3,
      nomeDescTec: 'Comprimento',
      valor: '57cm',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=14
    {
      idProduto: 3,
      nomeDescTec: 'Corte',
      valor: 'Reto',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=15
    {
      idProduto: 3,
      nomeDescTec: 'Manga',
      valor: 'Curta',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=16
    {
      idProduto: 3,
      nomeDescTec: 'Decote',
      valor: 'Redondo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=17
    {
      idProduto: 4,
      nomeDescTec: 'Manga',
      valor: 'Cavada',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=18
    {
      idProduto: 4,
      nomeDescTec: 'Cor',
      valor: 'Mescla',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=19
    {
      idProduto: 5,
      nomeDescTec: 'Couro',
      valor: 'Original',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=20
    {
      idProduto: 6,
      nomeDescTec: 'Cor',
      valor: 'Off White',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('DescTec', null, {});
  }
};

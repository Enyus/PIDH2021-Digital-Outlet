'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Fotos', [
    // idFoto=1
    {
      idProduto: 1,
      urlFoto: '/images/calca-bege.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=2
    {
      idProduto: 1,
      urlFoto: '/images/calca-bege.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=3
    {
      idProduto: 1,
      urlFoto: '/images/calca-bege.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=4
    {
      idProduto: 1,
      urlFoto: '/images/calca-bege.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=5
    {
      idProduto: 2,
      urlFoto: '/images/202203021255-calca-jeans-1.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=6
    {
      idProduto: 2,
      urlFoto: '/images/202203021255-calca-jeans-2.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=7
    {
      idProduto: 2,
      urlFoto: '/images/202203021255-calca-jeans-3.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=8
    {
      idProduto: 2,
      urlFoto: '/images/202203021255-calca-jeans-4.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=9
    {
      idProduto: 3,
      urlFoto: '/images/202203021256-camiseta1.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=10
    {
      idProduto: 3,
      urlFoto: '/images/202203021256-camiseta2.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=11
    {
      idProduto: 3,
      urlFoto: '/images/202203021256-camiseta3.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=12
    {
      idProduto: 3,
      urlFoto: '/images/202203021256-camiseta4.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=13
    {
      idProduto: 4,
      urlFoto: '/images/202203021257-colete-moletom-1.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=14
    {
      idProduto: 4,
      urlFoto: '/images/202203021257-colete-moletom-2.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=15
    {
      idProduto: 5,
      urlFoto: '/images/202203021258-jaqueta-couro-masculina-1.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=16
    {
      idProduto: 5,
      urlFoto: '/images/202203021258-jaqueta-couro-masculina-2.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=17
    {
      idProduto: 5,
      urlFoto: '/images/202203021258-jaqueta-couro-masculina-3.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=18
    {
      idProduto: 6,
      urlFoto: '/images/202203021259-terno-off-white-masculino-1.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=19
    {
      idProduto: 6,
      urlFoto: '/images/202203021259-terno-off-white-masculino-2.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=20
    {
      idProduto: 6,
      urlFoto: '/images/202203021259-terno-off-white-masculino-3.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=21
    {
      idProduto: 6,
      urlFoto: '/images/202203021259-terno-off-white-masculino-4.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Fotos', null, {});
  }
};

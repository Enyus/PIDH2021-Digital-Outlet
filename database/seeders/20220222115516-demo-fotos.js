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
    },
    // idFoto=22
    {
      idProduto: 7,
      urlFoto: '/images/202203030938-oculosdhumal1.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=23
    {
      idProduto: 7,
      urlFoto: '/images/202203030938-oculosdhumal2.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=24
    {
      idProduto: 8,
      urlFoto: '/images/202203030939-bolsapalha1.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=25
    {
      idProduto: 8,
      urlFoto: '/images/202203030939-bolsapalha2.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=26
    {
      idProduto: 9,
      urlFoto: '/images/202203030940-anelprata1.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=27
    {
      idProduto: 9,
      urlFoto: '/images/202203030940-anelprata2.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=28
    {
      idProduto: 10,
      urlFoto: '/images/202203031005-topesportivo1.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=29
    {
      idProduto: 10,
      urlFoto: '/images/202203031005-topesportivo2.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=30
    {
      idProduto: 11,
      urlFoto: '/images/202203031006-calçalegging1.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=31
    {
      idProduto: 11,
      urlFoto: '/images/202203031006-calçalegging2.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=32
    {
      idProduto: 12,
      urlFoto: '/images/202203031007-regata1.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=33
    {
      idProduto: 12,
      urlFoto: '/images/202203031007-regata1.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=34
    {
      idProduto: 13,
      urlFoto: '/images/202203031008-bermuda1.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=35
    {
      idProduto: 13,
      urlFoto: '/images/202203031008-bermuda2.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=36
    {
      idProduto: 14,
      urlFoto: '/images/202203031044-homemmaisrico1.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=37
    {
      idProduto: 15,
      urlFoto: '/images/202203031045-assimacaba1.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=38
    {
      idProduto: 15,
      urlFoto: '/images/202203031045-assimacaba2.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=39
    {
      idProduto: 16,
      urlFoto: '/images/202203031046-mulherescorremlobos1.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=40
    {
      idProduto: 16,
      urlFoto: '/images/202203031046-mulherescorremlobos2.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=41
    {
      idProduto: 17,
      urlFoto: '/images/202203031047-dozeregrasvida1.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=42
    {
      idProduto: 17,
      urlFoto: '/images/202203031047-dozeregrasvida2.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=43
    {
      idProduto: 18,
      urlFoto: '/images/2022-04-08-calçadotop(1).jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=44
    {
      idProduto: 18,
      urlFoto: '/images/2022-04-08-calçadotop(2).jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=45
    {
      idProduto: 19,
      urlFoto: '/images/20220409193700-tênis-top-1.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=46
    {
      idProduto: 19,
      urlFoto: '/images/20220409193700-tênis-top-2.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idFoto=47
    {
      idProduto: 19,
      urlFoto: '/images/20220409193700-tênis-top-3.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Fotos', null, {});
  }
};

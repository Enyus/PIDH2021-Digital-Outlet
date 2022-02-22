'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Produtos', [{
      nomeProduto: "Calça Bege",
      idMarca: 2,
      preco: 110,
      idCategoria: 1,
      desc: "A calça masculina que te deixa elegante em qualquer ocasião. Esta é a melhor forma de apresentar a Calça Chino Preppy. Sua modelagem skinny evidencia as formas do corpo, dando um visual mais moderno. Seus bolsos são estratégicos pra você guardar com segurança o que precisar. Por fim, a elasticidade desta calça Reserva garante conforto para você usá-la por horas. Você vai usá-la tanto que ela mal vai parar no guarda-roupa! Produzida eticamente no Brasil. Comprando esta peça, você viabiliza cinco pratos de comida através do nosso programa 1P5P.",
      idLoja: 1,
      promocao: 10
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Produtos', null, {});
  }
};

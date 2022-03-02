'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Produtos', [
    // idProduto=1  
    {
      nomeProduto: "Calça Bege",
      idMarca: 2,
      preco: 110,
      idCategoria: 1,
      desc: "A calça masculina que te deixa elegante em qualquer ocasião. Esta é a melhor forma de apresentar a Calça Chino Preppy. Sua modelagem skinny evidencia as formas do corpo, dando um visual mais moderno. Seus bolsos são estratégicos pra você guardar com segurança o que precisar. Por fim, a elasticidade desta calça Reserva garante conforto para você usá-la por horas. Você vai usá-la tanto que ela mal vai parar no guarda-roupa! Produzida eticamente no Brasil. Comprando esta peça, você viabiliza cinco pratos de comida através do nosso programa 1P5P.",
      idLoja: 1,
      promocao: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idProduto=2
    {
      nomeProduto: "Calça Jeans Feminina",
      idMarca: 2,
      preco: 80,
      idCategoria: 1,
      desc: "Direto dos anos 90 pro seu guarda-roupa. Nossa jeans queridinha não sai de moda nunca e é perfeita pra usar em qualquer momento!",
      idLoja: 1,
      promocao: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idProduto=3
    {
      nomeProduto: "Camiseta branca basica feminina",
      idMarca: 2,
      preco: 50,
      idCategoria: 1,
      desc: "T-SHIRT BÁSICA ESTONADA é o coringa perfeito, você precisa ter no armário. Ideal para combinar com todos os seus looks do seu dia a dia. Feita de algodão com detalhe estonado, essa camiseta tem corte reto, manga curta e gola redonda.",
      idLoja: 1,
      promocao: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idProduto=4
    {
      nomeProduto: "Colete masculino moletom",
      idMarca: 2,
      preco: 80,
      idCategoria: 1,
      desc: "Colete Masculino Em Moletom com Capuz, Modelagem Slim.",
      idLoja: 1,
      promocao: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idProduto=5
    {
      nomeProduto: "Jaqueta de Couro Masculina",
      idMarca: 2,
      preco: 250,
      idCategoria: 1,
      desc: "Jaqueta de couro são ótimas para compor o acervo de todo mundo! Essa em especial tem um estilo mais retro. Produzido com couro original.",
      idLoja: 1,
      promocao: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idProduto=6
    {
      nomeProduto: "Paletó Off White Masculino",
      idMarca: 2,
      preco: 220,
      idCategoria: 1,
      desc: "Vamos Reinventar Os Clássicos? A Coordenação De Blazer Com Camiseta básica é uma opção certeira para inovar o visual. Seja ousado e com esse paletó terá um look sofisticado para diversas ocasiões.",
      idLoja: 1,
      promocao: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Produtos', null, {});
  }
};

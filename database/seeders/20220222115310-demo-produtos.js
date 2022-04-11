'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
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
      },
      // idProduto=7
      {
        nomeProduto: "Óculos de Sol Feminino Aviador",
        idMarca: 1,
        preco: 370,
        idCategoria: 4,
        desc: "O óculos modelo aviador é sugerido para rostos ovais: Alongado com a mandíbula arredondada, ou rostos triangulares: Testa mais larga e mandíbula bem marcada.",
        idLoja: 1,
        promocao: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idProduto=8
      {
        nomeProduto: "Bolsa Redonda de Palha",
        idMarca: 1,
        preco: 188,
        idCategoria: 4,
        desc: "A bolsa de ombro feminina é confeccionada em palha. Possui fecho e alça de ombro fixa. Por que investir? Rústica e elegante, a bolsa de palha é a nova queridinha das fashionistas de plantão! A peça possui o design estruturado, com o tamanho ideal para você carregar seus itens essenciais e acrescentar muuuito estilo às suas produções. Com toque artesanal, a peça é ideal para compor looks casuais ou de moda praia. Quer ser descolada e chique ao mesmo tempo? Então essa é a opção ideal para você!",
        idLoja: 1,
        promocao: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idProduto=9
      {
        nomeProduto: "Anel Solitário de Prata Diamond",
        idMarca: 1,
        preco: 570,
        idCategoria: 4,
        desc: "Design e Qualidade na Confecção. O charme da Anel Solitário de Prata , é capaz de encantar a todos com sua brilhante pedra Zircônia. Destacando toda sua beleza e sofisticação. Nossas coleções possuem desde modelos clássicos e tradicionais, até modelos mais modernos e detalhados, nossa linha de Alianças de Prata, representa todo o amor dos mais apaixonados, assim como a Aliança de Prata Solitário Diamond.",
        idLoja: 1,
        promocao: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idProduto=10
      {
        nomeProduto: "TOP ESPORTIVO RECORTES COLOR BLOCK AZUL",
        idMarca: 1,
        preco: 60,
        idCategoria: 6,
        desc: "VERSATILIDADE DO FIT. O top esportivo é a peça que não pode faltar na hora de ir para o treino. Proporciona sustentação extra e conforto. Também pode ser usado no dia a dia, por ser bastante prático. Podemos encontrar modelos com ou sem bojo. Top esportivo em poliamida, com bojo removível, alças finas, detalhe torcido nas costas e recortes color block. Confeccionado com materiais selecionados, a peça possui modelagem que transforma a prática das atividades físicas mais leves e prazerosas. O modelo com baixa sustentação, é ideal para que gosta de agregar conforto e estilo em seus looks fitness.",
        idLoja: 1,
        promocao: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idProduto=11
      {
        nomeProduto: "CALÇA CAPRI ESPORTIVA RECORTE ASSIMÉTRICO CONTRASTANTE AZUL",
        idMarca: 1,
        preco: 80,
        idCategoria: 6,
        desc: "Calça capri esportiva em poliamida, com cós alto e baixa compressão. O modelo é ideal para a prática de exercícios e proporciona muita segurança e estabilidade durante os movimentos. A peça ainda conta com recortes assimétricos contrastantes, que trazem estilo e diferencial ao seu look fitness.",
        idLoja: 1,
        promocao: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idProduto=12
      {
        nomeProduto: "REGATA ESPORTIVA SEM ESTAMPA CINZA",
        idMarca: 5,
        preco: 55,
        idCategoria: 6,
        desc: "Regata esportiva modelo machão, sem estampa. Confortável, é também uma opção versátil para as práticas físicas.",
        idLoja: 1,
        promocao: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idProduto=13
      {
        nomeProduto: "BERMUDA ESPORTIVA COM ESTAMPA EM LETTERING NAS BARRAS VERDE",
        idMarca: 5,
        preco: 78,
        idCategoria: 6,
        desc: "Bermuda esportiva com cós elástico e ajuste por amarração. Além de prática e leve, sua estampa em lettering nas barras torna a peça ideal para quem quer praticar seus esportes sem perder o estilo.",
        idLoja: 1,
        promocao: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idProduto=14
      {
        nomeProduto: "O homem mais rico da Babilônia",
        idMarca: 1,
        preco: 40,
        idCategoria: 2,
        desc: "Com mais de dois milhões de exemplares vendidos no mundo todo, O homem mais rico da Babilônia é um clássico sobre como multiplicar riqueza e solucionar problemas financeiros. Baseando-se nos segredos de sucesso dos antigos babilônicos ― os habitantes da cidade mais rica e próspera de seu tempo ―, George S. Clason mostra soluções ao mesmo tempo sábias e muito atuais para evitar a falta de dinheiro, como não desperdiçar recursos durante tempos de opulência, buscar conhecimento e informação em vez de apenas lucro, assegurar uma renda para o futuro, manter a pontualidade no pagamento de dívidas e, sobretudo, cultivar as próprias aptidões, tornando-se cada vez mais habilidoso e consciente.",
        idLoja: 1,
        promocao: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idProduto=15
      {
        nomeProduto: "É Assim que Acaba",
        idMarca: 1,
        preco: 35,
        idCategoria: 2,
        desc: "O romance mais pessoal da carreira de Colleen Hoover, É assim que acaba discute temas como violência doméstica e abuso psicológico de forma sensível e direta. Em É assim que acaba, Colleen Hoover nos apresenta Lily, uma jovem que se mudou de uma cidadezinha do Maine para Boston, se formou em marketing e abriu a própria floricultura. E é em um dos terraços de Boston que ela conhece Ryle, um neurocirurgião confiante, teimoso e talvez até um pouco arrogante, com uma grande aversão a relacionamentos, mas que se sente muito atraído por ela.Quando os dois se apaixonam, Lily se vê no meio de um relacionamento turbulento que não é o que ela esperava. Mas será que ela conseguirá enxergar isso, por mais doloroso que seja?É assim que acaba é uma narrativa poderosa sobre a força necessária para fazer as escolhas certas nas situações mais difíceis. Considerada a obra mais pessoal de Hoover, o livro aborda sem medo alguns tabus da sociedade para explorar a complexidade das relações tóxicas, e como o amor e o abuso muitas vezes coexistem em uma confusão de sentimentos. “Um romance corajoso, de partir o coração, que enfia as garras em você e não te solta... Ninguém escreve sobre sentimentos tão bem quanto Colleen Hoover.” -Anna Todd, autora da série After“...Você vai sorrir em meio às lágrimas.” - Sarah Pekkanen, autora de Perfect Neighbors“Imperdível. Com um drama fascinante e verdades dolorosas, esse livro retrata de maneira poderosa a devastação que o abuso pode causar - e a força de quem sobrevive a ele...” - Kirkus Review",
        idLoja: 1,
        promocao: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idProduto=16
      {
        nomeProduto: "Mulheres que correm com os lobos",
        idMarca: 1,
        preco: 46,
        idCategoria: 2,
        desc: "Os lobos foram pintados com um pincel negro nos contos de fada e até hoje assustam meninas indefesas. Mas nem sempre eles foram vistos como criaturas terríveis e violentas. Na Grécia antiga e em Roma, o animal era o consorte de Artemis, a caçadora, e carinhosamente amamentava os heróis. A analista junguiana Clarissa Pinkola Estés acredita que na nossa sociedade as mulheres vêm sendo tratadas de uma forma semelhante. Ao investigar o esmagamento da natureza instintiva feminina, Clarissa descobriu a chave da sensação de impotência da mulher moderna. Seu livro, Mulheres que correm com os lobos, ficou durante um ano na lista de mais vendidos nos Estados Unidos. Abordando 19 mitos, lendas e contos de fada, como a história do patinho feio e do Barba-Azul, Estés mostra como a natureza instintiva da mulher foi sendo domesticada ao longo dos tempos, num processo que punia todas aquelas que se rebelavam. Segundo a analista, a exemplo das florestas virgens e dos animais silvestres, os instintos foram devastados e os ciclos naturais femininos transformados à força em ritmos artificiais para agradar aos outros. Mas sua energia vital, segundo ela, pode ser restaurada por escavações psíquico-arqueológicas' nas ruínas do mundo subterrâneo. Até o ponto em que, emergindo das grossas camadas de condicionamento cultural, apareça a corajosa loba que vive em cada mulher. Clássico dos estudos sobre o sagrado feminino e o feminismo, o livro é o primeiro de uma série de longsellers da Rocco a ganhar edição com novo projeto gráfico e capa dura.",
        idLoja: 1,
        promocao: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idProduto=17
      {
        nomeProduto: "12 regras para a vida: Um antídoto para o caos",
        idMarca: 1,
        preco: 90,
        idCategoria: 2,
        desc: "Aclamado psicólogo clínico, Jordan Peterson tem influenciado a compreensão moderna sobre a personalidade e, agora, se transformou em um dos pensadores públicos mais populares do mundo, com suas palestras sobre tópicos que variam da bíblia, às relações amorosas e à mitologia, atraindo dezenas de milhões de espectadores. Em uma era de mudanças sem precedentes e polarização da política, sua mensagem franca e revigorante sobre o valor da responsabilidade individual e da sabedoria ancestral tem ecoado em todos os cantos do mundo. Neste livro, ele oferece doze princípios profundos e práticos sobre como viver uma vida com significado. A partir de exemplos vívidos de sua prática clínica e vida pessoal, bem como de lições extraídas das histórias e mitos mais antigos da humanidade, 12 Regras para a Vida oferece um antídoto para o caos em nossas vidas: verdades eternas aplicadas aos nossos problemas modernos. “Um dos pensadores mais importantes a surgir no cenário mundial em muitos anos.”",
        idLoja: 1,
        promocao: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idProduto=18
      {
        nomeProduto: "Sapato Social Masculino Top",
        idMarca: 4,
        preco: 125,
        idCategoria: 3,
        desc: "Sapatos Sociais Masculinos você encontra aqui na Top Shoes, desenvolvidos para o seu dia a dia, extremamente confortáveis e com design totalmente inovador, nossos calçados chegaram para renovar o seu estilo com a excelência da nossa qualidade. Com o melhor preço do mercado nosso produto chegou para dar um upgrade no seu visual sem a perda do seu conforto.",
        idLoja: 2,
        promocao: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },


      // idProduto=19
      {
        nomeProduto: "Tênis Air Jordan 1 Retro High OG",
        idMarca: 7,
        preco: 1000,
        idCategoria: 3,
        desc: "Bico arredondado, solado flat de borracha, fechamento frontal por amarração e detalhe de logo Swoosh. Material: couro. Este item é fornecido por um marketplace premium de tênis que reúne peças raras e já esgotadas.",
        idLoja: 2,
        promocao: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idProduto=20
      {
        nomeProduto: "Vans Authentic Vermelho",
        idMarca: 6,
        preco: 300,
        idCategoria: 3,
        desc: "O tênis Authentic da Vans une o original e agora icônico estilo cano baixo da Vans ao cabedal de lona resistente. Possui ilhós de metal e a original sola Waffle de borracha vulcanizada da marca.",
        idLoja: 2,
        promocao: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idProduto=21
      {
        nomeProduto: "Cafeteira Moka Bialetti",
        idMarca: 8,
        preco: 250,
        idCategoria: 5,
        desc: "Praticidade no seu dia a dia com essa maravilhosa cafeteira com capacidade de 3 xícaras.",
        idLoja: 2,
        promocao: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idProduto=22
      {
        nomeProduto: "Faca de corte rápido",
        idMarca: 8,
        preco: 80,
        idCategoria: 5,
        desc: "Faca de corte rápido com dimensões de 33.7 x 4.7 x 1.8 centímetros feito em aço inoxidável.",
        idLoja: 2,
        promocao: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idProduto=23
      {
        nomeProduto: "Porta tempero com suporte aleatório",
        idMarca: 8,
        preco: 150,
        idCategoria: 5,
        desc: "Os suportes são feito de inox e vidro que é totalmente vedado o diferencial deste produto é o suporte que deixa o uso muito prático para escolher o tempero que irá usar.",
        idLoja: 2,
        promocao: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // idProduto=24
      {
        nomeProduto: "Mesa de jantar retangular mel",
        idMarca: 8,
        preco: 1500,
        idCategoria: 5,
        desc: "possui estrutura em madeira eucalipto, tampo em MDF laminado e acabamento fosco. Dimensão de 120 x 84 x 76 cm.",
        idLoja: 2,
        promocao: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Produtos', null, {});
  }
};

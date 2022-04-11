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
    },
    // idDescTec=21
    {
      idProduto: 7,
      nomeDescTec: 'Modelo',
      valor: 'Aviador',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=22
    {
      idProduto: 7,
      nomeDescTec: 'Armação',
      valor: 'Policarbonato',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=23
    {
      idProduto: 7,
      nomeDescTec: 'Lentes',
      valor: 'Laranja',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=24
    {
      idProduto: 7,
      nomeDescTec: 'Proteção',
      valor: 'Contra UVA e UVB',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=26
    {
      idProduto: 8,
      nomeDescTec: 'Dimensões',
      valor: 'L 31,5cm x A 31cm x P 7cm',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=25
    {
      idProduto: 8,
      nomeDescTec: 'Peso',
      valor: '248g',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=26
    {
      idProduto: 9,
      nomeDescTec: 'Largura',
      valor: '2,3 mm (Milímetros)',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=27
    {
      idProduto: 9,
      nomeDescTec: 'Espessura',
      valor: '1,0 mm (Milímetros)',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=28
    {
      idProduto: 9,
      nomeDescTec: 'Peso',
      valor: '1.7 (gramas)',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=29
    {
      idProduto: 9,
      nomeDescTec: 'Pureza',
      valor: 'Prata 950',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=30
    {
      idProduto: 9,
      nomeDescTec: 'Cor',
      valor: 'Prata',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=31
    {
      idProduto: 9,
      nomeDescTec: 'Conforto',
      valor: 'Reto',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=32
    {
      idProduto: 9,
      nomeDescTec: 'Acabamento',
      valor: 'Polido',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=33
    {
      idProduto: 9,
      nomeDescTec: 'Gema',
      valor: 'Zircônia Cravejada',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=34
    {
      idProduto: 10,
      nomeDescTec: 'Decote',
      valor: 'em U',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=35
    {
      idProduto: 10,
      nomeDescTec: 'Alça',
      valor: 'Fina',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=36
    {
      idProduto: 10,
      nomeDescTec: 'Bojo',
      valor: 'Removível',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=37
    {
      idProduto: 10,
      nomeDescTec: 'Recortes',
      valor: 'em Color Block',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=38
    {
      idProduto: 10,
      nomeDescTec: 'Detalhe',
      valor: 'torcido nas costas',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=39
    {
      idProduto: 10,
      nomeDescTec: 'Abertura',
      valor: 'nas costas',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=40
    {
      idProduto: 10,
      nomeDescTec: 'Sustentação',
      valor: 'Baixa',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=41
    {
      idProduto: 11,
      nomeDescTec: 'Modelo',
      valor: 'Capri',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=42
    {
      idProduto: 11,
      nomeDescTec: 'Cós',
      valor: 'Alto (08cm)',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=43
    {
      idProduto: 11,
      nomeDescTec: 'Recortes',
      valor: 'Assimétricos contrastantes',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=44
    {
      idProduto: 11,
      nomeDescTec: 'Estampa',
      valor: 'Nenhuma',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=45
    {
      idProduto: 11,
      nomeDescTec: 'Compressão',
      valor: 'Baixa',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=46
    {
      idProduto: 11,
      nomeDescTec: 'Tecido',
      valor: 'Poliamida (Malha)',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=47
    {
      idProduto: 11,
      nomeDescTec: 'Composição',
      valor: '85% Poliamida 15% Elastano',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=48
    {
      idProduto: 11,
      nomeDescTec: 'Composição Detalhe',
      valor: '85% Poliamida 15% Elastano',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=49
    {
      idProduto: 12,
      nomeDescTec: 'Modelo',
      valor: 'machão',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=50
    {
      idProduto: 12,
      nomeDescTec: 'Estampa',
      valor: 'Nenhuma',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=51
    {
      idProduto: 12,
      nomeDescTec: 'Fundo',
      valor: 'mescla',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=52
    {
      idProduto: 12,
      nomeDescTec: 'Marca',
      valor: 'Get Over',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=53
    {
      idProduto: 12,
      nomeDescTec: 'Tecido',
      valor: 'Poliéster (Malha)',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=54
    {
      idProduto: 12,
      nomeDescTec: 'Composição',
      valor: '97% Poliéster 03% Elastano',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=55
    {
      idProduto: 13,
      nomeDescTec: 'Modelo',
      valor: 'Esortivo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=56
    {
      idProduto: 13,
      nomeDescTec: 'Cós',
      valor: 'Elástico',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=57
    {
      idProduto: 13,
      nomeDescTec: 'Ajuste',
      valor: 'por amarração',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=58
    {
      idProduto: 13,
      nomeDescTec: 'Bolsos',
      valor: 'Nenhum',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=59
    {
      idProduto: 13,
      nomeDescTec: 'Estampa',
      valor: 'em lettering nas barras',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=60
    {
      idProduto: 13,
      nomeDescTec: 'Marca',
      valor: 'Get Over',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=61
    {
      idProduto: 13,
      nomeDescTec: 'Tecido',
      valor: 'Poliéster (Malha)',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=62
    {
      idProduto: 13,
      nomeDescTec: 'Composição',
      valor: '100% Poliéster',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=63
    {
      idProduto: 14,
      nomeDescTec: 'Autor(a)',
      valor: 'George S Clason',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=64
    {
      idProduto: 14,
      nomeDescTec: 'Capa',
      valor: 'Comum',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=65
    {
      idProduto: 14,
      nomeDescTec: 'Edição',
      valor: 'padrão, 4 agosto 2017',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=66
    {
      idProduto: 14,
      nomeDescTec: 'Idioma',
      valor: 'Portugês',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=67
    {
      idProduto: 15,
      nomeDescTec: 'Autor(a)',
      valor: 'Colleen Hoover',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=68
    {
      idProduto: 15,
      nomeDescTec: 'Tradutor(a)',
      valor: 'Priscila Catão',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=69
    {
      idProduto: 15,
      nomeDescTec: 'Edição',
      valor: 'padrão, 18 janeiro 2018',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=70
    {
      idProduto: 15,
      nomeDescTec: 'Capa',
      valor: 'comum',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=71
    {
      idProduto: 15,
      nomeDescTec: 'Idioma',
      valor: 'Portugês',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=72
    {
      idProduto: 16,
      nomeDescTec: 'Autora',
      valor: 'Clarissa Pinkola Estés',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=73
    {
      idProduto: 16,
      nomeDescTec: 'Edição',
      valor: 'padrão, 17 setembro 2018',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=74
    {
      idProduto: 16,
      nomeDescTec: 'Capa',
      valor: 'Dura',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=75
    {
      idProduto: 16,
      nomeDescTec: 'Idioma',
      valor: 'Português',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=76
    {
      idProduto: 17,
      nomeDescTec: 'Autor',
      valor: 'Jordan B. Peterson',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=77
    {
      idProduto: 17,
      nomeDescTec: 'Capa',
      valor: 'Comum',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=78
    {
      idProduto: 17,
      nomeDescTec: 'Edição',
      valor: 'padrão, 30 abril 2018',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=79
    {
      idProduto: 17,
      nomeDescTec: 'Idioma',
      valor: 'Português',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=80
    {
      idProduto: 18,
      nomeDescTec: 'Tamanho',
      valor: '41',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=81
    {
      idProduto: 18,
      nomeDescTec: 'Estilo',
      valor: 'Topzera',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=82
    {
      idProduto: 18,
      nomeDescTec: 'Cor',
      valor: 'Dourado e Preto',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=83
    {
      idProduto: 19,
      nomeDescTec: 'Cor',
      valor: 'Preto ou Vermelho',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=84
    {
      idProduto: 19,
      nomeDescTec: 'Estilo',
      valor: 'Topzera',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=85
    {
      idProduto: 19,
      nomeDescTec: 'Corte',
      valor: 'Descolado',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=86
    {
      idProduto: 20,
      nomeDescTec: 'Composição Exterior',
      valor: 'Couro 100%',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=87
    {
      idProduto: 20,
      nomeDescTec: 'Composição Solado',
      valor: 'Borracha 100%',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=88
    {
      idProduto: 20,
      nomeDescTec: 'Cor',
      valor: 'Preto e Pêssego',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=89
    {
      idProduto: 21,
      nomeDescTec: 'Cor',
      valor: 'Vermelho',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=90
    {
      idProduto: 21,
      nomeDescTec: 'Referência',
      valor: 'V1002000450013',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=91
    {
      idProduto: 22,
      nomeDescTec: 'Materal',
      valor: 'Alumínio',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=92
    {
      idProduto: 22,
      nomeDescTec: 'Cor',
      valor: 'Alumínio',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=93
    {
      idProduto: 22,
      nomeDescTec: 'Tipo',
      valor: 'Cafeteira Moka',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=94
    {
      idProduto: 22,
      nomeDescTec: 'Marca',
      valor: 'Bialetti',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=95
    {
      idProduto: 23,
      nomeDescTec: 'Materal',
      valor: 'Aço inoxidável',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=96
    {
      idProduto: 23,
      nomeDescTec: 'Dimensões',
      valor: '33.7 x 4.7 x 1.8 centímetros',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=97
    {
      idProduto: 23,
      nomeDescTec: 'Peso',
      valor: '0,26 Kg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=98
    {
      idProduto: 24,
      nomeDescTec: 'Marca',
      valor: 'DH Comércio',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=99
    {
      idProduto: 24,
      nomeDescTec: 'Modelo',
      valor: 'Giratório',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=100
    {
      idProduto: 24,
      nomeDescTec: 'Quantidade de Frascos',
      valor: '20',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=101
    {
      idProduto: 25,
      nomeDescTec: 'Material do Tampo',
      valor: 'MDF',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=102
    {
      idProduto: 25,
      nomeDescTec: 'Material dos Pés',
      valor: 'Eucalipto',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // idDescTec=103
    {
      idProduto: 25,
      nomeDescTec: 'Tamanho',
      valor: 'A: 76 cm, L: 120 cm, P: 84 cm',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('DescTec', null, {});
  }
};

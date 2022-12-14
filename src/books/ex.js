const ex = {
  'inicial':['espada', 'armadura de couro','lanterna', 'mochila'],
  'sorteMod': 'ganhar ou perder ponto de sorte',
  'energia':'cura ou perde x pontos',
  'charms':[
    'copia',
    'forca',
    'fraqueza',
    'percepcao',
    'ouro',
    'fogo',
    'ilusao',
    'escudo',
    'levitacao'
  ],

// falta resolver logica

  'item':[//itemAdd
    'Miríade de Bolso',
    'Aranha em um Vidro',
    'Pequenas Amoras',
    'Espelho de Prata',
    'Escova de Cabelo',
    'Vidro contendo o Homem-Aranha',
    'Amuleto Encantado',
    'Vidro de Unguento',
    'Essencia de Erva de Porco',
    'ouro',
  ],
  'itemAdd':{
    'adaga encantada':`adaga de arremesso encantada que nunca erra, p15, 2 pontos de dano, 1vez`
  },

  'combate':{
    'ELFO NEGRO':{
      'energia': 4,
      'habilidade': 4
    },
    'GARK':{
      'energia': 11,
      'habilidade': 7
    },
    'FERA DAS GARRAS':{
      'energia': 14,
      'habilidade': 9,
      'extra':'Depois que você tiver atingido a criatura pela quarta vez, goTo:241, 30'
    },
    'Macaco-Cachorro':{
      'energia': 7,
      'habilidade': 4,
    },//combate duplo 288
    'Cachorro-Macaco':{
      'energia': 6,
      'habilidade': 6,
    },
    'Primeiro GIRA':{
      'energia': 7,
      'habilidade': 6,
    },//combate duplo 346
    'Segundo GIRA':{
      'energia': 6,
      'habilidade': 5,
    },
    '':{
      'energia': 0,
      'habilidade': 0,
    },
  },
  
  'fugir': 'quantidade de ataques',
  'nda':'vai direto para outra pagina',
  'sorte':['sim', 'nao'], //410
  'dado':[1,2,3,4,5,6],
  't-soete': 'teste de sorte', // ver o q fazer com o anel 381

  'extraPages':{
    410: 'teste de sorte 390',
    420: 'rolada de dado 384' ,
    450: 'Faca­ Faquinha',
    500:'fim do jogo 400',
    600: 'morte 376, 369, 82, 342, 72',

  },
  'jogo':{
    'Faca­ Faquinha': 'sorteie uma de 6 facas, se for a sorteada você morre, 365'
  }






























}

const ex = {
  'inicial':['espada', 'armadura de couro','lanterna', 'mochila'],
  'sorteMod': 'ganhar ou perder ponto de sorte',
  'energia':'cura ou perde x pontos',
  'charm':[
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
  'item':[//itemAdd
    'Miríade de Bolso',
    'Aranha em um Vidro',
    'Pequenas Amoras',
    'Espelho de Prata',
    'Escova de Cabelo',
    'Vidro contendo o Homem-Aranha',
    'Amuleto Encantado',
    'Vidro de Unguento',
    'Essência de Erva de Porco',
    'Chave de Cobre',
  ],
  'itemAdd':{
    'adaga encantada':`adaga de arremesso encantada que nunca erra, p15, 2 pontos de dano, 1vez`
  },
  'itemRemov':{
  
  },

// falta resolver logica
  'modGold':'',
  'addCharm':'adciona encantamentos a escolha',
  'combate':{
    'ELFO NEGRO':{
      'habilidade': 4,
      'energia': 4,
    },
    'GARK':{
      'habilidade': 7,
      'energia': 11,
    },
    'FERA DAS GARRAS':{
      'habilidade': 9,
      'energia': 14,
      'extra':'Depois que você tiver atingido a criatura pela quarta vez, goTo:241, 30'
    },
    'Macaco-Cachorro':{
      'habilidade': 4,
      'energia': 7,
    },//combate duplo 288
    'Cachorro-Macaco':{
      'habilidade': 6,
      'energia': 6,
    },
    'Primeiro GIRA':{
      'habilidade': 6,
      'energia': 7,
    },//combate duplo 346
    'Segundo GIRA':{
      'habilidade': 5,
      'energia': 6,
    },
    'COBRA DE ESGOTO':{
      'habilidade': 6,
      'energia': 7,
    },
    'BALTHUS DIRE':{
      'habilidade': 12,
      'energia': 19,
    },
    'GARK ENFRAQUECIDO':{
      'habilidade': 5,
      'energia': 5,
    },
    'ANÃO':{
      'habilidade': 5,
      'energia': 6,
    },
    'GOBLIN':{
      'habilidade': 6,
      'energia': 4,
    },
    'ORK':{
      'habilidade': 7,
      'energia': 5,
    },
    '':{
      'habilidade': 0,
      'energia': 0,
    },
  },

  'senha': 'cimitarra',
  
  'fugir': 'quantidade de ataques',
  'nda':'vai direto para outra pagina',
  'sorte':['sim', 'nao'], //410
  'dado':[1,2,3,4,5,6],
  't-soete': 'teste de sorte', // ver o q fazer com o anel 381
  'atackAdd':'aumenta o valor da habilidade durante o combate',
  'extraPages':{
    410: 'teste de sorte 390',
    420: 'rolada de dado 384' ,
    450: 'Faca  Faquinha',
    500:'fim do jogo 400',
    600: 'morte 376, 369, 82, 342, 72, 199, 202, 103, 283, 153,194',

  },
  'jogo':{
    'Faca  Faquinha': 'sorteie uma de 6 facas, se for a sorteada você morre, 365'
  }






























}

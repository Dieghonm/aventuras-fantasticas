// import capas from './capas'
import ACidadeladoCaos from '../imgs/ACidadeladoCaos.png'
import OFeiticeirodaMontanhadeFogo from '../imgs/OFeiticeirodaMontanhadeFogo.png'

import AcidadedosLadroes from '../imgs/AcidadedosLadroes.png'
import OCalaboucodaMorte from '../imgs/OCalaboucodaMorte.png'
import OTemplodoTerror from '../imgs/OTemplodoTerror.png'



const Livros = {
  cidadelaDoCaos : {
    name:'A Cidadela do Caos',
    img: ACidadeladoCaos,
    sinopse:`Nas profundezas da Cidadela do Caos, o terrivel feiticeiro, Balthus Dire, esta conspirando e planejando 
    a derrocada do povo generoso do Vale dos Salgueiros. Seus planos de combate estao prontos, seu exercito assustador 
    equipado, e o ataque e indiscutivelmente iminente.

    Convocado	por  uma  suplica  desesperada  de  ajuda, "VOCE" e a unica esperan a do Vale dos Salgueiros.
    Aluno brilhante do Grande Mago de Yore e um mestre da magia, só voce pode empreender uma missao que atinja 
    o próprio coração do mundo de pesadelo de Balthus Dire. Que criaturas monstruosas esperam por voce la?

    Steve Jackson, co-fundador da Games Workshop, um sucesso absoluto, criou uma aventura emocionante de espada 
    e feiti aria para voce, com um elaborado sistema de  combate,  uma variedade fascinante de encantos para usar 
    e uma folha de resultados para registrar seus ganhos e perdas. Tudo que voce precisa e de dois dados, um lapis 
    e uma borracha.

    Muitos perigos  existem  a sua frente, e seu  sucesso  nao esta  de forma  alguma  garantido.  
    Ha adversarios poderosos nas fileiras do inimigo e muitas vezes sua unica alternativa sera matar ou ser morto!
    
    'Steve Jackson'
    `,
    character:{
      introducao: {
        text:[`Em parte um romance, com sua história emocionante, e em parte um jogo, com seu elaborado sistema de combate, 
        esta historia traz muitas aventuras dentro dele para você.
        Cada parte ira apresentar desafios diferentes, e as decisões que você tomar o levarão a diferentes caminhos 
        e diferentes batalhas.`,
        `Você é o aluno brilhante do Grande Mago de Yore. Possui um bom conhecimento de magia, que não é perfeito, mas, 
        com um pouco de sorte, será adequado para esta empreitada. Você possui também uma espada e tem praticado bastante como espadachim. 
        Está muito bem fisicamente e tem se exercitado para aumentar a sua energia.`],
        roll: 0,
        sum: 0,
      },
      Energia:{
        text:[
        `O seu índice de ENERGIA reflete a sua constituição física geral, vontade de sobreviver, 
          determinação e condição física como um todo;`, 
        `Quanto mais alto for o seu índice de ENERGIA, mais tempo você conseguirá sobreviver`,
        `Vamos determinar qual o seu valor inicial de energia, este valor sera o valor sorteado em 2 dados mais 12 pontos`,
      ],
        roll:2,
        sum: 12,
      },
      Habilidade: {
        text:[`O seu índice de HABILIDADE reflete a sua capacidade como espadachim e sua aptidão geral como lutador.`,
        ``],
        roll:1,
        sum: 6,
      },
      Sorte: {
        text:[`O seu índice de SORTE indica o quanto você é uma pessoa naturalmente de sorte. Sorte - e magia - são fatos da vida no reino da fantasia que você está prestes a explorar.`
        ,``],
        roll:1,
        sum: 6,
      },
      Magia: {
        text:[
          `Além dos índices de HABILIDADE, ENERGIA e SORTE, vamos determinar também o seu índice de MAGIA de modo semelhante.`,
          `Este valor sera definido jogando dois dados e somando seis ao número obtido.`,
          `O seu índice de MAGIA determina quantos Encantos Mágicos você poderá usar durante a sua empreitada. 
          Estes encantos podem ser escolhidos da lista que se encontra após esta seção.`,
          `Se, por exemplo, você tirar um 4 e um 3, seu índice de MAGIA será 13 (isto é, 4+ 3 + 6), 0 que significa que 
          você poderá usar 13 encantos durante a sua aventura. Da lista de encantos dada a seguir, você poderá escolher 
          13 encantos da sua preferência. Talvez você queira levar três Encantos de Energia, cinco Encantos da Percepção 
          Extra-Sensorial e cinco Encantos do Fogo - ou talvez você prefira um encanto de cada um dos 12 existentes, 
          mais um Encanto de Cópia de Criatura extra. A escolha é sua.`,
          `Cada vez que você usar um encanto durante a aventura, ele sera removido da sua lisata de encantamentos
          (mesmo que ele não tenha efeito). Às vezes você terá a opção de usar encantos e descobrirá que não os tem com você,
          ou que já usou tudo que tinha. Nestes casos, você não poderá escolher estas opções.`,
          `Como você não terá idéia dos perigos que espreitam no interior da Cidadela na primeira vez que entrar, 
          sem dúvida escolherá encantos que não terão o efeito que você esperava que tivessem. Mas, nas aventuras subsequentes,
          você escolherá os seus encantos de maneira mais sábia. Também não se preocupe se o seu índice de MAGIA for baixo. 
          Mesmo o índice mais baixo possível fornecerá um número de encantos suficiente para que você chegue ao fim de sua 
          empreitada, se você fizer as escolhas certas e for abençoado com um pouco de sorte!`
        ],
        roll:2,
        sum: 6,
      },
      Encantamentos: {text: [
        ['Encantos Magicos', 'ainda nao sei'],
        ['Cópia de Criatura', 'Este encanto permitirá que você faça aparecer uma réplica perfeita de qualquer criatura contra a qual você esteja lutando. A réplica terá os mesmos índices de HABILIDADE e ENERGIA e os mesmos poderes do original. Mas a réplica estará sob seu controle, e você poderá, por exemplo, instruí-la para que ataque a criatura original e ficar assistindo a batalha de camarote!'],
        ['Percepção Extra-Sensorial', 'Com este encanto, você poderá sintonizar comprimentos de ondas psíquicas. Isso poderá ajudá-lo a ler a mente de uma criatura ou descobrir o que está por trás de uma porta trancada. Porém, às vezes, este encanto pode dar informações equivocadas, se houver mais de uma fonte psíquica perto de uma outra.'],
        ['Fogo', 'Todas as criaturas têm medo do fogo, e este encanto dá o poder de fazer aparecer fogo segundo a sua vontade. Você poderá causar uma pequena explosão no chão que queimará por vários segundos ou criar uma barreira de fogo para manter criaturas à distância.'],
        ['Ouro dos Tolos', 'Este encanto transformará pedra comum em uma pilha do que parece ser ouro. Contudo, o encanto é apenas uma forma de encanto da ilusão - embora mais confiável do que o Encanto da ilusão abaixo - ea pilha de ouro logo voltará a ser pedra.'],
        ['Ilusão','Este é um encanto poderoso, mas que não é muito confiável. Através deste encanto, você poderá criar uma ilusão convincente (por exemplo, que você se transformou em serpente, ou que o chão está coberto de carvão em brasa) para enganar uma criatura. O encanto ficará imediatamente sem efeito se acontecer qualquer coisa que desfaça a ilusão (por exemplo, você convence uma criatura que se transformou em uma serpente e então imediatamente atinge sua cabeça com um golpe de espada!). É eficiente sobre tudo com criaturas inteligentes.'],
        ['Levitação','Você pode lançar este encanto sobre objetos, adversários ou até sobre você mesmo. Livra quem o recebe dos efeitos da gravidade e assim fará com que tudo que esteja sob a sua influência flutue livremente no ar, sob o seu controle.'],
        ['Sorte','Este encanto, juntamente com os encantos de Habilidade e Energia, é especial porque pode ser lançado a qualquer momento durante a sua aventura, a não ser durante uma batalha. Você não precisa esperar que apareça a opção em uma página. Uma vez lançado, recuperará o seu índice de SORTE em metade de seu índice de SORTE Inicial (se a sua SORTE inicial for um número ímpar, subtraia o 2 de sobra). Este encanto nunca levará o seu índice de SORTE a um número superior a seu nível Inicial Portanto, se você lançar dois encantos da SORTE juntos, o seu índice de SORTE voltará apenas a ser igual a seu nível Inicial.'],
        ['Habilidade','Este encanto restabelecerá o seu índice de HABILIDADE, aumentando-o em metade de seu valor Inicial, e pode ser lançado a qualquer momento durante a sua aventura, a não ser em uma batalha. Para conhecer todas as regras, veja o Encanto da Sorte acima. O Encanto da Habilidade funciona exatamente da mesma maneira.'],
        ['Energia','Este encanto recuperará o seu índice de Energia, aumentando-o em metade de seu valor Inicial, e pode ser lançado a qualquer momento durante a sua aventura. Veja o Encanto da Sorte para conhecer as regras completas.'],
        ['Força','Este encanto tem o efeito de aumentar muito a sua força, e é muito útil quando se luta contra criaturas fortes. Porem, deve ser utilizado com cautela, já que é difícil controlar a sua própria força quando ela aumenta demais!'],
        ['Fraqueza','Criaturas fortes são reduzidas por este encanto a miseráveis fracotes. Não tem efeito contra todas as criaturas, mas, quando tem efeito, a criatura se torna frágil e muito menos perigosa em uma batalha.'],
        ['Escudo','Ao lançar este encanto, você cria um escudo invisível à sua frente que o protegerá de objetos físicos, por exemplo flechas, espadas ou criaturas. O escudo não tem efeito contra a magia e, evidentemente, se nada fora dele pode tocar em você, você também não poderá tocar em nada fora dele.'],
      ],
      roll:0,
      sum: 0,
      },
      Equipamento: {
        text:[`Você começará a sua aventura com um mínimo essencial de equipamento. 
        Você está armado com uma espada e vestido com uma armadura de couro. 
        Você está levando uma lanterna para iluminar o seu caminho, e uma mochila para guardar quaisquer tesouros 
        ou artefatos que possa encontrar no caminho. Não se esqueça de registrar tudo que você achar no quadro de 
        Equipamento da sua Folha de Aventuras. Quando eles forem usados em qualquer encontro específico, a história 
        dirá a você se aquele item deve ser destruído ou deixado para trás. Se for perdido dessa forma, você terá que 
        riscá-lo de sua lista de Equipamentos e não poderá usá-lo mais tarde durante a sua aventura.`,
        ``],
        roll:0,
        sum: 0,
      },
    },
    Batalhas:'',
    Pagina:{
      0:{
        text:`HISTORIA
        0 ordeiro e generoso  povo do Vale dos Salgueiros  vive ha oito anos sob o terror e medo do feiticeiro Balthus Dire. Terror - porque o poder dele e realmente aterrorizante  - e medo causados pela noticia que acabou chegando aos ouvidos desse povo, vinda dos dominios do feiticeiro, de que seus ambiciosos planos de conquista comec;ariam pelo pr6prio Vale.
        Um fiel Semi-Elfo enviado em uma missao de espionagem a Torre Negra voltou galopando para o Vale ha tres dias com uma mensagem desesperada. Do interior das cavernas de Rocha Escarpada, Balthus Dire tinha recrutado um exercito de Ca6ticos e se preparava para atacar com eles o Vale dentro de uma semana.
        0 born Rei Salamon era um homem de ac;ao. Foram enviados mensageiros por todo o Vale no mesmo dia para preparar as defesas e convocar os homens para a guerra. Foram enviados tambem cavaleiros a Grande Floresta de Yore para avisar aos Semi-Elfos que moravam la e fazer um apelo para que se aliassem as forc;as. 0 Rei Salamon era tambem um homem sabio. Ele sabia muito bem que as noticias inevitavelmente chegariam aos ouvidos do Grande Mago de Yore, um mestre da magia branca de grandes poderes, que vivia nas profundezas da floresta. 0 mago era velho e nao resistiria a uma batalha destas proporc;oes. Mas ele havia ensinado suas artes a varios jovens magos, e talvez um de seus discipulos de magia ajudasse o rei e seus suditos com coragem e ambic;ao.
        Voce e o aluno brilhante do Grande Mago de Yore. Ele tern sido um Mestre duro, e sua pr6pria impaciencia muitas vezes foi mais forte do que voce. Talvez  um pouco precipitadamente, voce partiu de imediato para a corte de Salamon. 0 rei recebeu-o entusiasticamente e explicou seu plano. A batalha poderia ser evitada sem derramamento de sangue se Balthus fosse assassinado antes que seu exercito pudesse ser reunido.
        A missao que voce tern pela frente e extremamente perigosa. Balthus Dire esta cercado, em sua Cidadela, por uma multidao de criaturas assombrosas. Embora a Magia seja a sua arma mais forte, havera momentos em que voce tera que confiar em sua espada para sobreviver.
        0 Rei Salamon expos a voce como seria a sua missao e o advertiu dos perigos que estavam a sua frente. Ha um caminho melhor para atravessar a Cidadela. Se voce o descobrir, tera exito com um mfnimo de risco para a sua pessoa. Talvez voce precise de varias viagens para descobrir o caminho mais facil para atravessar a Cidadela.
        Voce deixa o Vale dos Salgueiros na longa caminhada para a Torre Negra. No sope da colina de Rocha Escarpada, voce pode ver sua silhueta contra o ceu escuro...
        `,
        options:[{
          text:`Continuar`,
          goTo: 1,
      }]
      },
      1:{
        text:`0 sol se p6e. Enquanto o crepusculo se transforma em escuridao, voce come9a a subir a colina na dire9ao da amea9adora forma que se desenha contra o ceu notumo. A Cidadela fica a menos de uma hora de escalada.
          A uma certa distancia de seus muros, voce para para descansar - um erro, uma vez que, dessa posi9ao, ela parece um espectro medonho do qual nao se pode escapar. Os cabelos no seu pesco90 se arrepiam enquanto voce a observa.
          Mas voce se envergonha de seus medos. Com inflexfvel decisao, voce marcha adiante na dire9ao do portao principal, onde voce sabe que encontrara guardas a sua espera. Voce considera suas op96es.
          Ja pensou em se apresentar como um especialista em plantas medicinais que veio tratar de um guarda com febre. Poderia tambem se dizer um comerciante ou artesao - talvez um carpinteiro. Poderia ate mesmo ser um nomade que buscasse abrigo para a noite.
          Enquanto voce pondera as possibilidades, e as hist6rias que tera que contar aos guardas, acaba chegando a trilha principal que conduz aos port6es. Duas lanternas brilham em cada um dos lados
          da porta levadi9a.
          Voce ouve grunhidos abafados ao se aproximar, eve duas criaturas de aparencia absurda. Do lado esquerdo esta uma criatura horrfvel, com a cabe9a de um cachorro e o corpo de um grande macaco, flexionando seus  bra9os fortissimos.  Do outro lado, encontra-se  de fato o seu oposto, com a cabe9a de um macaco no corpo de um cachorro grande. Este ultimo guarda se aproxima nas suas quatro patas. Para a alguns metros de distancia diante de voce, ergue-se sobre as patas traseiras e dirige a palavra a voce.
          Por qual das hist6rias voce optara?`
        },
        options: [
          {text:`Voce se apresentara como um especialista em plantas medicinais?`, goTo:261},
          {text:`Voce dirá que e um comerciante?`, goTo:230},
          {text:`Voce pedirá abrigo para pernoitar?`, goTo:20}
        ]
      },
      400:{text:``,options: [{text:``, goTo:0},]},
  },
  OFeiticeirodaMontanhadeFogo : {
    name:'O Feiticeiro da Montanha de Fogo',
    img:OFeiticeirodaMontanhadeFogo,
    sinopse:'',
  },
  AcidadedosLadroes : {
    name: 'A Cidade dos Ladrões',
    img: AcidadedosLadroes,
    sinopse :'',
  },
  OCalaboucodaMorte : {
    name: 'O Calabouço da Morte',
    img: OCalaboucodaMorte,
    sinopse :'',
  },
  OTemplodoTerror : {
    name: 'O Templo do terror',
    img: OTemplodoTerror,
    sinopse :'',
  },
}

export default Livros;

// modelo: {
//   name:'',
//   img: ,
//   sinopse:``,
//   character:{
//     introducao: {
//       text:[``],
//       roll: 0,
//       sum: 0,
//     },
//     Encantamentos: {text: [
//       ['Encantos Magicos', 'ainda nao sei'],
//      ],
//     roll:0,
//     sum: 0,
//     },
//   },
//   Batalhas:'',
// },

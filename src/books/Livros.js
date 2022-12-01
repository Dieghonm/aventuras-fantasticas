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
    sinopse:[
      ` Nas profundezas da Cidadela do Caos, o terrivel feiticeiro, Balthus Dire, esta conspirando e planejando 
      a derrocada do povo generoso do Vale dos Salgueiros. Seus planos de combate estao prontos, seu exercito assustador 
      equipado, e o ataque e indiscutivelmente iminente.`,

      ` Convocado	por  uma  suplica  desesperada  de  ajuda, "VOCE" e a unica esperan a do Vale dos Salgueiros.
      Aluno brilhante do Grande Mago de Yore e um mestre da magia, só voce pode empreender uma missao que atinja 
      o próprio coração do mundo de pesadelo de Balthus Dire. Que criaturas monstruosas esperam por voce la?`,

      ` Muitos perigos  existem  a sua frente, e seu  sucesso  nao esta  de forma  alguma  garantido.  
      Ha adversarios poderosos nas fileiras do inimigo e muitas vezes sua unica alternativa sera matar ou ser morto!`,
      
      ` Em parte um romance, com sua história emocionante, e em parte um jogo, com seu elaborado sistema de combate, 
      esta historia traz muitas aventuras dentro dele para você.
      Cada parte ira apresentar desafios diferentes, e as decisões que você tomar o levarão a diferentes caminhos 
      e diferentes batalhas.`,

      ` Você é o aluno brilhante do Grande Mago de Yore. Possui um bom conhecimento de magia, que não é perfeito, mas, 
      com um pouco de sorte, será adequado para esta empreitada. Você possui também uma espada e tem praticado bastante como 
      espadachim. 
      Está muito bem fisicamente e tem se exercitado para aumentar a sua energia.`
    ],
    character:{
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
        text:[` O seu índice de HABILIDADE reflete a sua capacidade como espadachim e sua aptidão geral como lutador.`,
        ` Quanto maior for o seu nivel de HABILIDADE melhor voce vai se sair em combates`,
        `Para determinar o seu nivel de HABILIDADE, sortearemos um dado e somaremos 6 ao seu resiltado`],
        roll:1,
        sum: 6,
      },
      Sorte: {
        text:[`O seu índice de SORTE indica o quanto você é uma pessoa naturalmente de sorte. Sorte - e magia - são fatos da 
        vida no reino da fantasia que você está prestes a explorar.`
        ,``,`Determinaremos a sua SORTE, sorteando um dado mais 6 pontos`],
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
          Por qual das hist6rias voce optara?`,
        options: [
          {text:`Voce se apresentara como um especialista em plantas medicinais?`, goTo:261},
          {text:`Voce dirá que e um comerciante?`, goTo:230},
          {text:`Voce pedirá abrigo para pernoitar?`, goTo:20}
        ]
      },
      2:{
        text:`Um pouco adiante na passagem ha uma porta do lado direito.
          Esta porta esta coberta por estranhos caracteres, em uma linguagem que voce nao compreende.`,
        options: [
          {text:`Voce tentara abrir a porta`, goTo:142},
          {text:`continuara seguindo a passagem`, goTo:343}]
      },
      3:{
        text:`0 que voce oferecera a eles?`,
        options: [
          {text:`Uma Mirfade de Bolso?`, goTo:327, ex:['item', 'mirfade']},
          {text:`Uma Aranha em um Vidro?`, goTo:59, ex:['item', 'aranha']},
          {text:`Um punhado de Pequenas Amoras?`, goTo:236, ex:['item', 'amoras']},
          {text:`desembainhar a sua espada`, goTo:286},
          {text:`se dirigir para a porta mais distante`, goTo:366},]
      },
      4:{
        text:`Voce faz aparecer uma bola de fogo ea manda voando no rosto da criatura. 
          Porem, fica assistindo desanimado ao ve-la ricochetear sem nenhum efeito!`,
        options: [
          {text:`Voce pode lançar rapidamente um Encanto de Cópia de Criatura`, goTo:190, ex:['encanto','copia']},
          {text:`ou desembainhar a sua espada`, goTo:303},]
        },
      5:{
        text:`Voce experimenta a maçaneta da porta e ela gira, abrindo para um outro corredor. Logo adiante, 
          a passagem vira para a direita e termina pouco depois em outra porta. Nesta porta ha um letreiro que diz 
          "Por Favor Toque a Campainha para Chamar o Mordomo". Uma corda - evidentemente a campainha - pende ao lado da porta.`,
        options: [
          {text:`Voce toca a campainha conforme indicado`, goTo:40},
          {text:`ou experimenta a maçaneta da porta`, goTo:361},]
        },
      6:{
        text:`o caminho segue ao longo do rio por varios metros e depois volta a penetrar na rocha.`,
        options: [{text:`Voce segue o caminho por algum tempo`, goTo:367},]
      },
      7:{
        text:`A porta esta trancada.`,
        options: [
          {text:`Voce pode tentar po-la abaixo, batendo nela com o ombro`, goTo:268},
          {text:`ou pode lançar um Encanto da Força sobre voce mesmo e tentar arrancar a porta das suas dobradiças`, goTo:116, ex:['encanto','forca']}]
      },
      8:{
        text:`Ela observa espantada o aparecimento de uma replica perfeita dela mesma entre voces dois. 
          Ela recua um pouco, e voce orienta a sua criação para o ataque. Mas, quando elas se aproximam uma da outra, 
          acontece uma coisa estranha. Elas parecem ser incapazes de chegar perto uma da outra, como duas extremidades 
          giratórias, e sempre separam-se bruscamente de um salto. `,
        options: [{text:`Porem, sua própria cópia pelo menos forçou a criatura a 
          se afastar de voce para uma certa distancia, permitindo que voce corra para a entrada principal da Cidadela.`, goTo:218},]
      },
      9:{
        text:`Sob o seu Encanto da ilusão, a multidao de espectadores olha voce começar a jogar.
          Voce observa umas duas rodadas e a tensão cresce.`,
        options: [{text:`Voce resolve que e melhor sair do aposento sem mais perda de tempo.`, goTo:31},]
      },
      10:{
        text:` Voce tateia pela rocha e acaba por encontrar uma pequena alavanca. Ao puxar esta alavanca, a face 
          da rocha esfarela um pouco e aparece uma pequena abertura.`,
        options: [{text:`Voce sobe por esta abertura e chega a uma passagem. Descendo a passagem para a esquerda, voce pode ver uma porta e resolve investigar`, goTo:249},]
      },
      11:{
        text:`Voce pode usar:`,
        options: [
          {text:`Um Encanto do Ouro dos Tolos`, goTo:36, ex:['encanto','ouro']},
          {text:`Um Encanto de Cópia de Criatura`, goTo:262, ex:['encanto','copia']},
          {text:`Um Encanto da Percepção Extra-sensorial`, goTo:128, ex:['encanto','percepção']},
          {text:`Um Encanto da Fraqueza`, goTo:152, ex:['encanto','fraqueza']},
          {text:`Se voce nao tiver nenhum desses encantos, tera que desembainhar a sua espada e lutar`, goTo:16},
        ]
      },
      
      12:{text:``,options: [{text:``, goTo:0},]},
      13:{text:``,options: [{text:``, goTo:0},]},
      14:{text:``,options: [{text:``, goTo:0},]},
      15:{text:``,options: [{text:``, goTo:0},]},
      16:{text:``,options: [{text:``, goTo:0},]},
      17:{text:``,options: [{text:``, goTo:0},]},
      18:{text:``,options: [{text:``, goTo:0},]},
      19:{text:``,options: [{text:``, goTo:0},]},
      20:{text:``,options: [{text:``, goTo:0},]},
      21:{text:``,options: [{text:``, goTo:0},]},
      22:{text:``,options: [{text:``, goTo:0},]},
      23:{text:``,options: [{text:``, goTo:0},]},
      24:{text:``,options: [{text:``, goTo:0},]},
      25:{text:``,options: [{text:``, goTo:0},]},
      26:{text:``,options: [{text:``, goTo:0},]},
      27:{text:``,options: [{text:``, goTo:0},]},
      28:{text:``,options: [{text:``, goTo:0},]},
      29:{text:``,options: [{text:``, goTo:0},]},
      30:{text:``,options: [{text:``, goTo:0},]},
      31:{text:``,options: [{text:``, goTo:0},]},
      32:{text:``,options: [{text:``, goTo:0},]},
      33:{text:``,options: [{text:``, goTo:0},]},
      34:{text:``,options: [{text:``, goTo:0},]},
      35:{text:``,options: [{text:``, goTo:0},]},
      36:{text:``,options: [{text:``, goTo:0},]},
      37:{text:``,options: [{text:``, goTo:0},]},
      38:{text:``,options: [{text:``, goTo:0},]},
      39:{text:``,options: [{text:``, goTo:0},]},
      40:{text:``,options: [{text:``, goTo:0},]},
      41:{text:``,options: [{text:``, goTo:0},]},
      42:{text:``,options: [{text:``, goTo:0},]},
      43:{text:``,options: [{text:``, goTo:0},]},
      44:{text:``,options: [{text:``, goTo:0},]},
      45:{text:``,options: [{text:``, goTo:0},]},
      46:{text:``,options: [{text:``, goTo:0},]},
      47:{text:``,options: [{text:``, goTo:0},]},
      48:{text:``,options: [{text:``, goTo:0},]},
      49:{text:``,options: [{text:``, goTo:0},]},
      50:{text:``,options: [{text:``, goTo:0},]},
      51:{text:``,options: [{text:``, goTo:0},]},
      52:{text:``,options: [{text:``, goTo:0},]},
      53:{text:``,options: [{text:``, goTo:0},]},
      54:{text:``,options: [{text:``, goTo:0},]},
      55:{text:``,options: [{text:``, goTo:0},]},
      56:{text:``,options: [{text:``, goTo:0},]},
      57:{text:``,options: [{text:``, goTo:0},]},
      58:{text:``,options: [{text:``, goTo:0},]},
      59:{text:``,options: [{text:``, goTo:0},]},
      60:{text:``,options: [{text:``, goTo:0},]},
      61:{text:``,options: [{text:``, goTo:0},]},
      62:{text:``,options: [{text:``, goTo:0},]},
      63:{text:``,options: [{text:``, goTo:0},]},
      64:{text:``,options: [{text:``, goTo:0},]},
      65:{text:``,options: [{text:``, goTo:0},]},
      66:{text:``,options: [{text:``, goTo:0},]},
      67:{text:``,options: [{text:``, goTo:0},]},
      68:{text:``,options: [{text:``, goTo:0},]},
      69:{text:``,options: [{text:``, goTo:0},]},
      70:{text:``,options: [{text:``, goTo:0},]},
      71:{text:``,options: [{text:``, goTo:0},]},
      72:{text:``,options: [{text:``, goTo:0},]},
      73:{text:``,options: [{text:``, goTo:0},]},
      74:{text:``,options: [{text:``, goTo:0},]},
      75:{text:``,options: [{text:``, goTo:0},]},
      76:{text:``,options: [{text:``, goTo:0},]},
      77:{text:``,options: [{text:``, goTo:0},]},
      78:{text:``,options: [{text:``, goTo:0},]},
      79:{text:``,options: [{text:``, goTo:0},]},
      80:{text:``,options: [{text:``, goTo:0},]},
      81:{text:``,options: [{text:``, goTo:0},]},
      82:{text:``,options: [{text:``, goTo:0},]},
      83:{text:``,options: [{text:``, goTo:0},]},
      84:{text:``,options: [{text:``, goTo:0},]},
      85:{text:``,options: [{text:``, goTo:0},]},
      86:{text:``,options: [{text:``, goTo:0},]},
      87:{text:``,options: [{text:``, goTo:0},]},
      88:{text:``,options: [{text:``, goTo:0},]},
      89:{text:``,options: [{text:``, goTo:0},]},
      90:{text:``,options: [{text:``, goTo:0},]},
      91:{text:``,options: [{text:``, goTo:0},]},
      92:{text:``,options: [{text:``, goTo:0},]},
      93:{text:``,options: [{text:``, goTo:0},]},
      94:{text:``,options: [{text:``, goTo:0},]},
      95:{text:``,options: [{text:``, goTo:0},]},
      96:{text:``,options: [{text:``, goTo:0},]},
      97:{text:``,options: [{text:``, goTo:0},]},
      98:{text:``,options: [{text:``, goTo:0},]},
      99:{text:``,options: [{text:``, goTo:0},]},
      100:{text:``,options: [{text:``, goTo:0},]},
      101:{text:``,options: [{text:``, goTo:0},]},
      102:{text:``,options: [{text:``, goTo:0},]},
      103:{text:``,options: [{text:``, goTo:0},]},
      104:{text:``,options: [{text:``, goTo:0},]},
      105:{text:``,options: [{text:``, goTo:0},]},
      106:{text:``,options: [{text:``, goTo:0},]},
      107:{text:``,options: [{text:``, goTo:0},]},
      108:{text:``,options: [{text:``, goTo:0},]},
      109:{text:``,options: [{text:``, goTo:0},]},
      110:{text:``,options: [{text:``, goTo:0},]},
      111:{text:``,options: [{text:``, goTo:0},]},
      112:{text:``,options: [{text:``, goTo:0},]},
      113:{text:``,options: [{text:``, goTo:0},]},
      114:{text:``,options: [{text:``, goTo:0},]},
      115:{text:``,options: [{text:``, goTo:0},]},
      116:{text:``,options: [{text:``, goTo:0},]},
      117:{text:``,options: [{text:``, goTo:0},]},
      118:{text:``,options: [{text:``, goTo:0},]},
      119:{text:``,options: [{text:``, goTo:0},]},
      120:{text:``,options: [{text:``, goTo:0},]},
      121:{text:``,options: [{text:``, goTo:0},]},
      122:{text:``,options: [{text:``, goTo:0},]},
      123:{text:``,options: [{text:``, goTo:0},]},
      124:{text:``,options: [{text:``, goTo:0},]},
      125:{text:``,options: [{text:``, goTo:0},]},
      126:{text:``,options: [{text:``, goTo:0},]},
      127:{text:``,options: [{text:``, goTo:0},]},
      128:{text:``,options: [{text:``, goTo:0},]},
      129:{text:``,options: [{text:``, goTo:0},]},
      130:{text:``,options: [{text:``, goTo:0},]},
      131:{text:``,options: [{text:``, goTo:0},]},
      132:{text:``,options: [{text:``, goTo:0},]},
      133:{text:``,options: [{text:``, goTo:0},]},
      134:{text:``,options: [{text:``, goTo:0},]},
      135:{text:``,options: [{text:``, goTo:0},]},
      136:{text:``,options: [{text:``, goTo:0},]},
      137:{text:``,options: [{text:``, goTo:0},]},
      138:{text:``,options: [{text:``, goTo:0},]},
      139:{text:``,options: [{text:``, goTo:0},]},
      140:{text:``,options: [{text:``, goTo:0},]},
      141:{text:``,options: [{text:``, goTo:0},]},
      142:{text:``,options: [{text:``, goTo:0},]},
      143:{text:``,options: [{text:``, goTo:0},]},
      144:{text:``,options: [{text:``, goTo:0},]},
      145:{text:``,options: [{text:``, goTo:0},]},
      146:{text:``,options: [{text:``, goTo:0},]},
      147:{text:``,options: [{text:``, goTo:0},]},
      148:{text:``,options: [{text:``, goTo:0},]},
      149:{text:``,options: [{text:``, goTo:0},]},
      150:{text:``,options: [{text:``, goTo:0},]},
      151:{text:``,options: [{text:``, goTo:0},]},
      152:{text:``,options: [{text:``, goTo:0},]},
      153:{text:``,options: [{text:``, goTo:0},]},
      154:{text:``,options: [{text:``, goTo:0},]},
      155:{text:``,options: [{text:``, goTo:0},]},
      156:{text:``,options: [{text:``, goTo:0},]},
      157:{text:``,options: [{text:``, goTo:0},]},
      158:{text:``,options: [{text:``, goTo:0},]},
      159:{text:``,options: [{text:``, goTo:0},]},
      160:{text:``,options: [{text:``, goTo:0},]},
      161:{text:``,options: [{text:``, goTo:0},]},
      162:{text:``,options: [{text:``, goTo:0},]},
      163:{text:``,options: [{text:``, goTo:0},]},
      164:{text:``,options: [{text:``, goTo:0},]},
      165:{text:``,options: [{text:``, goTo:0},]},
      166:{text:``,options: [{text:``, goTo:0},]},
      167:{text:``,options: [{text:``, goTo:0},]},
      168:{text:``,options: [{text:``, goTo:0},]},
      169:{text:``,options: [{text:``, goTo:0},]},
      170:{text:``,options: [{text:``, goTo:0},]},
      171:{text:``,options: [{text:``, goTo:0},]},
      172:{text:``,options: [{text:``, goTo:0},]},
      173:{text:``,options: [{text:``, goTo:0},]},
      174:{text:``,options: [{text:``, goTo:0},]},
      175:{text:``,options: [{text:``, goTo:0},]},
      176:{text:``,options: [{text:``, goTo:0},]},
      177:{text:``,options: [{text:``, goTo:0},]},
      178:{text:``,options: [{text:``, goTo:0},]},
      179:{text:``,options: [{text:``, goTo:0},]},
      180:{text:``,options: [{text:``, goTo:0},]},
      181:{text:``,options: [{text:``, goTo:0},]},
      182:{text:``,options: [{text:``, goTo:0},]},
      183:{text:``,options: [{text:``, goTo:0},]},
      184:{text:``,options: [{text:``, goTo:0},]},
      185:{text:``,options: [{text:``, goTo:0},]},
      186:{text:``,options: [{text:``, goTo:0},]},
      187:{text:``,options: [{text:``, goTo:0},]},
      188:{text:``,options: [{text:``, goTo:0},]},
      189:{text:``,options: [{text:``, goTo:0},]},
      190:{text:``,options: [{text:``, goTo:0},]},
      191:{text:``,options: [{text:``, goTo:0},]},
      192:{text:``,options: [{text:``, goTo:0},]},
      193:{text:``,options: [{text:``, goTo:0},]},
      194:{text:``,options: [{text:``, goTo:0},]},
      195:{text:``,options: [{text:``, goTo:0},]},
      196:{text:``,options: [{text:``, goTo:0},]},
      197:{text:``,options: [{text:``, goTo:0},]},
      198:{text:``,options: [{text:``, goTo:0},]},
      199:{text:``,options: [{text:``, goTo:0},]},
      200:{text:``,options: [{text:``, goTo:0},]},
      201:{text:``,options: [{text:``, goTo:0},]},
      202:{text:``,options: [{text:``, goTo:0},]},
      203:{text:``,options: [{text:``, goTo:0},]},
      204:{text:``,options: [{text:``, goTo:0},]},
      205:{text:``,options: [{text:``, goTo:0},]},
      206:{text:``,options: [{text:``, goTo:0},]},
      207:{text:``,options: [{text:``, goTo:0},]},
      208:{text:``,options: [{text:``, goTo:0},]},
      209:{text:``,options: [{text:``, goTo:0},]},
      210:{text:``,options: [{text:``, goTo:0},]},
      211:{text:``,options: [{text:``, goTo:0},]},
      212:{text:``,options: [{text:``, goTo:0},]},
      213:{text:``,options: [{text:``, goTo:0},]},
      214:{text:``,options: [{text:``, goTo:0},]},
      215:{text:``,options: [{text:``, goTo:0},]},
      216:{text:``,options: [{text:``, goTo:0},]},
      217:{text:``,options: [{text:``, goTo:0},]},
      218:{text:``,options: [{text:``, goTo:0},]},
      219:{text:``,options: [{text:``, goTo:0},]},
      220:{text:``,options: [{text:``, goTo:0},]},
      221:{text:``,options: [{text:``, goTo:0},]},
      222:{text:``,options: [{text:``, goTo:0},]},
      223:{text:``,options: [{text:``, goTo:0},]},
      224:{text:``,options: [{text:``, goTo:0},]},
      225:{text:``,options: [{text:``, goTo:0},]},
      226:{text:``,options: [{text:``, goTo:0},]},
      227:{text:``,options: [{text:``, goTo:0},]},
      228:{text:``,options: [{text:``, goTo:0},]},
      229:{text:``,options: [{text:``, goTo:0},]},
      230:{text:``,options: [{text:``, goTo:0},]},
      231:{text:``,options: [{text:``, goTo:0},]},
      232:{text:``,options: [{text:``, goTo:0},]},
      233:{text:``,options: [{text:``, goTo:0},]},
      234:{text:``,options: [{text:``, goTo:0},]},
      235:{text:``,options: [{text:``, goTo:0},]},
      236:{text:``,options: [{text:``, goTo:0},]},
      237:{text:``,options: [{text:``, goTo:0},]},
      238:{text:``,options: [{text:``, goTo:0},]},
      239:{text:``,options: [{text:``, goTo:0},]},
      240:{text:``,options: [{text:``, goTo:0},]},
      241:{text:``,options: [{text:``, goTo:0},]},
      242:{text:``,options: [{text:``, goTo:0},]},
      243:{text:``,options: [{text:``, goTo:0},]},
      244:{text:``,options: [{text:``, goTo:0},]},
      245:{text:``,options: [{text:``, goTo:0},]},
      246:{text:``,options: [{text:``, goTo:0},]},
      247:{text:``,options: [{text:``, goTo:0},]},
      248:{text:``,options: [{text:``, goTo:0},]},
      249:{text:``,options: [{text:``, goTo:0},]},
      250:{text:``,options: [{text:``, goTo:0},]},
      251:{text:``,options: [{text:``, goTo:0},]},
      252:{text:``,options: [{text:``, goTo:0},]},
      253:{text:``,options: [{text:``, goTo:0},]},
      254:{text:``,options: [{text:``, goTo:0},]},
      255:{text:``,options: [{text:``, goTo:0},]},
      256:{text:``,options: [{text:``, goTo:0},]},
      257:{text:``,options: [{text:``, goTo:0},]},
      258:{text:``,options: [{text:``, goTo:0},]},
      259:{text:``,options: [{text:``, goTo:0},]},
      260:{text:``,options: [{text:``, goTo:0},]},
      261:{text:``,options: [{text:``, goTo:0},]},
      262:{text:``,options: [{text:``, goTo:0},]},
      263:{text:``,options: [{text:``, goTo:0},]},
      264:{text:``,options: [{text:``, goTo:0},]},
      265:{text:``,options: [{text:``, goTo:0},]},
      266:{text:``,options: [{text:``, goTo:0},]},
      267:{text:``,options: [{text:``, goTo:0},]},
      268:{text:``,options: [{text:``, goTo:0},]},
      269:{text:``,options: [{text:``, goTo:0},]},
      270:{text:``,options: [{text:``, goTo:0},]},
      271:{text:``,options: [{text:``, goTo:0},]},
      272:{text:``,options: [{text:``, goTo:0},]},
      273:{text:``,options: [{text:``, goTo:0},]},
      274:{text:``,options: [{text:``, goTo:0},]},
      275:{text:``,options: [{text:``, goTo:0},]},
      276:{text:``,options: [{text:``, goTo:0},]},
      277:{text:``,options: [{text:``, goTo:0},]},
      278:{text:``,options: [{text:``, goTo:0},]},
      279:{text:``,options: [{text:``, goTo:0},]},
      280:{text:``,options: [{text:``, goTo:0},]},
      281:{text:``,options: [{text:``, goTo:0},]},
      282:{text:``,options: [{text:``, goTo:0},]},
      283:{text:``,options: [{text:``, goTo:0},]},
      284:{text:``,options: [{text:``, goTo:0},]},
      285:{text:``,options: [{text:``, goTo:0},]},
      286:{text:``,options: [{text:``, goTo:0},]},
      287:{text:``,options: [{text:``, goTo:0},]},
      288:{text:``,options: [{text:``, goTo:0},]},
      289:{text:``,options: [{text:``, goTo:0},]},
      290:{text:``,options: [{text:``, goTo:0},]},
      291:{text:``,options: [{text:``, goTo:0},]},
      292:{text:``,options: [{text:``, goTo:0},]},
      293:{text:``,options: [{text:``, goTo:0},]},
      294:{text:``,options: [{text:``, goTo:0},]},
      295:{text:``,options: [{text:``, goTo:0},]},
      296:{text:``,options: [{text:``, goTo:0},]},
      297:{text:``,options: [{text:``, goTo:0},]},
      298:{text:``,options: [{text:``, goTo:0},]},
      299:{text:``,options: [{text:``, goTo:0},]},
      300:{text:``,options: [{text:``, goTo:0},]},
      301:{text:``,options: [{text:``, goTo:0},]},
      302:{text:``,options: [{text:``, goTo:0},]},
      303:{text:``,options: [{text:``, goTo:0},]},
      304:{text:``,options: [{text:``, goTo:0},]},
      305:{text:``,options: [{text:``, goTo:0},]},
      306:{text:``,options: [{text:``, goTo:0},]},
      307:{text:``,options: [{text:``, goTo:0},]},
      308:{text:``,options: [{text:``, goTo:0},]},
      309:{text:``,options: [{text:``, goTo:0},]},
      310:{text:``,options: [{text:``, goTo:0},]},
      311:{text:``,options: [{text:``, goTo:0},]},
      312:{text:``,options: [{text:``, goTo:0},]},
      313:{text:``,options: [{text:``, goTo:0},]},
      314:{text:``,options: [{text:``, goTo:0},]},
      315:{text:``,options: [{text:``, goTo:0},]},
      316:{text:``,options: [{text:``, goTo:0},]},
      317:{text:``,options: [{text:``, goTo:0},]},
      318:{text:``,options: [{text:``, goTo:0},]},
      319:{text:``,options: [{text:``, goTo:0},]},
      320:{text:``,options: [{text:``, goTo:0},]},
      321:{text:``,options: [{text:``, goTo:0},]},
      322:{text:``,options: [{text:``, goTo:0},]},
      323:{text:``,options: [{text:``, goTo:0},]},
      324:{text:``,options: [{text:``, goTo:0},]},
      325:{text:``,options: [{text:``, goTo:0},]},
      326:{text:``,options: [{text:``, goTo:0},]},
      327:{text:``,options: [{text:``, goTo:0},]},
      328:{text:``,options: [{text:``, goTo:0},]},
      329:{text:``,options: [{text:``, goTo:0},]},
      330:{text:``,options: [{text:``, goTo:0},]},
      331:{text:``,options: [{text:``, goTo:0},]},
      332:{text:``,options: [{text:``, goTo:0},]},
      333:{text:``,options: [{text:``, goTo:0},]},
      334:{text:``,options: [{text:``, goTo:0},]},
      335:{text:``,options: [{text:``, goTo:0},]},
      336:{text:``,options: [{text:``, goTo:0},]},
      337:{text:``,options: [{text:``, goTo:0},]},
      338:{text:``,options: [{text:``, goTo:0},]},
      339:{text:``,options: [{text:``, goTo:0},]},
      340:{text:``,options: [{text:``, goTo:0},]},
      341:{text:``,options: [{text:``, goTo:0},]},
      342:{text:``,options: [{text:``, goTo:0},]},
      343:{text:``,options: [{text:``, goTo:0},]},
      344:{text:``,options: [{text:``, goTo:0},]},
      345:{text:``,options: [{text:``, goTo:0},]},
      346:{text:``,options: [{text:``, goTo:0},]},
      347:{text:``,options: [{text:``, goTo:0},]},
      348:{text:``,options: [{text:``, goTo:0},]},
      349:{text:``,options: [{text:``, goTo:0},]},
      350:{text:``,options: [{text:``, goTo:0},]},
      351:{text:``,options: [{text:``, goTo:0},]},
      352:{text:``,options: [{text:``, goTo:0},]},
      353:{text:``,options: [{text:``, goTo:0},]},
      354:{text:``,options: [{text:``, goTo:0},]},
      355:{text:``,options: [{text:``, goTo:0},]},
      356:{text:``,options: [{text:``, goTo:0},]},
      357:{text:``,options: [{text:``, goTo:0},]},
      358:{text:``,options: [{text:``, goTo:0},]},
      359:{text:``,options: [{text:``, goTo:0},]},
      360:{text:``,options: [{text:``, goTo:0},]},
      361:{text:``,options: [{text:``, goTo:0},]},
      362:{text:``,options: [{text:``, goTo:0},]},
      363:{text:``,options: [{text:``, goTo:0},]},
      364:{text:``,options: [{text:``, goTo:0},]},
      365:{text:``,options: [{text:``, goTo:0},]},
      366:{text:``,options: [{text:``, goTo:0},]},
      367:{text:``,options: [{text:``, goTo:0},]},
      368:{text:``,options: [{text:``, goTo:0},]},
      369:{text:``,options: [{text:``, goTo:0},]},
      370:{text:``,options: [{text:``, goTo:0},]},
      371:{text:``,options: [{text:``, goTo:0},]},
      372:{text:``,options: [{text:``, goTo:0},]},
      373:{text:``,options: [{text:``, goTo:0},]},
      374:{text:``,options: [{text:``, goTo:0},]},
      375:{text:``,options: [{text:``, goTo:0},]},
      376:{text:``,options: [{text:``, goTo:0},]},
      377:{text:``,options: [{text:``, goTo:0},]},
      378:{text:``,options: [{text:``, goTo:0},]},
      379:{text:``,options: [{text:``, goTo:0},]},
      380:{text:``,options: [{text:``, goTo:0},]},
      381:{text:``,options: [{text:``, goTo:0},]},
      382:{text:``,options: [{text:``, goTo:0},]},
      383:{text:``,options: [{text:``, goTo:0},]},
      384:{text:``,options: [{text:``, goTo:0},]},
      385:{text:``,options: [{text:``, goTo:0},]},
      386:{text:``,options: [{text:``, goTo:0},]},
      387:{text:``,options: [{text:``, goTo:0},]},
      388:{text:``,options: [{text:``, goTo:0},]},
      389:{text:``,options: [{text:``, goTo:0},]},
      390:{text:``,options: [{text:``, goTo:0},]},
      391:{
        text:``,options: [{text:``, goTo:0},]
      },
      392:{
        text:``,options: [{text:``, goTo:0},]
      },
      393:{
        text:``,options: [{text:``, goTo:0},]
      },
      394:{
        text:``,options: [{text:``, goTo:0},]
      },
      395:{
        text:`Voce lança o Encanto e se concentra, criando uma ilusão de que voce e um poderoso feiticeiro e que esta 
        começando a se cansar das gozações deles. Mas nada acontece! Mais uma vez, um riso de escarnio chega a voce vindo 
        de todos os lados. "Nós tambem somos criaturas magicas," diz uma voz, "embora nao sejamos tao amadores quanto voce!" 
        Repentinamente, voce sente um golpe no meio das costas que joga voce no meio do aposento. Voce perde dois pontos 
      de ENERGIA.`,
        options: [
          {text:`Voce procurara em sua mochila alguma coisa para usar`, goTo:322},
          {text:`desembainhara a sua espada`, goTo:248},
          {text:`Se voce nao tiver tentado ainda um Encanto do Fogo sobre eles, poderá fazer isso`, goTo:85},
        ]
      },
      396:{
        text:``,options: [{text:``, goTo:183, ex:[nda,183]},]
      },
      397:{
        text:`Nao e uma refeição muito farta, mas voce estava com fome e com sede, e esta oferta repõe dois pontos de ENERGIA. `,
        options: [
          {text:`Agora voce pode chamar o Calacorm`, goTo:69, ex:[energia, 2]},
          {text:`ou escolher um Encanto para tentar sair desta situação.`, goTo:193, ex:[energia, 2]},
        ]
      },
      398:{
        text:`Voce lança o encanto, e sua força retorna, permitindo que voce acabe de subir os degraus. 
          Quando voce chega no alto, os efeitos desaparecem mais uma vez.`,
        options: [{text:`Voce pode agora seguir ao longo da muralha na direção da Torre Negra.`, goTo:79},]
      },
      399:{
        text:`Voce lança o Encanto. 0 Elfo se aproxima e, ao faze-lo, a Miriade de Bolso desaparece da sua mao! 
          Ele fica em pe diante de voce, aparentemente indefeso, nervosamente decidindo se luta ou se foge. 
          Voce pode se mexer depressa e elimina-lo:`,
        options: [{text:`Lutar com o ELFO NEGRO`, goTo:272, ex:['combate','ELFO NEGRO']}]
      },
      400:{
        text:`Balthus Dire, caido a seus pes, esta morto. Sua missao foi cumprida! 
          0	Vale dos Salgueiros esta livre de ataques - por enquanto, pelo menos.`,
        options: [{text:`Fim?`, goTo:500},]
      },
      },
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

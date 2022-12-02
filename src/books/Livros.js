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
      12:{
        text:`Ele fica parado diante de voce, respirando pesadamente. 0 Encanto dele evidentemente foi bastante exaustivo. Voce pode usar essa oportunidade para:`,
        options: [
          {text:`Deslocar-se rapidamente para o armario das armas`, goTo:274},
          {text:`Pular para debaixo da mesa`, goTo:335},
          {text:`Correr para a janela`, goTo:78},
        ]
      },
      13:{
        text:`A maçaneta gira e voce abre a porta para um outro aposento, onde ha bastante atividade. Tres velhas feias,
         com narizes e queixos compridos, circulam pelo aposento - que parece ser alguma especie de cozinha - pegando 
         varios ingredientes dos armarios e acrescentando-os a um caldo dentro de um grande caldeirão. Ha um pedaço de 
         carne assando em um espeto, embaixo de uma grande chamine. Olhando mais atentamente, voce descobre que a came, 
         na verdade, nao e de um animal, mas sim um Anao inteiro que escurece ao fogo. Uma das mulheres olha para voce e 
         diz: "Ah, voce deve ser o novo empregado... ou e a próxima refeição?", com o que todas as tres começam a dar 
         gargalhadas e gritos enquanto riem.`,
        options: [
          {text:`Voce deixara que elas acreditem que voce e o novo empregado que elas estao esperando`, goTo:302},
          {text:`ou quer investigar o aposento com mais cuidado`, goTo:215},
        ]
      },
      14:{
        text:`A sombra do muro dificulta muito a visão. Uma pedra solta desliza, e voce perde o equilfbrio, oscilando a
         beira do que voce tem consciencia de que deve ser um poço profundo. Teste a sua Sorte. 
         Se voce tiver sorte, recupera o equilfbrio e caminha em segurança.`,
        options: [
          {text:`Voce pode entao dar a volta no poço e continuar`, goTo:79, ex:['sorte', true]},
          {text:`Se voce nao tiver sorte, cai la dentro`, goTo:100, ex:['sorte', false]},
        ]
      },
      15:{
        text:`A adaga e realmente uma obra de arte e sem duvida valia um born preço. A lamina e feita de metal brilhante, 
        e o cabo e de um couro verde peculiar, com pedras incrustadas. Voce le uma inscrição que diz que esta e uma adaga 
        de arremesso encantada que nunca erra. Em um combate futuro, voce podera usar esta adaga para arremessar em um 
        adversario. Ela causara automaticamente a perda de dois pontos de ENERGIA sem necessidade de jogar dados para 
        conhecer a Forrça de Ataque. Mas voce só  podera usa-la uma vez.`,
        options: [
          {
            text:`Voce póe a adaga em seu cinturão e parte na direção da Cidadela.`,
            goTo:245,
            ex:['itemAdd', `adaga encantada`]},
        ]
      },
      16:{
        text:`Resolva esta batalha contra o GARK:
          Depois de quatro Series de Ataques, voce podera Fugir por uma das portas na extremidade mais distante do 
          aposento.`,
        options: [
          {text:`Fugir`, goTo:90, ex:['fugir', 4]},
          {text:`se vençer`, goTo:180, ex:['combate', GARK]},
        ]
      },
      17:{
        text:`Todo tipo de alimentos estranhos podem ser encontrados nos armarios. Globos oculares, línguas, lagartixas, 
        frascos de líquidos, ervas e frutos silvestres de diferentes formas e tamanhos. Uma garrafa em especial, 
        contendo um líquido verde transparente, chama a sua atenção. Voce nao tem tempo para ler o rótulo no momento, 
        por isso voce a pôe no bolso rapidamente, enquanto elas nao estão olhando. `,
        options: [
          {text:`Voce lhes diz que a cozinha parece estar em ordem e sai pela porta do lado oposto da cozinha.`, goTo:93, ex:['itemAdd', 'garrafa contendo liquido verde transparente']},
        ]
      },
      18:{
        text:`Ele aponta para uma seção logo acima do chão, que voce examina. Finalmente, voce escolhe um volume e senta
         para ler. Balthus Dire aparentemente e o terceiro de uma linhagem de Feiticeiros Senhores da Guerra que governa a
         Torre Negra e o Reino da Rocha Escarpada. Chegou ao poder depois da morte de seu pai, Craggen Dire, ha alguns anos
         atras. Os Dires sao mestres de Magia Negra ha gerações, mas sua força e poder duram somente no periodo notumo; a luz 
         do sol e uma especie de veneno para eles. Pouco tempo depois da morte de seu pai, Balthus Dire casou-se com Lady 
         Lucretia, ela tambem uma Feiticeira de Magia Negra, e desde entao eles vem reinando juntos sobre o Reino da Rocha
         Escarpada. Ao terminar o livro, voce repara que o bibliotecario esta com a mão junto ao ouvido, aparentemente 
         escutando alguma coisa. Ele dirige a voce um olhar inquisitivo.`,
        options: [
          {text:`Voce pode procurar outro livro util, que possa ajuda-lo na sua empreitada`, goTo:84},
          {text:`ou tentar sair da biblioteca pela porta atras dele`, goTo:31},
        ]
      },
      19:{
        text:`A escada geme quando voce poe o pe nela. Voce tenta subir o mais silenciosamente possivel, mas a madeira velha range sob o seu peso. De repente, um dos degraus estala, como se acionasse um dispositivo de algum tipo. Para sua surpresa,  todos os degraus:  viram para baixo! Voce esta agora de pe em uma rampa lisa e inclinadissima! Por mais que voce tente, nao consegue manter o equilibria e acaba escorregando pela rampa, rolando de ponta cabe9a. Se voce quiser usar um Encanto da Levita9ao, podera voar e descer, fora de perigo, na sacada em cima (va para 363); do contrario, va para 254.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      20:{
        text:`0 Macaco-Cachorro diz que nao e permitido a ninguem entrar na Torre Negra depois que anoitece -
        // voce tera que procurar abrigo em outro lugar. Voce pode se resignar a lutar (va para 288). Ou pode pegar uma pedra e lan9ar um Encanto do Ouro dos Tolos sobre ela, oferecendo-a como uma pepita de ouro, para suborna-los, convencendo-os a deixar voce entrar (va para 96). Deduza o Encanto do Ouro dos Tolos de seus Encantos, se voce o usar.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      21:{
        text:`"O que traz voce a estas paragens?" ela pergunta. Voce conta a ela sua hist6ria, evitando cuidadosamente revelar a sua verdadeira missao. Ela aconselha voce a afastar-se desse lugar, caso conhe9a alguma magia. As criaturas que voce encontrou ate agora nao se comparam com as que habitam o interior da Torre da Cidadela propriamente dita. Ela diz que voce jamais encontrara o senhor sem conseguir primeiro o Velo e deseja sorte para voce em sua missao. Some 2 pontos de SORTE pelas informa96es que obteve e siga adiante. Volte para o 6.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      22:{
        text:`Voce abre a porta e sai em um corredor longo e escuro. Va para 188.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      23:{
        text:`Voce abre a porta e sai em uma passagem que continua direto para frente por algum tempo. Vira para a esquerda, depois para a direita, ate que voce chega a um arco a sua frente que da para um grande aposento. Voce caminha na dire9ao do aposento e entra nele. Va para 169.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      24:{
        text:`Voce prova o vinho e, enquanto esta apreciando o seu sabor, ouve um rufdo tilintante. Voce se vira para olhar na dire9ao de onde o rufdo esta vindo e fica horrorizado ao ver que as garrafas nas prateleiras estao se mexendo sozinhas. Uma garrafa voa do lugar  onde esta e se  projeta  na sua dire9ao, errando por pouco a sua cabe9a e se espatifando na parede atras de voce. Uma outra voa na sua dire9ao, depois outra, ate que voce esta recebendo uma chuva de garrafas vindas de todas as dire96es. Voce toma consciencia de que sua unica defesa e usar o Encanto do Escudo. Lance este encanto, se voce puder, e va para 372. Se nao puder lan9ar este Encanto, va para 219.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      25:{
        text:`A porta abre, dando para um aposento grandee circular. Voce co9a a cabe9a, intrigado. No centro do aposento, ve uma pequena "ilha", cercada por um fosso largo, na qual esta uma area, trancada por ferrolhos metalicos. 0 fosso e largo demais para ser pulado e e muito fundo. Logo na entrada, ha um peda90 de corda. Existe uma outra porta do outro lado do aposento, dando para fora dele. Voce:


        // Ignora a caixa e contorna o fosso ate a outra porta? Lan9a um Encanto da força e salta sobre o fosso? Pega a corda e formula um piano?
        // Va para 206
        // Va para 133 Vapara239`,
        options: [
          {text:``, goTo:0},
        ]
      },
      26:{
        text:`Voce lan9ara:

        // Um Encanto do Fogo? Um Encanto da Fraqueza?
        // Um Encanto de C6pia de Criatura?
        // 26
        
        
        // Va para 87
        // Va para 345
        // Va para 101
        
        
        // Se voce nao possuir nenhum deles, retorne para 304 e Escolha de novo.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      27:{
        text:`Quando voce mostra as Pe9as de  Ouro,  as tres  criaturas interrompem  seu  caminho. Eles engasgam ao olhar para suas moedas. Uma mão invisfvel as agarra e coloca no chão. Elas olham para voce, e
        // uma voz pede mais. Voce pega todas as suas Pe9as de Ouro e joga no centro do aposento. Uma voz soa, dizendo: "Bern, estranho, voce e realmente bem-vindo na casa dos MIKS. Agradecemos o seu
        // presente. Se esta seguindo adiante, va pela porta a sua frente, mas tome cuidado com os Ganjees.
        // Desejamos sorte para voce na sua jomada."  Voce pode acrescentar  um ponto de SORTE pelos votos de sucesso dos Miks e sair pela porta a sua frente. Va para 206.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      28:{
        text:`Voce lan9a o Encanto e faz aparecer uma bola de fogo nas suas maos. Eles interrompem seu caminho e observam voce atentamente. Voce joga a bola na dire9ao deles, e eles gritam de medo, rolando aterrorizados para longe de voce, com medo de seus 6bvios poderes. Enquanto voce ainda tern controle sobre o Encanto, cria mais tres bolas de fogo menores e as arremessa sobre cada um deles. Eles uivam e se dispersam, rolando pelo corredor para longe de voce. Voce pode agora prosseguir pela passagem da esquerda (va para 243) ou pela passagem da direita (volte para 2).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      29:{
        text:`Cautelosamente, voce se aproxima do homenzinho. Ao chegar perto, um unico olho se abre e olha diretamente no seu rosto. Um sorriso largo se espalha de orelha a orelha na criatura e ela desaparece! "Born dia para voce!" diz uma vozinha chilreante atras de voce, e, ao voltar-se, voce o ve ali, ainda sorrindo. "Sou O'Seamus, o Duende!", ele diz, dando risinhos, e estende a mão para voce. Ele parece suficientemente amigavel -  voce aperta a mão dele e tenta fazer amizade (va para 271) ou desembainha sua espada (va para 131)?
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      30:{
        text:`A fera e imensamente poderosa. Voce desembainha a sua espada e a batalha come9a:
        // FERA DAS GARRAS	HABILIDADE 9	ENERGIA 14
        
        // Depois que voce tiver atingido a criatura pela quarta vez, va para 241.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      31:{
        text:`Voce sai do aposento pela porta do outro lado, a qual abre para uma passagem curta que termina em uma grande porta de madeira. A ma9aneta desta porta gira, deixando que voce entre em uma grande camara. Va para 169.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      32:{
        text:`Passando por sobre os corpos, voce se aproxima do portao e chama o porteiro, para em seguida se esconder na escuridao quando ele se aproxima. Ele ve os corpos e sai para investigar, e, enquanto isso, voce aproveita para esgueirar-se rapidamente pelo portao e tranca-lo do lado de fora. Va para 251.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      33:{
        text:`Quando voce tenta se levantar, o Orea e o Goblin agarram voce e o seguram no chão, enquanto o Anao avanc;a com sua clava. Va para 213.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      34:{
        text:`A chave gira e, retirando a tranca, voce abre a caixa, encontrando outra chave, dessa vez talhada em um metal verde cintilante. Voce experimentara esta nova chave na terceira caixa (va para 89) ou saira do aposento com as duas chaves (va para 237)?
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      35:{
        text:`Voce se concentra na sua Ilusao. Voce pode convence-lo de que ele esta sendo atacado por um inimigo (va para 364), ou fazer com que voce desapare9a, na esperan9a de que ele vira procurar por voce (va para 246).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      36:{
        text:`"Bah!", diz o Gark," nao e tao facil me enganar. Jogue fora estes peda<;os de latao." A criatura tern a ideia de que, se voce esta oferecendo um suborno, deve ser um invasor, o que - para um Gark - e uma demonstra<;ao assombrosa de raciocfnio 16gico! Ele da um tapa em voce com sua mão enorme, jogando voce sem sentidos no chão. As ultimas palavras que voce se lembra antes de desmaiar sao ditas pelo Gark orgulhoso: "Para a cadeia com esse aqui!" Va para 234. E nao se esque<;a de deduzir o Encanto do Ouro dos Tolos desperdi<;ado.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      37:{
        text:`Voce puxa a pele e a criatura solta silvos altos. Todas as suas cabe<;as recuam,e ela permanece quieta, observando voce. Ha uma porta do outro lado do aposento, e voce lentamente se desloca na dire<;ao dela. Quando voce esta na metade do caminho, uma das cabe<;as se projeta e arranca o velo das suas maos. Mas, ao inves de atacar voce, a Hidra se encolhe de volta em um dos cantos. Voce segue para a porta cautelosamente. Va para 229 .
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      38:{
        text:`A porta abre para uma passagem curta, cal<;ada com pedras  pequenas.  A uma pequena  distancia mais adiante, uma porta elaboradamente entalhada assinala o fim da passagem. Mas, logo antes da porta, uma passagem lateral sai para a esquerda. Voce se aproximada porta,  tentando  escutar quaisquer sinais de vida do lado de dentro. Quando sua mão toca a  ma<;aneta,  uma voz diz: "Nao bata; simplesmente entre!" vinda de dentro. Voce entrara no aposento, conforme as instru<;6es  (va para 132) ou resolvera desistir desse aposento e tomar a passagem que sai para a esquerda (va para 306)?
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      39:{
        text:`Voce pega o Vidro e, ao fazer isso, os Ganjees ficam ofegantes. "Racknee!" diz uma voz. "Voce voltou!" E com estas palavras; uma mão invisfvel arranca o vidro das suas maos, coloca-o no chão e abre a tampa. 0 Homem-Aranha volta-se na sua dire<;ao e sol ta um pequeno grunhido. Voce desembainha a sua espada quando a fera avan<;a a passos rapidos para voce, furiosamente. Voce tera que lutar contra esta criatura:

        // HOMEM-ARANHA	HABILIDADE 7	ENERGIA5
        
        // Logo que o Homem-Aranha conseguir atingir voce pela primeira vez, va para 208. Se  voce veneer sem que ele o fira, tera entao que lutar contra os Ganjees com a sua espada. Va para 248.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      40:{
        text:`Depois de varios minutos, a porta se abre lentamente, e uma criatura corcunda e deformada, com dentes podres, cabelos desgrenhados e roupas esfarrapadas, aparece na sua frente. "Sim senhor (heh, heh) - o que posso fazer pelo senhor?" rosna a criatura semi-humana."Estou sendo esperado", voce responde e passa por ele, atravessando a porta com confian9a. Ele fica um pouco surpreso com seu comportamento e gagueja, sem saber se entra em conflito com voce ou nao. "Onde ea recep9ao?" voce pergunta. Ele olha para voce de soslaio com um dos olhos e faz um gesto na dire9ao de uma bifurca9ao para a esquerda, a pouca distancia dali. Voce acreditara nele e tomara a bifurca9ao para a esquerda (va para 243) ou nao confiara nesta criatura imprevisfvel e tomara a bifurca9ao da direita (volte para 2)?
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      41:{
        text:`As tres mulheres se juntam, fazendo um cfrculo, e sussurram umas com as outras. Com um risinho, uma delas volta-separa  voce e diz: "Esta  bem, estranho,  n6s vamos ajuda-lo  no seu caminho." Ela fita voce com olhos frios de pedra e aponta primeiro para voce, e depois para a parede atras dela. 0 aposento fica escuro, voce sente uma sensa9ao de movimento  e, quando  a escuridao  clareia,  voce esta em outro aposento. Va para 257.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      42:{
        text:`Ela pisca, e os jatos de fogo desaparecem. 0 que voce oferecera a ela?


        // Um Espelho de Prata? Uma Escova de Cabelo?
        // Um Vidro contendo o Homem-Aranha?
        // Va para 138
        // Va para 91
        // Va para 223
        
        
        // Se voce nao tiver nenhuma dessas coisas, tera que dar alguma desculpa, dizendo que perdeu o presente, e voltar para a sacada, onde pode escolher a porta do meio (va para 64) ou a porta mais distante (va para 304).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      43:{
        text:`Quando voce lan9a o encanto, ele afrouxa o aperto. Gradualmente, sua força diminui, ate que ele acaba por soltar o aperto e cai para tras, ofegante, no chão. Desconte mais um ponto de ENERGIA enquanto trata de seu bra90 ferido e risque o Encanto da Fraqueza de sua lista. Voce pode prosseguir no seu caminho. Volte para 14.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      44:{
        text:`0 aposento para de sacudir e voce cai no chão. 0 armario das armas esta trancado, mas voce pode arrebentar a fechadura. Ou pode tirar a sua mochila e procurar uma arma para usar. 0 que voce fara:


        // Escolher uma arma do armario? Pegar um artefato na mochila?
        // Va para 353
        // Va para 277
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      45:{
        text:`Se seu estomago aguentar, voce podera experimentar:


        // Um pouco da came pendurada Um peda90 de fruta
        // Uma fatia de queijo
        // Um naco de pao
        // Va para 166
        // Va para 313
        // Va para 253
        // Va para 97`,
        options: [
          {text:``, goTo:0},
        ]
      },
      46:{
        text:`Com um gesto, voce estica a mão para frente e aponta o chão sob os pes do feiticeiro. Fumac;a e chamas irrompem do chão. Balthus Dire salta para tras, um pouco admirado, e em seguida fecha os olhos para se concentrar.  Ao se abrirem, voce ve um fogo que queima dentro das pr6prias pupilas, e ele avanc;a por entre as chamas que voce criou. Pegando um punhado de pedras em brasa, ele atira isso em voce. Voce se abaixa para se desviar (va para 195) ou pula para o lado (va para 74)?
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      47:{
        text:`Que Encanto voce usara:

        // Encanto de C6pia de Criatura? Encanto da Ilusao?
        // Encanto da Levitac;ao?
        // 47
        
        
        // Volte para 8
        // Va para 173
        // Va para 259
        
        
        // Se voce nao possuir nenhum <lesses encantos,  tera que recuar na direc;ao do  monumento  no centro do patio e se esconder dela (va para 209).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      48:{
        text:`"Nunca!" grita o feiticeiro, voltando das sombras para enfrentar voce. Dessa vez, e voce quern sente
        // o tremor do medo, ao ver que ele tambem se transformou - mas em uma criatura que poderia  fazer com que um Demonio do Fogo ficasse paralisado. 0  rosto de Balthus Dire tomou-se feio e com feic;6es de bruxa, e seus cabelos agora sao pequenas serpentes  que se contorcem  e soltam silvos. Voce fugira desta criatura (va para 232) ou avanc;ara com seu Tridente (va para 199)?
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      49:{
        text:`A criatura fica olhando fixamente para voce com ar inquisitivo, como se estivesse insegura em relac;ao a voce. Va para 255.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      50:{
        text:`Va para 164.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      51:{
        text:`Voce distribui loucamente golpes com sua espada, mas nao consegue atingir a criatura. Ou ela e
        // extremamente rapida, ou nao possui um corpo s6lido que possa ser atingido. Seus dentes estao agora rasgando a sua came, e voce sente sangue na pema. Voce tera que se proteger com sua magica ou enfrentar uma morte certa, trazida por esta criatura que nao se ve. Voce lanc;ara um Encanto da Forc;a (va para 301), um Encanto da Fraqueza (va para 159) ou, se nao quiser ou nao puder lanc;ar nenhum dos dois, ira para 280.
        
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      52:{
        text:`A porta abre e voce segue adiante, batendo-a para que se feche atras de voce. Pouca distancia a
        // frente, voce chega a um cruzamento de tres caminhos, no qual voce toma a passagem que vai na dire ao norte. Ela continua por varios metros, conduzindo a uma outra porta. Voce pode ouvir risos e vozes alegres do outro lado. Cautelosamente, voce abre a porta que da para um grande aposento, onde um grupo de mais ou menos doze criaturas, de todas as formas, tamanhos e cores, estao se
        // divertindo com jogos. Quando voce entra no aposento, uma voz grita: "Olhem esse deve ser Glaz­ Doz-Fut!", com o que todos eles cumprimentam  voce, convidando-o para juntar-se a brincadeira.
        // Evidentemente eles estao esperando alguem e confundiram  voce  com  o  convidado  que  esta faltando. Voce continua fingindo e junta-se a eles (va para 385) ou <lira a eles que estao enganados e tentara chegar ate a porta do outro lado do aposento (va para 227)?
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      53:{
        text:`"Para que eu quero suas amoras?" ela ri. "Meu apetite morreu com meu corpo!" E, quando voce olha mais de perto, pode ver que ela tambem nao e nada alem de um Fantasma. Ela flutua no ar, vindo na sua dire ao. Va para 194.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      54:{
        text:`Voce procura dentro de sua mochila. 0 que voce pegara:


        // Um Vidro de Unguento? Uma Mirfade de Bolso? Pe as de ouro?
        // Va para 287
        // Va para 160
        // Va para 27
        
        // Se voce nao tiver nenhuma, dessas coisas, tera que retornar para 104 e escolher de novo.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      55:{
        text:`Voce segue a passagem por algum tempo. Ela vira para a direita e acaba chegando a um beco sem safda. Voce pode retomar para a bifurca ao e tomar a outra passagem (va para 249) ou procurar passagens secretas (volte para 10).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      56:{
        text:`0 ELFO NEGRO que se aproxima de voce e raquftico e maltrapilho. Ele pergunta se voce e um convidado ou um aventureiro. Voce diz que e um convidado que veio ate embaixo para provar o vinho que ele guarda em sua famosa Adega de Vinhos. Com um certo orgulho, ele mostra a voce as garrafas de safras que ele guarda para seu Senhor, o Feiticeiro. Algumas delas, ele afirma, possuem poderes magicos. Ele pergunta se voce nao quer experimentar o vinho. Voce prefere provar:


        // 0 Vinho Tinto?
        // 0 Vinho Branco?
        // 0 Vinho Rose? Recusar a oferta dele e
        // Va para 120
        // Va para 163
        // Va para 334
        // seguir adiante no seu caminho?	Va para 95
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      57:{
        text:`Teste a sua Sorte. Se voce tiver sorte, va para 150. Se nao tiver, va para 233.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      58:{
        text:`Quando voce entra, os Gremlins esvoa9am e guincham excitados, depois voam, passando por voce e saindo pela porta noite adentro. Voce agora esta sozinho com os calices. Voce se arriscara a beber alguma coisa? Seo fizer, escolhera:


        // 0 liquido claro?
        // 0  liquido vermelho?
        // 0 liquido leitoso?
        // Va para 298 Va para267 Va para 92
        
        
        // Ou saira e prosseguira na dire9ao da Cidadela (va para 156)?
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      59:{
        text:`Eles ficam revoltados com seu presente e correm para o canto do aposento, se escondendo embaixo das camas. Um tanto desconcertado com o comportamento deles, voce deixa o vidro no chão e segue na dire9ao da porta do outro lado do aposento. Va para 140.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      60:{
        text:`As criaturas ficam desconfiadas quando voce as pressiona, buscando informa96es. 0 Anao salta rapidamente de pe, brandindo uma clava de madeira, enquanto o Goblin e o Orea pegam espadas e olham com raiva para voce. A namorada do Goblin grita e recua varios passos, enquanto os outros avan9am na sua dire9ao. Voce tera que lutar contra eles. Voce pode usar um Encanto Magico:


        // Encanto da Levita9ao Encanto da Ilusao
        // Va para 33
        // Va para 295
        
        
        // Ou podera puxar a sua espada e lutar (va para 213).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      61:{
        text:`Voce avan<;a com sua espada. 0  Devlin para... e  salta sobre voce!.  Voce golpeia com sua espada, mas nao consegue fazer nenhum mal a criatura, que esta agora em cima de voce. 0 corpo
        // incandescente dele esta queimando a sua came e voce esta em grande agonia. Ainda assim, ele se mantem firme e voce desmaia em choque. Voce cai no chão para nunca mais acordar, e o Devlin s6 larga quando ja tern certeza de que seu corpo esta queimado alem de qualquer possibilidade de recupera9ao. Afinal, voce sera mesmo a pr6xima refei9ao das criaturas da Torre Negra...
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      62:{
        text:`Como Gargula fora de combate, voce decide investigar a caixa no pedestal da criatura. Teste a sua Sorte. Se voce tiver sorte, pode levar a bolsa com dez Pe9as de Ouro trancada la dentro. Se nao tiver sorte, nao consegue abrir a caixa. Saia do aposento e va para 140.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      63:{
        text:`Voce vai  ate o indice remissivo e  verifica  a  referencia.  Ao chegar  a pagina correta,  voce fica
        // decepcionado ao descobrir que a seção foi arrancada do livro! Voce pode olhar os Calacorms (va para 263) ou verificar os Miks (va para 135).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      64:{
        text:`Voce ouve junto a porta e consegue escutar vozes esgani9adas rindo e brigando. Voce experimenta
        // a ma9aneta ea  porta abre. 0 lado de dentro e um aposento de cores vivas. Ha umas poucas camas
        // pequenas em um canto, e, espalhados  pelo chão, ha pequenos bonecos de  varias criaturas  brutas. Junto a parede do  lado direito  ha uma caixa, e  logo  adiante da caixa  uma  porta.  No meio  do
        // assoalho, e olhando para voce com curiosidade, estao tres pequenas criaturas. Tern aparencia humana, mas possuem pele verde, orelhas pontudas e olhos muito apertados. Qual sera a sua atitude? Voce:
        
        
        // Desembainhara a sua espada e se preparara para lutar contra eles? Procurara em sua mochila alguma coisa para oferecer a eles?
        // Caminhara confiantemente atraves do aposento para a porta do outro lado?
        // Va para 286
        // Volte para 3
        // Va para 366`,
        options: [
          {text:``, goTo:0},
        ]
      },
      65:{
        text:`Voce se ajoelha diante dele e se curva. Ele e de fato o seu senhor agora. Voce falhou na sua missao.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      66:{
        text:`Eles olham um para o outro e conversam. Um deles se adianta e estende a mão com um pequeno cubo, que parece ter sido feito de algum tipo de pao ou bolo. A pedido dele, voce p6e isso na boca e mastiga. Quando engole, voce se sente subitamente forte de novo. Retorne a seus nfveis lniciais de HABILIDADE  e ENERGIA e  acrescente  um ponto de SORTE.  Voce agradece  a ele pela comida e a todos pela companhia, depois parte na dire9ao das portas. Va para 270.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      67:{
        text:`Voce come9a a sua luta contra a criatura. Seu primeiro golpe e certeiro e corta uma das seis cabe9as. As outras cinco avan9am sobre voce e, para seu horror, mais duas cabe9as crescem onde estava antes a cabe9a mortal Uma das cabe9as morde profundamente o seu bra90. Voce perde quatro pontos de ENERGIA. Sua espada obviamente nao vai adiantar muito. Voce usara um Encanto de C6pia de Criatura (va para 143) ou alguma coisa de sua mochila (va para 226)?
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      68:{
        text:`"Por qual eu iria, hein?" ele considera. "Vamos ver... eu nao iria por uma das duas portas a esquerda da porta de ma9aneta de cobre, nem a porta a direita da de ma9aneta de bronze." Qual delas voce
        // escolhera:
        
        
        // A  porta de ma9aneta  de latao? A porta de ma9aneta de cobre?' A porta de ma9aneta de bronze?
        // Va para 207
        // Volte para 22
        // Va para 354
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      69:{
        text:`A criatura nao e de muita conversa, mas voce consegue descobrir que esta nas masmorras dos subterraneos da Torre Negra e que provavelmente nunca sera libertado, a nao ser que se ja dado aos Ganjees para o divertimento deles. Quando voce pergunta por Balthus Dire, ele fica calado. E melhor voce tentar usar um Encanto para conseguir sair dessa prisao. Va para 193.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      70:{
        text:`Voce voa para cima e mantem-se longe dos botes dele, mas ele nao sai do lugar onde esta, e nao ha meio de voce contoma-lo voando para chegar a porta. 0  Encanto acaba por se esgotar e voce tern
        // que enfrenta-lo de novo. Voce:
        
        
        // Usa um Encanto da Fraqueza? Usa um Encanto da força?
        // Desembainha a sua espada?
        // Va para 307
        // Va para 264
        // Va para 325
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      71:{
        text:`Voce desembainha a sua espada e golpeia o tentaculo. 0 tentaculo nao ataca de volta, como uma criatura normal, mas, ao inves disso, esta tentando arrastar voce para um grande buraco no chão, que esta se abrindo em torno da  base dele. Voce nao precisa jogar dados para o Tentaculo, uma vez que ele possui uma Forfa de Ataque de 15 e um fndice de ENERGIA de 2. Jogue para o combate de maneira normal, mas, se sua pr6pria Forfa de Ataque ficar abaixo de 15, nao subtraia pontos de sua pr6pria ENERGIA. Porem, se voce nao derrotar a criatura em tres Series de Ataque, ela conseguira arrastar voce para seu covil, e sua aventura tera terminado. Se voce de fato derrota-la, podera arrancar o tentaculo de sua perna e prosseguir para a entrada principal da Torre Negra. Va para 218.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      72:{
        text:`A sorte nao esta do seu lado. Seu primeiro olhar na dire9ao da criatura com serpentes na cabe9a foi suficiente para selar o seu destino. Voce grita de angustia ao sentir que suas juntas come9am a endurecer, e seus membros se tomam pesados e incontrolaveis. Sob a a9ao do olhar da G6rgona, que transforma tudo em pedra, voce luta para manter o equilfbrio - mas acaba perdendo-o e cai no chão. Seu corpo petrificado se despeda9a com o impacto, e voce agora jaz feito em cacos diante de Balthus Dire. Voce falhou na sua missao.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      73:{
        text:`Voce pode tentar se livrar da Cobra de Esgoto, ou mante-la a distancia com um encanto. Se decidir lutar contra a criatura, resolva esta batalha:

        // COBRA DE ESGOTO	HABILIDADE 6	ENERGIA 7
        
        // Se veneer, va para 112.
        
        // Se quiser lan9ar um Feiti90 da força, acrescente tres ao numero obtido nos dados para sua Forfa de Ataque. Se quiser lan9ar um Feiti90 do Fogo, va para 282
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      74:{
        text:`Ao pular de lado, os olhos do feiticeiro seguem voce - e a bola de fogo dele tambem. Ela atinge voce no peito, derrubando-o no chão. A queimadura custara 4 pontos de ENERGIA. Se voce ainda estiver vivo, podera preparar outro Encanto para o seu contra-ataque. Va para 377.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      75:{
        text:`Voce cruza a soleira, fecha a porta atras de voce e espera algum tempo. Ouve as passadas se aproximarem e chegarem ate a porta. Uma tagarelice incompreensfvel do outro lado da porta acaba diminuindo ate desaparecer, e  voce ouve novamente as passadas, desta vez se afastando  de voce. Voce toca a campainha para chamar o mordomo. Volte para 40.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      76:{
        text:`Enquanto voce estava tirando suas Amoras da mochila, Balthus Dire ficou se concentrando em um Encanto. Ele Levanta os olhos e explode numa gargalhada.  "Amoras  do  sono!", ele  grita. "O que voce espera que eu fac;a? Ponha tudo na boca?" Ele estala os dedos e seu Encanto se materializa. Va para 191.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      77:{
        text:`Balthus Dire fica surpreso com seu sucesso. "Entao!" ele exclama. "Voce se acha mais forte do que os outros, hein?" Voce pode agir rapidamente e lanc;ar um Encanto sobre ele. Qual voce escolhera:


        // Um Encanto da Percepc;ao Extra-Sensorial? Um Encanto do Fogo?
        // Um Encanto de C6pia de Criatura?
        // Va para 187
        // Volte para 46
        // Va para 349
        
        
        // Se nao tiver nenhum <lesses, ou preferir nao lanc;ar um encanto, va para 355.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      78:{
        text:`Seus olhos seguem voce ate a janela. Suas pupilas tornaram-se brancas como o leite. Ele inclina sua cabec;a para tras, pisca uma vez e geme. Jogando a cabec;a para frente, ele agora olha fixamente para voce com olhos que se tornaram cor de prata brilhante! Seu olhar e hipn6tico, e voce tera que agir rapidamente. Voce:


        // Esconde-se por tras de uma das cortinas?
        // Arranca uma das cortinas e joga por cima da cabec;a dele? Procura em sua mochila alguma coisa que possa usar?
        // Va para 324
        // Va para 124
        // Va para 277`,
        options: [
          {text:``, goTo:0},
        ]
      },
      79:{
        text:`No canto mais distante do patio, voce encontra  um  arbusto  diferente,  com galhos contorcidos  a partir da haste central, como se estivesse em agonia. As folhas tern a forma de diamantes, com pequenas amoras por baixo, chatas e com forma de pastilhas. Voce pode levar algumas amoras com voce na sua aventura e avanc;ar um pouco mais ao longo do muro para a entrada principal  da Cidadela. Va para 218.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      80:{
        text:`Quando, voce salta por cima da mesa, o feiticeiro gira em torno de si mesmo. Voce tropec;a e desaba no chão, ao ver que ele se transformou em uma criatura bem mais perigosa do que voce. Seu rosto agora e ode uma bruxa, e seu cabelo uma massa de serpentes que se contorcem e silvam para voce. Voce continua o seu ataque (va para 199) ou foge dele (va para 232)?
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      81:{
        text:`0 Macaco-Cachorro ri e diz a voce que Kylltrog e um preguic;oso que nao serve para nada, e que nao vale a pena salva-lo. Voce solta um suspiro de alivio quando ele caminha de volta e grita para chamar o porteiro. Alguns momentos depois, o porteiro aparece e abre uma pequena porta para deixar voce entrar. Va para 251.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      82:{
        text:`Voce cai no fosso. Freneticamente, voce tenta agarrar a borda ao cair, mas sem exito. Voce despenca pelo poc;o de ponta cabec;a, e sua ultima lembranc;a e sua queda final ao chocar-se contra o solo la embaixo, o que mata voce instantaneamente. Voce falhou na sua missao.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      83:{
        text:`0	homem e um comerciante. Voce diza ele que voces sao companheiros de profissao,
        // e voces conversam por algum tempo sobre pre<;os e lucros dentro da Torre Negra. Ele diz que nunca permitiram que ele entrasse nos andares acima do terreo da Cidadela, uma vez que os comerciantes sao bastante desprezados la dentro. Voce se despede e segue adiante. Va para 245.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      84:{
        text:`Ao examinar as prateleiras, voce ouve urna grande movimenta ao atras de voce. Voce se vira rapidamente, a tempo de ver criaturas semelhantes a Orcas, armadas e em guarda, materializaram-se uma apos
        // a outra diante de voce. Elas avan am e cercam voce.0	mais alto chega o rosto perto do
        // seu e solta um bafo de respira<;ao diretamente sobre os seus olhos.0	aposento gira e voce desaba no chão, inconsciente. Va para 234.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      85:{
        text:`Voce lan<;a seu Feiti<;o e espera que a bola de fogo apare<;a na  ponta da sua tocha. A tocha se acende, apenas o suficiente para que voce veja que ha uma porta do outro lado do aposento, mas depois se apaga de novo. Os Ganjees riem mais uma vez dos seus esfor os para engana-los. Voce sente uma pancada na cabe a que volta a derruba-lo no chão. Voce perde dois pontos de ENERGIA. Voce:

        // Tentara um Encanto da Ilusao'? Va para 395 Pegara alguma coisa na sua mochila? Va para 322 Desembainhara a sua espada? Va para 248
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      86:{
        text:`Quando voce lan a o encanto, as duas criaturas ficam olhando espantadas enquanto voce flutua no
        // ar, passa sobre suas cabe<;as na dire<;ao do portao, sobre a muralha e para o interior da Cidadela.
        // Voce aterrissa do lado de dentro e olha a sua	volta. Va para 251.
        // l\1as tome cuida do! Eles com certeza avisarao os guardas da Cidadela.
        // Risque o Encanto da Levita<;ao que  acabou de usar na sua Folha de Aventuras.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      87:{
        text:`Voce cria urna grande bola de fogo nas suas maos ea lan a sobre a criatura. Nao adianta nad,a. Gargula da um soco em voce, e o golpe joga voce no chão. Desconte dois pontos de ENERGIA. E
        // melhor evitar esta fera, sair do aposento e tentar a porta do meio da sacada. Va para 64.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      88:{
        text:`Aporta e extremamente forte, mas cede mo pouco quando voce a golpeia. Voce pode tentar golpea­ la tanto tempo quanto quiser, ate que ela ceda de todo. Jogue um dado para cada tentativa. Se obtiver um seis, voce consegue (va para 292). Para cada tentativa sem exito, voce perdera um ponto de ENERGIA. Se voce resolver nao agir dessa maneira, podera usar o Encanto da For<;a (va  para 170), tentar a porta do meio (va para 64), ou a porta na outra extremidade da sacada (va para 304).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      89:{
        text:`A chave gira, a fechadura se abre e voce olha dentro da caixa.
        // La dentro ha um vidro grande que contem uma aranha.
        // Mas naoe uma aranha comum; esta criatura tern o rosto de um velho. Ele
        // esta falando com voce, mas voce nao consegue entender o que ele esta dizendo. Um barulho chama a sua aten ao, voce se vira eve que a porta por onde voce entrou esta come ando a abrir. Voce poe o vidro na sua mochila e parte para a outra porta. Va para 237.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      90:{
        text:`A passagem se alarga, e voce esta agora andando ao longo de um rio que corre. Bern a frente, ha uma mulher que parece estar lavando roupa. Ela tern uma cesta com roupas a seu lado, e ha varios
        // conjuntos de ceroula e camiseta de baixo pendurados em um varal atras dela. Voce:
        
        
        // Desembainhara a sua espada e avan9ara, pronto para a luta?
        // Cumprimentara ela e tentara estabelecer uma conversa9ao?
        // Usara um Encanto de Percep9ao
        // Extra-Sensorial para descobrir quern ela e?
        
        // Va para 176
        
        // Va para 21
        
        // Va para 329`,
        options: [
          {text:``, goTo:0},
        ]
      },
      91:{
        text:`Ela olha para a sua oferta e seus olhos se arregalam. "Deixe-me ver isso, ela ordena. Voce avan9a cuidadosamente na dire9ao dela e mostra a escova. Ela pega o objeto e passa varios minutos admirando-o. - "Isto e de fato uma obra de arte", ela diz, e se levanta da cama para experimenta-la em frente ao espelho. Ao escovar os cabelos dela, eles assumem um brilho incomum, cintilando suaveme nte. Ela fica fascinada com seu presente, e esta e a sua chance de sair sem ser notado pela porta existente no canto mais distante. Voce pode tentar levar com voce um Velo de Ouro que se encontra sobre a cama. Teste a sua Sorte. Se tiver sorte, consegue apanha-lo rapidamente e pode sair pela outra porta (va para 140). Se nao tiver sorte, voce pode Testar a sua Sorte de novo ate que finalmente tenha sorte. Ou, sea sorte nao estiver do seu lado, podera ignorar o objeto que atrapalha voce e sair de qualquer modo (va para 140).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      92:{
        text:`0 lfquido leitoso cheira  bem. Voce toma  um gole e come9a  a sorrir.  Da um gole maior  e  explode em gargalhadas - por motivo nenhum! Nao e de se estranhar que os pequenos Grernlins estivessem gostando tanto. Com a cabe9a leve e de born humor, voce sai do aposento para continuar em seu caminho para a Cidadela . Va para 156 e acrescente dois pontos de ENERGIA por este incidente reconfortante.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      93:{
        text:`Do lado de fora, voce olha para sua garrafa. E uma garrafa de Essencia de Erva de Porco,
        // aparentemente util para repelir criaturas de base em pedra. Isso pode ser util, e voce a guarda cuidadosamente em sua mochila. Seguindo em frente pelo corredor, voce chega a uma outra porta, que abre, deixando que voce passe para um grande aposento.Va para 169.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      94:{
        text:`Voce sente o seu pr6prio poder crescendo. Voce corre na dire9ao da porta ea golpeia firme como ombro... mas ela nem se mexe! Voce perde um ponto de ENERGIA pela contusao e bate com força para chamar o guarda. Va para 118.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      95:{
        text:`No lado mais distante da Adega de Vinhos, ha uma porta de madeira, que voce experimenta. Ela abre para uma passagem que conduz adiante por varios metros. Va para 367.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      96:{
        text:`Eles aceitam a sua oferta e convocam o porteiro, que abre uma pequena porta dentro da porta levadi9a para deixar voce entrar.  Voce os deixa discutindo  por causa da pepita de ouro. Va para 251.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      97:{
        text:`0 pao esta bastante seco e sem gosto. Na verdade, esta muito seco - tao seco que logo voce esta desesperado por alguma coisa para beber! Sua boca esta ressequida e voce procura freneticamente entre os alimentos do aposento algum lfquido. Mas nao ha nada para aplacar a sua sede. Voce tern que deduzir um ponto de HABILIDADE de seu fndice atual, ate que voce encontre algum tipo de lfquido que possa beber (beber o lfquido mencionado nao precisa ser necessariamente dado como
          // uma op9ao -  pode ser descrito apenas como estando presente em um aposento). Voce pode agora sair do aposento, ou pela porta da parede do lado esquerdo (volte para 13), ou pela porta oposta a
          // que voce usou para entrar (va para 281).
          `,
        options: [
          {text:``, goTo:0},
        ]
      },
      98:{
        text:`0 GOLEM que avan9a na sua dire9ao e uma criatura que se move com lentidao, e voce alcan9a facilmente as caixas. Enquanto voce luta com as fechaduras, o GOLEM chega ate voce. Voce pode:


        // Desembainhar a sua espada e lutar contra a criatura Lan9ar um Encanto do Fogo
        // Lan9ar um Encanto de C6pia de Criatura
        // Deixar as caixas de lado e correr para a porta
        // Va para 303
        // Volte para 4
        // Va para 190
        // Va para 237
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      99:{
        text:`Voce vai pela porta da esquerda (volte para 52) ou pela porta da direita (volte para 38)?
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      100:{
        text:`Voce tern um Encanto da Levita9ao? Se tiver, e melhor voce usa-lo agora para flutuar para fora do po90. Se voce levitar, podera continuar pela muralha  na dire9ao do canto do patio (volte para 79). Se nao, va para 276.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      101:{
        text:`Uma replica da criatura se materializa entre voces dois. A uma ordem sua, a batalha come9a: GARGULA	HABILIDADE 9	ENERGIA 10
        // Se a sua cria9ao veneer, volte para 62. Se o Gargula que voce criou perder, voce resolve nao
        // enfrentar o Gargula sozinho e sai do aposento, tentando a porta no meio da sacada. Volte para 64.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      102:{
        text:`Eles simpatizam com o seu pedido. Tres deles voltam-se na dire9ao do outro e, com 6bvia
        // relutancia,  e,  ste  ultimo  tira  um amuleto  que esta em seu  pesco90.  "Isso",  ele  diz,  "e  um  Amuleto
        // Encantado. E feito de metal, mas ha uma J6ia de Luz incrustada nele. Os Ganjees temem este
        // talisma, mas sem duvida tentarao enganar  voce  para que  o  perca. Ele tern sido por algum  tempo uma propriedade da qual me orgulho, mas n6s, Escoteiros, somos obrigados por nossos deuses a ajudar, por isso eu o dou a voce." Voce lhe agradece e  coloca  o  Amuleto  Encantado  em seu pescovo. Voce pode agora sair do aposento, mas talvez  se sinta  na obriga9ao,  por  causa  deste grande presente, de dar a ele alguma coisa em troca. Se  voce tiver Pevas de  Ouro, resolva quantas voce dara a ele, retire-as da sua lista e va para 183. Se voce nao tiver ouro, mas der a ele um artefato que tiver recolhido, risque isso da sua lista e va para 396. Se  voce nao puder ou nao quiser dar a ele um presente em troca, va para 270.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      103:{
        text:`Voce lan9a o seu Encanto - mas nada acontece! Voce continua caindo torre abaixo e finalmente se estatela em uma queda fatal no chão la embaixo. As horriveis criaturas roubaram sua magica, e agora tambem sua vida. Voce fracassou na sua missao.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      104:{
        text:`Voce experimenta a mavaneta, e ela gira. A porta esta empenada, e voce tern que empurra-la para que abra. 0 aposento no interior e algum tipo de sala de estar, com mesas, cadeiras, estantes e uma
        // colevao de cabevas de,  animais empalhados na parede. De repente, uma das cabevas de animais se
        // vira e olha para voce. E alguma especie de cachorro e late alto, em tom de advertencia, tanto para
        // voce quanto para qualquer um de seus semelhantes que possa estar suficientemente pr6ximo. Enquanto voce esta olhando para a cabeva, nao ve um tapete que levanta voo do chão e passa zunindo por voce, raspando no seu ouvido. Voce se vira rapidamente e ve uma das cadeiras lentamente se reconstituir na forma de um homem alto. "O que voce veio fazer aqui?", ele pergunta, com voz retumbante. Voce:
        
        
        // Tentara falar com ele? Usara um de seus Encantos?
        // Procurara em sua mochila uma arma ou um presente?
        // Saira do aposento rapidamente e experimentara a outra porta?
        // Va para 266
        // Va para 310
        // Volte para 54
        // Volte para 25
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      105:{
        text:`0 vinho e bastante amargo e, ao saborea-lo em sua boca, voce sente uma sensa9ao de ardencia. Voce cospe o vinho no chão e, para sua surpresa, um jato de chamas irrompe dos seus labios! Voce pode levar uma amostra do vinho com voce e usa-lo ao inves de lanvar um Encanto do Fogo, sempre que a opvao de Encanto do Fogo for dada. Voce segue adiante na dire9ao de uma porta que leva mais para o interior da adega. Volte para 95.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      106:{
        text:`Ela ri outra vez e diz a voce que gosta de ver pessoas ficarem zangadas. De born humor, ela acompanha voce por alguns metros. A conversa e dificil. Ela ve alguma coisa nas sombras distantes e sai subitamente para investigar, permitindo que voce avance para a entrada principal da Cidadela. Va para 218.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      107:{
        text:`Voce pegou uma, duas, tres ou quatro cabec;as no seu lac;o. Estas cabec;as lutam para se libertar, mas a criatura continua a avanc;ar. Voce comec;a a  entrar em panico, enquanto  tenta decidir o que fazer em seguida. Va para 184.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      108:{
        text:`Voce agarra a corda firmemente, recua e toma impulso na direc;ao do  rio putrido. Subitamente, a corda passa a se movimentar e se contorcer com vontade pr6pria! Voce a larga rapidamente e cai no chão. Acorda cai por cima de voce e se enrola em volta de voce. Voce compreende que nao e uma corda, mas, na realidade, uma longa COBRA DE ESGOTO,  que se enrosca em  tomo do seu corpo e de seu pesco90. Volte para 73.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      109:{
        text:`A criatura faz força contra a barreira de seu Encanto do Escudo. Para seu horror, ela e tao forte que realmente consegue romper o escudo! Esta agora em cima de voce, e voce tern que desembainhar a sua espada. Volte para 30.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      110:{
        text:`Teste a sua Sorte. Se tiver sorte, voce escolhe outro nome que e conhecido deles e eles chamam o porteiro, que acaba aparecendo para deixar voce entrar (va para 251). Se nao tiver sorte, fez outra tentativa errada, e eles avanc;am na sua direc;ao com suas armas prontas. Voce tera que lutar contra eles (va para 288).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      111:{
        text:`Voce conseguiu desviar os olhos da criatura e agora recua para o canto, protegendo o rosto com o bra90. Mas o que voce pode fazer? Se tiver um Espelho de Prata Polida, podera  tira-lo  de  sua mochila e segura-lo na direc;ao do feiticeiro (va para 347). Se nao tiver, va para 153.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      112:{
        text:`Voce se desvencilha da Cobra de Esgoto morta e tenta atravessar a agua. Voce chega do outro lado sem maiores incidentes, mas esta com certeza ansioso para tomar um banho rapido! Voce continua ao longo da passagem ate chegar a uma encruzilhada, onde pode seguir em frente ou tomar a passagem da esquerda. Se for para a esquerda, va para 212. Se quiser seguir em frente, va para 367.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      113:{
        text:`Voce lan9a o Encanto da Fraqueza sobre o feiticeiro. Ele interrompe seus passos e olha para voce. Sua expressao se transforma em uma mascara de dor, e  seus ombros sacodem  violentamente. Algum tipo de como9ao intema terrfvel esta tendo lugar dentro dele. Voce quer esperar para ver o que acontece (va para 388) ou prefere desembainhar a sua espada e avan9ar (va para 145)?
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      114:{
        text:`Voce aponta para a base do tentaculo e lan9a o seu encanto. Um rolo de fuma9a e um clarao luminoso irrompem do buraco no solo. Um tremor percorre o tentaculo e, felizmente, ele afrouxa. Quando ele retorna para dentro do solo, voce esfrega sua pema para recuperar a circula9ao e depois parte na dire9ao da entrada principal da Cidadela novamente. Lembre-se de descontar seu Encanto do Fogo e va para 218.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      115:{
        text:`A sua situa9ao nao e boa. Balthus Dire avan9a na sua dire9ao e esta quase em cima de voce. Va para
        // 373.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      116:{
        text:`Suas maos super poderosas agarram a ma9aneta e puxam. Ela sai na sua mao. Voce fecha a mão e desfere um soco no meio da porta. A madeira racha e quebra, permitindo  que voce entre  no aposento do outro lado. Va para 210.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      117:{
        text:`Quando voce puxa a sua arma, o feiticeiro faz o mesmo. Voces estao agora pr6ximos demais para que qualquer um dos dois possa usar magica e terao que terminar a batalha na luta de espadas mais dificil de toda a sua vida. Va para 337.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      118:{
        text:`A porta abre e uma criatura grande e abrutalhada sai. Possui um chifre pontudo no meio da testa, e sua pele parece ser recoberta de armadura.  Rosna para saber o que voce quer e exige a senha antes de deixar que voce entre. Voce sabe a senha? Se souber, va para 273. Se nao, voce tera que forçar a sua entrada (va para 198).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      119:{
        text:`Voce se  vira  para  enfrentar  o  poderoso  feiticeiro.  Mas  ele  desapareceu.	Voce  gira  sobre  os
        // calcanhares e o ve de pe atras de voce com um punhal afiado pronto para golpear. Voce tenta saltar para esquivar-se, mas e tarde demais. A lamina se enterra nas suas costas... Voce falhou na sua
        // missao.`,
        options: [
          {text:``, goTo:0},
        ]
      },
      120:{
        text:`Voce prova o vinho e balan9a a cabe9a afirmativamente. A safra e excelente de fato, com um sabor revigorante e rico. Voce experimenta um pouco mais e come9a a se sentir com a cabe9a leve. Voce pode acrescentar dois pontos de ENERGIA e tres pontos de SORTE porter encontrado uma bebida excelente a esse ponto. Voce agradece ao Elfo e segue adiante. Volte para 95.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      121:{
        text:`Quando voce parte para a porta, ela abre repentinamente a sua frente. Impossibilitado de travar seu
        // impulso, voce entra pelo aposento de cabe9a e acaba trope9ando e rolando pelo chão ate parar. Voce perde um ponto de ENERGIA por ter arranhado o seu joelho no chão de pedra. Va para 257.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      122:{
        text:`Voce tenta um ardil simples, mas ela nao se deixa enganar por ele. Ela nao permitira que voce siga adiante, a nao ser que voce use sua magia. Volte para 47.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      123:{
        text:`Voce se concentra, e imagens do Calacorm atravessam a sua mente. Voce ve um prato cheio de serpentes mortas, depois uma criatura de aparencia semelhante com pele cinzenta - possivelmente a
        // femea de sua especie -	depois sente uma grande sensa9ao de prazer ao ver uma infeliz criatura amarrada a parede e tendo seus pes queimados por uma tocha incandescente. Em seguida, voce ve o
        // prato de serpentes de novo. Esta criatura evidentemente pensa sobre pouca co, isa alem dos prazeres simples de sua vida miseravel, e voce nao sabera muito sobre como escapar. E melhor voce tentar
        // um Encanto do Ouro dos Tolos (va para 211) ou um Encanto da Ilusao (volte para 35). Se nao tiver nenhum deles, va para 283.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      124:{
        text:`Quando a cortina cai, a luz do dia penetra atraves da janela. Voce compreende que perdeu toda a
        // no9ao de tempo desde que entrou na Cidadela. 0 sole um alfvio bendito depois das muitas horas
        // que passou na escuridao. Um baque faz com que se volte na dire9ao de seu adversario. Ele esta cafdo como um fardo no chão. Voce da um passo a frente, e ele solta um grito de gelar o sangue nas
        // veias!  "A  cortina!  ... S, eu  idiota!"...  ele  diz,  ofegante,  com  uma  voz  que  evidencia  fraqueza  e  a proximidade da morte. E 6bvio que a luz do dia que voce deixou entrar esta minando suas forças
        // rapidamente,e ele tenta em desespero se arrastar ate as sombras. Mas esta fraco demais para ir longe, e desaba no chão de bru9os. Va para 400.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      125:{
        text:`Quando voce come9a a correr, tres flechas partem na sua dire9ao, vindas de nenhum lugar. Teste a sua Sorte. Se tiver sorte, todas elas erram o alvo, e voce chega ate o monumento e se abaixa atras da pedra. Se nao tiver sorte, uma das flechas penetra em seu ombro, fazendo com que voce perca cinco pontos de ENERGIA antes de chegar ao abrigo do monumento. Va para 209.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      126:{
        text:`Voce para para considerar a situac;ao, em panico. A sua frente, a passagem se  bifurca  para  a esquerda e para a direita. Enquanto voce esta tentando  decidir que direc;ao tomar, tres criaturas
        // surgem da passagem do lado esquerdo. Chamar os rufdos que voce ouviu de "passos" nao e inteiramente preciso, como voce vera. Va para 316.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      127:{
        text:`Ela levanta a cabec;a e solta um chamado no ar. Voce interrompe seus passos ao ver as roupas lavadas no varal sacudirem-se no ar. Saindo do varal por si mesmas, diversas pec;as de roupa deslocam-se pelo ar na sua direc;ao e, ao chegarem perto, voce consegue distinguir corpos fantasmag6ricos com rostos ha muito ja mortos dentro das roupas. "Protejam-me, meus filhos!" ela grita - e de repente as roupas cercam voce. Algumas atacam com pancadas de suas mangas, que causam uma ardencia dolorosas. Um par de brac;os se enrosca em tomo de seu pescoc;o, tornando a respirac;ao diffcil e apertando cada vez mais. Voce distribui golpes com sua espada, mas isso causa
        // pouco dano aos FANTASMAS. 0 aperto o estrangula cada vez mais, e voce tera que usar a sua magia para se libertar, a nao ser que tenha alguma coisa em sua mochila para oferecer a mulher. Voce:
        
        
        // Oferecera algumas Pequenas amoras a ela? Oferecera um Espelho de Prata a ela?
        // Usara um Encanto do Fogo?
        
        // Se voce nao tiver nenhuma dessas coisas, va para 194.
        // Volte para 53
        // Va para 387
        // Va para 240`,
        options: [
          {text:``, goTo:0},
        ]
      },
      128:{
        text:`'A medida em que o Encanto comec;a a ter efeito, voce recebe varios pensamentos, conforme eles vao passando pela mente da criatura. Alem de um sentimento de medo de que seu capitao possa descobrir que ele estava dormindo em seu posto e permitiu que um invasor entrasse, ha uma estranha reverencia por uma Escova de Cabelo entalhada,  a qual aparentemente esta em algum lugar do aposento. Mas isso e tudo que voce recebe, e voce tera agora que se defender de seu ataque com alguma coisa.

        // Voce usara:
        
        
        // Sua espada?
        // Um Encanto do Ouro dos Tolos? Um Encanto de C6pia de Criatura? Um Encanto da Fraqueza?
        // Va para 336
        // Volte para 36
        // Va para 262
        // Va para 152`,
        options: [
          {text:``, goTo:0},
        ]
      },
      129:{
        text:`Voce luta com a caixa por algum tempo, tentando abri-la. Voce puxa da espada e golpeia a caixa, mas a unica coisa que consegue e fazer sua espada perder o fio - de agora em diante, voce tera que descontar um ponto de seu fndice de HABILIDADE. Voce nao consegue abrir a caixa.

        // Voce:
        
        
        // Tentara abrir a primeira caixa? Tentara abrir a terceira caixa?
        // Deixara as caixas de lado e seguira em frente?
        // Va para 260
        // Va para 370
        // Va para 237`,
        options: [
          {text:``, goTo:0},
        ]
      },
      130:{
        text:`0  encanto nao tern qualquer efeito. Risque-o da sua lista e desembainhe a sua espada. Va para 333.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      131:{
        text:`Voce rapidamente desembainha a sua espada, apontando-a na dire<;ao do Duende. Ele lan<;a um olhar para a laminae, para seu horror, ela verga molemente a partir do cabo, pendendo para baixo como se fosse um cinto de couro. Parece que voce nao ira muito longe agindo com agressividade. Talvez seja melhor voce perguntar a ele o caminho para seguir adiante. Va para 348.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      132:{
        text:`Voce entra em um aposento que e evidentemente algum tipo de biblioteca. Ha livro do chão ate o teto em cada uma das paredes, e diversas mesas e cadeiras estao alinhadas no centro do aposento. Do outro lado, ha um homem de pele escura sentado, que levanta os olhos de um livro para olhar para voce por cima de 6culos estreitos. Ha uma porta atras dele. "Sim, o que e?" ele diz. "Que livro voce esta procurando?" Voce examina as varias estantes, que possuem legendas. Voce pedira a ele:


        // Biografias de Balthus Dire? Segredos da Torre Negra?
        // Criaturas do Reino da Rocha Escarpada?
        // Volte para 18
        // Va para 238
        // Vapara375`,
        options: [
          {text:``, goTo:0},
        ]
      },
      133:{
        text:`Voce lan<;a seu Encanto. Com sua for<;a recentemente adquirida, voce salta facilmente para o centro do aposento por cima do fosso e rompe a fechadura da area. Voce xinga ao ver que nao ha nada la dentro, a nao ser uma boa quantidade de chumbo para espingarda.  Voce salta, de volta rapidamente por cima do fosso na dire<;ao da outra porta, uma vez que o encanto esta se acabando. Teste a sua Sorte. Se voce tiver sorte, va para 206. Se nao tiver, volte para 82.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      134:{
        text:`Eles ficam admirados com sua audacia. Ao inves de esperar que eles falem, voce age agressivamente e exige saber como entrar na Cidadela. Eles apontam para a entrada principal, obviamente um tanto espantados com seus modos confiantes, e cochicham entre eles. 0 Orea diz a voce que sera preciso uma senha, "Cimitarra", para entrar. Voce pergunta a respeito do frasco de liquido dentro da caixa, o que faz com que eles fiquem agitados. Voce os pressionara mais para obter maiores informa<;6es sobre o frasco (volte para 60), vai deixa-los de lado para ir na dire<;ao dos dois homens que voce viu antes (va para 269) ou seguira adiante na dire<;ao da Torre Negra (va para 245)?
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      135:{
        text:`Os Miks sao mestres da ilusao, capazes de se transformarem em qualquer  forma  ou  ser  que quiserem. Nao se sabe ao certo qual ea sua verdadeira natureza, pois muito poucos os viram em sua forma natural, mas eles foram descritos por fontes bastante confiaveis como criaturas magras com aparencia de Elfos. Sao uma especie agressiva, mas sua arma favorita e o Punhal-Agulha (uma faca fina, como um estilete), como qual eles s6 podem atacar a curta distancia. Embora eles possam se transformar em qualquer coisa - homem, animal ou objeto - nao sao capazes de usar metais em seus disfarces. Eles tambem sao incapazes de lan<;ar suas ilus6es sobre outros objetos. Va para 326.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      136:{
        text:`Todas elas protestam veementemente, mas voce explica que tern suas ordens e comec;a a circular pela cozinha.

        // Voce investigara:
        
        
        // Os armarios?
        // 0 caldo no caldeirao?
        // 0 espeto que esta assando?
        // Volte para 17
        // Va para 167
        // Va para 389`,
        options: [
          {text:``, goTo:0},
        ]
      },
      137:{
        text:`0 homem e velho e foi atingido na cabec;a por algum tipo de porrete. Ele pede remedio, mas voce nao tern nenhum. Voce poderia usar um Encanto da Energia para recupera-lo, e ele se oferece para ajuda-lo se voce o fizer. Se voce usar a sua magia, va para 383. Se  nao, tera que deixa-lo e continuar ao longo da muralha (volte para 14).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      138:{
        text:`"Para que eu quero isso?" ela exclama. Mais uma  vez, seus olhos ficam  vermelhos  e  os  jatos  de fogo sao disparados na sua direc;ao. Voce lanc;ara um Encanto do Escudo (va para 376) ou deixara o aposento e se encaminhara pelo corredor para o aposento do meio (volte para 64)?
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      139:{
        text:`Todas as tres facas erram e  se cravam  profundamente  na porta atras de voce. Os Giras estao  quase em cima de voce, e e preciso decidir se voce vai lutar contra eles (va para 346) ou lanc;ara  um Encanto. Voce podera lanc;ar:


        // Um Encanto da Ilusao Um Encanto do Fogo
        // Va para 244
        // Volte para 28
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      140:{
        text:`Voce sai do apose,,nto e segue por um corredor curto. Alguns metros adiante, voce se encontra ao pe de uma escada. E uma escada em espiral que leva diretamente ao interior da Torre da Cidadela. Voce sobe os degraus cautelosamente e acaba chegando em uma pequena plataforma com duas
        // portas a s ua frente. Voce ira pela porta da esquerda (volte para 25) ou pela porta da direita (volte
        // para 104)?
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      141:{
        text:`0 lfquido tern um gosto salgado, e voce come<;a a suar frio quando engole. Em seguida, voce tern tremores e tenta se  aprumar  no altar. Porem, voce cai para frente, derrubando  os outros dois calices no chão e derramando os outros lfquidos. Voce tambem acaba caindo no chão, sentindo-se extremamente mal e com os olhos turvos. Como em um sonho,  voce  tern  uma  visao  de  uma estranha criatura musculosa com duas cabe<;as, uma cauda comprida e uma pele de  escamas cinzentas. Tern nas maos um grande molho de chaves. Um rato atravessa a mesa em que ela esta sentada e ela grita alto... 0  grito acorda voce com um sobressalto e  voce toma consciencia de onde esta. Voce reune suas for<;as e  tateia em busca da ma<;aneta da porta - voce precisa de ar fresco! Voce sai da camara, descansa alguns momentos e parte na dire<;ao da Cidadela. Va para 156.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      142:{
        text:`Voce experimenta a ma<;aneta, e ela	gira. Voce nao consegue ouvir nada vindo do interior do aposento, por isso voce abre a porta para dar uma olhada. 0 aposento e pequeno, com um casti<;al dourado em cima de uma mesa... mas, de repente, voce ouve um rangido vindo do assoalho! Tarde demais, voce compreende que as pedras sob os seus pes estao se mexendo para revelar um al<;apao! Voce cai primeiro em um po<;o. Quando atinge o fundo, voce rola para o lado, descendo outra passagem, e continua rolando para baixo. Por mais que voce tente, nao consegue impedir que voce
        // role sem parar, ate que acaba por chegar a uma pequena camara, onde finalmente para. Mas o choque foi demais para voce. Enquanto o mundo escurece a sua volta, voce ouve uma tagarelice
        // excitada, e depois desmaia. Va para 234.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      143:{
        text:`Voce se concentra e lan<;a seu Encanto. Aparece  um tronco de Hidra, mas apenas isso. A criatura e tao grande que um unico Encanto nao basta para criar  uma replica. Se  tiver outro Encanto  de C6pia de Criatura, voce podera usa-lo (va para 360), do contrario podera procurar em sua mochila alguma coisa que possa utilizar (va para 226). Se voce nao puder ou nao quiser fazer nenhuma dessas duas coisas, va para 184.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      144:{
        text:`A porta abre e voce entra em um corredor estreito. Voce segue por ele algum tempo,  ate que finalmente chega a uma outra porta: desta vez e  uma porta larga entalhada, com a inscri<;ao "Adega de Vinhos" gravada nela. Voce experimenta a ma<;aneta e ela abre. Voce espia do lado de dentro, esticando o pesco<;o, e ve filas e mais filas de prateleiras cheias de garrafas contendo... vinho? 0 aposento e pouco iluminado pela luz de varias velas. 0 fato de voce abrir a porta fez com que uma pequena sineta soasse, e uma figura vem se arrastando na sua dire<;ao por um dos corredores. Voce desembainhara a sua espada e se preparara para se defender (va para 154) ou vera o que este sujeito pode ter a dizer (volte para 56)?
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      145:{
        text:`Voce desembainha a sua espada e salta  por cima da mesa sobre ele. Ele, enquanto  isso, esta
        // evidentemente lutando para resistir ao seu Encanto da Fraqueza... ou nao? Ele esconde a cabe a nas maos e desvia o rosto de voce. Volte para 80.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      146:{
        text:`Voce pode pedir um favor a eles. Voce:

        // Perguntara como pode derrotar Balthus Dire? Perguntara para onde da a porta a sua frente? Perguntara como evitar os Ganjees?
        // Dira a eles que voce esta um tanto fatigado
        // - ha alguma coisa que eles possam fazer?
        // 146
        
        
        
        // Va para 247
        // Va para 201
        // Volte para 102
        
        // Volte para 66`,
        options: [
          {text:``, goTo:0},
        ]
      },
      147:{
        text:`0 Golem desaba no chão e se parte em peda os. Aliviado, voce anda ate as caixas e as examina. Voce tentara abrir:


        // A primeira caixa? A segunda caixa? A terceira caixa?
        // Va para 260
        // Volte para 129
        // Va para 370
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      148:{
        text:`0	feiticeiro rosna com desprezo. "Entao voce pode culpar essa mesma gente da terra, que enviou
        // voce com essa tarefa, pela sua morte!" Com estas palavras, ele puxa um punhal afiado do cinto e o crava em seu peito. Voce falhou na sua empreitada.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      149:{
        text:`Eles nao estao interessados em sua companhia e sugerem que voce siga o seu caminho. Voce pode prosseguir na dire ao da Torre (va para 245), virar para a esquerda, a fim de investigar o monumento no centro do patio (va para 209)  ou sentar-se  ao fogo de qualquer  maneira (va para 380)
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      150:{
        text:`Voce se abaixa rapidamente para se esquivar do Tridente. Nao acerta o seu pesco o, mas raspa na
        // sua testa. Voce perde dois pontos de ENERGIA e vai para 374.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      151:{
        text:`Os conjuntos de armaduras sao de varios tamanhos e formatos, e voce fica arrepiado de pensar nas
        // criaturas estranhas  para as quais eles devem ter sido feitos; talvez voce ainda encontre algumas delas. Ao examinar um conjunto particularmente suntuoso, a manopla dele subitamente se ergue e bate forte em seu rosto! Voce cambaleia para tras, cuspindo sangue. Voce perde dois pontos de ENERGIA. Mas a armadura nao se mexe mais, e voce resolve que pode ser prudente continuar subindo, seja pela escada do lado esquerdo (volte para 19) ou pela escada do lado direito (va para 197).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      152:{
        text:`Voce lanc;a seu Encanto, e a criatura interrompe seus passos, sem entender o que aconteceu com ela. Com algum esforc;o, ela apanha seu machado e vem na sua direc;ao, mas evidentemente nao e um adversario tao forte quanto era antes. Voce desembainha a sua espada para liquidar o Gark.

        // GARK	HABILIDADE 5	ENERGIA5
        
        // Se voce derrotar a criatura, va para 180.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      153:{
        text:`Voce esta indefeso diante da G6rgona. Voce tomba sem ac;ao no canto,  enquanto  o  feiticeiro convoca seus guardas, que aparecem  alguns  minutos depois. Eles pegam voce e carregam  para fora do aposento. 0 chefe deles pede instru96es ao feiticeiro. "Execute o campones!" e sua resposta.

        // Voce fracassou na sua missao.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      154:{
        text:`Quando voce puxa a espada, a figura para e pega alguma coisa da bolsa em sua cintura. Quando ele se aproxima mais, voce pode ver que a criatura e um ELFO NEGRO; alto e magro, com orelhas em forma de ponta de flecha e uma perna aleijada. Na sua mao, ele traz um pequeno mecanismo de algum tipo. Ele ve voce, manipula o mecanismo que subitamente se torna uma espada tipo estilete na sua mao! Voce avanc;ara e lutara (va para 275) ou abaixara a espada e conversara com ele (volte para 56)?
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      155:{
        text:`Sua mão vai ate o cabo da espada. Voce desembainha a lamina. Mas nao golpeia o feiticeiro. Sua pr6pria vontade imp6e que voce oferec;a a sua arma a ele, o que voce faz. Ele aceita. Volte para 65.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      156:{
        text:`Enquanto voce caminha pelo patio ao ar livre, repara que esta andando ao longo de uma pequena elevac;ao, quase que como um encanamento  enterrado  que fosse da Torre  Negra  para o  templo. Voce se abaixa para investigar isso; poderia ter sido feito por algum tipo de toupeira? Quando voce toca na elevac;ao, ela se retrai e, para seu horror, um longo tentaculo cinzento irrompe do solo e se enrosca em tomo de sua perna! Como voce lutara contra esta "coisa"':


        // Desembainhara a sua espada? Lan9ara um Encanto da Levitac;ao? Lan9ara um Encanto do Fogo?
        // Volte para 71
        // Va para 284
        // Volte para 114
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      157:{
        text:`0 feiticeiro grita de agonia e desvia o rosto de voce, segurando a cabec;a. Voce se precipita para a frente, e ele se volta para enfrentar voce. Voce perde o ar! Ele ja nao e mais o feiticeiro, mas transformou-se em uma velha de rosto cruel e pele enrugada. 0 cabelo dele - ou melhor, dela - e agora uma massa coleante de serpentes que soltam silvos! Voce insistira no ataque (va para 199) ou batera em retirada rapidamente (va para 232)?
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      158:{
        text:`A fera geme quando o encanto faz efeito. 0 peso imenso e de fato um fardo sem sua forc;a normal. Ela desaba sem energia, incapaz ate mesmo de se levantar do chão. Voce caminha ate ela e enterra a espada em seu peito. A infeliz criaturajaz morta a seus pes. Volte para 77.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      159:{
        text:`Voce lan<;a seu Feiti<;o da Fraqueza e deixa transcorrer um tempo na esperan<;a de que a for<;a da criatura diminua. Mas, como seus dentes continuam a ferir voce, voce fica desalentado ao descobrir
        // que o ataque da criatura esta cada vez mais feroz. Voce ja nao consegue sentir a perna. A dor e
        // intensa. Voce se sente fraco e perde a consciencia quando as mandfbulas se fecham na sua garganta. Va para 323.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      160:{
        text:`A Cabe<;a de Cachorro voa na sua dire9ao e arranca o engenho de sua mao. Ao examina-lo, as outras duas criaturas parecem fascinadas. Enquanto eles estao ocupados com isso, voce pode atravessar furtivamente o aposento na dire<;ao da porta no outro canto. Va para 206.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      161:{
        text:`Ela fica profundamente ofendida com sua indiferen<;a. 0 Redemoinho se ergue mais uma vez, e agora ela joga voce no chão. Voce tenta engatinhar para longe, mas ela se coloca bem na sua frente, seja qual for a dire<;ao que voce tome. Voce tera que tentar engana-la com astucia, mas como come<;ara?


        // Tornando sua raiva evidente para ela? Conversando com ela para tentar acalma-la?
        // Volte para 106
        // Va para 390
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      162:{
        text:`Voce sente o poder se espalhando pelo seu corpo. As criaturas veem seus musculos proeminentes se endurecem diante de seus olhos e ficam im6veis. Sua mão agarra o cabo da espada e voce puxa a
        // lamina com decisao. Mas, para seu desespero, sua nova for<;a e dificil de controlar, e seu primeiro
        // golpe com a espada faz com que a arma saia voando pelo ar e caia a varios  metros de distancia! Voce agora tera que enfrenta-los de maos nuas, ou podera usar sua nova for<;a para saltar para longe pela encosta da colina. Se voce quiser lutar, os indices das criaturas sao (lute com elas uma de cada vez):
        
        
        
        // MACACO-CACHORRO CACHORRO-MACACO
        // HABILIDADE
        // 7
        // 6
        // ENERGIA
        // 4
        // 6
        
        
        // Lide com seus indices normalmente. Voce pode realmente ter uma superfor<;a, mas esta desarmado.
        // Se veneer, podera recuperar a sua espada. Sua for<;a retomara ao normal. Volte para 32. Se quiser escapar, fa<;a isso e comece de novo no dia seguinte a noite. Qualquer que seja a sua escolha, nao se
        // esque<;a de anular o Encanto da For<;a que acabou de usar.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      163:{
        text:`Voce da um gole e engasga. Esse vinho e horrivel! 0 Elfo esta olhando para voce com expectativa,
        // e voce nao deve insulta-lo, por isso voce toma mais um gole, fazendo caretas enquanto o lfquido desce. Voce agradece muito a ele, mas explica rapidamente que precisa ir voltando. Voce parte na dire<;ao do outro lado do aposento, mas seu estomago nao consegue aguentar mais o sabor detestavel. Voce fica terrivelmente enjoado ao sair. Perde um ponto de HABILIDADE  e  dois pontos de ENERGIA pela sua nausea. Volte para 95.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      164:{
        text:`A porta e de metal s6lido, e nao ha quantidade de pancadas, mesmo com um Encanto da força, que
        // a fa9a sair do lugar. Voce cai de joelhos. Depois de chegar tao longe, fracassou na sua missao.
        // Impossibilitado de continuar, voce tera que tentar de novo; desta vez procurando pela combina9ao
        // no caminho de vinda. Voce pode usar um Encanto da Levita<;ao, se tiver, para leva-lo para fora da Cidadela. Tera que tentar de novo amanha a noite...
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      165:{
        text:`Quando voce sente a força se espalhar pelo seu corpo desembainha a espada e crava na muralha
        // terrosa. Dessa forma voce faz um apoio para os pes, para depois utiliza-lo enquanto cava o pr6ximo, assim consegue subir pelas paredes bem rapidamente com o aumento de for<;a que recebeu.  Na metade do caminho,  contudo, sua força come9a a  diminuir, e  voce compreende que esta retomando ao normal. Se  voce deixar que isso aconte<;a, caira para tras dentro do po<;o mais uma vez. Voce pode lan<;ar outro Encanto  da força para dar a energia suficiente para completar  a sua escada (va para 398) ou gritar pedindo ajuda (va para 202).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      166:{
        text:`Quando voce morde a came, ouve um ganido de dor bem baixo vindo de algum lugar distante. A
        // came esta dura e salgada, mas o gosto nao e tao ruim, por isso voce da mais uma dentada. Voce ouve um grito mais uma vez, e dessa vez o peda<;o de carne voa da sua mao! Quando voce se abaixa para pega-lo, ele resiste. Voce se da conta de que esta carne ainda esta viva e grita quando voce a come! Voce sente uma pontada de dor no estomago, depois outra. As duas dentadas que voce comeu estao tentando a todo custo sair do seu corpo! Voce cai no chão, apertando a barriga.
        // A came fara tres "ataques" ao seu estomago antes de ser digerida. Jogue dois dados tres vezes. Cada vez que o numero obtido for maior do que o seu fndice de HABILIDADE, desconte dois pontos de ENERGIA. Se todos os tres resultados forem superiores a seu fndice de HABILIDADE, o dano causado sera fatal, e sua aventura chegou  ao  fim. Se  voce sobreviver,  podera sair pela porta na parede do lado esquerdo (volte para 13) ou pela porta do lado oposto ao que voce entrou (va para 281).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      167:{
        text:`Voce se inclina sobre o caldo e cheira. Argh! E de embrulhar o estomago! Voce pergunta a elas que
        // diabo e aquilo e, ao levantar os olhos, voce ve que uma delas esta silenciosamente fazendo sinais na dire<;ao do caldo. Voce tira a cabe<;a de perto rapidamente, mas ja e tarde demais. Um grande PEIXE ABOCANHADOR salta do caldo e da um bote com seus dentes afiados na dire<;ao da sua cabe9a. Teste a sua Sorte. Se voce tiver sorte, va para 224. Se nao tiver, va para 331.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      168:{
        text:`Voce tira o Amuleto e o coloca em cima da cabe9a. Os Ganjees ficam ofegantes! "Siga viagem,
        // estranho", diz uma voz. "N6s nao o incomodaremos. Va pela porta no canto mais distante." Com estas palavras, uma porta no canto do aposento cintila levemente. Voce caminha ate la e abre a porta. Va para 328.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      169:{
        text:`0 aposento em que voce esta e uma especie de grande salao de jantar. Uma mesa longa, de tamanho suficiente para que quarenta ou cinquenta pessoas sentem, ocupa o centro, ladeada por cadeiras. Ha varias portas e passagens que dao saida do aposento, mas voce esta particularmente interessado em duas escadarias largas que levam, uma por cada um dos lados, ate uma sacada no alto de onde se pode observar o salao. Quadros e armaduras decoram as paredes. 0 aposento esta vazio. Voce:


        // Toma a escada do lado esquerdo e sobe? Toma a escada do lado direito e sobe?
        // Investiga os quadros? Investiga as armaduras?
        // Volte para 19
        // Va para 197
        // Va para 317
        // Volte para 151`,
        options: [
          {text:``, goTo:0},
        ]
      },
      170:{
        text:`Quando a força surge no interior do seu corpo, voce arranca na dire9ao da porta com toda a energia. Jogue um dado. Se voce obtiver 1, 2 ou 3 pontos, a porta nao cede, e voce tera que descontar 2 pontos de ENERGIA. Se voce tirar 4, 5 ou 6 pontos, voce derruba a porta (va para 292). Repita este procedimento ate ter exito ou, se voce preferir, tente a porta do meio (volte para 64), ou a porta mais distante (va para 304).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      171:{
        text:`Para este jogo, voce precisara de pelo menos uma Pe9a de Ouro. Se nao tiver nenhuma, podera  usar um Encanto do Ouro dos Tolos e levar o seu Ouro dos Tolos para o Mestre de Jogos, que dara a voce dez Pe9as de Ouro por ele. (Se voce nao tiver nem Pe9as de Ouro, nem Encantos do Ouro dos Tolos, nao podera participar do jogo.) Escolha quaisquer numeros que quiser entre 1 e 6, e aposte qualquer quantidade de Pe9as de Ouro em cada um deles. Anote a(s) sua(s) escolha(s) e a(s) sua(s) aposta(s) em um papel. Depois jogue um dado. Seo numero obtido for uma de suas escolhas, voce ganha cinco vezes a aposta que fez naquele numero. Voce pode continuar por tanto tempo que quiser ou pode passar para outro jogo, como Faca-Faquinha (va para 365) ou Pedras Magicas (va para 278). Se estiver enfastiado de entrar em jogos, volte para 31. Mas voce tera que jogar pelo menos uma rodada de Escolha de Seis, se voce tiver Pe9as de Ouro ou um Encanto do Ouro dos Tolos, antes de prosseguir.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      172:{
        text:`Voce avan9a e desfere um golpe na criatura. Com um ruido estridente, sua espada repica no corpo de pedra. Compreendendo que nao conseguira causar danos a ela com sua arma, voce pode lan9ar um Encanto (volte para 26), ou usar alguma coisa que esteja na sua mochila (va para 289).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      173:{
        text:`Voce se concentra com toda força, e um gas verde e espesso esguicha de seu dedo na dire9ao da criatura. Ela compreende que sua pr6pria rota9ao aspirara o gas para o interior de seu Redemoinho e come9a a recuar. Depois que ela se afastou o suficiente, voce dispara na dire9ao da Torre Negra. Va para 218.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      174:{
        text:`A passagem faz voltas e mais voltas, ate que acaba por terminar em um lance de escadas que sobe.
        // Voce caminha escada acima e chega a uma passagem curta que termina em um beco sem saida. Ao examinar a parede, voce descobre uma pequena alavanca, a qual voce puxa. A face da rocha a sua
        // frente abre um pouco e se fecha atras de voce quando voce passa. Voce esta agora diante de uma porta trancada. Voce tentara arromba-la (va para 268) ou lan9ara um Encanto da força para arrebenta-la em peda9os (volte para 116)?
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      175:{
        text:`A criatura nunca ouviu falarem nenhum Pincus no interior da Cidadela. 0 Cachorro-Macaco que esta segurando a clava rosna e da um passo adiante. Voce pode escolher outro nome rapidamente (volte para 110) ou se preparar para lutar contra eles (va para 288).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      176:{
        text:`Quando voce se aproxima, ela se volta para olhar para voce. Sem se perturbar nem um pouco com a sua arma, ela diz: "Abaixe sua arma, jovem forasteiro. Sou apenas uma velha. Nao farei mal a voce." Voce fara o que ela pede?


        // Se voce ignorar as palavras dela e continuar avanc;ando Se voce abaixar a espada e conversar com ela
        // Se voce parar e usar um Encanto de Percepc;ao Extra-Sensorial
        // Volte para 127
        // Volte para 21
        // Va para 329`,
        options: [
          {text:``, goTo:0},
        ]
      },
      177:{
        text:`Voce esta em um corredor estreito. Ele continua por alguns metros e termina em uma porta. A meio caminho, descendo a passagem, pode-se ver um arco, de onde alguns degraus levam para baixo. Voce vai prosseguir na direc;ao da porta (volte para 5) ou se arriscara a descer as escadas (va para 344)?
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      178:{
        text:`Voce corre pela cozinha, perseguido pelo Devlin. Voce joga cadeiras, comida, facas e terrinas sobre ele, mas nada disso adianta. Voce atira uma xicara com liquido para o outro lado da cozinha e, para sua surpresa, o Devlin berra quando ela atinge seu corpo incandescente! Entao, voce tern uma ideia. Aproximando-se do caldeirao de caldo, voce se esquiva da criatura ate que voces dois ficam correndo em volta do caldeirao, quase a ponto de se tocarem. Os dois param, se encarando com o caldeirao fumegante entre voces. Com um grande impulso, voce vira o conteudo do caldeirao - tudo por cima da criatura, que solta um grito e desaparece, quando suas chamas se extinguem. Agora voce pode verificar os armarios (volte para 17), ou sair do aposento pela porta do lado oposto da cozinha (va para 265).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      179:{
        text:`Quando voce sai das sombras na direc;ao do  centro do patio, uma voz no vento grita: "Pare! Fique onde esta!" Voce olha a sua volta, mas nao consegue ver ninguem que esteja se dirigindo a voce.
        // Voce da mais dois passos. A voz sinistra ordena de novo que voce pare, e dessa vez uma flecha zune pelo are cai pr6ximo a seu pe esquerdo. Voce pula para tras. Mas ainda assim nao ve ninguem. Porem, nao pode se mexer. Voce:
        
        
        // Seguira adiante, muito cuidadosamente?
        // Disparara na direc;ao do  monumento,  no centro do patio? Lanc;ara um Encanto do Escudo a sua volta e seguira avanc;ando?
        // Va para 378
        // Volte para 125
        // Va para 341
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      180:{
        text:`0 grande Gark jaz morto ao solo. Voce espera um minuto para  ver se  a agitac;ao  atraira algum guarda, mas tudo parece estar tranquilo. Voce revista a criatura, mas acha pouca coisa de valor. Em uma bolsa amarrada em torno de sua cintura, ha seis Pec;as de Ouro e uma Escova de Cabelo ornamentada. Voce pode levar essas coisas com voce, se quiser. Voce resolve seguir adiante. Volte para 99.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      181:{
        text:`Voce lanc;a o Encanto no ar. Ao fazer isso, o Tapete Voador passa flutuando por voce e, para sua constemac;ao, aparece um segundo tapete identico e comec;a a voar em circulos pelo aposento. Subitamente, oar fica cheio de objetos voadores. A Cabec;a de Cachorro se desprende da parede e morde selvagemente o seu brac;o. Voce perde dois pontos de ENERGIA. 0 homem, que  se transformou em uma Cobra, arrasta-se ate voce e, dando um bote, morde a sua pema. Teste a sua Sorte. Se voce tiver sorte, os dentes da Cobra  apenas  arranham  a sua pele.  Voce perde  mais  2 pontos de ENERGIA. Se  voce nao tiver sorte, os dentes  penetram  fundo em sua perna,  que comec;a a latejar de dor. Voce compreende, num relance que deixa voce cego, que a  mordida e fatal, e desfalece no chão, apertando a ferida e se contorcendo em agonia. Conforme o veneno vai fazendo efeito, sua cabec;a gira, ea consciencia desaparece. Voce falhou na sua missao. Se tiver sobrevivido, nao deixara de levar cicatrizes,  apesar da sorte que teve. Seu  corpo  esta despedac;ado  pela dor, e voce tera que oferecer um presente da sua mochila a seus oponentes  (volte para 54) ou sair do aposento rapidamente pela outra porta (volte para 25).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      182:{
        text:`Voce se sente sugado para o interior do aposento. Como que por um passe de magica, sua tocha
        // tremula e se apaga. 0 aposento esta escuro como breu. De nenhum lugar, mas ainda assim de toda parte, vem um riso de escamio que enche o aposento. "Aventureiro tolo", diz uma outra voz, que
        // altera o tom de alto para baixo enquanto fala, "Bem-vindo a casa dos GANJEES! Infelizmente, sera
        // o ultimo lugar que voce vera na sua vida... Ah, mas e claro, voce nao esta vendo nada, esta?' Mas
        // n6s estamos vendo voce, nao estamos irmaos?" Vozes que riem chegam de toda parte a sua volta.
        // De repente, um rosto luminoso, branco e fantasmag6rico, vem voando na sua direc;ao. Voce se encolhe horrorizado, atira-se no chão e comec;a a se se ntir muito assustado. Voce perde 1 ponto de HABILIDADE, 2 de ENERGIA e I de sorte pelo medo.
        
        // 0 que voce pode fazer aqui:
        
        
        // Criar um Encanto do Fogo? Tentar um Encanto da Ilusao?
        // Procurar em sua mochila algum artefato?
        // Desembainhar a sua espada?
        // Volte para 85 Vapara395 Va para 322
        // Va para 248
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      183:{
        text:`Ele agradece a voce efusi vamente. Voce ganhou um amigo. Va para 270.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      184:{
        text:`Enquanto voce esta decidindo o que fazer em seguida, a Hidra avanc;a. Duas das suas cabec;as se projetam e mordem voce; uma no brac;o e  outra no pescoc;o. Seus dedos aguc;ados rasgam a sua pele e penetram fundo. Tudo esta perdido. Voce falhou na sua missao.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      185:{
        text:`A porta se abre para um corredor estreito, que faz uma curva fechada para a esquerda, continua por varios metros e entao termina por fim em uma porta. Voce poe a mão na mac;aneta. Volte para 13.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      186:{
        text:`0	homem alto concorda  e  convence  o  mais baixo de que e um prec;o  justo.  0	homem baixo
        // resmunga e pragueja, oferecendo seis e depois sete Pec;as de Ouro, mas o prec;o foi fixado a oito. Voce mesmo pode, se quiser, oferecer oito Pec;as de Ouro ao homem alto, embora tenha que fazer aparecer Ouro dos Tolos para dar a ele. Se quiser fazer isso, use um Encanto  do Ouro dos Tolos e volte para 15. Se nao quiser, o homem baixo acaba  por concordar  como prec;o, compra o  punhal e vai embora. Voce pode ficar para conversar com o homem alto (volte para 83) ou continuar no seu caminho (va para 245).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      187:{
        text:`Voce se concentra na mente do feiticeiro. Palavras e imagens cruzam a sua cabec;a. Dois segundos depois, nao ha  mais nada.  Voce levanta os olhos para Balthus  Dire,  que encara  voce fixamente. "Nao tente ler os pensamentos de Balthus Dire!", ele ordena. Voce se concentra de novo, mas ainda assim nao recebe nada, pois ele esta bloqueando  o  seu  Encanto.  Voce reflete por um segundo sobre as imagens que recebeu: um mapa embaixo da mesa de planejamento de batalha... uma sensac;ao de horror diante de um grito altissimo... uma luz ofuscante... um anel no dedo dele... uma espada com lamina de navalha... e voce.

        // Ele esta agora sussurrando em voz bem baixa, observando voce com um dos olhos. Ele ergue uma das maos no are  concentra seu olhar nela. Ele sacode a mão no ar, para a frente, para tras e de um
        // lado para outro, cada vez mais rapido. Com estrondo, ele desce a mão de encontro a mesa. Voce cai
        // no chão - nao de susto, mas porque o chão sob seus pes esta sacudindo violentamente. 0 aposento inteiro parece estar jogando como um navio em uma tempestade. Embora ele esteja firmemente equilibrado e venha agora andando na sua direc;ao, voce nao consegue se levantar de jeito nenhum. Sua unica chance e um Encanto, se voce ainda tiver algum. Em caso afirmativo, voce usara:
        
        
        // Um Encanto da Levitac;ao? Um Encanto da Ilusao?
        // Va para 279 Vapara314
        
        
        // Mas, se voce nao tiver nenhum deles, volte para 115.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      188:{
        text:`Um clarao de luz subito e intenso irrompe a sua frente. Voce protege os olhos e depois os esfrega -
        // mas nao consegue ver nada! Voce entra em panico  ao ouvir  um ruido como um rosnado  baixo. Passos de pes  peludos  se  aproximam,  e  voce grita de dor quando esta criatura que  voce nao pode ver ruge e crava seus dentes aguc;ados na sua perna.Voce:
        
        
        // Lanc;a um Encanto da Forc;a? Lanc;a um encanto da Fraqueza?
        // Desembainha a sua espada e desfere golpes na criatura?
        // Va para 301
        // Volte para 159
        // Volte para 51
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      189:{
        text:`Voce pode usar qualquer um dos seguintes Encantos:
        // 189-195
        
        
        // Encanto da Ilusao Encanto do Escudo Encanto da Fraqueza
        // Va para 319
        // Volte para 130
        // Volte para 43
        
        
        // Se voce nao tiver nenhum deles, tera que usar sua espada. Va para 333.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      190:{
        text:`Uma c6pia perfeita do Golem forma-se na sua frente. Voce ordena que ela ataque o verdadeiro Golem, que esta agora quase em cima de voce. Resolva a batalha dos Golems:

        // GOLEM	HABILIDADE 8	ENERGIA 10
        
        // Se a sua cria ao veneer o original, volte para 147. Se nao veneer, voce tera que resolver o confronto sozinho. Se veneer, podera ir tambem para 147.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      191:{
        text:`Voce sufoca quando o Encanto se materializa diante de voce. Uma replica perfeita da sua pessoa, armado como voce esta, surge agora de  pe na sua frente. A uma ordem do feiticeiro, seu s6sia avan a, e voce tera que lutar contra ele. Ele possui os mesmos indices de HABILIDADE, ENERGIA e SORTE que voce tern. A unica vantagem que voce pode ter e usar a sua SORTE para causar danos maiores ou minimizar ferimentos - seu s6sia nao podera usar a SORTE dele aqui. Se voce veneer, volte para 119.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      192:{
        text:`Voce lan a o Encanto bem na hora. 0 projetil atinge o seu escudo magico e se espatifa contra ele, escorrendo para o solo. Voce examina a pasta que ficou no escudo para ver o que era. Voce quase foi atingido por  um tomate! No centro do  aposento, a figura  adormecida  esta se mexendo.  Volte para 29.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      193:{
        text:`Escolha um Encanto: Ouro dos Tolos
        // Percep ao Extra-Sensorial Ilusao
        // 193
        
        
        // Va para 211
        // Volte para 123
        // Volte para 35
        
        
        // Se voce nao tiver nenhum deles, va para 283.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      194:{
        text:`0 aperto no seu pesco o aumenta, e sua ultima lembran a e de medo - dessas criaturas inumanas com seus rostos ha muito ja mortos, felizes com a sua morte. Voce falhou na sua missao.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      195:{
        text:`Os olhos de Balthus seguem voce quando voce se abaixa, mas voce fica protegido pela mesa de planejamento de batalha.  A miniatura de  bola de fogo mergulha  no ar, mas  passa  voando por cima de sua cabe a. Voce pode usar rapidamente outro Encanto para atacar. Va para 377.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      196:{
        text:`0 aposento e de fato uma despensa. Num primeiro momento, os cheiros estranhos - uma mistura de comida doce, temperada e azeda - pegam voce de surpresa. Ha varios tipos de came pendurada sem
        // ganchos ao longo de uma das paredes. Uma prateleira de queijos contem mais ou menos uma duzia de variedades de queijo, e voce torce o nariz de nojo como cheiro forte dos, digamos, que estao "maduros demais". Ha seis paes pretos em uma mesa, junto a uma faca de pao e uma tabua para cortar pao. Ha duas outras portas que dao para fora da despensa. Se voce estiver com fome, podera experimentar alguma das comidas (volte para 45), do contrario podera sair pela porta na parede do lado esquerdo (volte para 13), ou pela porta na parede do lado direito (va para 281).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      197:{
        text:`As escadas estao bastante gastas e estalam sob o seu peso. Cuidadosamente, voce sobe ate a sacada. Va para 363.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      198:{
        text:`Voce pensa rapidamente, e depois enfia a mão em sua mochila e tira um  punhado de ervas. Mostrando-as a criatura, voce explica que e um especialista em plantas medicinais e veio tratar do
        // bibliotecario do Senhor, que esta doente, em estado critico. 0  mensageiro nao disse nada quanto a
        // senhas. Sera que ele vai acreditar em voce? Teste a sua Sorte. Se voce tiver sorte, ele acredita e deixa voce entrar (volte para 177). Se nao tiver, ele nao quer saber quern voce e, voce nao pode
        // entrar sem a senha, e ele avan9a na sua dire9ao com a lan9a em riste (va para 290).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      199:{
        text:`0 feiticeiro se transformou em uma GORGONA, uma criatura extremamente perigosa, que tern o
        // poder de transformar em pedra qualquer um que olhar em seus olhos. Ao avan9ar, voce olha diretamente em seu  rosto, e o Encanto dela e lan9ado.  Voce sente suas juntas endurecerem. Voce cai no chão. Sua consciencia some aos poucos, enquanto voce vai se tornando uma estatua de pedra, morto aos pes de Balthus Dire... Voce falhou na sua missao.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      200:{
        text:`Ao seu primeiro movimento, a criatura parece sair de seu transe e caminha na sua dire9ao. Ao ver isso, voce pode correr para a porta do outro lado do aposento (va para 237), ou partir na dire9ao das caixas e arriscar-se a enfrentar este gigante silencioso (volte para 98).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      201:{
        text:`Eles apontam na dire9ao das duas portas. A da esquerda, eles dizem, leva voce para a cozinha, onde os cozinheiros estarao preparando a ceia. A porta da direita da para o Grande Salao, onde sao realizados os banquetes. Va para 270.

        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      202:{
        text:`Depois de varios minutos de gritaria, voce ouve vozes que se aproximam, falando em uma lingua
        // estranha. Para seu alivio, voce ve quatro cabe9as que espiam dentro do po90 se desenharem contra o ceu. Voce berra para que eles consigam alguma corda. Eles conversam entre si e desaparecem. Finalmente, voce ouve suas passadas rapidas retornando. Eles param mais uma vez no alto do po90 e jogam sobre voce, nao uma corda de socorro, mas o conteudo de um caldeirao de 6leo fervente! Voce tera que olhar com mais cuidado por onde anda na sua pr6xima aventura, porque esta esta terminada. E lembre-se - estranhos nao sao bem-vindos na Cidadela do Caos...
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      203:{
        text:`Ao correr para as portas, voce trope9a, permitindo que a criatura ganhe terreno. Ela agarra seu bra90
        // com uma das maos e atira voce para o outro lado do aposento. Voce aterrisa com estrondo contra a parede, embaixo do espelho. Voce agora tera que desembainhar a sua espada (volte para 16), ou se preparar para usar um Encanto (volte para 11).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      204:{
        text:`Voce prende a respira9ao e da um passo adiante, entrando na agua lodosa. Pouco depois, voce sente
        // alguma coisa puxando a sua pema. Levantando a perna da agua, voce descobre que algum tipo de trepadeira se enroscou na sua perna. Voce salta de volta para a margem, e a trepadeira continua agarrada. Saindo da agua, uma das pontas da trepadeira se ergue, contorce-se no ar, como se estivesse olhando para voce, e depois cai na agua de volta com estrepito. Voce compreende que nao e uma trepadeira, mas sim uma longa COBRA DE ESGOTO, que agora esta deslizando na sua dire9ao. Volte pala 73.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      205:{
        text:`0	homem alto fica revoltado com seu pre90, mas o outro concorda. A discussao torna-se mais
        // intensa, e o homem alto desembainha a sua,, espada. 0  homem mais baixo faz a mesma coisa e,
        // vendo-se amea9ado, voce age igualmente. E voce e o homem mais baixo contra o homem alto.
        // Voce tern que resolver esta batalha. Antes de come9ar cada Serie de Ataque, jogue um dado. Se o numero for impar, o homem alto atacara o mais baixo primeiro, e  voce, pessoalmente, podera ignorar essa Serie de Ataque. (Embora voce tenha que jogar os dados para o homem baixo mesmo assim). Se o numero for par, o homem alto parte para cima de voce (e o mais baixo podera ignorar a Serie de Ataque). Se o homem mais baixo morrer durante a batalha, o mais alto terminara lutando contra voce.
        
        
        
        // HOMEMALTO HOMEMBAIXO
        // HABILIDADE 8
        // 7
        // ENERGIA 8
        // 6
        
        
        // Quando a batalha estiver resolvida,  va para 309, se o homem mais baixo ainda estiver vivo. Se ele tiver morrido, va para 368.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      206:{
        text:`Voce sai pela porta e se encontra ao pe de outra escada em espiral que leva ao interior da Terra Negra. Subindo a escadaria, voce acaba chegando a uma plataforma onde uma unica porta e a maneira que existe para seguir adiante, sem outra op9ao. Voce experimenta a porta. Ela abre lentamente. Volte para 182
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      207:{
        text:`Voce abre a porta e espia a escuridao a sua frente. Voce da uns dois passos adiante, dando tempo
        // para que seus olhos se acostumem ao escuro. Voce fecha a porta atras de voce, dizendo adeus ao
        // Duende. Volte para 188.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      208:{
        text:`A arma do Homem-Aranha e sua mordida, que e altamente venenosa. Quando ele morde, voce sente o veneno se espalhando pelo seu organismo,  adormecendo seus nervos. Quando voce cambaleia e cai ao chão, ele ataca repetidamente. Sua ultima lembran9a ea  cara pequena e feia dele mordendo seu pesco90. Voce fracassou na sua missao.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      209:{
        text:`Voce pousa os olhos sobre a estranha estrutura. Nao parece ser uma fonte, mas alguma especie de templo. De um lado ha uma porta, que voce pode investigar, ou voce podera tambem seguir em frente para a Cidadela propriamente dita. Se quiser fazer isso, volte para 156. Se  quiser investigar, va para 362.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      210:{
        text:`Voce agora esta em um aposento grandee redondo. E Iluminada por uma unica tocha, presa a uma
        // das paredes. Nao ha mobilia no aposento,exceto uma mesa de madeira rustica e uma cadeira no centro. Flutuando acima da mesa - dormindo profundamente  - ha um homem muito pequeno, vestido com pantalonas e camisa verdes. Ele nao chega a ter mais de um metro de altura, e voce nao consegue acreditar que ele esteja ainda dormindo depois de sua entrada barulhenta! Voce ouve um rangido e vira-se para a direita a tempo de ver uma pequena catapulta disparar um projetil de algum tipo direto na sua dire9ao. Vai atingir voce, a nao ser que voce use um Encanto do Escudo! Se voce usar este Encanto, volte para 192. Se nao puder (ou nao quiser), va para 359.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      211:{
        text:`Voce oferece a ele as pedrinhas que transformou em ouro. "Tudo o que eu quero esta  aqui embaixo", ele diz. "Tenho comida, tenho um trabalho a fazer e, se eu ficar entediado, tenho permissao de torturar os prisioneiros  para me divertir. Para que eu quero ouro?" E melhor voce tentar outro Encanto. Voce partira para um Encanto de Percep9ao Extra-Sensorial (volte para 123) ou um Encanto da llusao (volte para 35)? Se voce nao tiver nenhum deles, va para 283.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      212:{
        text:`Tomando a bifurca9ao da esquerda, voce segue um caminho que acaba por se juntar a uma outra passagem que conduz para a dire9ao norte. Voce segue este novo caminho por algum tempo, ate que ele acaba por se alargar. Volte para 90.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      213:{
        text:`Voce desembainha a sua espada bem a tempo, ja que o Anao esta quase em cima de voce. Lute contra um de cada vez:



        // ANA~ O GOBLIN ORCA
        // HABILIDADE
        // 5
        // 6
        // 7
        // ENERGIA
        // 6
        // 4
        // 5
        
        
        // Se voce veneer, va para 235. Voce pode Fugir durante a batalha, escapando para o monumento no centro do patio (volte para 209).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      214:{
        text:`Voce tira a tampado Frasco e esparrama o liquido verde sobre a criatura. Ela rosna e grita no ar, pondo as maos em volta do pesco90. 0 liquido parece estar queimando intensamente o Gargula, e uma fuma9a sobe pelo ar. Alguns momentos depois, a criatura jaz morta no chão. Volte para 62.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      215:{
        text:`Voce tera que inventar alguma hist6ria para estas mulheres horrorosas. Voce dira a elas que o Capitao da Guarda ordenou  que se fizesse uma inspe9ao  na cozinha delas,  depois de uns dois casos de intoxica9ao alimentar (volte para 136), ou dira que pegou o caminho errado e esta procurando o certo para seguir adiante (volte para 41)?
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      216:{
        text:`Qual sera sua tatica? Voce pode dizer a criatura que voce e um convidado (va para 294), ou podera
        // tentar subornar o Gark, oferecendo tres Pe9as de Ouro - Pe9as de Ouro reais - (va para 391), ou ainda, usando um Encanto do Ouro dos Tolos, podera criar algum ouro para oferecer a ele (volte para 36).
        
        
        
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      217:{
        text:`Voce gira a ma9aneta o mais cuidadosamente possivel, de maneira a surpreender o que quer que esteja a s ua espera. Lentamente, a porta abre e voce entra no aposento, que esta escuro, iluminado
        // por uma unica vela tremula. Seu sangue gela ao ver um TRIDENTE de tres pontas dirigindo-se diretamente a sua garganta! Num relance, voce tern que decidir o que fazer. Voce:
        
        
        // Lan9ara um Feiti90 do Escudo imediatamente? Tentara rapidamente desviar-se da arma?
        // Va para 293
        // Volte para 57
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      218:{
        text:`Ha uma grande porta de madeira a sua frente, firmemente trancada. Voce pode bater tres vezes para chamar o guarda (volte para 118) ou usar um Encanto da força para tentar abri-la (volte para 94).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      219:{
        text:`Voce se abaixa e protege a cabe9a. Uma garrafa atinge voce, depois outra e mais outra - mas voce nao sente nada! Como pode ser isso? Ai voce compreende o que esta acontecendo. 0 vinho devia conter alguma po9ao alucin6gena que esta fazendo voce imaginar este ataque de garrafas. Num instante, o ruido cessa. Voce levanta a cabe9a para ver que, como voce desconfiava, todas as garrafas estao em seus lugares nas estantes. Com grande alivio, voce segue adiante e sai da Adega de Vinhos. Volte para 95.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      220:{
        text:`As facas atingem o seu escudo magico e caem ao chão. Os Giras, da mesma forma, esbarram no escudo e voltam, um tanto apalermados. Eles tagarelam entre si, mantendo voce a distancia
        // enquanto seu Encanto se dissipa. Eles parecem chegar a algum tipo de acordo, e um deles rola de volta pelo corredor, presume-se  que para buscar ajuda. Os outros dois pegam pequenas  zarabatanas em seus cintos. Pondo algum tipo de pelotas em suas bocas primeiro, eles se preparam para fazer mira. Voce tera que ataca-los primeiro com sua espada. Resolva esta batalha (lute com um de cada vez):
        
        
        
        // Primeiro Gira Segundo Gira
        // HABILIDADE
        // 7
        // 6
        // ENERGIA
        // 6
        // 5
        
        
        // Se voce veneer, podera tomar a passagem do lado esquerdo (va para 243) ou a passagem do lado direito volte para 2).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      221:{
        text:`Quando voce se adianta, ela faz um gesto peculiar com as maos e abaixa a cabe9a, resmungando muito baixo. Volte para 127.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      222:{
        text:`Ao se esgueirar pela muralha, voce ouve um gemido baixo uns poucos metros adiante. Quando se aproxima, voce consegue distinguir a forma de um homem no chão, obviamente sentindo <lores . Ele pede socorro. Voce se aproximara dele para ver o que pode fazer (volte para 137) ou vai ignora-lo e continuar ao longo da muralha (volte para 14)?
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      223:{
        text:`Ela faz uma careta ao olhar para a coisa pequena e feia, puxando os cobertores ate o pesco90. Volte para 138.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      224:{
        text:`Voce rapidamente joga a cabe9a para tras e evita por pouco as mandibulas do Peixe Abocanhador. Mas voce bate com a cabe9a no suporte no qual pende o caldeirao. Voce perde dois pontos de ENERGIA. Voce fica zonzo com o golpe e, enquanto tenta recuperar os sentidos, as tres velhas empurram voce na dire9ao da porta do outro lado da cozinha. "Vai e nao volta, casca de ferida!" elas gritam enquanto empurram voce pela porta. Va para 265.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      225:{
        text:`Ele concorda inteiramente.  Este artefato e extremamente  valioso. 0  homem mais baixo explica que ele simplesmente nao tern tanto dinheiro, e se afasta na escuridao. 0 homem alto oferece o punhal a voce pelo pre90 de ocasiao de nove Pe9as de Ouro. Voce pode usar um Encanto de Ouro dos Tolos para fazer aparecer ouro suficiente para comprar a faca (desconte este encanto e volte para 15), ou voce pode desculpar-se e seguir adiante (va para 245).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      226:{
        text:`Voce pode tirar de sua mochila qualquer uma das seguintes coisas, se as tiver recolhido no caminho:


        // Um Espelho de Prata Um Velo de Ouro Uma Miriade de Bolso
        // Va para 312
        // Volte para 37
        // Va para 384
        
        
        // Se voce nao tiver nenhuma dessas coisas, volte para 184.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      227:{
        text:`Eles come9am a ficar muito zangados com seus modos. Os animos se exaltam, e eles come9am a gritar. Repentinamente, voce e dominado por eles. Voce luta, mas um deles golpeia voce na cabe9a com o cabo da espada. Sua cabe9a roda, e o aposento escurece, quando voce perde a consciencia. Va para 234.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      228:{
        text:`A porta trancada e muito forte e feita de carvalho s6lido. Nao e provavel  que voce consiga arromba­ la, mas voce pode tentar. Do contrario, voce pode usar um Encanto da força para arrebenta-la. A fechadura e de cobre, e voce poderia tentar usar uma Chave de Cobre, se tiver uma. 0 que voce escolhera:


        // Tentar arromba-la?
        // Lan9ar um Encanto da força? Usar uma Chave de Cobre?
        // Volte para 88
        // Volte para 170
        // Va para 296
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      229:{
        text:`Voce bate a porta, fechando-a ao passar. Voce segue por uma passagem curta e estreita, que da muitas voltas e conduz voce ao pe de outra escadaria, levando diretamente ao topo da Cidadela. Um letreiro na parede diz: "PARE. Ninguem podera passar, a nao ser com ordem de Balthus Dire."
        // Voce percebe que esta chegando a seu objetivo. Cautelosamente, voce  sobe  as  escadas  ate  o pr6ximo patamar, penetrando na torre superior da Cidadela. Ha uma porta de metal s6lido a sua
        // frente. Voce tenta a ma9aneta, mas a porta esta trancada. Voce  levanta  a  pequena  tampa  da ma9aneta e  ve pequenos  tambores  por baixo. Trata-se  de uma fechadura de combina9ao,  que s6 pode ser aberta por aqueles que conhecem  a combina9ao. Voce a conhece? Em caso afirmativo, va para a seção do livro comesse mesmo  numero.  Do contra.no,  voce pode tentar  arrombara  porta (volte para 50), ou usar um Encanto da força (volte para 164).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      230:{
        text:`"Veio ganhar algum dinheiro, ne?" diz o Macaco-Cachorro."Bern, voce pode dividir um pouco dos seus lucros conosco!" Como voce nao tern nada para oferecer a eles, pode tirar uma pedra de sua bolsa e lan9ar um Encanto do Ouro dos Tolos sobre ela, oferecendo uma pepita de ouro a eles (volte para 96), ou pode preparar-se para a batalha (va para 288). Desconte o Encanto do Ouro dos Tolos dos seus Encantos, se voce o usar.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      231:{
        text:`Voce bate na porta com o ombro. Teste a sua Sorte. Se tiver sorte, a porta cede e abre (volte para 196). Se voce nao tiver, voce machuca o ombro - perde um ponto de ENERGIA - e tern que Testar a sua Sorte - outra vez, repetindo este procedimento ate que voce tenha sorte. Voce perde um ponto
        // de ENERGIA por cada tentativa sem exito. Quando voce finalmente conseguir arrombar a porta, volte para 196. Do contrario, se seu ombro comec;ar a doer demais, voce pode retornar a primeira
        // encruzilhada que voce encontrou e seguir pela outra passagem a qualquer momento (va para 243).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      232:{
        text:`Voce recua horrorizado diante da criatura que esta a sua frente. Lembrando-se das lendas que voce
        // ouviu contar quando crianc;a, voce compreende que esta enfrentando uma GORGONA, cujo olhar
        // tern o poder de transformar voce em pedra! Teste a sua Sorte. Se tiver sorte, volte para 111. Se nao tiver, volte para 72.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      233:{
        text:`Voce evita o impacto do Tridente em cheio, mas uma de suas pontas crava-se no seu ombro. Felizmente, nao e o seu brac;o da espada. Voce agarra o cabo e arranca a arma do seu ombro, gritando de dor ao faze-lo. Voce perde cinco pontos de ENERGIA pelo ferimento e vai para 374.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      234:{
        text:`Voce acorda em um aposento sujo, com paredes asperas cortadas na rocha. As barras de ferro na janela e na porta confirmam que voce esta em algum tipo de cela de prisao, conforme voce desconfiava. Nao ha muito que voce possa fazer, alem de ficar sentado no colchão de palha que esta em um canto ate que alguem aparec;a. Mais ou menos uma hora depois, voce ouve o barulho de alguma coisa que se arrasta do lado de fora. Olhando atraves das barras da porta, voce pode ver uma criatura com aparencia de lagarto que se arrasta descendo o corredor, trazendo nas maos uma moringa e uma terrina. 0 animal tern duas cabec;as que conversam entre si enquanto ele caminha. Sua pele e cinzenta e coberta de escamas, e uma cauda longa se estende pela passagem atras dele. Ele para na sua porta e empurra a moringa e a terrina por uma pequena abertura para dentro de sua cela, e depois se afasta para sentar-se a uma mesa do outro lado do corredor. Voce recebeu pao e caldo. Voce vai comer e beber ou vai chamar esta criatura, um CALACORM? Para se servir da sua comida, va para 397. Se quiser gritar para o Calacorm, volte para 69.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      235:{
        text:`Temeroso de que a agitac;ao possa ter atraido atenc;ao, voce espia na escuridao. Nada parece estar acontecendo. Examinando os bolsos das criaturas, voce acha oito Pec;as de Ouro, uma chave cor de cobre e um vidro contendo um unguento escuro e cremoso. Voce pode levar dois <lesses com voce: Voltando-se para o frasco de liquido, voce consegue identificar uma inscric;ao na tampa, em caracteres runicos. Seu corac;ao salta quando voce compreende que isto e uma Poc;ao de Magik, muito rara. Ha o suficiente para duas doses no frasco, e cada uma delas tern o efeito de aumentar o seu indice de MAGIA em um ponto, permitindo que voce tenha poderes para  usar mais  um Encanto. Voce pode levar esta Poc;ao com voce para usar depois de lanc;ar qualquer Encanto. Ao beber a Po9ao, voce nao precisa riscar esse Encanto da sua lista. Lembre-se de que esta Po9ao s6 funcionara duas vezes. Agora voce pode seguir adiante, tanto na direc;ao da Cidadela (va para 245) quanto na dos dois homens que estao conversando sob a luz da tocha (va para 269).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      236:{
        text:`Eles aceitam as suas Amoras de born grado, jogando-as para dentro da boca e mastigando. Alguns segundos depois, eles adormecem um por um. Quando todos os tres estao dormindo, voce caminha ate a caixa para investigar. A tampa se abre, revelando diversas outras bonecas do lado de dentro, iguais as que estao no chão, e varios outros brinquedos de madeira. Nao parece haver nada verdadeiramente de valor ali, por isso voce sai do aposento pela porta do outro lado. Volte para 140.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      237:{
        text:`Voce abre a porta e sai em uma passagem que segue na dire ao leste por varios metros, terminando ao pe de urna escadaria. Voce sobe as escadas e acaba chegando em uma passagem estreita. A uma
        // pequena distancia mais aliante, voce pode ver uma abertura para um aposento grande e hem iluminado.
        // Voce segue nessa dire ao. Volte para 169.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      238:{
        text:`Ele indica uma se ao das estantes, e voce leva um livro para uma das mesas para ler.0	livro e extremamente informativo, tra ando a historia da Cidadela. ATorre Negr a foi construida pelo avo
        // de Balthus Dire. A'
        // medida em que foi se tornando um santuario para as for as do mal, a lei ea  ordem foram
        // gradualmente dando lugar ao caos, devido a luta das criaturas monstruosas para ascender na hierarquia do poder.
        // 0	avo de Dire acabou se vendo na necessidade de se proteger de
        // seus proprios seguidores, criando varios sistemas de seguran a entre as criaturas e seus proprios aposentos, destacando-se entre eles a Armadilha do Po o da Perdi ao e uma Fechadura de Combina ao magica na porta de seu proprio quarto. Acombina ao da fechadura e 217.
        // Voce le mais sobre a Cidadela. Voce pode entao escolher entre perguntar ao homem sobre a se ao dedicada a
        // Balthus Dire (volte para 18), ou a se ao das Criaturas de Rocha Escarpada (va para 375),
        // ou ainda sair do aposento pela porta do outro lado (volte para 31).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      239:{
        text:`Voce tern uma ideia. Voce fazum la o coma corda, com um no corredi o na ponta.
        // Girando a corda acima de sua cabe a, voce tenta la ar a area. Depois de diversas tentativas, seu la o circunda a area, e o no corredi o se aperta em torno dela. Voce puxa ea area se mexe. Voce puxa mais, e ela cai pela borda dentro
        // do fosso - mas, para sua decep ao, o peso da caixa e enorme e arrasta voce
        // junto com ela! Se voce tiver um Encanto da Levita ao, use-o e va para 379.
        // Do contrario, volte para 82.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      240:{
        text:`Voce ergue uma mão flamejante, passando-a pelas costas da vestimenta que esta apertando seu pesco o. A roupa se incendeia, e um grito silencioso sai da boca morta dentro dela. Os outros Fantasmas recuam. Voce ateia fogo a mais uns dois, enquanto eles batem em retirada. Infelizmente, eles estao perto demais, e voce perde dois pontos de ENERGIA pelas queimaduras que sofre. Andando cuidadosamente
        // para a frente, voce mantem os Fantasmas a distancia ate passar em seguran a pela mulher. Volte para 6.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      241:{
        text:`Voce atinge a criatura com um golpe que causa danos. Mas, para sua infelicidade, a espada flea enroscada nos pelos compridos da fera. Voce tenta puxa-la, mas a criatura golpeia a espada ea arranca das suas maos, mandando-a para o outro lado do aposento. Voce agora esta indefeso. Voce
        // pode tentar continuar a luta com as maos nuas ou lan ar um Encanto da For a. Se voce lutar com sua for a normal sem uma arma, tera que descontar tres pontos de seu indice de HABILIDADE pelo resto da luta.
        // Se usar um Encanto da For a, podera continuar com a HABILIDADE normal. Se
        // voce veneer, podera recuperar a sua espada e ir para 77.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      242:{
        text:`As garrafas e barriletes contem centenas de diferentes vinhos. Alguns sao extremamente velhos e valiosos. Em um dos cantos do aposento, ha uma mesa posta para a degusta9ao, com duas garrafas e copos. Voce vai provar uma amostra do Vinho Tinto (volte para 24) ou do Vinho Branco (volte para 105), ou ainda nao experimentara nenhum deles e seguira adiante (volte para 95)? Se voce resolver sair, podera levar com voce uma garrafa de vinho de uma das prateleiras para a viagem.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      243:{
        text:`A passagem se estende por varios metros e depois termina em uma porta. Voce escuta junto a porta
        // e ouve uma respira9ao profunda e pesada vindo la de dentro, como se alguma criatura de grande porte estivesse dormindo ali. Cuidadosamente, voce experimenta a ma9aneta, ea porta abre. Logo na entrada, embora o aposento esteja escuro, voce consegue  ver uma criatura muito grande,
        // semelhante a um Goblin, adormecida no chão. Voce pode se arriscar a entrar  no aposento  na ponta dos pes (va para 352), ou retornar a encruzilhada e tentar a passagem da direita (volte para 2).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      244:{
        text:`Quando voce se concentra no seu Encanto, os Giras param. Eles estao evidentemente apreensivos em rela9ao ao que voce esta planejando. De repente, diante de seus olhos peludos, voce desaparece! Eles tagarelam novamente excitados. Para onde voce foi? Sob a sua Ilusao da Invisibilidade , voce pode continuar, escolhendo ou a passagem do lado direito (volte para 2), ou a do lado esquerdo (volte para 243), deixando os Giras procurando por voce em vao.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      245:{
        text:`Voce parte na dire9ao da Cidadela. Embora o ar da noite esteja calmo, voce ouve um assobio fraco, que rapidamente fica cada vez mais alto, ate que uma forte lufada de vento subitamente atinge voce com tamanha força, que voce mal consegue se mexer no sentido contrario. Voce protege os olhos, ate que a ventania diminui um pouco, e, quando voce os abre, ve uma face fantasmag6rica de mulher dentro do que parece ser um Redemoinho vivo. Ela move os labios, dizendo palavras que voce nao consegue distinguir, mas, alguns segundos depois de ela ter terminado de falar, a mensagem chega ate voce. Ela parece considerar a sua aparencia como ofensiva e esta desafiando voce com palavras agressivas. Voce segura a sua espada, mas ela ri. Voce vai ignora-la e continuar (volte para 161), vai conversar com ela (va para 390) ou usara a sua magia para se livrar dela (volte para 47)?
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      246:{
        text:`Voce desaparece.  Voce pode,  porem, ainda observar o Calacorm  da sua cela. Para sua constema9ao, a fera nao reparou que voce sumiu! Voce espera pacientemente, mas nao adianta, e agora voce come9a a se preocupar, porque o Encanto em breve perdera o efeito. Voce chuta a terra junto a seus pes. A criatura levanta a cabe9a e corre para a porta da sua cela. Voce nao esta em parte alguma! Ele abre a porta e entra na cela, mas, ao faze-lo, seu Encanto come9a a se dissipar. "Tentando me enganar, hein?", diz o Calacorm, agarrando voce. Sera preciso agora lutar contra a criatura:

        // CALACORM	HABILIDADE 9	ENERGIA 8
        
        // Voce pode lan9ar  um Encanto da Fraqueza sobre ele, o que reduzira sua HABILIDADE  para cinco. Se voce derrotar a criatura, podera sair da cadeia pela passagem que segue na dire9ao norte (volte para 174).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      247:{
        text:`Eles ficam chocados com seu pedido. Voce pragueja ao compreender que nao deveria ter revelado sua verdadeira missao a eles. Todos eles tagarelam agitados, por algum tempo, depois voltam-se na
        // sua dire9ao. Juntos, todos eles sopram com força. Para sua surpresa, o sopro deles e como um vento de tempestade, e voce e atirado para tras de encontro a parede. Sua cabe9a bate na parede aspera e
        // rochosa, e voce perde os sentidos. Volte para 234.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      248:{
        text:`Um silencio se espalha pelo aposento. Subitamente,  um grito de gelar o sangue nas veias  vem de um dos cantos, e um rosto horrivel surge no ar, voando na sua dire9ao e gritando enquanto se aproxima. Seus cabelos ficam em pe, e suas pernas tornam-se bambas. De algum modo, voce consegue chegar ate a porta, abri-la violentamente e disparar por ela. Porem, voce se esqueceu que esta no alto de uma torre, e que a sacada nao tern corrimao... Voce se precipita pela borda e cai diretamente. Se voce tiver um Encanto da Levita9ao, volte para 103. Do contrario, voce se estatela como um pacote na base da torre, e seu corpo despeda9ado solta o ultimo suspiro...
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      249:{
        text:`A passagem termina a sua frente em uma porta de madeira. Ha um letreiro afixado nela, dizendo
        // "DESPENSA". Voce cola os ouvidos junto a ela, mas nao ouve nada. A porta esta trancada. Se voce
        // tiver uma Chave de Cobre, podera tentar usa-la aqui (va para 392). Do contrario, voce pode tentar arrombar a porta (volte para 231), ou retomar para a encruzilhada  e seguir pela outra passagem (volte para 55).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      250:{
        text:`Voce se concentra e, diante de seus olhos, come9a a se formar um ciclone que cresce e devasta o aposento. Cadeiras, livros e todo tipo de objetos voam pelo ar e sao postos a girar em torno do aposento, deixando voce intacto. Voce da um passo adiante, mas para repentinamente ao ouvir um som de uma risada alta. Voce olha para o aposento e ve que o Tapete Voador e a Cabe9a de Cachorro se transformaram em estatuas de pedra. Um deles provoca voce. "N6s, meu querido aventureiro, somos MIKS. Somos mestres da ilusao. Seus truques primarios nao podem nos enganar!" 0 homem, que agora se transformou em uma Cobra, deslizou pelo tapete nesse meio tempo, enroscou-se em volta da sua perna e esta cravando os dentes nas suas nadegas. A dor e insuportavel, e voce desaba no chão, ja consciente de que a mordida era venenosa. Tome cuidado com os Miks na sua pr6xima aventura. Esta terminou aqui...
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      251:{
        text:`Voce caminha em frente, entrando em um patio aberto e espa9oso, circundado por grandes muros. Ha varias tochas queimando, e grupos de figuras se movimentam na escuridao. Ha um monumento de algum tipo no centro do patio - talvez uma fonte. Olhando para o outro lado do patio, voce consegue ver o que parece ser a entrada principal da torre. Voce:


        // Esgueira-se pela parede na dire9ao da torre, contornando o patio? Caminha decididamente, atravessando o patio?
        // Vai na ponta dos pes pelas sombras, na dire9ao de um dos grupos?
        // Volte para 222
        // Volte para 179
        // Va para 321`,
        options: [
          {text:``, goTo:0},
        ]
      },
      252:{
        text:`Voce la ou cinco ou seis das suas cabe as! Ela luta para se livrar do no. Com um bote, a Miriade e arrancada da sua mao. Mas, ainda assim, a criatura foi suficientemente amea ada para permitir que voce salte na dire ao da porta de outro lado do aposento. Volte para 229.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      253:{
        text:`0	queijo esta realmente maduro demais, mas, ao come-lo, voce se sente estranhamente reconfortado.
        // 0	sabor, uma vez dentro de sua boca, e muito apreciavel, e voce come diversos bocados. Voce pode acrescentar
        // um ponto de HABILIDADE, tres pontos de ENERGIA e um ponto de SORTE por esta refei ao, e depois pode sair.
        // Se voce decidir tentar a porta da parede de lado esquerdo, volte para 13. Se quiser experimentar a porta oposta a que
        // voce entrou, va para 281.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      254:{
        text:`// Voce rola escada abaixo, atravessa o aposento e finalmente se choca contra a parede do outro lado
        // do salao. Voce torce o cotovelo seriamente. Perde por isso um ponto de HABILIDADE e dois pontos de ENERGIA, e depois sobe pela outra escadaria. Volte para 197. 
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      255:{
        text:` A criatura olha para voce. Seus olhos se estreitam.
        // Ha urna lan a longa em suas maos, que ela rapidamente aponta na sua dire ao. "Esta naoe a senha!" ela grita e sai para a batalha.
        // Teste a sua Sorte. Se voce tiver sorte, pensa rapidamente em um blefe (volte para 198).
        // Se nao tiver sorte, voce gagueja e a criatura avan a para lutar (va para 290).`,
        options: [
          {text:``, goTo:0},
        ]
      },
      256:{
        text:`0	feiticeiro sorri. "Entao voce se juntara a mim!" ele ri. " l\1as primeiro eu preciso garantir a sua lealdade genuina." A mão dele pousa em sua testa. Ele fecha os olhos e se concentra. Voce sente a
        // sua vontade se esvaindo. Seu espirito de luta esta abandonando voce. Depois de alguns momentos, ele retira a mao.
        // Voce esta livre na frente dele. Voce se inclinara para sauda-lo como seu mestre (volte para 65) ou pegara sua espada e cravara nele (volte para 155)'?
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      257:{
        text:`Voce olha a sua	volta no aposento. Esta iluminado somente pela sua tocha. Embora seja um aposento bastante
        // grande, possui pouca mobilia, com apenas urna grande rocha, cortada de modo a servir de mesa, e uma rocha menor com o formato de urna banqueta. Em um dos cantos, ha urna pilha de rochas unidas por uma camada de lama. Voce nao consegue imaginar qual ea serventia disso, embora haja tres areas de madeira sobre ela.
        // Entao, voce pula  de susto quando sua  tocha  ilumina  uma  grande criatura, aparentemente  tambem  ela propria feita de rocha, de pe junto a uma porta. Possui aproximadamente uma forma humana, ainda que uni
        // tanto maior. Seus olhos estao dirigidos diretamente para voce, mas voce nao consegue ter certeza de que ela esteja
        // de fato vendo voce!
        
        // Voce: Correra para a outra porta?		Volte para 237 Tentara falar com a criatura?	Va para 357
        // Avan ara lentamente na dire ao das caixas no canto'?	Volte para 200
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      258:{
        text:`Nenhuma de suas ofertas e particularmente interessante para estas criaturas, que estao muito mais interessadas em voce do que em seus presentes. Voce tenta impressiona-las com um Encanto da Ilusao, criando um arco-fris com todas as cores de lado a lado do aposento. Eles ficam fascinados e permitem que voce passe para a porta do outro lado - volte para 140. Se voce nao tiver um Encanto da Ilusao, tera que usar um dos seus outros Encantos para impressiona-los. Se voce nao possuir nenhum outro Encanto, tera que se aproximar deles - va para 366.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      259:{
        text:`Decepcionada, ela olha enquanto voce flutua no ar acima dela. Ela gira em tomo de si mesma freneticamente, tentando sugar voce para baixo, mas voce esta fora do alcance dela. Voce provoca com um sorriso e um aceno de mao, depois flutua na dire9ao da Torre Negra, aterrissando lado de fora da entrada principal. Volte para 218.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      260:{
        text:`Depois de alguma insistencia, a caixa abre. Ha uma chave de prata la dentro. Voce:


        // Tentara usar a chave na segunda caixa? Tentara usar a chave na terceira caixa?
        // Pegara a chave e partira para a porta de safda?
        // Volte para 34 Vapara299 Volte para 237
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      261:{
        text:`0 Macaco-Cachorro pede para ver as suas ervas. Por sorte,  voce tinha apanhado  alguns  punhados de ervas no caminho, e voce mostra isso a eles. Inclinando a cabe9a para um lado, a criatura olha para voce com desconfian9a. Pergunta a voce entao o nome do guarda que voce veio tratar - uma coisa que nao estava nos seus planos! Voce pensa rapidamente em um nome para  enganar  a criatura:


        // Kylltrog Pincus Blag
        // Volte para 81
        // Volte para 175
        // Va para 394
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      262:{
        text:`Quando voce lan9a o Encanto, um Gark identico, armado da mesma maneira, aparece diante de voce. A uma ordem sua, a batalha come9a:

        // GARK	HABILIDADE 7	ENERGIA 11
        
        // Se a sua cria9ao perder, voce tera que terminar a batalha sozinho ate a morte com a sua espada. Se voce ou a sua criatura derrotarem o Gark, volte para 180.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      263:{
        text:`Os Calacorms sao criaturas confiaveis e conformadas. Sao repteis grandes, com pele cinzenta, caudas longas e duas cabe9as,  que tagarelam sem parar uma com a outra. Eles nao precisam de muita coisa, tendo poucas ambi96es na vida alem de seus trabalhos, sua comida (eles se alimentam de serpentes mortas) e seus confortos domesticos o Bastante destoante de sua natureza placida e o grande prazer que sentem com os gritos e a dor das torturas,  alem de, muito estranhamente, terem um pavor mortal de ratos, apesar de seu tamanho enorme. Va para 326.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      264:{
        text:`Seus grandes musculos se distendem e seguram firmemente o cabo da espada. Voce se posiciona e
        // enfrenta o HOMEM-RINO, pronto para a batalha. Por causa de sua força adicional, voce pode jogar um dos dados de novo, quando estiver calculando a sua For<;;a de Ataque (isto e, a sua For<;;a de Ataque sera o seu indice de HABILIDADE mais a soma de tres numeros obtidos nos dados, ao inves dos dois normais):
        
        // HOMEM-RINO	HABILIDADE 8	ENERGIA9
        
        // Se voce veneer, podera entrar na Torre Negra. Volte para 177.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      265:{
        text:`Voce esta em um corredor curto, que termina em uma grande porta de madeira a sua frente. Voce
        // tenta a ma9aneta, ea porta abre para um grande aposento. Volte para 169.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      266:{
        text:`Ele nao esta interessado na sua conversa ou nas suas hist6rias, e questiona o seu direito de estar ali.
        // Sem aviso previo, ele se transforma em uma Serpente, silvando  para  voce, e desliza pelo chão na sua dire9ao. Enquanto isso, a Cabe9a de Cachorro  na parede se desprendeu  e esta agora flutuando na sua dire9ao pelo ar. Voce usara um Encanto contra eles (va para 310) ou procurara alguma coisa em sua mochila para usar (volte para 54)?
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      267:{
        text:`// Quando voce segura o calice, o liquido fica verde, e depois marrom sujo, diante de seus olhos.
        // Cheira a podre, mas voce toma um gole. Com uma careta, voce cospe tudo - voce esta bebendo agua lamacenta! Voce sai da camara e se dirige a Cidadela. Volte para 156, mas perde um ponto de
        // SORTE.`,
        options: [
          {text:``, goTo:0},
        ]
      },
      268:{
        text:`Quando voce golpeia a porta, a madeira racha um pouco, mas nao cede. Voce tenta de novo, e dessa
        // vez a madeira se parte ao meio. Voce abre caminho e entra no aposento do outro lado. Volte para
        210`,
        options: [
          {text:``, goTo:0},
        ]
      },
      269:{
        text:`Os dois homens estao sujos e maltrapilhos. Quando se aproxima, voce pode ouvi-los discutindo em voz alta sobre o pre90 de um punhal. 0 mais alto deles esta obviamente tentando vender o punhal
        // para o outro. Ele argumenta que o punhal e encantado, e vale mais do que o outro esta disposto a
        // pagar por ele. Quando voce chega mais perto, ele pega voce pelo bra90 e pergunta sua opiniao sobre o pre90 da arma. 0 que voce dira:
        
        
        // Cinco Pe9as de Ouro? Oito Pe9as de Ouro?
        // Dez Pe9as de Ouro?
        // Volte para 205
        // Volte para 186
        // Volte para 225`,
        options: [
          {text:``, goTo:0},
        ]
      },
      270:{
        text:`Voce pode escolher a porta da esquerda ou a da direita. Se preferir a da esquerda, volte para 185. Se quiser tentar a outra porta, volte para 23.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      271:{
        text:`Voce aperta a mão dele e se apresenta - e grita quando os nervos da sua mão e bra90 ficam dormentes! O'Seamus se escangalha de rir. Voce perde um ponto de HABILIDADE, uma vez que estava usando seu bra90 da espada. Voce esta ficando aborrecido, mas o homenzinho continua a apertar a sua mão e rir. Uma risada vem de tras de voce, e voce se vira eve o brincalhao flutuando no ar, sorrindo. Mas voce esta ainda apertando a mão dele diante de voce... ou nao esta? Na
        // realidade, voce compreende agora que esta freneticamente apertando a mão de um boneco empalhado que balan9a juntamente com seu bra90 enquanto voce se movimenta.Voce atira o
        // boneco no chão - mas ele esta grudado na sua mao! A situa9ao e ridfcula, e voce esta ficando muito
        // zangado. "S6 uma brincadeirinha", diz o Duende."Agora, o que posso fazer por voce?" Voce perguntara a ele o caminho para seguir adiante (va para 348) ou desembainhara a sua espada (volte para 131)?
  `,
        options: [
          {text:``, goTo:0},
        ]
      },
      272:{
        text:`      Voce revista os bolsos dele e encontra oito Pe9as de Ouro. A Mirfade de Bolso infelizmente foi danificada na luta, mas talvez voce possa encontrar algum uso para ela, podendo leva-la com voce. Agora voce pode investigar a Adega dos Vinhos (volte para 242), ou atravessa-la e seguir adiante pela porta do outro lado do aposento (volte para 95).
`,
        options: [
          {text:``, goTo:0},
        ]
      },
      273:{
        text:`


        // A senha:
        
        // Cimitarra? Ganjees?
        // Kraken?
        
        
        
        // Va para 371
        // Volte para 255
        // Volte para 49`,
        options: [
          {text:``, goTo:0},
        ]
      },
      274:{
        text:`0 armario das armas esta trancado, mas pode ser facilmente arrebentado. La dentro ha varias espadas e lan9as. Voce vai arrebentar a fechadura e escolher uma arma (va para 353) ou procurara em sua mochila um artefato para usar (va para 277)?
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      275:{
        text:`Voce reconhece o mecanismo como sendo uma Miriade de Bolso, um objeto encantado que pode se transformar em qualquer tipo de armas e outros artefatos uteis. Voces dois se preparam para a batalha. Voce pode lutar contra ele com sua espada:

        // ELFONEGRO	HABILIDADE 8	ENERGIA4
        
        // Ou voce pode lan9ar um Encanto. Se voce lan9ar um Encanto da Fraqueza, a HABILIDADE dele fica reduzida a cinco. Se  voce lan9ar um Encanto de C6pia de Criatura, um Elfo Negro identico, com uma Miriade de Bolso, lutam contra o Elfo (resolva a batalha entre eles e, se o Elfo Negro original veneer, voce tera que liquida-lo pessoalmente). Se voce quiser lan9ar  um Encanto  da Ilusao, va para 399. Se voce lutar contra ele e veneer, volte para 272.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      276:{
        text:`Voce cai no fundo de um po90 profundo - possivelmente um manancial de agua tapado. Voce se recompoe e parece estar inteiro. Mas como voce vai sair? Cavar apoios para os pes nas paredes do po90 com sua espada levaria um tempo enorme. Voce poderia lan9ar um Encanto da força para ajuda-lo nessa tarefa (volte para 165) ou poderia gritar, pedindo ajuda (volte para 202). Qual dessas possibilidades voce escolhera?
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      277:{
        text:`Voce sem duvida recolheu diversos artefatos no seu caminho atraves da Cidadela. Voce tern alguma das seguintes coisas? Se tiver, podera usar uma delas agora:


        // Uma Aranha em um vidro Uma Mirfade de Bolso Pequenas Amoras
        // Va para 330
        // Va para 315
        // Volte para 76
        
        
        // Se nao tiver nenhuma dessas coisas, volte para 119 .
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      278:{
        text:`Pedras Magicas e um jogo um tanto perigoso, mas os Premios sao altos. Antes do jogo come9ar, seu Mestre de Jogos, que e um aprendiz de feiticeiro, lan9a um encanto sobre uma rocha, que fara com
        // que ela exploda em algum momento posterior. Os jogadores ficam em circulo e passam a pedra de um para o outro, percorrendo a roda. Quando a pedra explode, o  jogador que a estiver segurando esta fora do jogo - e termina com as maos bastante machucadas! Os jogadores que permanecem recebem outra Pedra Magica para passar de um para o outro, e o jogo continua ate que s6 reste um jogador. Os espectadores apostam nos jogadores, mas, antes de apostar, eles tern que contribuir com tres Pe9as de Ouro para o dinheiro do premio. Neste jogo, voce podera ganhar trinta e seis Pe9as de Ouro, com risco de feriras suas maos. Tendo escolhido esta op9ao, voce tera que participar do jogo pelo menos uma vez, mas podera continuar  a jogar por tanto tempo quanto quiser. Se  veneer, podera tomar posse de trinta e seis Pe9as de Ouro por cada um dos jogos que participar. Se perder, tera que deduzir dois pontos de HABILIDADE e quatro pontos de ENERGIA por cada jogo.
        // Joga-se da seguinte maneira: lance um dado para saber quantos outros jogadores se juntarao a voce. De uma letra para cada jogador (A, B, C, etc. - voce e o jogador A) e escreva tudo em uma folha de papel, na forma de um circulo. Depois, jogue outro dado para cada jogador para ver quern come9a com a pedra (o numero maior come9a).
        
        // Jogue dois dados para o primeiro jogador, que tern que obter menos de doze. Siga adiante para o pr6ximo jogador, que tern que tirar menos de onze. 0  terceiro jogador tern que obter menos de dez, e assim por diante. Desloque o seu lapi s de letra para letra em volta do circulo para ter controle de quern esta coma Pedra Magica. Quando um jogador obtiver um numero maior do que o limite estabelecido, a pedra explode, e este jogador esta fora.
        
        // Come9a entao tudo de novo (isto e, o numero limite volta a ser doze), sem o perdedor. Se algum jogador tirar um numero igual ao limite, a pedra explode na passagem, e voce tera que repetir a rodada.
        
        // Quando voce tiver jogado o suficiente, podera jogar Escolha de Seis (volte para 171), Faca­ Faquinha (va para 365) ou podera sair do salao de jogos (volte para 31).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      279:{
        text:`Voce flutua no ar. 0 aposento continua a sacudir a sua volta, mas voce pode voar livremente.
        // Podera se movimentar para onde quiser no aposento:
        
        
        // Para o armario de armas?
        // Contornar rapidamente para tras do feiticeiro? Na dire9ao da janela?
        // Para baixo da mesa?
        // Volte para 44 Vapara318 Volte para 78
        // Va para 335`,
        options: [
          {text:``, goTo:0},
        ]
      },
      280:{
        text:`A criatura esta atacando voce impiedosamente, e nao ha nada que voce possa fazer para evitar isso. Sua perna esta coberta de sangue, e a dor e arrasadora. Voce luta com a cabe9a que nao esta vendo,
        // mas nao adianta nada. A criatura salta sobre o seu pesco90, e sua ultima lembran9a, antes de perder os sentidos, e de suas mandibulas se fechando sobre a sua garganta. Va para 323.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      281:{
        text:`Voce abre a porta para outro aposento e surpreende quatro pequenas criaturas sentadas no chão nu. Elas levantam-se rapidamente, chocadas com a sua chegada. Voce:


        // Desembainha a sua espada e se prepara para atacar? Diz a eles que esta s6 de passagem?
        // Tenta entabular uma conversa com eles?
        // Va para 382
        // Va para 285
        // Va para 356
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      282:{
        text:`Voce lan9a uma pequena bola de fogo diretamente sobre a Cobra de Esgoto, que queima seu corpo, cortando-a em duas metades. As duas metades agora atacam voce e estao esmagando o seu peito. Voce perde dois pontos de ENERGIA. Tentando uma estrategia diferente, voce cria chamas que queimam em cada mão e as esfrega sobre os aneis de seu corpo enroscado. A criatura se contorce violentamente e afrouxa a pressao! Voce encontra sua cabe9a e a espreme com as suas maos flamejantes, queimando-a fatalmente. Volte para 112.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      283:{
        text:`Sem magia, o seu destino esta selado. Voce esta fadado a passar o resto dos seus dias como prisioneiro na Cidadela do Caos.

        // Voce fracassou na sua missao.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      284:{
        text:`Voce lan9a o Encanto  (elimine-o da sua Lista de Encantos) e come9a a sair do chão. 0  tentaculo nao solta, e a dor em sua perna se toma insuportavel. Voce resolve retornar ao solo antes que a sua pema seja arrancada do corpo. Voce tera que lutar contra ele com sua espada (volte para 71), ou lan9ar um Encanto do Fogo (volte para 114).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      285:{
        text:`Voce diz a eles que nao pretende fazer nenhum mal, esta apenas  prosseguindo  em seu caminho. Eles suspiram aliviados. 0 aposento e esparsamente decorado com peda9os de folhagem, e um pequeno fogo queima sob um orificio no teto em um dos cantos. Ha duas  portas na parede oposta. As pequenas criaturas dizem que voce pode seguir adiante em seu caminho tanto por uma ponta quanto pela outra. Voce escolhe a porta da esquerda (volte para 185) ou  a porta da  direita (volte para 23)?
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      286:{
        text:`As pequenas criaturas guincham e se amontoam quando voce se aproxima.  Voce passa todas a fio de espada, mas eles nao oferecem nenhuma resistencia! Voce fiea um pouco desconfiado com essa batalha tao facil e dirige-se para a porta do outro lado do aposento. Volte para 140.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      287:{
        text:` Voce oferece o Vidro do Unguento. Alguma coisa invisfvel arranca-o da sua mão e leva-o  na dire9ao de uma das cabe9as de animais. Maos invisiveis desatarraxam a tampa, ea cabe9a fareja o unguento la dentro. Voltando-se para voce, a cabe9a exclama: "Ora, isso e apenas um balsamo curativo de alquimista! Para que precisamos disso?" 0 Vidro cai no chão e se parte. Voce pode:


        // Oferecer uma Miriade de Bolso Oferecer algumas Pe9as de Ouro
        // Bater em rapida retirada e tentar a outra porta
        // Volte para 160
        // Volte para 27
        // Volte para 25`,
        options: [
          {text:``, goTo:0},
        ]
      },
      288:{
        text:`As duas criaturas avanc;am. 0	Macaco-Cachorro ataca voce primeiro, seguido pelo Cachorro­ Macaco. Voce lanc;ara um encanto ou se mantera firme e lutara?

        // Voce podera lan9ar:
        
        
        // Um Encanto da Forc;a Um Encanto da Levitac;ao
        
        // Ou podera lutar com um de cada vez:
        // Volte para 162
        // Volte para 86
        
        
        
        // Macaco-Cachorro Cachorro-Macaco
        // HABILIDADE
        // 7
        // 6
        // ENERGIA
        // 4
        // 6
        
        
        // Se voce matar os dois na batalha, volte para 32.`,
        options: [
          {text:``, goTo:0},
        ]
      },
      289:{
        text:`0 que voce tirara de sua mochila?

        // Um Espelho de Prata?
        // Um Frasco de Essencia de Erva de Porco? Um Vidro de Unguento?
        // 289
        
        
        
        // Va para 340
        // Volte para 214
        // Va para 305
        
        
        // Se voce nao tiver nenhuma dessas coisas, va para 304 e escolha de novo.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      290:{
        text:`0 HOMEM-RINO da um passo adiante e desfere uma estocada com sua lanc;a na sua direc;ao. Voce pula rapidamente e se desvia. Embora ele nao esteja usando uma armadura, seu couro grosso parece ser prote9ao suficiente. Voce tern que decidir se o enfrenta em combate ou usa a sua magia. Voce desembainha a sua espada (va para 325) ou tenta um encanto? Voce pode usar:


        // Um Encanto da Fraqueza Um Encanto da Levitac;ao Um Encanto da Forc;a
        // Va para 307
        // Volte para 70
        // Volte para 264
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      291:{
        text:`"O que e isso?" pergunta uma voz fantasmag6rica. Voce negocia com eles. Voce deixara que eles fiquem  com	o  unguento,	se  eles  deixarem	voce  passar	pelo  aposento,  ja  que  voce  nao  esta
        // interessado  neles.  Uma fantasmag,6,  rica mão aparece do  nada e  tenta arrancar  o  vidro  da sua mao,
        // mas voce o guarda rapidamente. "Ede fato o Unguento da Cura", voce ouve uma das vozes dizendo
        // baixo. "Aceitamos a sua oferta", diz uma voz. "Deixe o Vidro onde voce esta e saia do aposento por esta porta". Uma porta do outro lado brilha suavemente. Voce nao confia neles e leva o Vidro com voce ate a porta. Quando voce abre a porta, atira o Vidro para o outro lado do aposento e sai rapidamente. Va para 328.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      292:{
        text:`0  aposento e um elegante quarto de dormir suntuosamente decorado com rendas finas e um tapete de pele. No centro do aposento, ha uma grande cama de quatro colunas. Sentada e recostada na cama, evidentemente acordada pela agita9ao toda, esta uma linda mulher, com uma aparencia de sflfide, longos cabelos negros e olhos profundos e penetrantes. "Que direito voce tern de entrar aqui?" ela grita. Com estas palavras seus olhos ficam vermelhos como sangue e dois jatos de fogo lfquido jorram deles diretamente sobre voce. Voce:


        // Cria um Encanto do Escudo para se proteger?
        // Sai do aposento rapidamente e experimenta a porta ao lado? Diz ter um presente especial para ela?
        // Va para 376
        // Volte para 64
        // Volte para 42
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      293:{
        text:`Em cima da hora, seu Encanto trava o Tridente em pleno voo, horrivelmente pr6ximo a  seu pesco90. Ele cai no chão. Va para 374.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      294:{
        text:`0 Gark se recompoe, abaixa o machado e come9a a se desculpar com voce por estar dormindo no
        // posto. Por insistencia dele, voce concorda em nao dizer nada a ninguem. A criatura se oferece para levar a sua tunica, mas voce recusa o oferecimento e segue em frente. Volte para 99.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      295:{
        text:`Voce se concentra e come9a a se transformar em um Escorpiao Gigante. 0 Anao e o Goblin interrompem seus passos, mas o Orea se comporta como se nada tivesse acontecido. Os outros dois veem  voce picar o Orea com sua cauda, mas o Orea nem se abala e chama os outros dois. Vendo que voce nao causou mal algum, eles sacodem suas cabe9as e olham de novo, vendo entao o verdadeiro voce. 0 Orea tenta segurar voce. Volte para 213.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      296:{
        text:`A chave gira e a porta abre. Volte para 292.`,
        options: [
          {text:``, goTo:0},
        ]
      },
      297:{
        text:`Voce bate a porta, fechando-a atras de voce, e, juntamente como alarme estridente, voce ouve o som de passos, correndo rapidamente e se aproximando. 0 corredor a s ua frente se bifurca. Voce dispara
        // e segue pelo caminho da esquerda (va para 316) ou o da direita (volte para 2) - ou prefere retornar pela porta e chamar o mordomo (volte para 75)?
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      298:{
        text:`Quando suas maos se fecham em torno do ca.lice, ele come9a a efervescer e espumar, respingando em voce quando voce o ergue ate seus labios. Voce tern certeza de que quer provar isso? Se nao, volte para 58 e escolha outra coisa - mas se voce estiver determinado, volte para 141.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      299:{
        text:`A chave nao gira, por mais que voce tente. Na sua frustra9ao, voce atira a caixa no chão - e ela desaparece! Voce procura a sua volta pela caixa invisivel, mas nao consegue acha-la em lugar
        // nenhum. Em desespero total, voce se vira na dire9ao da porta e parte mais uma vez para a sua meta. Volte para 237.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      300:{
        text:`Jogue um dado. Se voce tirar um, dois ou tres, entao este numero de facas atinge voce (cada faca significa dois pontos a menos de ENERGIA). Se tirar um quatro, cinco ou seis, entao elas nao acertam voce. Voce tern que preparar-se para contra-atacar, seja com um Encanto da Ilusao (volte para 244), seja desembainhando a sua espada (va para 346).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      301:{
        text:`Voce sente a força se espalhando pelo seu corpo. Voce tenta lutar com a cabe9a desta criatura,  mas sua pr6pria força parece ter tambem crescido e se igualado a sua. Sua perna esta agora inutil e
        // coberta de sangue. Sua força come9a a se esvair e, quando isso acontece, as mandibulas da criatura se fecham sobre a sua garganta. A consciencia vai sumindo. Va para 323.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      302:{
        text:`Elas ordenam que voce leve uma bandeja de comida por uma porta na parede do outro lado para o Grande Salao ea deixe na mesa, pois os Ganjees logo estarao la para ceia. Elas tambem advertem voce para que nao espere pelo Ganjees, ou provavelmente voce terminara sendo a pr6xima refei9ao. Voce leva a bandeja e sai pela porta distante. Feliz por ter saido da repulsiva cozinha delas, voce segue uma passagem adiante, para para deixar a bandeja e continua para uma outra porta. Voce experimenta a ma9aneta e ela gira. Volte para 169.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      303:{
        text:`0 Golem avan9a, e voce o golpeia com sua espada, mas ela atinge uma rocha s6lida e retine ruidosamente.Voce tera que resolver esta batalha e deduzir um ponto de HABILIDADE durante a luta:

        // GOLEM	HABILIDADE 8	ENERGIA 10
        
        // Se voce derrotar a criatura, volte para 147.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      304:{
        text:`A porta se abre, e voce penetra no aposento. E bastante grandee esta decorado com varios entalhes.
        // Parece ser alguma coisa como o estudio de um artista, e ha di,,versas estatuas inacabadas de pedra alinhadas na parede. No centro do aposento, ha um grande GARGULA de pedra sobre uma caixa
        // entalhada em pedra. Quando voce entra no aposento, a criatura faz ruido ao virar a cabec;a na sua direc;ao. Lentamente, ele desperta para a vida, descendo do seu pedestal. Esta bloqueando o seu caminho pelo aposento para uma porta do outro lado. Voce vai:
        
        
        // Desembainhar a sua espada e avanc;ar? Preparar-se para lanc;ar um Encanto?
        // Procurar em sua mochila alguma coisa para usar?
        // Sair rapidamente deste aposento e tentar a porta de meio?
        // Volte para 172
        // Volte para 26
        // Volte para 289
        // Volte para 64`,
        options: [
          {text:``, goTo:0},
        ]
      },
      305:{
        text:`Voce joga o Vidro no Gargula. Ele se parte, mas nao causa nenhum dano. A criatura da um,,soco em voce que o atinge no peito, jogando voce no chão. Voce perde dois pontos de ENERGIA. E melhor
        // voce sair deste aposento rapidamente e seguir pela sacada para a porta do meio. Volte para 64.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      306:{
        text:`A uma pequena distancia, ha uma porta que bloqueia a passagem. Na realidade, e apenas uma meia­ porta, e chega s6 ate a cintura em voce. Um letreiro na porta aponta para adiante e diz "Somente Jogadores". Voce vai empurrar e abrir esta porta (volte para 52) ou voltara e entrara no aposento da porta ornamentada (volte para 132)?
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      307:{
        text:`Quando voce lanc;a o Encanto, a criatura  avanc;a sobre voce e fere seu brac;o coma lanc;a. Voce perde dois pontos de ENERGIA.  Depois o Encanto  da Fraqueza comec;a  a fazer efeito. A criatura fica lenta e comec;a a bufar e ofegar. Voce desembainha a sua espada e avanc;a para liquida-la.

        // HOMEM-RINO	HABILIDADE 4	ENERGIA 7
        
        // Se voce o derrotar, podera entrar na Cidadela. Volte para 177.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      308:{
        text:`A mac;aneta gira e voce entra em um comodo as escuras. Volte para 257.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      309:{
        text:`Voces dois revistam os bolsos do homem alto. Voce encontra vinte Pec;as de Ouro, as quais voces repartem  igualmente,  e tiram a sorte para ver quern fica com o punhal; cara,  voce leva, coroa,  ele leva (jogue uma moeda para isso). Se voce ficar com o punhal, volte  para 15. Se  nao, volte para 245.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      310:{
        text:`Voce usara:

        // Um Encanto de C6pia de Criatura? Um Encanto da Ilusao?
        // Um Encanto de Percepc;ao Extra-S ensori al ?
        // 310
        
        
        
        // Volte para 181
        // Volte para 250
        // Va para 393
        
        
        // Se voce nao possuir nenhum <lesses, retome para 104 e escolha de novo.`,
        options: [
          {text:``, goTo:0},
        ]
      },
      311:{
        text:`Voce se concentra ao maximo, murmurando as palavras magicas do seu Encanto. Uma das velhas nota sua atitude e grita para as outras duas. Voce lan9a seu Encanto - mas nada acontece! Voce olha para as velhas bruxas, que estao sorrindo para voce. "Nao podemos permitir que voce use magia contra o nosso bichinho de estima9ao"; diz uma delas. Voce desperdi9ou  um Encanto. Elimina um (a sua escolha) da sua lista de Encantos. Agora o Devlin esta praticamente em cima de voce, e voce tera que se abaixar para se proteger (volte para 178) ou desembainhar a sua espada (volte para 61).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      312:{
        text:`Voce segura o seu Espelho no alto. Isso parece ter pouco efeito sobre a criatura, que continua a avan9ar. Uma das cabe9as se projeta e derruba o espelho, despeda9ando-o no chão. Voce tenta decidir o que fazer em seguida. Volte para 184.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      313:{
        text:`A fruta e doce e suculenta. Voce come uma, depois outra - o sabor e delicioso! Voce ganha dois
        // pontos de ENERGIA. Mas, para sua surpresa, quando voce tenta limpar a garganta depois, nenhum som sai da sua boca. Voce comeu uma Fruta do Silencio. Seu efeito peculiar e apenas temporario, mas voce nao sera capaz de falar adequadamente por algum tempo, embora consiga se fazer entender, apesar de uma certa dificuldade. Isso significa, na pratica, que nao podera usar a sua
        // magia (da pr6xima vez que for dada uma op9ao de Encantos), mas, depois disso, voltara ao normal. Voce pode continuar pela porta da parede a esquerda (volte para 13), ou pela porta oposta a que
        // voce acabou de usar para entrar (volte para 281).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      314:{
        text:`Voce tenta se concentrar, criando a ilusao de que o feiticeiro esta igualmente em um aposento que sacode. 0 Encanto e lan9ado (e voce tern que elimina-lo de sua lista), mas nao faz efeito; voce nao consegue se concentrar totalmente. Balthus Dire esta quase em cima de voce. Va para 373.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      315:{
        text:`Balthus Dire cai em um estado de concentra9ao, enquanto voce brinca com a sua Mirfade de Bolso.
        // Voce aperta um botao, e sai dela uma luz cintilante, que se estende ate o comprimento de uma espada. Isso e uma Espada Solar e acrescentara quatro pontos a sua HABILIDADE quando voce
        // lutar com ela! Voce se volta para enfrentar o feiticeiro, que esta se concentrando em um Encanto ha algum tempo. Volte para 191.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      316:{
        text:`As passadas que voce ouviu - que realmente deveriam ser chamadas de "maozadas" - pertencem a tres GIRAS, que agora rolam descendo a passagem na sua direc;ao, o que faz com que voce recue de volta para a porta. Estas criaturas sao animais peculiares que tern, ao inves de pemas, um segundo par de maos. Eles se deslocam dando cambalhotas a um ritmo bem acelerado. Suas cabec;as - ou pelo menos seus rostos - estao colocados no centro do peito. Embora nao sejam muito pratico como espadachins, tendo em vista seus meios de movimenta9ao inadequados,  sao excelentes lan9adores de facas. Pegando facas em seus cintos enquanto se movimentam em cfrculos, eles podem dispara­ las em velocidade de fogo rapido, como rodas-de-santa-catarina. No momento, tres facas desse tipo estao cruzando oar na sua dire9ao. Voce pode usar um Encanto do Escudo para se proteger (volte para 220), ou Testar a sua Sorte. Se voce optar por esta ultima alternativa e tiver sorte, volte para
        // 139. Se nao tiver, volte para 300.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      317:{
        text:`Os quadros sao retratos de varios Senhores e Condes de destaque no Reino da Rocha Escarpada. Atras de uma cadeira, na cabeceira da mesa, ha um retrato do pr6prio Balthus Dire. Ele realmente aparenta ser um adversario poderoso. Acrescente um ponto de SORTE pela advertencia da sua aparencia, mas voce tera que perder um ponto de ENERGIA pelo medo que ele inspira. Voce pode agora continuar pela escadaria do lado esquerdo (volte para 19), ou pela escadaria do lado direito (volte para 197).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      318:{
        text:`0 feiticeiro esta demonstrando sinais de exaustao mental e reage com lentidao quando voce para atras dele. Voce nota que ele esta usando um anel de ouro com um grande rubi incrustado no dedo indicador da sua mão direita, que pende a seu lado. Voce pode ou tentar  arrancar o  anel do dedo dele (va para 381), desembainhar rapidamente a sua espada, ou procurar  em sua mochila  um artefato para usar (volte para 277).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      319:{
        text:`Voce se concentra no seu brac;o. Ele comec;a a endurecer e adquire a cor metalica e fosca do ferro. Os olhos do velho ficam arregalados ao ver seu antebra90 de ferro. Voce luta para se livrar, mas ainda assim os dentes dele continuam cravados. Voce perde dois pontos de ENERGIA e tern que eliminar o Encanto da Ilusao. A sua ilusao evidentemente foi pouco convincente. Voce lanc;a mão da sua espada. Va para 333.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      320:{
        text:`Voce se concentra fortemente, mas, por mais que tente, nao consegue interceptar nenhum dos pensamentos de Balthus Dire - ele esta bloqueando o seu Encanto! Voce pode continuar com um Encanto da Ilusao (va para 332), um Encanto da Fraqueza (volte para 113) ou pode desembainhar a sua espada para ataca-lo (va para 351).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      321:{
        text:`Cautelosamente, e mantendo-se fora da area visivel, voce se esgueira pelas bordas do patio na
        // escuridao.  Ha dois  grupos  de criaturas  a sua frente.  'A  direita,  voce  pode  ver duas  figuras  de
        // aparencia humana conversando sob uma tocha presa a parede. 'A esquerda,  um grupo de quatro
        // criaturas, de variadas formas e tamanhos, esta sentado em volta de uma fogueira, comendo. Voce
        // abordara os dois embaixo da tocha (volte para 269) ou o grupo em volta da fogueira (va para 339)?`,
        options: [
          {text:``, goTo:0},
        ]
      },
      322:{
        text:`0 que voce vai tirar de sua mochila? Uma Aranha em um Vidro?
        // Um Amuleto Encantado? Um Vidro de Unguento?
        // 322
        
        
        // Volte para 39
        // Volte para 168
        // Volte para 291
        
        
        // Se voce nao tiver nenhuma dessas coisas, tera que desembainhar a sua espada e enfrenta-los (volte para 248).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      323:{
        text:`Voce desperta e olha em torno de si.'A medida que sua mem6ria volta, voce fica admirado de estar
        // vendo. A sua perna esta sensivel, mas nao ha ferimento! Voce ouve um risinho frouxo vindo de um lugar acima de voce e subitamente a coisa toda faz sentido...
        
        // Autuando acima de voce esta O'Seamus, agora rindo alto. A coisa toda foi uma grande brincadeira! Voce fica furioso e salta de pe, mas, ao olhar para o engrac;ado homenzinho que rola pelo ar em gargalhadas histericas,  voce nao tern remedios e  nao ver o lado engrac;ado  da coisa tambem.  Voce da um risinho, depois mais uma risada, e acaba rindo alto. Por algum tempo, voces dois se acabam de dar gargalhadas, ate que as lagrimas rolam pelos seus rostos.
        
        // Quando os dois conseguem se controlar, voces acabam se sentando para conversar. Ele e um homenzinho agradavel. Antes de voce sair, ele diz: "Voce e realmente um cara legal. 0 caminho a
        // sua frente, porem, esta cheio de perigos. Mas talvez estas coisas possam ajuda-lo." Com um movimento da mao, ele faz com que aparec;am uma espada e um prato na mesa. A espada e uma espada magica de batalha que acrescentara um ponto ao resultado dos dados quando voce estiver determinando a sua For<;a de Ataque. 0 prato e, na realidade, um Espelho de Prata de excelente qualidade. Voce pode levar essas coisas com voce, mas tera que deixar a sua espada velha para tras. Saia do aposento pela:
        
        
        // Porta de mac;aneta de latao? Porta de mac;aneta de cobre? Porta de mac;aneta de bronze?
        // Va para 386
        // Volte para 144
        // Va para 338`,
        options: [
          {text:``, goTo:0},
        ]
      },
      324:{
        text:`"Voce nao pode se esconder de mim!" ele grita. Isso e de fato verdade, e voce toma consciencia de
        // que poderia estar em perigo, uma vez que voce nao consegue ve-lo. Va para 369.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      325:{
        text:`A criatura e um tanto volumosa e desajeitada, e fica bufando furiosamente enquanto voce se esquiva
        // de seus golpes. Voce desembainha a sua espada e luta:
        
        // HOMEM-RINO	HABILIDADE 8	ENERGIA9
        
        // Se voce derrota-la, podera entrar na Cidadela. Volte para 177.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      326:{
        text:`Voce recoloca o livro no lugar. Voce continuara folheando livros (volte para 84) ou saira pela porta do outro lado, atras do bibliotecario (volte para 31)?

        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      327:{
        text:`Eles	pegam	a	sua Mirfade	de	Bolso  e	brincam	com	ela alegremente. Enquanto	eles	estao devidamente distrafdos, voce pode esgueirar-se, passando por eles, na dire9ao da porta. Va para
        // 366. Risque seu presente da sua Lista de Equipamentos.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      328:{
        text:`Voce fecha a porta atras de voce e chega ao pe de outra escadaria, que sobe em espirais para o interior da torre. Subindo os degraus, voce chega a uma outra sacada, onde uma unica porta e a
        // alternativa que existe para seguir adiante. Ao experimentar a porta, ela abre facilmente. Mas, quando voce empurra a porta, um ruido alto de silvos vem la de dentro. Voce entra e fica gelado,  ao ver uma imensa HIDRA de seis cabe9as se arrastando na sua dire9ao sobre os corpos das vitimas anteriores ! Suas seis cabe9as de serpente atacam voce com seus dentes agu9ados e crueis. Voce fica encurralado em um canto. 0 que voce fara:
        
        
        // Desembainhara a sua Espada e lutara contra a criatura? Usara um Encanto de C6pia de Criatura?
        // Usara alguma coisa da sua mochila?
        // Volte para 67
        // Volte para 143
        // Volte para 226
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      329:{
        text:`Voce se concentra na mente dela e fica chocada ao descobrir que ela nao esta viva, como parece, mas que ja morreu ha muitos anos. Desde que um incendio violento - uma maldi9ao lan9ada sobre ela por Balthus Dire em pessoa, por ela nao ter cumprido as ordens de lavar suas vestes a tempo
        // para uma reuniao importante - matou-a e as suas crian9as, seu corpo espectral foi condenado a lavar roupas eternamente. Ela e de fato uma pobre miseravel. Voce agora repara que ela esta ficando
        // zangada e desconfiada com a sua presen9a. Ela esta murmurando alguma cantilena muito baixo. Voce tentara conversar com ela (volte para 21) ou tentara passar rapidamente por ela seguindo o caminho (volte para 221)?
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      330:{
        text:`0 feiticeiro  grita de pavor quando voce exibe o Vidro. Sentindo que esta pequena  criatura  pode ser um aliado valioso, voce abre o  Vidro e a solta. A expressao  do feiticeiro  se  transforma  em um sorriso dissimulado e, enquanto voce observa, o pequeno Homem-Aranha avanc;a, nao na direc;ao de Balthus Dire, mas na sua direc;ao! Voce tera que lutar contra ele:

        // HOMEM-ARANHA	HABILIDADE 7	ENERGIA5
        
        // Logo que a criatura causar algum ferimento em voce, volte para 208. Se voce a derrotar sem sofrer ferimentos, volte para 119.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      331:{
        text:`Os dentes afiados do Peixe Abocanhador cravam-se no seu rosto e nariz, quando voce tenta se esquivar. Voce perde um ponto de HABILIDADE e tres pontos de ENERGIA enquanto trata da sua face ensanguentada. As tres velhas bruxas aproximam-se de voce, contornando o caldeirao, e empurram voce na direc;ao da porta do outro lado da cozinha. Colocando voce porta afora, elas insultam e provocam voce. Volte para 265.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      332:{
        text:`0  queixo de Balthus Dire cai quando acontece uma transformac;ao diante dos olhos dele. Seu corpo
        // cresce de tamanho e forc;a. Sua pele passa a ser de um vermelho vivo, e nascem chifres da pele esticada de sua testa. Seus dentes sao afiados espinhos negros, e sua lingua, agora bipartida, silva ameac;adoramente na direc;ao dele. Voce agora aparece diante dele como  um  DEMONIO  DO FOGO, e  voce agarra o Tridente  que esta no chão para servir de arma para  voce.  0  feiticeiro  foge de voce horrorizado.  Voce pode saltar  por sobre a mesa para ataca-lo  (volte para 80)  ou exigir que ele cancele seus planos de conquista e se renda a voce (volte para 48).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      333:{
        text:`Voce desembainha a sua espada e se prepara para corta-lo em pedac;os . Ele levanta os olhos para
        // voce com uma expressao que faz com que acredite que ele nao esta completamente no controle das suas a96es. Com pena, voce bate na cabec;a dele com o cabo da espada, fazendo com que ele uive e solte o seu bra90. Voce o deixa gemendo no chão, cuidando da sua cabec;a. Voce perde mais dois pontos de ENERGIA pelo dano que ele causou ao seu brac;o e segue adiante. Volte para 14.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      334:{
        text:`Voce toma dois goles. Nao e ruim! Voce enche a boca, mas, ao faze-lo, fica imaginando  porque o Elfo esta rindo. De repente, ele pergunta se  voce e realmente  um convidado.  Embora sua mente esteja confirmando que voce e de fato um convidado, sua voz esta dizendo que nao e, que voce veio
        // para por um fim nos planos de conquista de Balthus Dire! Voce pragueja ao compreender que o vinho deve conter uma dose de Soro da Verdade. 0 Elfo Negro agora sabe da sua missao e deve ser impedido de dizer a outros. Voce desembainha a sua espada e, ao faze-lo, ele puxa um pequeno mecanismo metalico da bolsa presa em volta da cintura dele. Com um toque, isso se transforma em uma arma de lamina em serra. Volte para 275.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      335:{
        text:`Ha uma gaveta secreta fixada sob a mesa, levemente aberta, e, aparecendo fora da gaveta, ha um rolo de pergaminho. Voce pega o rolo e enfia em sua tunica. Mas voce pode ouvir Balthus murmurando bem baixo. Um Encanto! Maso que sera agora? E o que voce pode fazer? De repente, ele comec;a a correr em torno da mesa, tocando cada um dos lados na passagem. A cada toque, a mesa reage com um rufdo de rachadura. Va para 342.

        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      336:{
        text:`Resolva sua batalha com a criatura:GARK	HABILIDADE 7	ENERGIA 11

        // Depois de quatro Series de Ataque, voce podera Fugir por uma das portas do outro lado do aposento (volte para 99), ou entao podera continuar e lutar ate a morte. Se ficar e veneer, volte para 180.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      337:{
        text:`0 feiticeiro e de fato tao born espadachim quanto magico. Resolva sua batalha: BALTHUSDIRE	HABILIDADE 12	ENERGIA 19
        // Se voce tiver conseguido roubar o anel do feiticeiro, podera descontar 2 pontos da sua HABILIDADE, pois ele estava usando o Anel dos Espadachins. Se voce derrotar Balthus Dire, va para 400.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      338:{
        text:`A porta abre para uma passagem. Voce segue a passagem sempre em frente por algum tempo, passando por muitas curvas na rocha. Voce encontra outra passagem que vem da direita, mas segue adiante direto. Finalmente, o caminho acaba se alargando. Volte para 90.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      339:{
        text:`Ha um time ecletico sentado em volta do fogo. Um Orea como rosto coberto de verrugas esta distribuindo magros bocados de came mal passada para os outros. Um Anao de pele verde rosna e reclama do tamanho de seu peda<;o, enquanto dois Goblins - homem e mulher - estao se acariciando. Eles riem e se sacodem, e de vez em quando ela da um tapa na cara feia do macho, causando ainda mais risos. Quando voce se aproxima, eles param e olham para voce com rostos pouco amigaveis. Olham com desprezo para a sua aparencia asseada, e a Goblin femea cochicha algum comentario para seu companheiro. Na frente do Anao, voce pode ver uma caixa aberta. Voce distingue com dificuldade um frasco de lfquido dentro dela. Voce:


        // Sentara com eles em torno do fogo? Perguntara se voce pode se unir a eles?
        // Volte para 134
        // Volte para 149
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      340:{
        text:`Voce segura o espelho n,,o alto, mas a criatura simplesmente desfere um golpe contra ele, despeda<;ando-o no chão. E melhor voce sair desse aposento rapido e tentar a porta do meio da sacada. Volte para 64.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      341:{
        text:`Voce lan<;a o Encanto em tomo de si mesmo e avan<;a. Quatro ou cinco flechas voam na sua dire<;ao, mas param no ar a um metro de distancia antes de atingir voce, caindo inofensivamente ao chão. Voce chega ate o monumento. Lembre-se de eliminar o Encanto do Escudo da sua lista. Volte para 209.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      342:{
        text:`0 feiticeiro afasta-se da mesa e ri. "Agora voce esta em minhas maos, campones!" ele exulta. Cautelosamente, voce sai de debaixo da mesa. Isto e, voce tenta sair. Mas voce nao consegue  passar do limite das bordas da mesa. Ele criou paredes invisiveis que agora prendem voce embaixo da mesa! Por mais que voce tente, nao consegue romper estas barreiras. Voce agora e prisioneiro dele. Voce falhou na sua missao...
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      343:{
        text:`Um pouco mais adiante pela passagem, voce chega a uma outra bifurcac;ao, onde voce pode ir para a esquerda (volte para 55) ou para a direita (volte para 249).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      344:{
        text:`Voce desce os degraus. 0 ar esta fresco e estagnado. Ha uma porta ao pe da escadaria. Voce tentara a porta (volte para 7)  ou subira as escadas de volta para irate a porta para o andar terreo  (volte para 5)?
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      345:{
        text:`A criatura geme quando o Encanto faz efeito. Seu enorme peso tornou-se agora um fardo terrivel para ela. Ela ainda se arrasta na sua dire9ao, mas voce consegue desviar-se e contorna-la, partindo na dire9ao da porta do outro lado do aposento. Volte para 140.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      346:{
        text:`Quando os Giras veem voce desembainhar a sua espada, param e tagarelam com muita agitac;ao. Um deles - evidentemente o lider - manda o menor subir a passagem de volta (presumivelmente para buscar ajuda). Os outros dois puxam facas e rolam lentamente na sua dire9ao. Resolva esta batalha (lute com um de cada vez):



        // Primeiro GIRA Segundo GIRA
        // HABILIDADE
        // 7
        // 6
        // ENERGIA
        // 6
        // 5
        
        
        // Se voce veneer, podera seguir pela passagem do lado esquerdo (volte para 243) ou pela passagem do lado direito (volte para 2).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      347:{
        text:`A G6rgona olha para o espelho e grita. Voce arrisca dar uma olhada na criatura, seus olhos subindo a partir dos pes. Mas a G6rgona desapareceu, e em seu lugar esta Balthus  Dire, mais uma vez diante de voce. Volte para 12.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      348:{
        text:`"Oh, eu nao iria nesta  dire9ao",  diz O'Seamus.  "Nao e  uma regiao  agradavel."  Estas tres portas sao o unico caminho para seguir adiante. Duas delas sao muito perigosas,  e  a terceira  tern um cheiro muito forte. No lado oposto do aposento, ha tres portas. Uma tern uma ma9aneta de latao, outra tern uma mac;aneta de cobre, e a terceira tern uma mac;aneta de bro nze. Qual delas voce escolhera:


        // A porta de ma9aneta de latao? A porta de ma9aneta de cobre? A porta de ma9aneta de bronze? Ou voce pedira o conselho dele?
        // Volte para 207
        // Volte para 22
        // Va para 354
        // Volte para 68`,
        options: [
          {text:``, goTo:0},
        ]
      },
      349:{
        text:`Uma replica de Balthus Dire se materializa na sua frente. 0 pr6prio Dire levanta uma sobrancelha. "Ataque!" voce ordena ao s6sia, que se volta para o centro do aposento e avanc;a. A dois metros do feiticeiro, ele para e segura a cabec;a com as maos, atordoado, vira-se e vem na sua direc;ao! 0 feiticeiro ri. "Este jogo pode ter dois participantes!" diz Dire. Voce se concentra, e a replica recebe suas ordens de retornar na direc;ao de Dire. 0 s6sia acaba por interromper a sua aproximac;ao e age conforme as suas ordens. Isso continua por algum tempo, e voce compreende que voces dois tern o poder de controlar a criatura, mas somente dentro de uma certa distancia. A coisa continua para frente e para tras, ate que o Encanto comec;a a perder o efeito. 0	s6sia pouco a pouco vai desaparecendo. A concentrac;ao foi de certa forma exaustiva para voce. Voce levanta os olhos eve Balthus Dire erguer as maos para o teto e depois deixa-las cair com forc;a sobre a mesa. Que magia ele estara usando agora? Volte para 157.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      350:{
        text:`Voce tenta um estratagema simples para se livrar dela, na esperanc;a de que ela nao seja muito inteligente. Olhando na direc;ao das sombras,voce afirma estar vendo uma oura criatura semelhante. Ela garante que voce esta enganado, mas voce e convincente.  Ela parte para investigar,  permitindo que voce corra para a entrada da Cidadela. Volte para 218.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      351:{
        text:`Quando voce avanc;a com sua espada desembainhada, o feiticeiro puxa uma cimitarra do seu cinto. "Sim", ele diz com prazer, "ficarei muito contente de terminar isso com armas!" E,  com  estas palavras, ele salta por sobre a mesa na sua direc;ao . A  batalha que se seguira sera uma luta ate a morte:

        // BALTHUS DIRE	HABILIDADE 12	ENERGIA 19
        
        // Se voce matar o feiticeiro, va para 400.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      352:{
        text:`Voce entra no aposento na ponta dos pes. Esta escuro la dentro, e o ar esta umido. Ha um poste de madeira rustica pregado em uma das paredes, com diversos ganchos nele. Ha duas portas na parede do outro lado que levam adiante. No poste, pendurado, ha um espelho improvisado, mas, quando sua tocha ilumina o espelho, seu reflexo e projetado sobre os olhos do gigante adormecido, que grunhe e se mexe. Um dos olhos se abre, depois o outro, ele salta de pe! Ele pega uma acha, que usava como travesseiro, e rapidamente retira a bainha de couro, revelando uma afiada cabec;a de bronze. Esta criatura gigantesca e um GARK! Grandes e brutos, os Garks sao meio Goblins, meio Gigantes, cruzados por senhores feiticeiros por sua indole agressiva. Embora um tanto estupidos, sao criaturas bastante violentas e de natureza guerreira.Voce:


        // Vai dar uma corrida na direc;ao das portas? Desembainhara a espada, pronto para a luta? Pedira desculpas por perturbar a criatura?
        // Vai se preparar para usar um Encanto?
        // Volte para 203
        // Volte para 16
        // Volte para 216
        // Volte para 11`,
        options: [
          {text:``, goTo:0},
        ]
      },
      353:{
        text:`Ha muitas armas mortais no interior do armario, mas uma espada com o fio azulado chama a sua aten ao. Balthus Dire ve voce pegar esta espada e fica louco de raiva. "Nao toque nesta arma!" ele grita. Mas e tarde demais. Voce ja esta com.ela na mao. "Assim seja," ele diz, tirando uma cimitarra de seu pr6prio cinto e avan ando na sua dire ao. Voce toma consciencia de que a batalha que se seguira sera uma luta ate a morte.

        // BALTHUS DIRE	HABILIDADE 12	ENERGIA 19
        
        // A sua nova arma e uma espada encantada  que acrescentara 2 pontos ao resultado de seus dados jogados para determinar a sua Forc;a do Ataque.
        
        // Se voce veneer, va para 400.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      354:{
        text:`Voce abre a porta e entra em outro aposento, feliz por ter deixado para tras a aborrecida criaturinha. Volte para 188.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      355:{
        text:`Se voce nao quiser (ou nao puder) usar a sua magia, tera que confiar na sua espada. Desembainhe a sua espada e volte para 351.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      356:{
        text:`Eles ficam um tanto aliviados por saber que voce nao tern inten ao de fazer mal a eles e voltam a sentar-se no chão, convidando voce para se juntar a eles. 0 aposento e pequeno e simples, com folhagens espalhadas pelas paredes, possivelmente com o intuito de servir de decora ao, embora as
        // folhas estejam agora murchas e ha muito tempo mortas. Um pequeno fogo arde em um dos cantos, embaixo de um orificio no teto. Ha duas portas na parede de fronte a  voce;  uma a esquerda,  a outra a direita. Voce senta para bater um papo. Voce descobre que as pequenas criaturas magerrimas se
        // denominam ESCOTEIROS e sao de fato um grupo agradavel, que brinca e ri com voce. Voce resolve nao se arriscar a dizer muito sobre a sua missao, mas faz perguntas genericas sobre o lugar. Balthus Dire e o senhor da casa e passa a maior parte do tempo la no alto na Cidadela. A senhora sua esposa e uma feiticeira lindissima que e muito vaidosa e aprecia as coisas que o dinheiro e o poder podem proporcionar. Ha muitas criaturas crueis no interior da Cidadela, mas e preciso tomar
        // cuidado  especial  com  os  Ganjees,  que  vagueiam  pela  Torre  a noite.  Voce  acaba  levantando,
        // agradece pela conversa e se prepara para seguir adiante. Voce pode adicionar 2 pontos de ENERGIA e 1 ponto de SORTE pelo descanso e pelas informa 6es que obteve. Os Escoteiros oferecem tambem a voce o direito de receber deles um favor antes de ir embora, pois eles tambem apreciaram a sua companhia. Voce pode:
        
        
        // Levar a serio a oferta deles
        // Decidir nao se arriscar e sair pela porta da esquerda Sair pela porta da direita
        // Volte para 146
        // Volte para 185
        // Volte para 23
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      357:{
        text:`A criatura e aparentemente surda-muda. Voce a sauda em todas as linguas que conhece, mas ela continua de pe em silencio. Voce se desloca na dire9ao do centro do aposento. Volte para 200.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      358:{
        text:`Infelizmente, voce nao esta muito em posi9ao de fazer amea9as vas. 0 feiticeiro simplesmente ri alto e aperta mais. Ele diz a voce que reconsidere, do contrario sera morte certa. Voce continuara a recusar a oferta, por nao querer se tomar um traidor de seus compatriotas (volte para 148), ou concordara em se submeter ao comando dele (volte para 256)?
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      359:{
        text:`Voce tenta se esquivar, mas nao consegue evitar o impacto em cheio do projetil, que atinge voce na testa e se derrama por toda a sua cara. Voce fica im6vel, esperando talvez pelo inicio de algum tipo de rea9ao acida, mas o liquido pastoso simplesmente pinga do seu rosto no chão. Cautelosamente, voce o toca, primeiro com o dedo, depois com a lingua. Voce acaba de ser atingido por um tomate maduro! Mais uma vez, voce se volta para enfrentar a figura adormecida. Volte para 29.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      360:{
        text:`Voce lan9a outro Encanto. Sua Hidra parcialmente formada cresce um pouco mais, mas ainda nao esta completa. Voce precisara de mais um Encanto de C6pia de Criatura para formar a criatura inteira. Se voce quiser lan9ar este terceiro Encanto, fa9a isso e deixe as Hidras lutarem ate a morte.

        // HIDRA	HABILIDADE 10	ENERGIA 17
        
        // Se a sua cria9ao veneer, volte para 229. Se a sua criatura perder, ou se voce nao possuir Encantos suficientes para completar a cria9ao, voce tera que decidir o que fazer em seguida (volte para 184).
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      361:{
        text:`A porta abre novamente mas,  quando  voce faz isso,  ouve o ruido ensurdecedor  de  uma campainha de alarme! Teste a sua Sorte. Se voce tiver sorte, volte para 297. Se voce nao tiver sorte, volte para 126.
        `,
        options: [
          {text:``, goTo:0},
        ]
      },
      362:{
        text:`A porta abre, e o pequeno aposento no interior e iluminado a luz de vela. Cautelosamente, voce olha la 
        para dentro e ve uma cena estranha. Sobre um altar de pedra no meio do aposento, ha tres calices de prata, 
        cada um contendo um liquido de cor diferente: um claro, outro vermelho e outro leitoso. Ha tres pequenas criaturas 
        aladas, semelhantes a gremlins, que esvoaçam em torno do altar, todas chilreando excitadamente. De vez em quando, 
        uma delas pousa no altar e toma um gole do liquido leitoso. A porta aberta range nas dobradiças e assusta os seres. 
        Eles dao uma volta para olhar para voce e ficam muito excitados. `,
        options: [
          {text:`Voce pode entrar no comodo`, goTo:58},
          {text:`ou fechar a porta rapidamente e prosseguir na dire9ao da Cidadela`, goTo:156},
        ]
      },
      363:{
        text:`Ha tres portas ao longo da sacada. Voce experimentara:`,
        options: [
          {text:`A porta da esquerda?`, goTo:228},
          {text:`A porta do centro?`, goTo:64},
          {text:`A porta da direita?`, goTo:304},
        ]
      },
      364:{
        text:`Quando seu Encanto faz efeito, voce ve um pequeno camundongo correr na direcção da mesa.
        Voce pragueja ao compreender que o Encanto pode nao ter funcionado devidamente. Mas voce volta
        a ter esperança quando uma das cabeças do Calacorm ve o camundongo e parece ficar horrorizado! 
        A outra cabeça nota o bicho subitamente, e ambas as gargantas berram juntas! A criatura pula 
        para cima da mesa, e o Calacorm grita aterrorizado enquanto o inofensivo ratinho se aproxima, 
        farejando distraidamente o chão do caminho.Voce deixa o Calacorm sofrer por alguns momentos e 
        depois berra, dizendo que voce dara sumiço no rato para ele, se ele libertar voce. Ele concorda
        rapidamente e joga as chaves para voce. Voce abre a porta, sai, pega a sua espada, que estava 
        encostada na parede, e vai embora pela passagem.`,
        options: [
          {text:`A uma distancia segura, voce rompe o Encanto, e o camundongo desaparece.`, goTo:174},
        ]
      },
      365:{
        text:`Voce escolheu um jogo de azar mortal que e proibido por lei na maioria  dos reinos. Uma vez que voce escolheu 
        jogar, tera que participar de pelo  menos um jogo, mas podera continuar, se quiser. Seu Mestre de Jogos e um aprendiz
        de feiticeiro e selecionou uma variedade de premios para voce. Se voce sobreviver, podera ter direito a: 
        dois Encantos  extras (os quais  voce pode escolher da lista no começo do livro), ou cinquenta Peças de Ouro, 
        ou um Escudo  de Armas Encantado (que permitira que voce desconte dois pontos do numero obtido nos dados jogados 
        para uma criatura, quando se estiver determinando a sua Fortça de Ataque).

        0 jogo consiste no seguinte: ha seis punhais sobre uma mesa. Uma e a arma verdadeira, enquanto as outras cinco 
        possuem laminas de mola, que nao lhe causarao nenhum mal. Voce esta jogando contra uma das criaturas no salao e 
        somente um de voce dois sobrevivera. Cada um na sua vez, voces terão
        que escolher um dos punhais e crava-lo em seu próprio peito. Se o punhal for real, e morte certa. Se for uma imitação,
        tera que ser devolvido a mesa para ser misturado de novo aos outros cinco. 0
        jogo continua ate que um de voces selecione o punhal verdadeiro e se esfaqueie no coração, e assim o sobrevivente 
        podera se apossar do premio. Seu adversario escolhera primeiro. Jogue um dado para ele. Depois, faça o mesmo para voce.
        Quando um de voces obtiver um seis, a verdadeira adaga foi escolhida. Se for voce, tera se matado!`,
        options: [
          {text:`Agora que sabe as regras do jogo, voce só pode fugir de participar do jogo pelo menos uma vez lançando 
          um Encanto de Ilusao, Do contrario, voce tera que jogar`, goTo:9, ex:['encanto','ilusao']},
          {text:`Escolher uma faca`, goTo:450, ex:['jogo', 'Faca­ Faquinha']},
          {text:`voce pode jogar Escolha de Seis`, goTo:171,ex:['jogo', 'Faca­ Faquinha']},
          {text:`voce pode jogar Pedras Magicas`, goTo:278,ex:['jogo', 'Faca­ Faquinha']},
          {text:`dizer adeus a seus "amigos" e sair do salao`, goTo:31,ex:['jogo', 'Faca­ Faquinha']},
        ]
      },
      366:{
        text:`Quando voce passa pelas pequenas criaturas, elas ficam olhando para voce silenciosamente. Elas parecem 
        simplesmente achar que voce e interessante.`,
        options: [
          {text:`Voce sente que alguma coisa nao vai bem por aqui.`, goTo:140},
        ]
      },
      367:{
        text:`Alguma distancia adiante na passagem, voce chega a uma junção de quatro caminhos. Voce toma o caminho do norte,
         que acaba chegando a uma grande porta de madeira. Voce nao consegue ouvir nada escutando pelo buraco da fechadura.`,
        options: [
          {text:`Voce tentara abrir a porta lentamente e sem ruido`, goTo:308},
          {text:`ou derruba-la a força`, goTo:121},
        ]
      },
      368:{
        text:`Voce revista os dois bolsos deles e acha vinte e oito Peças de Ouro, que leva consigo.`,
        options: [
          {text:`Quando voce esta prestes a prosseguir, lembra-se do punhal - a fonte da desavença - e o apanha.`,
           goTo:15, ex:['ouro', 8]},
        ]
      },
      369:{
        text:`Voce tem que ver o que ele esta fazendo. Quando voce tenta espiar por tras da cortina, sente que ela se 
        enrola em tomo de voce, como se houvesse vento - mas nao ha. A cortina esta se apertando em volta de voce. 
        Voce luta, mas o pano pesado esta envolvendo voce. Esta em torno da sua garganta e da sua cabeça, e voce esta 
        com dificuldade para respirar. Voce ainda continua a lutar, mas sem resultado. Voce começa a se sentir tonto, 
        sabendo que, logo que voce perder a consciencia, a batalha sera dele. Mas nao ha nada que voce possa fazer. 
        Seu mundo fica escuro... `,
        options: [
          {text:`Voce falhou na sua missão.`, goTo:600},
        ]
      },
      370:{
        text:`A caixa e solidamente construida, e voce nao consegue arrebentar a fechadura com as maos. 
        Voce desembainha a sua espada para tentar quebra-la  a golpes de laminae, ao fazer isso, a caixa cai sobre a sua 
        canela, fazendo um corte feio. Desconte dois pontos de ENERGIA. A sua espada nao arrebentara a fechadura. Voce:`,
        options: [
          {text:`Tentara abrir a primeira caixa?`, goTo:260, ex:['energia', -2]},
          {text:`Tentara abrir a segunda caixa?`, goTo:129, ex:['energia', -2]},
          {text:`Esquecera as caixas e prosseguira?`, goTo:237, ex:['energia', -2]},
        ]
      },
      371:{
        text:`A criatura grunhe e abre a porta para deixar voce entrar.`,
        options: [
          {text:`Passar pela porta`, goTo:177},
        ]
      },
      372:{
        text:`Ao lançar seu Encanto do Escudo, uma garrafa ainda atinge voce no ombro. Voce nao sente nada. Alguma coisa 
        nao esta muito certa, e voce tenta cancelar o Encanto. Infelizmente, ele ja foi lançado, e voce pode ver as garrafas 
        se quebrando de encontro a seu escudo magico. A garrafa que acabou de atingir voce desapareceu. Voce xinga ao 
        compreender que o vinho que voce acabou de provar deveria ter algumas propriedades alucin6genas, e que voce esta 
        imaginando o ataque das garrafas. Quando esta ideia lhe ocorre, as garrafas param de vir sobre voce. Voce pisca e 
        olha de novo. Todas as garrafas estao em seus lugares nas estantes, como e normal!`,
        options: [
          {text:`Voce resolve seguir adiante.`, goTo:95},
        ]
      },
      373:{
        text:`Balthus Dire se ajoelha a seu lado. Ele agarra seus pulsos com uma das maos, e voce pode sentir sua grande 
        força fisica, comparavel a seus evidentes poderes magicos. "Campones", ele diz, "voce e realmente um adversario de 
        valor. Seu poder e maior do que o da maioria dos magos. E uma vergonha permitir que tamanho talento seja desperdiçado.
        Posso matar voce agora ou oferecer uma outra opção. Una-se a mim nos meus planos para conquistar o Vale dos 
        Salgueiros. Ele sera dominio seu quando tivermos exito. 0 que voce diz?"

        Quale a sua resposta?`,
        options: [
          {text:`"Nunca. Nao me voltarei contra os meus compatriotas!" `, goTo:148},
          {text:`"Aceito a sua oferta." (Voce planeja engana-lo assim que ele libertar voce)`, goTo:256},
          {text:`"Balthus Dire, voce e um ser maligno! Eu ainda nao estou derrotado!" (Voce planeja lançar outro Encanto sobre ele).`, goTo:358},
        ]
      },
      374:{
        text:`Enquanto se recompõe, depois do susto, voce olha em tomo do aposento. Trata-se obviamente de alguma especie 
        de Quartel-General Militar. Rolos com mapas estrategicos pendem das paredes, assim como retratos de generais do 
        passado. Uma estante em um dos cantos guarda centenas de volumes encademados em couro. Cortinas ornamentadas cobrem 
        uma grande janela. Em um armario, ao longo de uma das paredes, ha lanças e espadas de variados e mortais tamanhos e 
        formas. No centro do aposento, ha uma maquete de uma paisagem que voce reconhece como sendo o Vale dos Salgueiros. 
        Exercitos de tropas em miniatura estao posicionados na maquete. Este deve ser o piano de invasao!
        Recostado na mesa, com os olhos fixos em voce, esta o próprio Balthus Dire! Sua estatura em si ja e formidavel. 
        Tendo mais de dois metros de altura, ele tem a constituição de um boi, com ombros largos e braços musculosos. 
        Na sua tunica de batalha em couro, com tiras largas nos punhos, guarnecidas de pregos, ele tem mais a aparencia de
        um soldado do que do feiticeiro que realmente e.
        "Campones insolente!" ele rosna. "Voce acha que pode medir forças com Balthus Dire?" Com estas
        palavras, ele estala os dedos, e voce ouve um grunhido atras de voce. Voce se vira e ve uma criatura
        grotesca que se desloca em sua direção. Seu corpo peludo tem quatro braços, cada um deles terminado em um gancho 
        de terrivel aparencia. Ao se aproximar, vem golpeando o ar a sua frente.
        "Ora, acho que voce nao e adversario nem mesmo para uma FERA DAS GARRAS!" ri Dire. Voce:`,
        options: [
          {text:`Desembainhara a sua espada para se defender?`, goTo:30},
          {text:`Lançara um Encanto do Escudo?`, goTo:109, ex:['encanto', 'escudo']},
          {text:`Lançara um Encanto da Fraqueza?`, goTo:158, ex:['encanto', 'fraqueza']},
        ]
      },
      375:{
        text:`Ele indica um livro na prateleira que e uma lista alfabetica de todos os tipos de criaturas. Voce consultara 
        a seção sobre:`,
        options: [
          {text:`Calacorms?`, goTo:263},
          {text:`Miks?`, goTo:135},
          {text:`Ganjees?`, goTo:63},
        ]
      },
      376:{
        text:`Voce lança seu Encanto do Escudo. Que lastima, este Encanto nao faz efeito contra armas magicas! Os jatos 
        de fogo atravessam seu escudo diretamente e queimam ao penetrar seus olhos. Gritando de dor, voce tomba no chão.`,
        options: [
          {text:`A cortina da morte cai sobre voce. Voce falhou na sua missao.`, goTo:600},
        ]
      },
      377:{
        text:`Voce se controla e se concentra. Qual sera o seu próximo	ataque?`,
        options: [
          {text:`Um Encanto da Ilusão? `, goTo:332, ex:['encanto', 'ilusao']},
          {text:`Um Encanto da Fraqueza?`, goTo:113, ex:['encanto', 'fraqueza']},
          {text:`Um Encanto da Percepção Extra-Sensorial?`, goTo:302, ex:['encanto', 'percepção']},
          {text:`Nenhum desses?`, goTo:355},
        ]
      },
      378:{
        text:`Voce da alguns passos adiante, e uma outra flecha erra por pouco o seu pe. Mais uns poucos passos e uma flecha 
        rasga a sua tunica, arranhando o seu antebraço. Voce ainda nao consegue ver ninguem, nem ver de onde as flechas estao 
        vindo. Depois de mais alguns passos, surge mais uma flecha, mas esta rasga a sua perna. Voce grita alto - e perde quatro 
        pontos de ENERGIA  - mas voce ja esta quase no monumento, que servira de proteção para voce.`,
        options: [{text:`Voce salta para frente e se esconde atras dele ate que as flechas parem de vir.`, goTo:209, ex:[energia, -4]},]
      },
      379:{
        text:`Voce solta a corda e flutua no ar. Pousando de volta no chão, na borda do fosso, voce xinga a armadilha demoniaca
        preparada para aventureiros gananciosos como voce.`,
        options: [{text:`Voce segue ate a porta oposta a da sua entrada e experimenta a maçaneta.`, goTo:206},]
      },
      380:{
        text:`Quando voce senta, eles se levantam. 0 Anao pega uma clava e salta sobre voce, enquanto o Goblin e o Orca 
        apanham espadas.`,
        options: [{text:`A namorada do Goblin da um grito e sai do caminho, retirando-se para a escuridao.`, goTo:213},]
      },
      381:{
        text:`Teste a sua Sorte. Se voce tiver sorte, o anel desliza para fora do dedo dele, e voce agora o tern em suas maos.
          Se voce nao tiver sorte, o anel prende e nao sai. Ao puxar o anel, voce faz com que Balthus Dire entre em ação e se 
          volte contra voce com sua espada. Volte para 337.`,
        options: [{text:`Sorte`, goTo:337, ex:['t-sorte', 'anel']}, ]
      },
      382:{
        text:`Eles correm pelo aposento em panico, esbarrando uns nos outros e gritando: "Ai, meu Deus, ai, minha nossa, 
        este estranho parece malvado, onde estao as nossas armas?" Voce ri da desordem deles e guarda a sua espada. Eles 
        se acalmam e ficam olhando para voce.`,
        options: [
          {text:`Voce pode seguir adiante`, goTo:285},
          {text:`ou conversar com eles`, goTo:356},
        ]
      },
      383:{
        text:`A força do velho começa a retornar a medida em que o Encanto da Energia vai fazendo efeito.
        Ele conta para voce que foi espancado na cabeça por crueis Ganjees, que tern prazer em fazer maldades.
        Voce conduz a conversa no sentido da Cidadela propriamente dita. De repente, sem nenhuma razao visfvel, uma pontada
        de dor o atinge por dentro. Seus olhos ficam estreitos e ele se atira para frente, cravando seus dentes
        - dentes afiados, diga-se de passagem - no seu braço. Voce perde dois pontos de ENERGIA.`,
        options: [
          {text:`Voce o golpeara com sua espada`, goTo:333, ex:['energia', -2]},
          {text:`ou usara um Encanto Magico para se libertar`, goTo:189, ex:['energia', -2]},
        ]
      },
      384:{
        text:`Voce brinca com o mecanismo e, subitamente, uma linha longa e fina se desenrola da haste. 
        Voce resolve tentar laçar as cabeças da criatura com a linha, que possui um gaucho em uma das extremidades. 
        Voce lança a linha sobre a criatura.`,
        options: [
          {text:`Jogue um dado.`, goTo:420, ex:['dado',107,107,107,107,252,252]},
        ]
      },
      385:{
        text:`Eles dao tapinhas nas suas costas e boas-vindas. Uma criatura magra, de pele escura, poe uma caneca de
        aguardente na sua mao. Voce bebe o oferecido de uma só vez. Outra caneca vem. Voce gaha dois pontos de ENERGIA, 
        uma vez que a bebida e bastante reconfortante. Em seguida, eles convidam voce para participar dos jogos deles. 
        Voce jogara:
        `,
        options: [
          {text:`Faca-Faquinha?`, goTo:365, ex:['energia', 2]},
          {text:`Pedras Magicas?`, goTo:278, ex:['energia', 2]},
          {text:`Escolha de Seis?`, goTo:171, ex:['energia', 2]},
        ]
      },
      386:{
        text:`Do lado de fora da porta, a passagem continua em declive, e voce a segue por algum tempo. Voce repara que ha um
          cheiro desagradavel que fica cada vez mais forte a medida que voce avança.
          Afinal, voce chega a uma abertura. Olhando por ela, e tapando o nariz, voce pode ver um grande esgoto a descoberto 
          que corre transversalmente a passagem. Ha uma corda que pende do teto.`,
        options: [
          {text:`Voce atravessara o esgoto`, goTo:204},
          {text:`ou tentara agarrar a corda e se valer dela para passar para o outro lado`, goTo:108},
        ]
      },
      387:{
        text:`A simples menção de um Espelho de Prata, ela se levanta, ergue as maos e ordena a seus Fantasmas que parem. 
        Voce da a ela o Espelho, e ela diz que voce pode seguir o seu caminho.`,
        options: [{text:`Voce tem sorte de estar vivo.`, goTo:6},]
      },
      388:{
        text:`Todo o seu corpo se tensiona com o esforç0. Alguns momentos depois, ele recupera a compostura e mais uma vez 
        olha para voce. "Fraqueza!" ele ironiza, "Certamente voce nao achava que poderia me derrotar com um mero Encanto da 
        Fraqueza."`,
        options: [{text:`Ele obviamente conseguiu  vençer o Encanto e agora se prepara para desferir um contra-ataque.`, goTo:157},]
      },
      389:{
        text:`Quando voce se aproxima do espeto, uma das velhas joga um pó no fogo, e as tres se afastam, dando risadas.
          Voce esta em guarda. Voce observa o fogo começando a rugir, e as chamas crescendo ameaçadoramente. Subitamente, 
          varias das labaredas saltam do fogo e tomam a forma de um DEVLIN, uma criatura do tamanho de um Anao, feita do 
          próprio fogo! As tres bruxas apontam para voce, e o Devlin avança. Voce:`,
        options: [
          {text:`Desembainha a sua espada e se prepara para lutar contra ele?`, goTo:61},
          {text:`Procura um lugar para se proteger?`, goTo:178},
          {text:`Prepara um Encanto?`, goTo:311},
        ]
      },
      390:{
        text:`Ele começa a atormentar voce, derrubando-o com uma lufada de vento a cada vez que voce se levanta. 
        . Se voce tiver sorte, volte para 350. Se nao tiver sorte, volte para 122.
        `,
        options: [{text:`Teste a sua Sorte`, goTo:410, ex:['sorte', 350, 122]}, ]
      },
      391:{
        text:`0 Gark pega as suas tres Peças de Ouro, coloca-as em uma bolsa presa em volta da cintura e mostra o 
          caminho para seguir na direção das portas.`,
        options: [{text:`Ele pergunta se voce gostaria de ir para a Biblioteca (porta da direita)
          ou para o Salao de Jogos (porta da esquerda).`, goTo:99},]
      },
      392:{
        text:`A chave gira.`,options: [{text:`Abrir a porta.`, goTo:196},]
      },
      393:{
        text:`Você lança o seu Encanto e se concentra nas três criaturas em transformação. As imagens passam a
          sua frente.  Quando  voce  as  junta, compreende  que estas criaturas  sao MIKS, capazes de se
          transformarem em qualquer ser vivo ou coisa que queiram. Eles estâo pensando em voce e nao estão 
          nem um pouco preocupados com a sua presença - mais provavelmente eles veem voce como um divertimento. Com bastante 
          frequência, porem, eles pensam em ouro, e suas emoções indicam uma grande ganancia. 
          Talvez este seja o seu passaporte
          para a segurança.`,
        options: [
          {text:`Se voce tiver Peças de Ouro`, goTo:27, ex:['item', 'ouro']},
          {text:`Se voce nao tiver ouro, e melhor voce sair do aposento rapidamente e tentar a outra porta`, goTo:25},
        ]
      },
      394:{
        text:`As criaturas se entreolham, como se o nome nao lhes fosse estranho, mas elas nao pudessem lembrar exatamente de 
          onde o conheciam. Voce rapidamente acrescenta que ele esta na turma do primeiro andar. Eles dão de ombros e acabam por 
          decidir que voce deve estar dizendo a verdade.`,
        options: [{text:`0 Macaco-Cachorro chama o porteiro, que finalmente aparece para deixar voce entrar.`, goTo:251},]
      },
      395:{
        text:`Voce lança o Encanto e se concentra, criando uma ilusão de que voce e um poderoso feiticeiro e que esta 
        começando a se cansar das gozações deles. Mas nada acontece! Mais uma vez, um riso de escarnio chega a voce vindo 
        de todos os lados. "Nós tambem somos criaturas magicas," diz uma voz, "embora nao sejamos tao amadores quanto voce!" 
        Repentinamente, voce sente um golpe no meio das costas que joga voce no meio do aposento. Voce perde dois pontos 
      de ENERGIA.`,
        options: [
          {text:`Voce procurara em sua mochila alguma coisa para usar`, goTo:322, ex:['energia', -2]},
          {text:`desembainhara a sua espada`, goTo:248, ex:['energia', -2]},
          {text:`Se voce nao tiver tentado ainda um Encanto do Fogo sobre eles, poderá fazer isso`, goTo:85, ex:['energia', -2, 'encanto', 'fogo']},
        ]
      },
      396:{
        text:``,options: [{text:``, goTo:183, ex:[nda,183]},]
      },
      397:{
        text:`Nao e uma refeição muito farta, mas voce estava com fome e com sede, e esta oferta repõe dois pontos de ENERGIA. `,
        options: [
          {text:`Agora voce pode chamar o Calacorm`, goTo:69, ex:['energia', 2]},
          {text:`ou escolher um Encanto para tentar sair desta situação.`, goTo:193, ex:['energia', 2]},
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

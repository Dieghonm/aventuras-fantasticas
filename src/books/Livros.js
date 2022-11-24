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
        roll: 0},
      Energia:{text:[
        `O seu índice de ENERGIA reflete a sua constituição física geral, vontade de sobreviver, 
          determinação e condição física como um todo;`, 
        `Quanto mais alto for o seu índice de ENERGIA, mais tempo você conseguirá sobreviver`,
        `Vamos determinar qual o seu valor inicial de energia, este valor sera o valor sorteado em 2 dados mais 12 pontos`,
      ],
        roll:2
      },
      Habilidade: {
        text:[`O seu índice de HABILIDADE reflete a sua capacidade como espadachim e sua aptidão geral como lutador.`,
        ``],
        roll:1
      },
      Sorte: {
        text:[`O seu índice de SORTE indica o quanto você é uma pessoa naturalmente de sorte. Sorte - e magia - são fatos da vida no reino da fantasia que você está prestes a explorar.`
        ,``],
        roll:1
      },
      Magia: {
        text:[],
        roll:0
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
        roll:0
      }
    },
    Batalhas:'',
    Unicos: [
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
    ]
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

// Modelo : {
//   name: '',
//   img: '',
//   sinopse :'',
// },

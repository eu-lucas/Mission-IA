const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao atravessar o portal que apareceu em sua escola, você se encontra em uma dimensão onde a gravidade é diferente. Você flutua levemente e vê uma criatura mais bizarra que qualquer pessoa da sua turma, ainda mais que people. O que você faz?",
        alternativas: [
            {
                texto: "Tenta se  comunicar com a criatura.",
                afirmacao: [
                    "Ao atravessar o portal, se depara com uma criatura estranha, e ao gritar 'quem é você', a criatura responde e um entendimento começa a se formar."
                ],
            },
            {
                texto: "Fica calado e observar a criatura de longe.",
                afirmacao: [
                    "Ao atravessar o portal, se depara com uma criatura estranha e decide manter uma distância segura para estudar a criatura.",
                ],
            }
        ]
    },
    {
        enunciado: "Você decide ir para outro lugar, mas acaba percebendo que o tempo parece estar congelado somente em locais infestados de cogumelos. Você também percebe que tem vários cadáveres de seres vivos com esses cogumelos brotando de seus corpos. Qual é a sua reação?",
        alternativas: [
            {
                texto: "Verificar os cadáveres para ver se encontra uma resposta.",
                afirmacao: [
                    "Cansado de tanto observar a criatura, decide analisar os cadáveres que estão espalhados pelos cantos. Esses cadáveres aparentam estar infectados.",
                ],
            },
            {
                texto: "Correr para o mais longe possível.",
                afirmacao: [
                    "Enquanto olhava a criatura, percebeu que à esquerda de onde estava havia vários cadáveres em um mar de cogumelos. Assustado com tudo isso, correu para o mais longe que conseguiu.",
                ],
            }
        ]
    },
    {
        enunciado: "Ao continuar explorando, você chega a um vale dominado por uma vegetação exótica e luminosa. O ar está carregado de energia e você sente que algo antigo e poderoso está escondido por ali. Como você decide proceder?",
        alternativas: [
            {
                texto: "Investigar a vegetação em busca de pistas sobre a fonte de energia.",
                afirmacao: [
                    "A vegetação parece reagir à sua presença, conduzindo-o a um antigo artefato escondido no coração do vale.",
                ],
            },
            {
                texto: "Procurar um caminho que leve diretamente à árvore coração da dimensão.",
                afirmacao: [
                    "Seguir um caminho estreito entre a vegetação leva a um portal que se abre para uma visão direta da árvore coração da dimensão.",
                ],
            }
        ]
    },
    {
        enunciado: "A vegetação começa a ficar mais densa e escura, e você encontra um grupo de moradores locais, visivelmente aflitos. Eles estão tentando conter a propagação dos cogumelos. O que você faz?",
        alternativas: [
            {
                texto: "Oferecer ajuda aos moradores para conter a infestação.",
                afirmacao: [
                    "Trabalhar junto com os moradores fortalece seu vínculo com eles, e você aprende mais sobre os métodos de contenção dos cogumelos.",
                ],
            },
            {
                texto: "Perguntar aos moradores sobre um caminho alternativo até a árvore coração da dimensão.",
                afirmacao: [
                    "Os moradores indicam um caminho secreto que contorna as áreas mais perigosas e infestadas.",
                ],
            }
        ]
    },
    {
        enunciado: "Seguindo o caminho indicado pelos moradores, você encontra uma caverna oculta que emite uma luz intensa. Ao entrar, você percebe que essa caverna é um ponto de convergência de energia. O que você faz?",
        alternativas: [
            {
                texto: "Explorar a caverna em busca de itens ou pistas que possam ajudar na sua jornada.",
                afirmacao: [
                    "Dentro da caverna, vários cristais energizados são encontrados, cada um com propriedades únicas que podem ser usadas contra a infestação.",
                ],
            },
            {
                texto: "Usar a energia da caverna para se fortalecer antes de continuar a jornada.",
                afirmacao: [
                    "A energia da caverna infunde seu corpo, aumentando suas habilidades e resistência contra os cogumelos.",
                ],
            }
        ]
    },
    {
        enunciado: "Ao sair da caverna, você se depara com um campo de batalha antigo, onde vestígios de uma luta passada contra a infestação de cogumelos estão espalhados. O que você faz?",
        alternativas: [
            {
                texto: "Examinar os vestígios para aprender com as batalhas passadas.",
                afirmacao: [
                    "Os vestígios revelam táticas antigas e eficazes contra a infestação, que podem ser utilizadas na batalha final.",
                ],
            },
            {
                texto: "Buscar uma rota segura através do campo de batalha para evitar novos confrontos.",
                afirmacao: [
                    "Uma rota segura é traçada, evitando áreas perigosas e infestadas.",
                ],
            }
        ]
    },
    {
        enunciado: "Finalmente, você chega à área onde a árvore coração da dimensão está localizada. No entanto, o local está cercado por cogumelos gigantes e agressivos que parecem estar sugando sua energia. Qual é a sua estratégia?",
        alternativas: [
            {
                texto: "Usar as habilidades e itens adquiridos para combater os cogumelos e proteger a árvore.",
                afirmacao: [
                    "Os cristais energizados e o artefato antigo são usados com sucesso para combater os cogumelos.",
                ],
            },
            {
                texto: "Buscar uma forma de redirecionar a energia da árvore para repelir os cogumelos.",
                afirmacao: [
                    "A energia da árvore é redirecionada de maneira eficaz, criando uma barreira que impede os cogumelos de se aproximarem.",
                ],
            }
        ]
    },
    {
        enunciado: "Com a infestação contida e a árvore coração da dimensão protegida, você percebe que a energia ao redor começou a estabilizar. Os portais de saída começam a se formar. O que você faz?",
        alternativas: [
            {
                texto: "Agradecer aos moradores e se preparar para retornar à sua dimensão.",
                afirmacao: [
                    "Os moradores expressam sua gratidão e fornecem itens que podem ser úteis no futuro.",
                ]
            },
            {
                texto: "Pedir aos moradores para aprender mais sobre a dimensão antes de partir.",
                afirmacao: [
                    "Os moradores compartilham histórias antigas e conhecimentos profundos sobre a dimensão.",
                ]
            }
        ]
    }
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Ao atravessar o misterioso portal que surgiu em sua escola, você se encontra em uma dimensão dividida entre o 'Lado de Lá' e o 'Lado de Cá'. Do 'Lado de Lá', a natureza prospera em harmonia com seus habitantes, enquanto o 'Lado de Cá' está mergulhado em poluição e devastação ambiental. O que você decide fazer diante dessa realidade?",
        alternativas: [
            {
                texto: "Explorar o 'Lado de Cá' para entender as causas da degradação.",
                afirmacao: "Determinou-se a investigar o 'Lado de Cá', onde a natureza clama por socorro em meio ao caos urbano.",
            },
            {
                texto: "Dirigir-se ao 'Lado de Lá' para aprender sobre suas práticas sustentáveis.",
                afirmacao: "Atraído pela beleza do 'Lado de Lá', você decide descobrir os segredos de sua harmonia ambiental.",
            }
        ]
    },
    {
        enunciado: "Enquanto explora, você percebe que no 'Lado de Cá' os rios estão contaminados e o ar é pesado. Já no 'Lado de Lá', a água é cristalina e o ar puro. Como você reage a essa diferença tão marcante?",
        alternativas: [
            {
                texto: "Organizar uma campanha de conscientização ambiental no 'Lado de Cá'.",
                afirmacao: "Mobilizou-se para educar os habitantes sobre a importância da preservação ambiental.",
            },
            {
                texto: "Observar e documentar as práticas do 'Lado de Lá' para replicá-las.",
                afirmacao: "Com um caderno em mãos, registrou cada detalhe das técnicas sustentáveis utilizadas.",
            }
        ]
    },
    {
        enunciado: "Durante suas investigações, você descobre que o 'Lado de Lá' utiliza energias renováveis e sistemas de reciclagem eficientes. Já o 'Lado de Cá' depende de combustíveis fósseis e descarta resíduos de forma inadequada. Qual é o seu próximo passo?",
        alternativas: [
            {
                texto: "Propor a implementação de energias limpas no 'Lado de Cá'.",
                afirmacao: "Apresentou projetos de energia solar e eólica, mostrando seus benefícios a longo prazo.",
            },
            {
                texto: "Ensinar técnicas de reciclagem e redução de resíduos aos moradores do 'Lado de Cá'.",
                afirmacao: "Organizou oficinas práticas, transformando lixo em arte e utilidades.",
            }
        ]
    },
    {
        enunciado: "Ao ver os primeiros sinais de mudança no 'Lado de Cá', você se depara com líderes relutantes que resistem às novas ideias por medo de custos e mudanças. Como você lida com essa resistência?",
        alternativas: [
            {
                texto: "Demonstrar os benefícios econômicos a longo prazo das práticas sustentáveis.",
                afirmacao: "Apresentou dados e exemplos que comprovam a viabilidade econômica das soluções verdes.",
            },
            {
                texto: "Envolver a comunidade em projetos-piloto para mostrar resultados práticos.",
                afirmacao: "Liderou projetos comunitários que rapidamente mostraram melhorias ambientais e sociais.",
            }
        ]
    },
    {
        enunciado: "Com as mudanças em andamento, a conexão entre os dois lados começa a se fortalecer. Os habitantes do 'Lado de Lá' oferecem ajuda e conhecimento. Como você aproveita essa colaboração?",
        alternativas: [
            {
                texto: "Organizar intercâmbios culturais e educacionais entre os dois lados.",
                afirmacao: "Promoveu eventos onde conhecimentos e culturas foram compartilhados, enriquecendo a todos.",
            },
            {
                texto: "Implementar projetos conjuntos de reflorestamento e limpeza de rios.",
                afirmacao: "Juntos, os habitantes plantaram árvores e revitalizaram corpos d'água, restaurando a natureza.",
            }
        ]
    },
    {
        enunciado: "A transformação do 'Lado de Cá' começa a chamar atenção, e outros mundos mostram interesse em aprender com essa experiência. Como você decide compartilhar essa história de sucesso?",
        alternativas: [
            {
                texto: "Criar um documentário destacando os desafios e conquistas da jornada.",
                afirmacao: "Dirigiu um documentário inspirador que se tornou referência em sustentabilidade.",
            },
            {
                texto: "Escrever um guia prático de sustentabilidade baseado nas iniciativas implementadas.",
                afirmacao: "Compilou conhecimentos em um guia acessível, facilitando a replicação das práticas.",
            }
        ]
    },
    {
        enunciado: "Com a missão cumprida e os dois lados agora trabalhando em harmonia com o meio ambiente, o portal de retorno à sua escola começa a se formar. Qual é a sua decisão final?",
        alternativas: [
            {
                texto: "Agradecer a todos e retornar, levando consigo as lições aprendidas.",
                afirmacao: "Despediu-se com gratidão, prometendo aplicar os ensinamentos em sua própria realidade.",
            },
            {
                texto: "Decidir ficar mais tempo para assegurar que as mudanças sejam duradouras.",
                afirmacao: "Optou por permanecer, dedicando-se a consolidar as transformações iniciadas.",
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

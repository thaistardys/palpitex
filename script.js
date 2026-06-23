const WORDS = [
    "termo", "jogos", "texto", "sagaz", "amigo", "nobre", "pleno", "fazer", "casal", "audaz",
    "vigor", "sinto", "mente", "noite", "festa", "tempo", "viver", "mundo", "ponto", "forte",
    "bravo", "vapor", "lugar", "gênio", "ideia", "crime", "forma", "grupo", "justo", "muito",
    "aipim", "casas", "porta", "carro", "livro", "chuva", "norte", "falar", "noção", "fruta",
    "casar", "gatos", "minas", "fácil", "parar", "andar", "comer", "roupa", "verde", "beber"
];

const VALID_DICTIONARY = new Set([
    ...WORDS,
      "abono", "abril", "abrir", "acaso", "acesa", "aceso", "acoes", "acola", "acorrer", "adeus",
  "adiar", "adivinha", "advem", "advir", "afago", "afeto", "afins", "afora", "agape", "agora",
  "agudo", "ainda", "ajuda", "alado", "alamo", "album", "alibi", "alias", "algoz", "aluno",
  "alude", "alva", "amada", "amado", "amago", "ambar", "ambos", "amena", "ameno", "amiga",
  "amigo", "amor", "ampara", "amplo", "anais", "andam", "andar", "andei", "andou", "anelo",
  "anexo", "anibal", "animo", "antes", "antro", "anuir", "anzal", "aonde", "apice", "apelo",
  "apoio", "apto", "aquem", "arado", "arcar", "ardil", "ardis", "arduo", "area", "areia",
  "arfar", "arido", "aroma", "arroz", "artur", "asilo", "assar", "assaz", "assim", "astro",
  "ativo", "atimo", "atras", "atrio", "atriz", "atomo", "atroz", "atuar", "atual", "audaz",
  "audio", "aurea", "aureo", "autor", "autos", "avaro", "avia", "aviao", "aviar", "avida",
  "avido", "aviso", "axila", "axial", "bacia", "baile", "baixa", "baixo", "balao", "banco",
  "bando", "banto", "banal", "banzo", "barao", "barra", "barro", "bazar", "bebem", "beber",
  "bebeu", "bicho", "bioma", "birra", "blase", "bloco", "boato", "bocal", "bocha", "bodas",
  "boi", "bolha", "bolsa", "bolso", "bolao", "bomba", "bonus", "borda", "bossa", "bosta",
  "botao", "botar", "braba", "brabo", "braco", "brado", "brava", "bravo", "brega", "breve",
  "briga", "brisa", "bruto", "bruxa", "bucha", "bucho", "bugre", "bulir", "buque", "burra",
  "burro", "busca", "cabal", "cabe", "caber", "cabo", "cacho", "cacador", "cacar", "caco",
  "caixa", "calao", "calda", "caldo", "calha", "calma", "calmo", "calor", "calca", "campo",
  "canal", "canil", "canon", "canso", "canto", "capaz", "capa", "cara", "cardo", "carga",
  "cargo", "carma", "carro", "carta", "casa", "casam", "casar", "casas", "casei", "caso",
  "casos", "casou", "casta", "casto", "catre", "cauda", "causa", "ceder", "ceifa", "ceita",
  "celar", "cenho", "censo", "centro", "cerca", "cerne", "certa", "certo", "cesta", "cesto",
  "cetro", "chaga", "chama", "chata", "chato", "chave", "chefe", "cheia", "cheio", "choro",
  "chula", "chulo", "chuva", "ciclo", "cifra", "cima", "cinto", "cinza", "ciume", "cioso",
  "cisma", "cisao", "citar", "civel", "civil", "clamor", "clara", "claro", "clava", "clean",
  "clero", "clima", "close", "clube", "cobra", "cobre", "coberta", "cocho", "coice", "coisa",
  "comem", "comer", "comeu", "combo", "comum", "conta", "conto", "copia", "corar", "coral",
  "corja", "coroa", "corpo", "corre", "corri", "corro", "corso", "coser", "cosmo", "costa",
  "coura", "cousa", "cover", "cozer", "crase", "credo", "crer", "cria", "criar", "crime",
  "crise", "crivo", "cruel", "culpa", "culto", "cunho", "curso", "custo", "cutis", "daqui",
  "dados", "danca", "de", "debil", "deitar", "deixa", "demao", "dengo", "denso", "densa",
  "depor", "deram", "desde", "desse", "dessa", "deste", "desta", "detem", "deter", "deusa",
  "devia", "devir", "dever", "diabo", "digna", "digno", "direito", "disso", "dizer", "docil",
  "dogma", "doido", "dolo", "dono", "dorso", "douto", "drama", "drops", "dubio", "duas",
  "ebano", "ebrio", "ecoar", "egide", "elite", "em", "embora", "enfim", "enjoo", "entao",
  "entre", "epico", "epoca", "ereto", "erguido", "esgar", "escol", "estar", "estao", "este",
  "estio", "estou", "estro", "etapa", "etica", "etico", "etnia", "exame", "exato", "exito",
  "exijo", "exodo", "expor", "extra", "facil", "facho", "facto", "fatos", "faina", "faixa",
  "falam", "falar", "falei", "falha", "falho", "falou", "falso", "fardo", "farol", "farsa",
  "farto", "fatal", "fator", "fazer", "febre", "feder", "fedor", "feira", "feito", "feixe",
  "feliz", "fenda", "fera", "ferir", "feroz", "ferpa", "ferro", "ferva", "festa", "fiapo",
  "fibra", "ficha", "filha", "filho", "filme", "filao", "final", "finas", "finta", "finjo",
  "firma", "firme", "fisco", "fixar", "flama", "flash", "flexa", "flora", "fluxo", "fobia",
  "focar", "focal", "fofoca", "fogao", "folga", "folha", "folia", "fonte", "fora", "foral",
  "forca", "forem", "forja", "forma", "fraco", "frase", "frente", "frota", "fruir", "fruto",
  "fugaz", "fugir", "fugiu", "fundo", "furor", "futil", "fuzil", "gabar", "gaita", "galho",
  "galao", "gamba", "ganho", "ganso", "garbo", "garfo", "garoa", "garra", "gasto", "geada",
  "genio", "genro", "gente", "geral", "gerar", "gesso", "gesto", "gibao", "ginga", "girar",
  "giria", "gleba", "globo", "glosa", "golfo", "golpe", "gongo", "gordo", "gorro", "gosto",
  "gotas", "grade", "graca", "grama", "gramo", "grana", "grata", "grato", "grave", "graxa",
  "graxo", "greve", "grife", "grilo", "gripe", "grito", "grota", "gruda", "grude", "grupo",
  "gruta", "gueto", "guisa", "guizo", "guria", "habil", "harem", "haste", "haver", "havia",
  "heroi", "hiato", "hifen", "himen", "hobby", "homem", "honra", "horas", "horda", "horta",
  "horto", "hoste", "hotel", "houve", "humor", "humus", "icone", "idade", "ideia", "idoso",
  "idolo", "igneo", "igual", "ileso", "impar", "impio", "imune", "impor", "indio", "infra",
  "inata", "inato", "inter", "inves", "irado", "irmao", "itens", "jazer", "jazia", "jeito",
  "jejum", "jirau", "jogar", "jogos", "jovem", "judeu", "juizo", "julho", "julia", "junho",
  "junto", "justo", "justa", "labia", "labio", "labor", "lagar", "lagoa", "laico", "lapa",
  "lapis", "lapso", "larva", "laser", "largo", "lasso", "laudo", "lavra", "lazer", "legal",
  "leigo", "leira", "leite", "leito", "legua", "lenda", "lento", "lesao", "lesse", "lesto",
  "letal", "letra", "levar", "liame", "licao", "lidar", "lider", "liga", "ligar", "light",
  "limbo", "linda", "linha", "limpo", "livro", "local", "locus", "logia", "logos", "logro",
  "lombo", "longe", "lousa", "louca", "louco", "louro", "lucro", "lugar", "lunar", "luzes",
  "lutar", "luxo", "macho", "macio", "macro", "mafia", "magoa", "magia", "magna", "magno",
  "magra", "magro", "maior", "malas", "malha", "malho", "malta", "mamae", "manas", "manga",
  "manga", "manha", "mania", "manso", "manta", "manto", "marca", "marco", "marte", "marco",
  "massa", "matiz", "matar", "meiga", "meigo", "meio", "meios", "meirinho", "melhor", "mencao",
  "menos", "mente", "merce", "mes", "meses", "mesma", "mesmo", "metie", "meti", "midia",
  "mimar", "minar", "minha", "miope", "misto", "mocao", "moeda", "mocho", "modal", "molar",
  "molde", "molho", "morno", "morte", "morto", "morro", "morfo", "mosca", "mosto", "motim",
  "motor", "movel", "mover", "mutua", "mutuo", "mudar", "muito", "multa", "mumia", "mundo",
  "mural", "museu", "musgo", "nacar", "nacao", "nada", "narco", "nariz", "natal", "naval",
  "navio", "nega", "negar", "negro", "nenem", "nescio", "nesga", "nessa", "neste", "nesta",
  "nevoa", "ninho", "niple", "nitro", "nivel", "nobre", "nodoa", "noite", "noiva", "noivo",
  "norma", "norte", "nossa", "nosso", "notar", "notas", "noval", "novas", "novio", "nocao",
  "nuvem", "nylon", "oasis", "obito", "obice", "obvio", "ocaso", "odio", "odiar", "oeste",
  "olham", "olhar", "olhei", "olhou", "oliva", "olhos", "ombro", "opaco", "opcao", "optar",
  "otimo", "ontem", "ora", "ordem", "orgao", "orfao", "opera", "orgia", "ornar", "os",
  "osga", "ousar", "outorgar", "outro", "oxala", "pacto", "padre", "pagao", "pagar", "paiol",
  "pajem", "palavra", "palco", "palha", "palma", "palmo", "pampa", "panca", "pande", "panico",
  "papel", "par", "para", "parar", "parca", "parco", "pardo", "pareo", "paria", "parte",
  "parva", "parvo", "passa", "passo", "pasma", "pasmo", "patio", "pauta", "pavor", "pecha",
  "pedem", "pedir", "pediu", "pedra", "pedro", "pegar", "peita", "peito", "peixe", "pena",
  "pensa", "penso", "penta", "perda", "perco", "perna", "perto", "pesar", "peste", "piada",
  "pica", "piche", "pifio", "pilar", "pinho", "pique", "pisar", "plaga", "plano", "plebe",
  "plena", "pleno", "pluma", "plumo", "pluto", "pode", "podem", "poder", "podes", "podar",
  "podio", "poema", "poeta", "pois", "polis", "polvo", "pomar", "pompa", "ponha", "ponto",
  "por", "porca", "porco", "porem", "porta", "porte", "porto", "possa", "posso", "posse",
  "posto", "pouca", "pouco", "povo", "prado", "praga", "praia", "pranto", "prata", "prato",
  "praxe", "prazo", "praca", "prece", "preco", "predio", "prelo", "premi", "preso", "presa",
  "preto", "prime", "prive", "probo", "prole", "prosa", "proto", "prova", "prumo", "puder",
  "pudor", "puido", "pugna", "pular", "pulha", "pulo", "punha", "quais", "quase", "queda",
  "quem", "quica", "quota", "racio", "radio", "raiva", "ramo", "ranco", "rapaz", "razao",
  "reais", "reca", "reacao", "recem", "regio", "regra", "reger", "rei", "reino", "reles",
  "relva", "reler", "remir", "renda", "rente", "repor", "reses", "resto", "retem", "reter",
  "retro", "reves", "rever", "revel", "risco", "riste", "ritmo", "rival", "rocha", "rogar",
  "rolar", "rosto", "rouca", "roupa", "rubro", "ruina", "ruido", "rumor", "rural", "sabia",
  "sabio", "sabor", "saber", "sacar", "sagaz", "saiba", "saida", "saido", "saldo", "salmo",
  "salva", "salve", "salvo", "samba", "sanar", "santo", "sao", "sarca", "sarau", "saude",
  "seiva", "seita", "seixo", "selar", "senda", "sendo", "senha", "senil", "senao", "senso",
  "sente", "setor", "sexto", "sesta", "sexta", "seria", "serio", "serie", "servo", "seu",
  "signo", "sigla", "silvo", "simio", "sinal", "sinto", "sinha", "sitio", "so", "sob",
  "sobre", "socio", "sofia", "solta", "solto", "soldo", "sonho", "sonso", "sonsa", "sopa",
  "soror", "sorte", "sosia", "sotao", "suave", "subir", "sucia", "suco", "sulco", "sumir",
  "suor", "super", "supor", "supra", "surge", "surja", "surto", "sutil", "swing", "tacha",
  "tanto", "tarde", "taxa", "tchau", "tecer", "tedio", "tema", "temer", "temor", "tempo",
  "tende", "tendo", "tenra", "tenro", "tenaz", "termo", "terno", "tenso", "tenta", "tento",
  "tenis", "terra", "teria", "tese", "texto", "ticao", "tinha", "tirar", "tiver", "treze", "treta", "tribo", "trigo", "trilo", "trina", "trino", "tripa", "triun", "toca","tocar", "toada", "todas", "todos", "toque", "torco", "torso", "torpe", "tosco", "troca","troco", "trono", "tropa", "trova", "troca", "troco", "truco", "trufa", "trupe", "tubos","tumba", "turba", "turbo", "turma", "turno", "turvo", "tutor", "tunel", "ubere", "ufano","ultra", "ultimo", "um", "umido", "uniao", "unica", "unico", "unido", "uncao", "urdir","urgia", "urgir", "usina", "usual", "usura", "uteis", "util", "vacas", "vacuo", "vadio","vagao", "vagar", "valas", "valer", "valha", "valia", "valid", "valor", "valsa", "valva","vamos", "vapor", "varal", "varra", "varao", "varoa", "vario", "vasco", "vasto", "vazar","vazio", "vazao", "veado", "veia", "velas", "velar", "velha", "velho", "veloz", "venda","venha", "vento", "veras", "verba", "verbo", "verde", "veria", "verme", "verso", "verta","verve", "versa", "vespa", "veste", "vetor", "vetos", "vexar", "vexado", "vezes", "viaje","vidal", "vidas", "video", "vidro", "viela", "viena", "viera", "vigar", "viger", "vigia","vigor", "vilao", "vimos", "vinha", "vinho", "vinto", "viola", "viral", "virar", "virei","virem", "viria", "viril", "virus", "visar", "visor", "visse", "vista", "visto", "visao","vital", "vivaz", "viver", "viveu", "vivid", "vivo", "vocal", "vodka", "vogal", "voila","volta", "volte", "volto", "vosso", "vulgo", "vulto", "volei", "xampu", "xampo", "xeque", "xibiu","xucro", "zelar", "zumbi"
]);

const WORD_LENGTH = 5;
const MAX_ATTEMPTS = 6;

let currentPhase = 1; 
let secretWord1 = "";
let secretWord2 = "";
let board1Solved = false;
let board2Solved = false;

let currentAttempt = 0;
let currentSelectedIndex = 0; 
let gameOver = false;
let guessedWords = [];

function initGame() {
    gameOver = false;
    currentAttempt = 0;
    currentSelectedIndex = 0;
    board1Solved = false;
    board2Solved = false;
    guessedWords = [];
    
    document.getElementById("grid-container-1").innerHTML = "";
    document.getElementById("grid-container-2").innerHTML = "";
    document.getElementById("keyboard-container").innerHTML = "";

    const indicator = document.getElementById("phase-indicator");
    const board2 = document.getElementById("grid-container-2");

    if (currentPhase === 1) {
        indicator.innerText = "Fase 1: Modo Tradicional";
        board2.classList.add("hidden-board");
    } else {
        indicator.innerText = "Fase 2: Modo Dueto (Palavras Diferentes!)";
        board2.classList.remove("hidden-board");
    }
    
    selectSecretWords();
    createGrid("grid-container-1");
    if (currentPhase === 2) createGrid("grid-container-2");
    
    createKeyboard();
    updateInputSelectionStyles();
    displayScore();
}

function selectSecretWords() {
    const dictionaryArray = Array.from(VALID_DICTIONARY);
    secretWord1 = dictionaryArray[Math.floor(Math.random() * dictionaryArray.length)].toLowerCase();
    
    if (currentPhase === 2) {
        do {
            secretWord2 = dictionaryArray[Math.floor(Math.random() * dictionaryArray.length)].toLowerCase();
        } while (secretWord1 === secretWord2);
    }
}

function saveScore(type) {
    let currentCount = parseInt(localStorage.getItem(`palpitex_${type}`)) || 0;
    localStorage.setItem(`palpitex_${type}`, currentCount + 1);
    displayScore();
}

function displayScore() {
    document.getElementById("wins-count").innerText = localStorage.getItem("palpitex_wins") || 0;
    document.getElementById("losses-count").innerText = localStorage.getItem("palpitex_losses") || 0;
}

document.getElementById("restart-btn").addEventListener("click", () => {
    currentPhase = 1;
    initGame();
});

document.addEventListener("DOMContentLoaded", initGame);

function createGrid(containerId) {
    const grid = document.getElementById(containerId);
    for (let r = 0; r < MAX_ATTEMPTS; r++) {
        const row = document.createElement("div");
        row.classList.add("grid-row");
        row.setAttribute("data-row", r);
        for (let c = 0; c < WORD_LENGTH; c++) {
            const tile = document.createElement("div");
            tile.classList.add("tile");
            
            tile.addEventListener("click", () => {
                if (r === currentAttempt && !gameOver) {
                    currentSelectedIndex = c;
                    updateInputSelectionStyles();
                }
            });
            row.appendChild(tile);
        }
        grid.appendChild(row);
    }
}

function updateInputSelectionStyles() {
    const containers = ["grid-container-1"];
    if (currentPhase === 2) containers.push("grid-container-2");

    containers.forEach((id, bIdx) => {
        const isSolved = bIdx === 0 ? board1Solved : board2Solved;
        const grid = document.getElementById(id);
        const rows = grid.getElementsByClassName("grid-row");
        if (!rows[currentAttempt]) return;

        const tiles = rows[currentAttempt].children;
        for (let i = 0; i < WORD_LENGTH; i++) {
            if (!isSolved) {
                tiles[i].classList.add("active-input");
                tiles[i].classList.remove("selected");
                if (i === currentSelectedIndex) tiles[i].classList.add("selected");
            } else {
                tiles[i].classList.remove("active-input", "selected");
            }
        }
    });
}

function createKeyboard() {
    const keyboard = document.getElementById("keyboard-container");
    const layout = [
        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
        ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ç"],
        ["enter", "z", "x", "c", "v", "b", "n", "m", "backspace"]
    ];

    layout.forEach(rowKeys => {
        const row = document.createElement("div");
        row.classList.add("keyboard-row");
        rowKeys.forEach(keyText => {
            const button = document.createElement("button");
            button.classList.add("key");
            button.innerText = keyText === "backspace" ? "⌫" : keyText;
            button.setAttribute("data-key", keyText);
            if (keyText === "enter" || keyText === "backspace") button.classList.add("wide");
            button.addEventListener("click", () => handleInput(keyText));
            row.appendChild(button);
        });
        keyboard.appendChild(row);
    });
}

function showModal(title, message, isHelp = false, isNextPhase = false) {
    document.getElementById("modal-title").innerText = title;
    const bodyContent = document.getElementById("modal-body-content");
    const closeBtn = document.getElementById("modal-close-btn");
    
    if (isHelp) {
        bodyContent.innerHTML = `<ul><li>🟩 <strong>Verde:</strong> Letra certa no lugar certo.</li><li>🟨 <strong>Amarelo:</strong> Letra certa no lugar errado.</li><li>⬛ <strong>Escuro:</strong> Letra errada.</li><li>👉 Setas (← e →) movem e cliques mudam blocos isolados!</li></ul>`;
        closeBtn.innerText = "Fechar";
    } else {
        bodyContent.innerHTML = `<p>${message}</p>`;
        closeBtn.innerText = isNextPhase ? "Avançar para Fase 2" : "Fechar";
    }

    const action = () => {
        document.getElementById("custom-modal").classList.add("hidden");
        if (isNextPhase) {
            currentPhase = 2;
            initGame();
        }
        closeBtn.removeEventListener("click", action);
    };
    closeBtn.addEventListener("click", action);
    document.getElementById("custom-modal").classList.remove("hidden");
}

document.getElementById("help-btn").addEventListener("click", () => showModal("Como Jogar", "", true));
document.getElementById("modal-close-btn").addEventListener("click", () => document.getElementById("custom-modal").classList.add("hidden"));

document.getElementById("reset-score-btn").addEventListener("click", () => {
    document.getElementById("confirm-modal").classList.remove("hidden");
});

document.getElementById("confirm-no-btn").addEventListener("click", () => {
    document.getElementById("confirm-modal").classList.add("hidden");
});

document.getElementById("confirm-yes-btn").addEventListener("click", () => {
    localStorage.removeItem("palpitex_wins");
    localStorage.removeItem("palpitex_losses");
    displayScore();
    document.getElementById("confirm-modal").classList.add("hidden");
});

document.addEventListener("keydown", (e) => {
    if (gameOver) return;
    if (e.key === "ArrowLeft") {
        if (currentSelectedIndex > 0) { currentSelectedIndex--; updateInputSelectionStyles(); }
        return;
    }
    if (e.key === "ArrowRight") {
        if (currentSelectedIndex < WORD_LENGTH - 1) { currentSelectedIndex++; updateInputSelectionStyles(); }
        return;
    }
    const key = e.key.toLowerCase();
    if (key === "enter") handleInput("enter");
    else if (key === "backspace") handleInput("backspace");
    else if (/^[a-zç]$/.test(key)) handleInput(key);
});

function handleInput(key) {
    if (gameOver) return;

    const grids = ["grid-container-1"];
    if (currentPhase === 2) grids.push("grid-container-2");

    const activeTilesList = [];
    let completeCheck = true;

    grids.forEach((id, bIdx) => {
        const isSolved = bIdx === 0 ? board1Solved : board2Solved;
        const grid = document.getElementById(id);
        const currentRow = grid.getElementsByClassName("grid-row")[currentAttempt];
        if (!currentRow) return;
        const tiles = currentRow.children;
        activeTilesList.push({ tiles, isSolved, row: currentRow });

        if (!isSolved && key === "enter") {
            for (let tile of tiles) { if (tile.innerText === "") completeCheck = false; }
        }
    });

    if (key === "backspace") {
        activeTilesList.forEach(b => { if (!b.isSolved) b.tiles[currentSelectedIndex].innerText = ""; });
        if (currentSelectedIndex > 0) currentSelectedIndex--;
    } else if (key === "enter") {
        if (completeCheck) checkGuessAllBoards(activeTilesList);
        else activeTilesList.forEach(b => { if (!b.isSolved) triggerShake(b.row); });
    } else {
        activeTilesList.forEach(b => { if (!b.isSolved) b.tiles[currentSelectedIndex].innerText = key; });
        if (currentSelectedIndex < WORD_LENGTH - 1) currentSelectedIndex++;
    }
    updateInputSelectionStyles();
}

function checkGuessAllBoards(boardsData) {
    let guess = "";
    const activeBoard = boardsData.find(b => !b.isSolved);
    for (let i = 0; i < WORD_LENGTH; i++) guess += activeBoard.tiles[i].innerText.toLowerCase();

    if (!VALID_DICTIONARY.has(guess) || guessedWords.includes(guess)) {
        boardsData.forEach(b => { if (!b.isSolved) triggerShake(b.row); });
        return;
    }

    guessedWords.push(guess);

    boardsData.forEach((b, bIdx) => {
        if (b.isSolved) return;

        const secret = bIdx === 0 ? secretWord1 : secretWord2;
        const counts = {};
        for (let char of secret) counts[char] = (counts[char] || 0) + 1;

        const statuses = Array(WORD_LENGTH).fill("absent");

        for (let i = 0; i < WORD_LENGTH; i++) {
            if (guess[i] === secret[i]) { statuses[i] = "correct"; counts[guess[i]]--; }
        }
        for (let i = 0; i < WORD_LENGTH; i++) {
            if (statuses[i] !== "correct" && secret.includes(guess[i])) {
                if (counts[guess[i]] > 0) { statuses[i] = "present"; counts[guess[i]]--; }
            }
        }

        for (let tile of b.tiles) tile.classList.remove("active-input", "selected");

        for (let i = 0; i < WORD_LENGTH; i++) {
            setTimeout(() => {
                b.tiles[i].classList.add("flip");
                setTimeout(() => {
                    b.tiles[i].classList.remove("flip");
                    b.tiles[i].classList.add(statuses[i], "reveal");
                    if (bIdx === 0 || currentPhase === 1) updateKeyboardStatus(guess[i], statuses[i]);
                }, 120);
            }, i * 100);
        }
    });

    setTimeout(() => {
        if (!board1Solved && guess === secretWord1) board1Solved = true;
        if (currentPhase === 2 && !board2Solved && guess === secretWord2) board2Solved = true;

        const allSolved = currentPhase === 1 ? board1Solved : (board1Solved && board2Solved);

        if (allSolved) {
            gameOver = true;
            startConfetti();
            if (currentPhase === 1) {
                showModal("Fase 1 Concluída! 🚀", "Excelente! Prepare-se para a Fase 2: Modo Dueto!", false, true);
            } else {
                saveScore("wins");
                showModal("Vitória Absoluta! 🎉", "Sensacional! Você derrotou o Palpitex Ultra!");
            }
        } else if (currentAttempt + 1 >= MAX_ATTEMPTS) {
            gameOver = true;
            saveScore("losses");
            const resposta = currentPhase === 1 ? secretWord1.toUpperCase() : `Esq: ${secretWord1.toUpperCase()} | Dir: ${secretWord2.toUpperCase()}`;
            showModal("Fim de Jogo 😢", `Fim das tentativas. Resposta: ${resposta}`);
        } else {
            currentAttempt++;
            currentSelectedIndex = 0;
            updateInputSelectionStyles();
        }
    }, WORD_LENGTH * 100 + 250);
}

function updateKeyboardStatus(key, status) {
    const btn = document.querySelector(`.key[data-key="${key}"]`);
    if (!btn) return;
    if (status === "correct") btn.className = "key correct";
    else if (status === "present" && !btn.classList.contains("correct")) btn.className = "key present";
    else if (status === "absent" && !btn.classList.contains("correct") && !btn.classList.contains("present")) btn.className = "key absent";
}

function triggerShake(element) {
    element.classList.add("shake");
    setTimeout(() => element.classList.remove("shake"), 400);
}

function startConfetti() {
    const colors = ['#3aa394', '#d3ad69', '#ffffff', '#ff6b6b', '#4dadf7'];
    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 4000);
    }
}

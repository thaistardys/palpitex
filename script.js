const WORDS = [
    "termo", "jogos", "texto", "sagaz", "amigo", "nobre", "pleno", "fazer", "casal", "audaz",
    "vigor", "sinto", "mente", "noite", "festa", "tempo", "viver", "mundo", "ponto", "forte",
    "bravo", "vapor", "lugar", "gênio", "ideia", "crime", "forma", "grupo", "justo", "muito",
    "aipim", "casas", "porta", "carro", "livro", "chuva", "norte", "falar", "noção", "fruta",
    "casar", "gatos", "minas", "fácil", "parar", "andar", "comer", "roupa", "verde", "beber"
];

const VALID_DICTIONARY = new Set([
    ...WORDS,
     "abono", "abril", "abrir", "afeto", "ajuda", "algoz", "amago", "andam", "andar", "andei", "andou", "anzal", "assim", "ativo", "atras", "atriz", "audio", "autor", "aviso", "aviao", "bacia", "baile", "baixa", "baixo", "balao", "banco", "barra", "bazar", "bebem", "beber", "bebeu", "beijo", "berço", "bicho", "bloco", "boato", "bocal", "bocha", "bodas", "bolha", "bolsa", "bolso", "bolao", "bomba", "borda", "bossa", "bosta", "botao", "braço", "breve", "briga", "brisa", "bruto", "bruxa", "bucha", "buque", "burra", "burro", "busca", "bonus", "cacho", "caixa", "calor", "calça", "campo", "canal", "cargo", "carro", "carta", "casam", "casar", "casas", "casei", "casos", "casou", "causa", "cerca", "cesta", "chefe", "choro", "chuva", "cinto", "cinza", "ciume", "claro", "clima", "clube", "cobra", "cobre", "coice", "coisa", "comem", "comer", "comeu", "comum", "corpo", "corre", "corri", "corro", "criar", "dizer", "exito", "facto", "falam", "falar", "falei", "falha", "falho", "falou", "falso", "fardo", "farol", "farsa", "farto", "fatal", "fator", "fatos", "fazer", "febre", "feira", "feixe", "feliz", "fenda", "feroz", "ferro", "ferva", "festa", "fiapo", "fibra", "ficha", "filha", "filho", "filme", "filao", "final", "finas", "finta", "firma", "firme", "fisco", "flama", "flash", "flora", "fluxo", "fobia", "focal", "fogao", "folha", "folia", "fonte", "foral", "forca", "forem", "forja", "forma", "força", "frase", "fundo", "gaita", "galho", "galao", "gamba", "ganho", "ganso", "garfo", "garoa", "garra", "gasto", "geada", "gente", "geral", "gerar", "gesso", "gesto", "gibao", "ginga", "globo", "golfo", "golpe", "gongo", "gordo", "gorro", "gosto", "gotas", "grade", "grama", "gramo", "grana", "grata", "grato", "grave", "graxa", "graxo", "graça", "greve", "grife", "grilo", "gripe", "grito", "gruda", "grude", "grupo", "gruta", "guizo", "haste", "heroi", "hiato", "horas", "horta", "horto", "hotel", "houve", "humor", "humus", "himen", "idade", "ideia", "idoso", "igual", "ileso", "impar", "imune", "inato", "infra", "jogar", "jogos", "julho", "junho", "justo", "lagar", "lagoa", "lapso", "larva", "laser", "leite", "levar", "linha", "livro", "local", "lombo", "longe", "louco", "louro", "louça", "lucro", "lugar", "lunar", "luzes", "labio", "macho", "macio", "macro", "mafia", "magia", "magra", "magro", "maior", "malas", "malha", "malho", "manas", "manta", "manto", "marca", "marco", "marte", "março", "massa", "matiz", "meios", "mente", "moeda", "molar", "molde", "molho", "morno", "morte", "morto", "mosca", "motim", "motor", "mudar", "muito", "multa", "mundo", "mural", "museu", "musgo", "movel", "mumia", "natal", "naval", "navio", "negro", "ninho", "niple", "nitro", "nobre", "noite", "noiva", "noivo", "norte", "nossa", "nosso", "notar", "notas", "noval", "novas", "novio", "noçao", "nuvem", "nylon", "nevoa", "nivel", "obice", "oeste", "olham", "olhar", "olhei", "olhou", "oliva", "ombro", "ontem", "optar", "opçao", "ordem", "orgia", "pacto", "padre", "paiol", "palco", "palha", "palma", "palmo", "pampa", "panca", "pande", "parar", "pardo", "pedem", "pedir", "pediu", "peixe", "plano", "plena", "pluto", "podem", "poder", "podes", "ponto", "porca", "porco", "porta", "porto", "posse", "posso", "posta", "posto", "pouco", "praia", "prata", "prato", "prazo", "praça", "prece", "preco", "prelo", "premi", "preso", "preto", "preço", "reais", "ritmo", "sagaz", "santo", "senso", "sobre", "sorte", "tempo", "termo", "terra", "texto", "trevo", "treze", "tribo", "trigo", "trilo", "trina", "trino", "tripa", "triun", "troca", "troco", "trono", "tropa", "trova", "truco", "trufa", "tubos", "turba", "turbo", "turma", "turno", "turvo", "tutor", "tunel", "ultra", "unico", "unido", "uniao", "unçao", "usina", "usual", "usura", "vacas", "vadio", "vagao", "valas", "valer", "valha", "valia", "valid", "valor", "valsa", "valva", "vamos", "vapor", "varal", "varra", "varao", "vasco", "vasto", "vazar", "vazio", "vazao", "veado", "velas", "velha", "velho", "veloz", "venda", "venha", "vento", "veras", "verba", "verbo", "verde", "veria", "verme", "verso", "verta", "vespa", "veste", "vetor", "vetos", "vexar", "vezes", "viaje", "vidal", "vidas", "video", "vidro", "viela", "viena", "viera", "vigar", "vigor", "vimos", "vinha", "vinho", "vinto", "viola", "viral", "virar", "virei", "virem", "visar", "visor", "vista", "visto", "visao", "viver", "viveu", "vivid", "vocal", "vodka", "vogal", "volta", "volte", "volto", "vulto", "vacuo", "vicio", "virus", "volei", "icone", "indio", "opera", "orgao", "unica"
]);



const WORD_LENGTH = 5;
const MAX_ATTEMPTS = 6;

let secretWord = "";
let currentAttempt = 0;
let currentSelectedIndex = 0; 
let gameOver = false;

function initGame() {
    gameOver = false;
    currentAttempt = 0;
    currentSelectedIndex = 0;
    
    document.getElementById("grid-container").innerHTML = "";
    document.getElementById("keyboard-container").innerHTML = "";
    
    selectRandomWord();
    createGrid();
    createKeyboard();
    updateInputSelectionStyles();
}

function selectRandomWord() {
    // Transforma o Set de validação em uma lista para o sorteio
    const dictionaryArray = Array.from(VALID_DICTIONARY);
    const randomIndex = Math.floor(Math.random() * dictionaryArray.length);
    secretWord = dictionaryArray[randomIndex].toLowerCase();
}


function createGrid() {
    const grid = document.getElementById("grid-container");
    for (let r = 0; r < MAX_ATTEMPTS; r++) {
        const row = document.createElement("div");
        row.classList.add("grid-row");
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
    const rows = document.getElementsByClassName("grid-row");
    if (!rows[currentAttempt]) return;
    
    const tiles = rows[currentAttempt].children;
    for (let i = 0; i < WORD_LENGTH; i++) {
        tiles[i].classList.add("active-input");
        tiles[i].classList.remove("selected");
        if (i === currentSelectedIndex) {
            tiles[i].classList.add("selected");
        }
    }
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

            if (keyText === "enter" || keyText === "backspace") {
                button.classList.add("wide");
            }

            button.addEventListener("click", () => handleInput(keyText));
            row.appendChild(button);
        });
        keyboard.appendChild(row);
    });
}

document.addEventListener("keydown", (e) => {
    if (gameOver) return;
    const key = e.key.toLowerCase();
    if (key === "enter") handleInput("enter");
    else if (key === "backspace") handleInput("backspace");
    else if (/^[a-zç]$/.test(key)) handleInput(key);
});

function handleInput(key) {
    if (gameOver) return;

    const rows = document.getElementsByClassName("grid-row");
    const currentRow = rows[currentAttempt];
    const currentTiles = currentRow.children;

    if (key === "backspace") {
        currentTiles[currentSelectedIndex].innerText = "";
        if (currentSelectedIndex > 0) {
            currentSelectedIndex--;
        }
    } else if (key === "enter") {
        let isComplete = true;
        for (let tile of currentTiles) {
            if (tile.innerText === "") isComplete = false;
        }

        if (isComplete) {
            checkGuess(currentTiles, currentRow);
        } else {
            triggerShake(currentRow); // Apenas treme se estiver incompleto
        }
    } else {
        currentTiles[currentSelectedIndex].innerText = key;
        if (currentSelectedIndex < WORD_LENGTH - 1) {
            currentSelectedIndex++;
        }
    }
    updateInputSelectionStyles();
}

function checkGuess(tiles, currentRow) {
    let guess = "";
    for (let i = 0; i < WORD_LENGTH; i++) {
        guess += tiles[i].innerText.toLowerCase();
    }

    // ALTERAÇÃO: Removido modal de erro. Apenas treme a linha se a palavra for inválida
    if (!VALID_DICTIONARY.has(guess)) {
        triggerShake(currentRow);
        return;
    }

    const secretLetterCounts = {};
    for (let char of secretWord) {
        secretLetterCounts[char] = (secretLetterCounts[char] || 0) + 1;
    }

    const statuses = Array(WORD_LENGTH).fill("absent");

    for (let i = 0; i < WORD_LENGTH; i++) {
        if (guess[i] === secretWord[i]) {
            statuses[i] = "correct";
            secretLetterCounts[guess[i]]--;
        }
    }

    for (let i = 0; i < WORD_LENGTH; i++) {
        if (statuses[i] !== "correct" && secretWord.includes(guess[i])) {
            if (secretLetterCounts[guess[i]] > 0) {
                statuses[i] = "present";
                secretLetterCounts[guess[i]]--;
            }
        }
    }

    for (let tile of tiles) {
        tile.classList.remove("active-input", "selected");
    }

    // Efeito de revelação limpo e vertical (Evita espelhar a letra)
    for (let i = 0; i < WORD_LENGTH; i++) {
        setTimeout(() => {
            tiles[i].classList.add("flip");
            setTimeout(() => {
                tiles[i].classList.remove("flip");
                tiles[i].classList.add(statuses[i], "reveal");
                updateKeyboardStatus(guess[i], statuses[i]);
            }, 150);
        }, i * 100);
    }

    const totalDelay = WORD_LENGTH * 100 + 300;

    setTimeout(() => {
        if (guess === secretWord) {
            gameOver = true;
            startConfetti();
            showModal("Vitória! 🎉", `Sensacional! Você descobriu a palavra secreta: ${secretWord.toUpperCase()}!`);
        } else if (currentAttempt + 1 >= MAX_ATTEMPTS) {
            gameOver = true;
            showModal("Fim de Jogo 😢", `Não foi dessa vez! A palavra era: ${secretWord.toUpperCase()}.`);
        } else {
            currentAttempt++;
            currentSelectedIndex = 0;
            updateInputSelectionStyles();
        }
    }, totalDelay);
}

function updateKeyboardStatus(key, status) {
    const btn = document.querySelector(`.key[data-key="${key}"]`);
    if (!btn) return;

    if (status === "correct") {
        btn.className = "key correct";
    } else if (status === "present" && !btn.classList.contains("correct")) {
        btn.className = "key present";
    } else if (status === "absent" && !btn.classList.contains("correct") && !btn.classList.contains("present")) {
        btn.className = "key absent";
    }
}

function triggerShake(element) {
    element.classList.add("shake");
    setTimeout(() => element.classList.remove("shake"), 400);
}

function showModal(title, message, isHelp = false) {
    document.getElementById("modal-title").innerText = title;
    const bodyContent = document.getElementById("modal-body-content");
    
    if (isHelp) {
        bodyContent.innerHTML = `
            <ul>
                <li>🟩 <strong>Verde:</strong> Letra na palavra e posição correta.</li>
                <li>🟨 <strong>Amarelo:</strong> Letra na palavra, mas posição incorreta.</li>
                <li>⬛ <strong>Escuro:</strong> Letra não existe na palavra da rodada.</li>
                <li>👉 Clique em blocos individuais para focar a edição diretamente ali!</li>
            </ul>
        `;
    } else {
        bodyContent.innerHTML = `<p id="modal-message">${message}</p>`;
    }
    
    document.getElementById("custom-modal").classList.remove("hidden");
}

function startConfetti() {
    const colors = ['#3aa394', '#d3ad69', '#ffffff', '#ff6b6b', '#4dadf7'];
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        confetti.style.animationDelay = (Math.random() * 0.5) + 's';
        
        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '0%';
        }

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}

document.getElementById("help-btn").addEventListener("click", () => showModal("Como Jogar", "", true));
document.getElementById("modal-close-btn").addEventListener("click", () => document.getElementById("custom-modal").classList.add("hidden"));
document.getElementById("restart-btn").addEventListener("click", initGame);

document.addEventListener("DOMContentLoaded", initGame);

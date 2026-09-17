const WORDS = [
    "termo", "jogos", "texto", "sagaz", "amigo", "nobre", "pleno", "fazer", "casal", "audaz",
    "vigor", "sinto", "mente", "noite", "festa", "tempo", "viver", "mundo", "ponto", "forte",
    "bravo", "vapor", "lugar", "gênio", "ideia", "crime", "forma", "grupo", "justo", "muito",
    "aipim", "casas", "porta", "carro", "livro", "chuva", "norte", "falar", "noção", "fruta",
    "casar", "gatos", "minas", "fácil", "parar", "andar", "comer", "roupa", "verde", "beber"
];

const VALID_DICTIONARY = new Set([
    ...WORDS,
    "AMIDO",
    "AMORA",
    "APITO",
    "AREIA",
    "ARROZ",
    "ASILO",
    "ATLAS",
    "AVEIA",
    "AVIAO",
    "BACIA",
    "BACON",
    "BALDE",
    "BANCO",
    "BANJO",
    "BARCO",
    "BARRA",
    "BARRO",
    "BLOCO",
    "BOLSA",
    "BOLSO",
    "BOMBA",
    "BOTAO",
    "BRIGA",
    "BROTO",
    "BUCHA",
    "CABRA",
    "CACAU",
    "CAIXA",
    "CALDO",
    "CALHA",
    "CALMA",
    "CAMPO",
    "CANAL",
    "CANJA",
    "CANTO",
    "CAPUZ",
    "CARNE",
    "CARRO",
    "CARTA",
    "CASCO",
    "CESTA",
    "CHAPA",
    "CHAVE",
    "CHEFE",
    "CHORO",
    "CHUVA",
    "CINTO",
    "CISNE",
    "CLIMA",
    "CLIPE",
    "CLONE",
    "COBRA",
    "COFRE",
    "COISA",
    "CORDA",
    "COROA",
    "CORPO",
    "COURO",
    "CREME",
    "CRISE",
    "CUNHA",
    "CUPIM",
    "CUSTO",
    "DARDO",
    "DENTE",
    "DISCO",
    "DRAMA",
    "DRENO",
    "FAROL",
    "FAUNA",
    "FESTA",
    "FIBRA",
    "FILME",
    "FLORA",
    "FOLHA",
    "FONTE",
    "FORMA",
    "FORNO",
    "FORTE",
    "FOSSO",
    "FRUTA",
    "FUSCA",
    "GALAO",
    "GANHO",
    "GARFO",
    "GARRA",
    "GEADA",
    "GESSO",
    "GLACE",
    "GLOBO",
    "GOLFE",
    "GRAMA",
    "GRELA",
    "GRILO",
    "GRUTA",
    "GUIDA",
    "HARPA",
    "HIENA",
    "HORTA",
    "HOTEL",
    "ILHA",
    "JARRA",
    "JEITO",
    "JUNTO",
    "LAPIS",
    "LARVA",
    "LASER",
    "LEITE",
    "LENTE",
    "LIVRO",
    "LUGAR",
    "MOEDA",
    "MOSCA",
    "MUNDO",
    "MUSEU",
    "NAVIO",
    "NEVOA",
    "NINHO",
    "NORTE",
    "NUVEM",
    "PAPEL",
    "PASTA",
    "PENTE",
    "PIANO",
    "PLACA",
    "PORCO",
    "PORTA",
    "PORTO",
    "POSTE",
    "PRAIA",
    "PRATO",
    "PREGO",
    "RADIO"
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

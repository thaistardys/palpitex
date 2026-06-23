# 🎯 Palpitex Ultra

O **Palpitex Ultra** é um jogo de adivinhação de palavras baseado no famoso fenômeno *Termo/Wordle*, desenvolvido com foco em performance, código limpo e abordagem **Mobile-First**. Ideal para passar o tempo e exercitar a mente em momentos livres.

O projeto evolui o conceito tradicional trazendo um **sistema progressivo de fases**, permitindo que o jogador avance de um tabuleiro simples para um desafiador modo dueto!

---

## 🚀 Demonstração

▶️ **[Acesse a aplicação em execução aqui](https://thaistardys.github.io/palpitex/)**

---

## 🚀 Funcionalidades Clave

- **Fase 1 (Modo Tradicional):** Tente adivinhar uma palavra secreta de 5 letras em até 6 tentativas.
- **Fase 2 (Modo Dueto):** Ao vencer a primeira fase, o jogo desbloqueia o modo avançado. Digite simultaneamente em dois tabuleiros com palavras secretas diferentes!
- **Dicionário "Infinito":** Sorteio e validação inteligente baseados em um dicionário expandido da língua portuguesa.
- **Edição Individual de Cards:** Clique em qualquer quadrado da linha ativa para alterar ou corrigir uma letra específica isoladamente.
- **Navegação por Setas:** Suporte a teclados físicos usando as setas direcionais (`←` e `→`) para alternar entre as letras rapidamente.
- **Mecanismo Anti-Repetição:** O sistema valida se você já tentou aquela palavra na rodada atual, impedindo desperdício de tentativas.
- **Placar Persistente:** Contabilização de vitórias e derrotas salva nativamente no navegador (`LocalStorage`), com um botão customizado para zerar o histórico quando quiser.
- **Modais e Animações Customizadas:** Efeitos fluidos de revelação (`ScaleY`), efeito de tremer (`Shake`) para entradas inválidas e chuva de confetes na vitória absoluta.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído puramente com tecnologias web nativas, sem a necessidade de frameworks ou dependências externas, garantindo um carregamento instantâneo:

- **HTML5:** Estrutura semântica dividida rigidamente em blocos (`header`, `main`, `footer`).
- **CSS3:** Estilização moderna e responsiva limitando o layout em `max-width: 1024px` para excelente visualização em desktops e smartphones.
- **JavaScript (ES6+):** Lógica totalmente modularizada e dividida em 4 arquivos focados para evitar poluição de escopo.

---

## 📂 Estrutura do Projeto

A arquitetura do código foi separada seguindo boas práticas de desenvolvimento para manter a alta legibilidade:

```text
├── index.html          # Estrutura e marcação da página
├── style.css           # Estilos globais, responsividade e animações
├── script.js           # Banco de dados e dicionário de validação
    ├── game-core        # Estados do jogo, placar e controle das fases
    ├── ui-manager       # Construção da interface (tabuleiros, teclado e modais)
    └── game-logic       # Captura de entradas, regras de colisão e efeitos visuais
```

---

## 🎮 Como Jogar

1. **Insira as letras:** Use o teclado virtual da tela ou o teclado físico do seu computador.
2. **Navegue livremente:** Clique em um bloco específico ou use as setas do teclado para corrigir uma letra do meio da palavra.
3. **Pressione Enter:** O sistema avaliará seu palpite com cores:
   - 🟩 **Verde:** A letra faz parte da palavra e está na posição correta.
   - 🟨 **Amarelo:** A letra faz parte da palavra, mas está na posição errada.
   - ⬛ **Cinza Escuro:** A letra não existe na palavra secreta.
4. **Acertou?** Avance para a Fase 2 e tente decifrar duas palavras ao mesmo tempo!

---

## 💻 Como Executar Localmente

Como o projeto não utiliza gerenciadores de pacotes (como npm), a execução é extremamente simples:

1. Clone este repositório:
   ```bash
   git clone https://github.com
   ```
2. Entre na pasta do projeto:
   ```bash
   cd palpitex
   ```
3. Abra o arquivo `index.html` diretamente em qualquer navegador de sua preferência.

---

Criado com ☕ e JavaScript por um amante de quebra-cabeças. Divirta-se jogando (sem deixar o chefe ver)! 😉

window.addEventListener('DOMContentLoaded', () => {

    const boxes = document.querySelectorAll("#game-board > div");
    const resetButton = document.getElementById("reset");

    let board = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";
    let gameOver = false;

    // Combinaisons gagnantes
    const winCombos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    // Ajout des clics
    boxes.forEach((box, index) => {
        box.addEventListener("click", () => play(index));
    });

    function play(index) {
        if (board[index] !== "" || gameOver) return;

        board[index] = currentPlayer;
        boxes[index].textContent = currentPlayer;

        if (checkWin()) {
            setTimeout(() => alert(currentPlayer + " a gagné !"), 10);
            gameOver = true;
            return;
        }

        if (board.every(cell => cell !== "")) {
            setTimeout(() => alert("Match nul !"), 10);
            gameOver = true;
            return;
        }

        // Changement de joueur
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }

    function checkWin() {
        return winCombos.some(combo => {
            return combo.every(index => board[index] === currentPlayer);
        });
    }

    // Reset du jeu
    resetButton.addEventListener("click", resetGame);

    function resetGame() {
        board = ["", "", "", "", "", "", "", "", ""];
        gameOver = false;
        currentPlayer = "X";
        boxes.forEach(box => box.textContent = "");
    }

});

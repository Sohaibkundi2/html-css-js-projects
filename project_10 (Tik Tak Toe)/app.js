let boxes = document.querySelectorAll(".box1");
let refresh_btn = document.querySelector(".refresh");
let para = document.querySelector(".pera");

let player1Turn = true;
let gameOver = false;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Function to show winner message
function showWinner(winner) {
    para.innerText = `Congratulations! Player (${winner}) Won`;
    gameOver = true;
}

// Function to check for a winner
function checkWinner() {
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        if (boxes[a].innerText !== "" &&
            boxes[a].innerText === boxes[b].innerText &&
            boxes[b].innerText === boxes[c].innerText) {
            showWinner(boxes[a].innerText);
            return true; // Return true to indicate game over
        }
    }
    return false; // Return false if no winner yet
}

// Function to handle box clicks
function handleBoxClick(box) {
    if (gameOver || box.innerText !== "") {
        return; // Ignore click if game is over or box is already filled
    }

    if (player1Turn) {
        box.innerText = "X";
    } else {
        box.innerText = "O";
    }

    player1Turn = !player1Turn; // Switch turns
    box.disabled = true; // Disable the box after click
    checkWinner(); // Check if there's a winner after each move
}

// Add click event listener to each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        handleBoxClick(box);
    });
});

// Function to reset the game
function resetGame() {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false; // Re-enable all boxes
    });
    para.innerText = ""; // Clear the winner message
    player1Turn = true;
    gameOver = false;
}

// Add click event listener to the refresh button
refresh_btn.addEventListener("click", resetGame);

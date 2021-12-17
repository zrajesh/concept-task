const cellElements = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
const winText = document.querySelector(".message");
const reStart = document.querySelector("#restart");
const setText = document.querySelector("[data-winning-message]");

const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 3, 6],
    [0, 4, 8],
    [2, 4, 6]
];

let crossClass = 'x';
let circleClass = 'o';
let circleTurn = false;

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, {once: true});
});

reStart.addEventListener('click', () => {
    location.reload();
})

function place_mark(cell, currClass) {
    cell.classList.add(currClass);
    let text = currClass === circleClass ? 'o' : 'x';
    cell.textContent = text;
} 

function swapTurns() {
    circleTurn = !circleTurn
}

function set_hover() {
    board.classList.remove(circleClass);
    board.classList.remove(crossClass);
    if (circleTurn) {
        board.classList.add(circleClass);
    } else {
        board.classList.add(crossClass);
    }
}

function check_win(currClass) {
    return win.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currClass);
        })
    })
}

function endGame(draw) {
    if (draw) {
        setText.innerText = "DRAW!";
    } else {
        setText.innerText = `${circleTurn ? 'o' : 'x'} wins`;
    }
    winText.classList.add("show");
}

function is_draw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(crossClass) || cell.classList.contains(circleClass);
    })
}

function handleClick(event) {
    const cell = event.target;
    const currentClass = circleTurn ? circleClass : crossClass;
    // Place mark
    place_mark(cell, currentClass);
    // Check for win
    if (check_win(currentClass)) {
        endGame(false);
    } else if (is_draw()) {
        endGame(true);
    }
    // Switch turns
    swapTurns();
    // Set hover
    set_hover();
}


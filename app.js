// default variables
let game1;
const puzzleEl = document.getElementById('puzzle');
const guesses = document.getElementById('guesses');

// configure inital DOM with inforation for user to see

//recognize user input pressed on display
window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    render();
});

const startGame = async () => {
    const puzzle = await getPuzzle(2);
    game1 = new Hangman(puzzle, 4);
    render();
};

document.querySelector('#reset').addEventListener('click', () => {startGame();});

startGame();

const render = () => {
    puzzleEl.textContent = game1.puzzle;
    guesses.textContent = game1.statusMessage;
};

// getPuzzle(2).then((word) => {
//     console.log(word);
// }).catch((err) => {
//     console.log(err);
// });




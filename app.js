// default variables
const game1 = new Hangman('car parts', 2);
const puzzle = document.getElementById('puzzle');
const guesses = document.getElementById('guesses');

// configure inital DOM with inforation for user to see
puzzle.textContent = game1.puzzle;
guesses.textContent = game1.statusMessage;

//recognize user input pressed on display
window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    puzzle.textContent = game1.puzzle;
    guesses.textContent = game1.statusMessage;
});

getPuzzle(2).then((word) => {
    console.log(word);
}).catch((err) => {
    console.log(err);
});



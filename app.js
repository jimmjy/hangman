// default variables
const game1 = new Hangman('cat', 2);
const puzzle = document.getElementById('puzzle');
const guesses = document.getElementById('guesses');

// configure inital DOM with inforation for user to see
puzzle.textContent = game1.getPuzzle();
guesses.textContent = game1.getStatusMessage();

//recognize user input pressed on display
window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    puzzle.textContent = game1.getPuzzle();
    guesses.textContent = game1.getStatusMessage();
});
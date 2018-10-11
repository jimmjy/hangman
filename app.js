const game1 = new Hangman('cat', 2);
const puzzle = document.getElementById('puzzle');
const guesses = document.getElementById('guesses');


puzzle.textContent = game1.getPuzzle();
guesses.textContent = game1.getStatusMessage();

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    puzzle.textContent = game1.getPuzzle();
    guesses.textContent = game1.getStatusMessage();
    game1.getPuzzle();
});
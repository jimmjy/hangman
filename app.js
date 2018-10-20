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

getPuzzle('2', (error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`);
    } else {
        console.log(puzzle);
    }
});

const countryCode = 'zw';
getCountry(countryCode, ((error,country) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Country name: ${country}`);
    }
}))



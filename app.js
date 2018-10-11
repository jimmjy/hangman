const game1 = new Hangman('cat', 2);

window.addEventListener('keypress', function (e) {
    document.getElementsByTagName('body').innerText = '';
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    game1.render(game1.getPuzzle());
    console.log(game1.status);
});
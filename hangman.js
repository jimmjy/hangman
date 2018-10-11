const Hangman = function (word, guesses) {
    this.word = word.toLowerCase().split('');
    this.guesses = guesses;
    this.guessedLetters = [];
    this.status = 'Playing';
}

Hangman.prototype.makeGuess = function (character) {
    character = character.toLowerCase();

    if (this.status.toLowerCase() !== 'playing') {
        return; 
    }
    
    if (!this.guessedLetters.includes(character)) {
        this.guessedLetters.push(character);

        if(!this.word.includes(character)) {
            this.guesses -= 1;
        }
    }

    this.currentStatus();
};

Hangman.prototype.getStatusMessage = function () {
    if (this.status === 'Playing') {
        return `Playing -> Guesses left: ${this.guesses}`;
    } else if (this.status === 'Failed') {
        return `Failed -> Nice try! The word was "${this.word.join('')}"`
    } else if (this.status === 'Finished') {
        return `Finished -> Great work! You guessed the word`;
    }
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = '';

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter;
        } else {
            puzzle += '*';
        };
    });

    return puzzle;
};

Hangman.prototype.currentStatus = function () {
    let finished = true;

    this.word.forEach((letter) => {
        if(this.guessedLetters.includes(letter)) {

        } else {
            finished = false;
        }
    });

    if (this.guesses === 0) {
        this.status = 'Failed';
    } else if (finished) {
        this.status = 'Finished';
    } else {
        this.status = 'Playing'; 
    };
}



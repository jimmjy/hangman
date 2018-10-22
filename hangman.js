//used a class to structure functions
class Hangman {
    constructor(word, guesses) {
        this.word = word.toLowerCase().split('');
        this.guesses = guesses;
        this.guessedLetters = [];
        this.status = 'Playing';
    };

    makeGuess(character) {
        //disregard if user put capital or not
        character = character.toLowerCase();
        

        if (this.status.toLowerCase() !== 'playing') {
            return;
        }

        //checks if we have guessed a letter or not and adds it if we didn't
        if (!this.guessedLetters.includes(character)) {
            this.guessedLetters.push(character);

            if (!this.word.includes(character)) {
                this.guesses -= 1;
            }
        }

        //refreshes status message
        this.currentStatus();
    };

    //getter for the actual status
    get statusMessage() {
        if (this.status === 'Playing') {
            return `Guesses left: ${this.guesses}`;
        } else if (this.status === 'Failed') {
            return `Nice try! The word was "${this.word.join('')}"`
        } else if (this.status === 'Finished') {
            return `Great work! You guessed the word`;
        }
    };

    //getter for puzzle words and what letters to show
    get puzzle() {
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

    //updates the status to user
    currentStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ');

        if (this.guesses === 0) {
            this.status = 'Failed';
        } else if (finished) {
            this.status = 'Finished';
        } else {
            this.status = 'Playing';
        };
    };
}
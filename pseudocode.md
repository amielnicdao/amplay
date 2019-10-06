### The Psychic Game Pseudocode

1. The computer randomly chooses a letter.
    Ex:  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
2. The user has to guess the letter by pressing letter keys on the keyboard.
    Ex: document.onkeyup = function(event) {
      var userGuess = event.key;
    } Note: The whole JS code will happen inside these brackets.
3. We check if the user guessed correctly.
    Ex: if (userGuess === computerGuess) {
          ties++;
        } 
4. If the user guessed correctly, we log the score under "wins."
5. If the user has not guessed after exhausting all allowed guesses, we log the score under "losses."
6. The user gets 10 tries to guess correctly.
    * This counter will go down if the user guesses incorrectly.
7. We will show the letters the user has typed until the user either wins or loses.
8. When user wins, restart the game without refreshing after increasing "wins."
9. When user loses, restart the game without refreshing after increasing "losses."
// create an array that lists all the letter (??)
// create variables that hold wins, losses, # of guesses left, user guesses. I will use .textContent. 
// 

var letters = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 3;
var guesses = [];

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var lettersGuessedText = document.getElementById("lettersguessed-text");

document.onkeyup = function (event) {
  
    userGuess = event.key;
    var computerGuess = letters[Math.floor(Math.random() * letters.Length)];
  
    if (userGuess === computerGuess) {
      wins++;
      guessesLeft = 3;
    
    } if (userGuess !== computerGuess) {
      guessesLeft--;

    } if (guessesLeft === 0) {
      losses++;
      guessesLeft = 3;
    }

winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
lettersGuessedText.textContent = "Your guesses: " + userGuess;

// userGuess.append(guesses);

//figure out why there's  no wins
//why isn't the user input continously recording
//do i create a for loop?
};
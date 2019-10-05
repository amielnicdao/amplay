
var letters = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 15;
var guesses = [];


var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var lettersGuessedText = document.getElementById("lettersguessed-text");

function startGame() {
  computerGuess = letters[Math.floor(Math.random() * letters.length)];
}

document.onkeyup = function (event) {
  
    var userGuess = event.key;
   
    if (userGuess === computerGuess) {
      wins++;
      guessesLeft = 15;
      guesses = [];
      startGame()
    } if (userGuess !== computerGuess) {
      guessesLeft--;
    } if (guessesLeft === 0) {
      losses++;
      guessesLeft = 15;
      startGame()
      guesses = [];
    }

winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
lettersGuessedText.textContent = "Your guesses: ";
var newguesses = guesses.join(",")

guesses.push(userGuess);
document.getElementById("allguesses").innerHTML = newguesses;
};

startGame()
// create an array that lists all the letter (??)
// create variables that hold wins, losses, # of guesses left, user guesses. I will use .textContent. 
// 

var letters = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 3;
var guesses = [];
var computerGuess

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var lettersGuessedText = document.getElementById("lettersguessed-text");

function startGame() {
  computerGuess = letters[Math.floor(Math.random() * letters.length)];
}

document.onkeyup = function (event) {
  
    var userGuess = event.key;
    
    console.log(computerGuess)
    console.log(userGuess)
   
    if (userGuess === computerGuess) {
      wins++;
      guessesLeft = 3;
      guesses = [];
      startGame()
    } if (userGuess !== computerGuess) {
      guessesLeft--;
    } if (guessesLeft === 0) {
      losses++;
      guessesLeft = 3;
      startGame()
      guesses = [];
    }

winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
lettersGuessedText.textContent = "Your guesses: " + userGuess;

guesses.push(userGuess);
document.getElementById("lettersguessed-text").innerHTML = guesses;
console.log(guesses)


//why does the text disappear?


};

startGame()
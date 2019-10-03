// create an array that lists all the letter (??)
// create variables that hold wins, losses, # of guesses left, user guesses. I will use .textContent. 
// 

var letters = "";

var wins = 0;
var losses = 0;
var guessesLeft = 3;

document.onkeyup = function(event) {

    var userGuess = event.key;
    var computerGuess = letters[Math.floor(Math.random() * letters.Length)];

    if (userGuess === computerGuess) {
        wins++;
    } else if (userGuess !== computerGuess && guessesLeft === 0) {
        losses++;
    } else {}



};
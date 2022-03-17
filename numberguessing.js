const prompt = require("prompt-sync")();

// generate a secret number between 1 and 10
const MIN = 1;
const MAX = 10;

let secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

let guesses = 0; // for storing the number of guesses
let hint = ''; // for storing hint
let number = 0;
do {
  // get input from user
  let input = prompt(`Please enter a number between ${MIN} and ${MAX}\n` + hint);

  // get the integer
  number = parseInt(input);

  // increase the number of guesses
  guesses++;

  // check input number with the secret number
  //  provide hint if needed
  if (number > secretNumber) {
    hint = ', and less than\n ' + number;
  } else if (number < secretNumber) {
    hint = ', and greater than\n ' + number;
  } else if (number == secretNumber) {
    console.log(`Bravo! you're correct after ${guesses} guess(es).`);
  }
} while (number != secretNumber);
//DOM
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
var passwordText = document.querySelector("#password");

// avalible characters
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '!@#$%^&*~",-_+=/.';

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //generate upper, lower, numbers, symbols
  let length = lengthEl.value;
  if (length < 8 || length > 128) {
    passwordText.value = 'Invalid Length! Please choose a number between 8 and 128.'
    return 'Invalid Length'
  } else {
    if (uppercaseEl.checked == false && lowercaseEl.checked == false && numbersEl.checked == false && symbolsEl.checked == false) {
      passwordText.value = 'At lease one criteria must be selected.'
      return 'Invalid Criteria Selection'
    } else {
      let acceptedLetters = [];
      let password = ''
      if (uppercaseEl.checked) {
        acceptedLetters = acceptedLetters + upper
      }
      if (lowercaseEl.checked) {
        acceptedLetters = acceptedLetters + lower
      }
      if (numbersEl.checked) {
        acceptedLetters = acceptedLetters + number
      }
      if (symbolsEl.checked) {
        acceptedLetters = acceptedLetters + symbol
      }
      //for loop
      for (i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * acceptedLetters.length)
        password += acceptedLetters[index]

      }
      passwordText.value = password;
      return password
    }
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

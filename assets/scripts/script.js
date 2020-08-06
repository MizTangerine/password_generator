//DOM
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
console.log(lengthEl, uppercaseEl, lowercaseEl, numbersEl, symbolsEl);
var passwordText = document.querySelector("#password");
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lower = 'abcdefghijklmnopqrstuvwxyz'
const number = '0123456789'
const symbol = '!@#$%^&*()'

// Assignment Code
var generateBtn = document.querySelector("#generate");
// console.log(generateBtn);

function generatePassword() {
  //code to be ran
  console.log('generatePassword is running');
  //generate upper, lower, numbers, symbols
  let length = lengthEl.value
  if (length < 8 || length > 128) {
    passwordText.value = 'Invalid Length! Please choose a number between 8 and 128.'
  } else {
    if (uppercaseEl.checked == false && lowercaseEl.checked == false && numbersEl.checked == false && symbolsEl.checked == false) {
      passwordText.value = 'At lease one criteria must be selected.'
    } else {
      console.log(uppercaseEl.checked, lowercaseEl.checked, numbersEl.checked, symbolsEl.checked)
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
      console.log(acceptedLetters)
      for (i = 0; i < length; i++) {
        var index = Math.floor(Math.random() * acceptedLetters.length)
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
  console.log(password);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

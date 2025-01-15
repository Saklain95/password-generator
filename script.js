//targeting the required elements
let upperCaseField = document.getElementById("uppercase")
let lowerCaseField = document.getElementById("lowercase")
let symbolsField = document.getElementById("symbols")
let numbersField = document.getElementById("numbers")
let passwordField = document.getElementById("length")
let generateField = document.getElementById("generate")
let copyField = document.getElementById("copy")
let displayInputField = document.getElementById("password")

//defining the values to each of them
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerCase = "abcdefghijklmnopqrstuvwxyz"
let numbers = "0123456789"
let symbols = "~!@#$%^&*?></*-+_"

//function called when generate button is clicked
function generatePassword() {
    let passwordSet = "";
    if (upperCaseField.checked) passwordSet += upperCase;
    if (lowerCaseField.checked) passwordSet += lowerCase;
    if (symbolsField.checked) passwordSet += symbols;
    if (numbersField.checked) passwordSet += numbers;

    const passwordLength = parseInt(passwordField.value);
    if (passwordSet === "" || passwordLength < 4) {
      passwordField.value = "Invalid settings! enter characters greater that 3";
      return;
    }

    let password = ""
    for (let i = 0; i < passwordLength; i++) {
        randomIndex = Math.floor(Math.random() * passwordSet.length)
        password += passwordSet[randomIndex]
    }

    displayInputField.value = password;
}

//copying the password 
function copy() {
    if (passwordField.value) {
      navigator.clipboard.writeText(passwordField.value)
        .then(() => alert("Password copied to clipboard!"))
        .catch(() => alert("Failed to copy password."));
    }else{
        alert("no password to copy")
    }
  }

//adding eventListers to buttons
generateField.addEventListener('click', generatePassword)
copyField.addEventListener('click', copy)
// Array of special characters to be included in password
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Assignment Code
var generateBtn = document.querySelector("#generate");
//Create variables for criteria checks
var isNumerical;
var isLowerCase;
var isSpecialCharacters;
var isUpperCase;
var passwordLength;

//Check if password length is valid
//If it's within the range of 8-128, proceed to check which character types are selected
//If none of the character type is selected, prompt to start the character type selection again
function validateLength() {
  //Ask for password length
  passwordLength = prompt ("Please enter the length of the password (8 - 128 characters)");

  //validation for password length
  if (passwordLength >= 8 && passwordLength <= 128) {
    checkCharacterType();
    //Check if at least one character type is selected
    //Otherwise start character type prompt again
    if (!isLowerCase && !isUpperCase && !isNumerical && !isSpecialCharacters){
      alert("Please select at least one of the character types.");
      validateLength();
    }
  //If password length is not valid, prompt an alert and ask for a password length again
  } else {
    alert ("Password length is not valid, please enter a number between 8 - 128.");
    generatePassword();
  }

  //return the string of the generated password
  return;
}

//Function to choose if special characters, numerical characters, lower case and upper case are included
function checkCharacterType(){
  isLowerCase = confirm ("Are lower cased characters to be included? \n'OK' to included, 'Cancel' not to include.")
  isUpperCase = confirm ("Are upper cased characters to be included? \n'OK' to included, 'Cancel' not to include.");
  isNumerical = confirm ("Are numerical characters to be included? \n'OK' to included, 'Cancel' not to include.");
  isSpecialCharacters = confirm ("Are special characters to be included? \n'OK' to included, 'Cancel' not to include.");
}

// Define function "generatePassword"
function generatePassword(){
  validateLength();

  //Create empty arrays to store the characters selected by user
  var passwordInclusion = [];
  var password = "";

  //Check types of characters to be included, then add all selected characters to the empty array
  if (isLowerCase) {
    passwordInclusion = passwordInclusion.concat(lowerCasedCharacters);
  }
  if (isUpperCase) {
    passwordInclusion = passwordInclusion.concat(upperCasedCharacters);
  }
  if (isSpecialCharacters) {
    passwordInclusion = passwordInclusion.concat(specialCharacters);
  }
  if (isNumerical){
    passwordInclusion = passwordInclusion.concat(numericCharacters);
  }

  //Grab the password length
  //Math random function generate a random value greater or equal to 0 && less than 1
  //Use the math random function * then length of the characters inclusion array to generate a random location inside the array
  //Use the math floor function to get rid of the decial parts
  //Use a 'for' loop start from 0, and count up to the last character of the desired password length
  //Add the random character to the end of the "password" array
  for (var index = 0; index < passwordLength; index++) {      
    password = password.concat(passwordInclusion[Math.floor(Math.random()*(passwordInclusion.length))]);
  }

  return password;
}
// function getPasswordLength() {

//   return passwordLength;
// }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



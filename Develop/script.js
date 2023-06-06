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
var isNumerical;
var isLowerCase;
var isSpecialCharacters;
var isUpperCase;
var passwordLength;

// Define function "generatePassword"
function validateLength() {
  //ask for password length
  passwordLength = prompt ("Please enter the length of the password (8 - 128 characters)");

  //validation for password length
  if (passwordLength >= 8 && passwordLength <= 128) {
    isNumerical = confirm ("Are numerical characters to be included? \n'OK' to included, 'Cancel' not to include.");
    isSpecialCharacters = confirm ("Are special characters to be included? \n'OK' to included, 'Cancel' not to include.");
    isUpperCase = confirm ("Are upper cased characters to be included? \n'OK' to included, 'Cancel' not to include.");
  } else {
    alert ("Password length is not valid, please enter a number between 8 - 128.");
    generatePassword();
  }
  //prompt to choose if special characters, numerical characters, lower case and upper case are included
  //return the string of the generated password
  return;
}

function generatePassword(){
  validateLength();
  console.log("password length is " + passwordLength);
  console.log("is lower?" + isLowerCase);
  console.log("is upper?" + isUpperCase);
  console.log("is special?" + isSpecialCharacters);

  var passwordInclusion = lowerCasedCharacters;
  var password = "";
  
  if (isUpperCase) {
    passwordInclusion = (passwordInclusion).concat(upperCasedCharacters);
  }
  if (isSpecialCharacters) {
    passwordInclusion = (passwordInclusion).concat(specialCharacters);
  }
  if (isNumerical){
    passwordInclusion = (passwordInclusion).concat(numericCharacters);
  }
  console.log(passwordInclusion);
  var index;
  for (index = 0; index < passwordLength; index++) {      
    console.log(password);
    console.log(index)
    password = password.concat(passwordInclusion[Math.floor(Math.random()*(passwordInclusion.length-1))]);
    console.log(Math.floor(Math.random()*(passwordInclusion.length-1)));

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



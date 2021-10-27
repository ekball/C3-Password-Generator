// Assignment code here

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "#", "$", "%", "&", "*", "+", "-", ".", "/", ";", ":", "<", ">", "=", "?", "@", "^", "_", "~"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];


var generatePassword = function (){

  var passLength = window.prompt("How many characters would you like to have in your password? Please choose between 8 and 128 characters.");

    if (passLength >=8 || passLength <= 128) {

      window.prompt("Would you like lowercase characters in your password?");
        if (true){
        }

      window.prompt("Would you like uppercase characters in your password?");

        if (true){
          
        }

      window.prompt("Would you like special characters in your password?");

        if (true){
          
        }

      window.prompt("Would you like numbers in your password?");

        if (true){
         
        }

    }

    else {

      window.alert("You need to choose between 8 and 128 characters for your password. Please try again.");

      return generatePassword ();

    }

}












// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

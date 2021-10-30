// Assignment code here

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "#", "$", "%", "&", "*", "+", "-", ".", "/", ";", ":", "<", ">", "=", "?", "@", "^", "_", "~"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var pass = "";

var chooseArray = Math.random();

var randomIndexLowercase = randomize(1, 26);

var randomIndexUppercase = randomize(1, 26);

var randomIndexSpecialChar = randomize(1, 20);

var randomIndexNumbers = randomize(1, 10);

var passLength  = window.prompt("How many characters would you like to have in your password? Please choose between 8 and 128 characters.");










var generatePassword = function (){

var passLength = passLength;

// retrieve user input about which chars to use and convert responses to lower case for if/else statements
var promptLowerCase = window.prompt("Would you like lowercase characters in your password? Please type YES or NO.");
promptLowerCase = promptLowerCase.toLowerCase;

var promptUpperCase = window.prompt("Would you like uppercase characters in your password? Please type YES or NO.");
promptUpperCase = promptUpperCase.toLowerCase;

var promptSpecialChar = window.prompt("Would you like special characters in your password? Please type YES or NO.");
promptSpecialChar = promptSpecialChar.toLowerCase;

var promptNumbers = window.prompt("Would you like numbers in your password? Please type YES or NO.");
promptNumbers = promptNumbers.toLowerCase;

    if (passLength >=8 || passLength <= 128) {

      fourArrays ();

      

    }


    // if user enters a number not b/w 8 and 128, notify of error, and restart function
    else {

      window.alert("You need to choose between 8 and 128 characters for your password. Please try again.");

      return generatePassword ();

    }

}


// if user wants to use all 4 character types

var fourArrays = function () {

  // check to make sure user selected 'yes' on all four character types
  if (promptLowerCase === "yes" && promptUpperCase === "yes" && promptSpecialChar === "yes" && promptNumbers === "yes" ) {
    
    // use a loop to build password until password length is the same as what user chose
    for (var i = 0; i <= passLength; i++) {

      // provides an equal random chance for any of the four arrays to be chosen
          // randomizes which index (character) is chosen for the randomly chosen array

      if (chooseArray <= .25){
        pass = pass + lowerCase[randomIndexLowercase];
      }

      else if (chooseArray > .25 && chooseArray <= .5) {
        pass = pass + upperCase[randomIndexUppercase];
      }

      else if (chooseArray > .5 && chooseArray <= .75) {
        pass = pass + specialChar[randomIndexSpecialChar];
      }

      else {
        pass = pass + numbers[randomIndexNumbers];
      }
    }

  }

}
























var randomize = function(min, max) {

    var value = Math.floor(Math.random() * (max - min + 1) + min);
  
    return value;

  };

// var loopItLowerCase = function(x){

//   for (var i = 0; i < lowerCase.length; i ++){


//   }

// }







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

// Assignment code here

// arrays that house all characters required for building a password
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "#", "$", "%", "&", "*", "+", "-", ".", "/", ";", ":", "<", ">", "=", "?", "@", "^", "_", "~"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// a blank string to put randomly chosen indexes into and concatenate together to build the password
var pass = "";

// variable used to streamline randomly choosing which array to pull a random index from
var chooseArray = Math.random();

// variables used to streamline which random index from an array is chosen
var randomIndexLowercase = randomize(1, 26);
var randomIndexUppercase = randomize(1, 26);
var randomIndexSpecialChar = randomize(1, 20);
var randomIndexNumbers = randomize(1, 10);


var choosePassLength  = function () {

 var passLength =  window.prompt("How many characters would you like to have in your password? Please choose between 8 and 128 characters.");

 return passLength;

}



// main function to generate password
var generatePassword = function (){

var passLength = choosePassLength();

// retrieve user input about which chars to use and convert responses to lower case for if/else statements
var promptLowerCase = window.prompt("Would you like lowercase characters in your password? Please type YES or NO.");
promptLowerCase = promptLowerCase.toLowerCase;

var promptUpperCase = window.prompt("Would you like uppercase characters in your password? Please type YES or NO.");
promptUpperCase = promptUpperCase.toLowerCase;

var promptSpecialChar = window.prompt("Would you like special characters in your password? Please type YES or NO.");
promptSpecialChar = promptSpecialChar.toLowerCase;

var promptNumbers = window.prompt("Would you like numbers in your password? Please type YES or NO.");
promptNumbers = promptNumbers.toLowerCase;

    // check to see if the users desired password length is between 8 and 128 characters
    if (passLength >=8 || passLength <= 128) {

      // check the responses of the user for each character type & run through each function until correct matching statements are found

      fourArrays();

      threeArrays();

      twoArrays();

      singleArray();
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
          // randomizes which index (character) is chosen for the randomly chosen array & add it to the end of the growing password

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


// if user wants to use 3 character types

var threeArrays = function () {

  // check to make sure user selected 'yes' on three character types, but not numbers
  if (promptLowerCase === "yes" && promptUpperCase === "yes" && promptSpecialChar === "yes" && promptNumbers === "no" ) {
    
    // use a loop to build password until password length is the same as what user chose
    for (var i = 0; i <= passLength; i++) {

      // provides an equal random chance for any of the three arrays to be chosen
          // randomizes which index (character) is chosen for the randomly chosen array & add it to the end of the growing password

      if (chooseArray <= .33){
        pass = pass + lowerCase[randomIndexLowercase];
      }

      else if (chooseArray > .33 && chooseArray <= .66) {
        pass = pass + upperCase[randomIndexUppercase];
      }

      else {
        pass = pass + specialChar[randomIndexSpecialChar];
      }
    }
  }

  // check to make sure user selected 'yes' on three character types, but not special chars
  else if (promptLowerCase === "yes" && promptUpperCase === "yes" && promptSpecialChar === "no" && promptNumbers === "yes" ) {
    
    // use a loop to build password until password length is the same as what user chose
    for (var i = 0; i <= passLength; i++) {
  
      // provides an equal random chance for any of the three arrays to be chosen
          // randomizes which index (character) is chosen for the randomly chosen array & add it to the end of the growing password
  
      if (chooseArray <= .33){
        pass = pass + lowerCase[randomIndexLowercase];
      }
  
      else if (chooseArray > .33 && chooseArray <= .66) {
        pass = pass + upperCase[randomIndexUppercase];
      }
  
      else {
        pass = pass + numbers[randomIndexNumbers];
      }
    }
  }

  // check to make sure user selected 'yes' on three character types, but not uppercase chars
  else if (promptLowerCase === "yes" && promptUpperCase === "no" && promptSpecialChar === "yes" && promptNumbers === "yes" ) {
    
    // use a loop to build password until password length is the same as what user chose
    for (var i = 0; i <= passLength; i++) {
  
      // provides an equal random chance for any of the three arrays to be chosen
          // randomizes which index (character) is chosen for the randomly chosen array & add it to the end of the growing password
  
      if (chooseArray <= .33){
        pass = pass + lowerCase[randomIndexLowercase];
      }
  
      else if (chooseArray > .33 && chooseArray <= .66) {
        pass = pass + specialChar[randomIndexSpecialChar];
      }
  
      else {
        pass = pass + numbers[randomIndexNumbers];
      }
    } 
  }

   // check to make sure user selected 'yes' on three character types, but not lowercase chars
   else if (promptLowerCase === "no" && promptUpperCase === "yes" && promptSpecialChar === "yes" && promptNumbers === "yes" ) {
    
    // use a loop to build password until password length is the same as what user chose
    for (var i = 0; i <= passLength; i++) {
  
      // provides an equal random chance for any of the three arrays to be chosen
          // randomizes which index (character) is chosen for the randomly chosen array & add it to the end of the growing password
  
      if (chooseArray <= .33){
        pass = pass + upperCase[randomIndexUppercase];
      }
  
      else if (chooseArray > .33 && chooseArray <= .66) {
        pass = pass + specialChar[randomIndexSpecialChar];
      }
  
      else {
        pass = pass + numbers[randomIndexNumbers];
      }
    }
  }
}


// if user wants to use 2 character types

var twoArrays = function () {

  // check to make sure user selected 'yes' on two character types - lowercase + uppercase
  if (promptLowerCase === "yes" && promptUpperCase === "yes" && promptSpecialChar === "no" && promptNumbers === "no" ) {
    
    // use a loop to build password until password length is the same as what user chose
    for (var i = 0; i <= passLength; i++) {

      // provides an equal random chance for either of the two arrays to be chosen
          // randomizes which index (character) is chosen for the randomly chosen array & add it to the end of the growing password

      if (chooseArray <= .5){
        pass = pass + lowerCase[randomIndexLowercase];
      }

      else {
        pass = pass + upperCase[randomIndexUppercase];
      }
    }
  }

  // check to make sure user selected 'yes' on two character types - lowercase + special chars
  if (promptLowerCase === "yes" && promptUpperCase === "no" && promptSpecialChar === "yes" && promptNumbers === "no" ) {
    
    // use a loop to build password until password length is the same as what user chose
    for (var i = 0; i <= passLength; i++) {

      // provides an equal random chance for either of the two arrays to be chosen
          // randomizes which index (character) is chosen for the randomly chosen array & add it to the end of the growing password

      if (chooseArray <= .5){
        pass = pass + lowerCase[randomIndexLowercase];
      }

      else {
        pass = pass + specialChar[randomIndexSpecialChar];
      }
    }
  }

  // check to make sure user selected 'yes' on two character types - lowercase + numbers
  if (promptLowerCase === "yes" && promptUpperCase === "no" && promptSpecialChar === "no" && promptNumbers === "yes" ) {
    
    // use a loop to build password until password length is the same as what user chose
    for (var i = 0; i <= passLength; i++) {
  
      // provides an equal random chance for either of the two arrays to be chosen
          // randomizes which index (character) is chosen for the randomly chosen array & add it to the end of the growing password
  
      if (chooseArray <= .5){
        pass = pass + lowerCase[randomIndexLowercase];
      }
  
      else {
        pass = pass + numbers[randomIndexNumbers];
      }
    }
  }

  // check to make sure user selected 'yes' on two character types + uppercase + numbers
  if (promptLowerCase === "no" && promptUpperCase === "yes" && promptSpecialChar === "no" && promptNumbers === "yes" ) {
    
    // use a loop to build password until password length is the same as what user chose
    for (var i = 0; i <= passLength; i++) {

      // provides an equal random chance for either of the two arrays to be chosen
          // randomizes which index (character) is chosen for the randomly chosen array & add it to the end of the growing password

      if (chooseArray <= .5){
        pass = pass + upperCase[randomIndexUppercase];
      }

      else {
        pass = pass + numbers[randomIndexNumbers];
      }
    }
  }

  // check to make sure user selected 'yes' on two character types - uppercase + special chars
  if (promptLowerCase === "no" && promptUpperCase === "yes" && promptSpecialChar === "yes" && promptNumbers === "no" ) {
    
    // use a loop to build password until password length is the same as what user chose
    for (var i = 0; i <= passLength; i++) {
  
      // provides an equal random chance for either of the two arrays to be chosen
          // randomizes which index (character) is chosen for the randomly chosen array & add it to the end of the growing password
  
      if (chooseArray <= .5){
        pass = pass + upperCase[randomIndexUppercase];
      }
  
      else {
        pass = pass + specialChar[randomIndexSpecialChar];
      }
    }
  }

  // check to make sure user selected 'yes' on two character types - special chars + number
  if (promptLowerCase === "no" && promptUpperCase === "no" && promptSpecialChar === "yes" && promptNumbers === "yes" ) {
    
    // use a loop to build password until password length is the same as what user chose
    for (var i = 0; i <= passLength; i++) {

      // provides an equal random chance for either of the two arrays to be chosen
          // randomizes which index (character) is chosen for the randomly chosen array & add it to the end of the growing password

      if (chooseArray <= .5){
        pass = pass + specialChar[randomIndexSpecialChar];
      }

      else {
        pass = pass + numbers[randomIndexNumbers];
      }
    }
  }
}


// if user wants to use a single character type

var singleArray = function () {

  // check to make sure user selected 'yes' on a single character type - lowercase
  if (promptLowerCase === "yes" && promptUpperCase === "no" && promptSpecialChar === "no" && promptNumbers === "no" ) {
    
    // use a loop to build password until password length is the same as what user chose
    for (var i = 0; i <= passLength; i++) {

      // randomizes which index (character) is chosen for the chosen character type & add it to the end of the growing password
      pass = pass + lowerCase[randomIndexLowercase];
        
    }
  }

  // check to make sure user selected 'yes' on a single character type - uppercase
  if (promptLowerCase === "yes" && promptUpperCase === "no" && promptSpecialChar === "no" && promptNumbers === "no" ) {
    
    // use a loop to build password until password length is the same as what user chose
    for (var i = 0; i <= passLength; i++) {

      // randomizes which index (character) is chosen for the chosen character type & add it to the end of the growing password
      pass = pass + upperCase[randomIndexUpperCase];
        
    }
  }

  // check to make sure user selected 'yes' on a single character type - special chars
  if (promptLowerCase === "yes" && promptUpperCase === "no" && promptSpecialChar === "no" && promptNumbers === "no" ) {
    
    // use a loop to build password until password length is the same as what user chose
    for (var i = 0; i <= passLength; i++) {

      // randomizes which index (character) is chosen for the chosen character type & add it to the end of the growing password
      pass = pass + specialChar[randomIndexSpecialChar];
        
    }
  }

  // check to make sure user selected 'yes' on a single character type - numbers
  if (promptLowerCase === "yes" && promptUpperCase === "no" && promptSpecialChar === "no" && promptNumbers === "no" ) {
    
    // use a loop to build password until password length is the same as what user chose
    for (var i = 0; i <= passLength; i++) {

      // randomizes which index (character) is chosen for the chosen character type & add it to the end of the growing password
      pass = pass + numbers[randomIndexNumbers];
        
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

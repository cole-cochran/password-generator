// Assignment Code
var generateBtn = document.querySelector("#generate");
//variables for characters for password generator. 
var numberChars = [0,1,2,3,4,5,6,7,8,9];
var upperChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerChars = ['a','b','c','d','e','f','g','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialChars = ['!','@','#','$','%','^','&','*'];
var passwordLength = 0;
var passwordChars = [];
var newPassword = "";
// Write password to the input
  function generatePassword(){

//While loop to create a prompt and set password length from 8 - 128.    
  while (passwordLength <  8 || passwordLength > 128){
    passwordLength = prompt("Choose a number between 8 and 128 for your new password.");
  }
 //Creating confirm for character styles.   
    var uppercase = confirm ("Would you like an uppercase character?");
    var lowercase = confirm ("Would you like a lowercase character?");
    var numbers = confirm ("Would you like a number?");
    var special = confirm ("Would you like a special character?");

//If statements to create new array of characters for password.
  if(uppercase){
      passwordChars=passwordChars.concat(upperChars);
    }
   console.log(passwordChars) 
    if(lowercase){
      passwordChars=passwordChars.concat(lowerChars);
    }
  console.log(passwordChars)
    if(numbers){
      passwordChars=passwordChars.concat(numberChars);
    }
    console.log(passwordChars) 
    if(special){
      passwordChars=passwordChars.concat(specialChars);
    }
//Generating newPassword and returning it displayed.
  for (i = 0; i < passwordLength; i++){
    var index = Math.floor(Math.random() * passwordChars.length)
    var newRandomChar = passwordChars[index];
    newPassword = newPassword.concat(newRandomChar);
    }
    return newPassword;
}

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector('#password');
	passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


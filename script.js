// Assignment Code
var generateBtn = document.querySelector("#generate");
//variables for characters for password generator. 
var numberChar = [0,1,2,3,4,5,6,7,8,9];
var upperChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerChar = ['a','b','c','d','e','f','g','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialChar = ['!','@','#','$','%','^','&','*',];



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





var passwordLength = 0;

//while (password < length || passwordLength > 128){
//var passwordLength = prompt("Choose a number between 8 and 128 for your new password.");
//}

// Assignment Code
var generateBtn = document.querySelector("#generate");
//variables for characters for password generator. 
var numberChars = [0,1,2,3,4,5,6,7,8,9];
var upperChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerChars = ['a','b','c','d','e','f','g','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialChars = ['!','@','#','$','%','^','&','*',];
//Adds boxes to select characters
function generatePassword() {
  var Length = document.querySelector("#Length").value;
  console.log(Length);
  // start adding if statements to see if it has an effect on the the display text
  var Uppercase = document.querySelector("#Uppercase").checked;
  console.log(Uppercase);
  var Lowercase = document.querySelector("#Lowercase").checked;
  console.log(Lowercase);
  var Numbers = document.querySelector("#Numbers").checked;
  console.log(Numbers);
  var Special = document.querySelector("#Special").checked;
  console.log(Special);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
    if(Uppercase){
      passwordChars=passwordChars.concat(upperChars);
    }
   console.log(passwordChars) 
    if(Lowercase){
      passwordChars=passwordChars.concat(lowerChars);
    }
  console.log(passwordChars)
    if(Numbers){
      passwordChars=passwordChars.concat(numberChars);
    }
    console.log(passwordChars) 
    if(Special){
      passwordChars=passwordChars.concat(specialChars);
    }


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





//var passwordLength = 0;

//while (password < length || passwordLength > 128){
//var passwordLength = prompt("Choose a number between 8 and 128 for your new password.");
//}

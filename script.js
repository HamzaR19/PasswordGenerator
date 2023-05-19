// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var upperCaseSet = ["A", "B", "C"];
  var numberSet = [1, 2, 3];
  var userPickedCharacterSet = [];

  // sets password length

  var pLength = parseInt(prompt("Enter a number between 1 and 150"));
 // run program to check for number, if false redirect for a number
// setting up the values for the first prompt
  if (pLength >= 1 && pLength <= 150) {
    var isUpperCase = confirm("Do you want uppercase letters?");
    var isNumber = confirm("Do you want numbers?");

    // if or else statement referring to Uppercase and Number prompts
    if (isUpperCase || isNumber) {
      if (isUpperCase) {
        userPickedCharacterSet = userPickedCharacterSet.concat(upperCaseSet);
      }
      if (isNumber) {
        userPickedCharacterSet = userPickedCharacterSet.concat(numberSet);
      }
      
      var password = "";
      for (var i = 0; i < pLength; i++) {
        var randomChar =
          userPickedCharacterSet[Math.floor(Math.random() * userPickedCharacterSet.length)];
        password += randomChar;
      }

      return password;
    } else {
      // If neither uppercase nor number is selected
      alert("Please select at least one option: uppercase or numbers");
      return generatePassword();
    }
  } else {
    // If the entered length is invalid
    alert("Please enter a number between 1 and 150");
    return generatePassword();
  }
}
// Write password to the #password input
// Function for writePassword with querySelector
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// added event listener to "click, writePassword"
generateBtn.addEventListener("click", writePassword);

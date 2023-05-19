var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var upperCaseSet = ["A", "B", "C"];
  var numberSet = [1, 2, 3];
  var userPickedCharacterSet = [];

  var pLength = parseInt(prompt("Enter a number between 1 and 150"));

  if (pLength >= 1 && pLength <= 150) {
    var isUpperCase = confirm("Do you want uppercase letters?");
    var isNumber = confirm("Do you want numbers?");

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

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

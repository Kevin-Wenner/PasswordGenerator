// Assignment code here
//arrays to pull from
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]; //25
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"]; //25
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //9
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", ",", "<", ".", ">", "/", "?", ";", ":", "'"]; //21
var pwOptions = [lowerCase, upperCase, numbers, symbols];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var password = [];


function generatePassword(){

  var passwordTemp = [];

  var passwordPlaceHolder = [];
  // makes prompts and adds responses to passwordPlaceHolder
  function makeArray(){

    var pwLength = prompt("How many characters long would you like your password? Must be no shorter than 8 and no longer than 128.")

    passwordPlaceHolder.push(pwLength);

    var pwLower = confirm("Do you want to use lower case characters?");

    passwordPlaceHolder.push(pwLower);

    var pwUpper = confirm("Do you want to use upper case characters?");

    passwordPlaceHolder.push(pwUpper);

    var pwNumeric = confirm("Do you want to use numeric characters?");

    passwordPlaceHolder.push(pwNumeric);

    var pwSpecial = confirm("Do you want to use special characters?")

    passwordPlaceHolder.push(pwSpecial);

    console.log(passwordPlaceHolder);
  }

  // validate input checks for length range
  makeArray();
  if(passwordPlaceHolder[0] < 8 || passwordPlaceHolder[0] > 128){

    passwordPlaceHolder = [];
    console.log(passwordPlaceHolder);
    makeArray();

  }else{

      for (var i = 0; i < passwordPlaceHolder[0]; i++) {
        temp = Math.floor(Math.random() * pwOptions.length + 1);
        passwordTemp.push(temp);
        
      }
      console.log(passwordTemp);
      passwordTemp.forEach(number => {
        var hold;

        if (number == 1) {
          hold = lowerCase[Math.floor(Math.random() * lowerCase.length)];
          
        }else if (number == 2) {
          hold = upperCase[Math.floor(Math.random() * upperCase.length)];
        }else if (number == 3){
          hold = numbers[Math.floor(Math.random() * numbers.length)];
        }else{
          hold = symbols[Math.floor(Math.random() * symbols.length)];
        }
        password.push(hold);
      });
  }
  console.log(password);
  // display PW
  passwordDisplay = "";
  password.forEach(element => {
    passwordDisplay += element;
  });
  return passwordDisplay;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

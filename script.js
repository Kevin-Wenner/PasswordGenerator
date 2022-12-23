// Assignment code here
//arrays to pull from
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]; //25
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"]; //25
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //9
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", ",", "<", ".", ">", "/", "?", ";", ":", "'"]; //21
var pwOptions = [lowerCase, upperCase, numbers, symbols];
var arrayHolder = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var password = [];


function generatePassword(){

  var passwordTemp = [];

  var passwordPlaceHolder = [];
  // makes prompts and adds responses to passwordPlaceHolder
  function makeArray(){
    passwordPlaceHolder = [];
    arrayHolder.forEach(element => {
      pwOptions.splice(0, 0, arrayHolder);
    });

    var pwLength = prompt("How many characters long would you like your password?")

    passwordPlaceHolder.push(pwLength);

    var pwLower = confirm("Do you want to use lower case characters?");

    passwordPlaceHolder.push(pwLower);

    // if no move out of array to arrayHolder
    if (pwLower == true) {
      arrayHolder.splice(0, 0, pwOptions[0]);
      // console.log(arrayHolder);
    }

    var pwUpper = confirm("Do you want to use upper case characters?");

    passwordPlaceHolder.push(pwUpper);

    if (pwUpper == true) {
      arrayHolder.splice(0, 0, pwOptions[1]);
      // console.log(arrayHolder);
    }
    // if no move out of array to arrayHolder

    var pwNumeric = confirm("Do you want to use numeric characters?");

    passwordPlaceHolder.push(pwNumeric);

    // if no move out of array to arrayHolder
    if (pwNumeric == true) {
      arrayHolder.splice(0, 0, pwOptions[2]);
      // console.log(arrayHolder);
    }

    var pwSpecial = confirm("Do you want to use special characters?")

    passwordPlaceHolder.push(pwSpecial);

    // if no move out of array to arrayHolder
    if (pwSpecial == true) {
      arrayHolder.splice(0, 0, pwOptions[3]);
      // console.log(arrayHolder);
    }
    console.log(passwordPlaceHolder);
  }

  // validate input checks for length range
  makeArray();
  
  if(passwordPlaceHolder[0] < 8 || passwordPlaceHolder[0] > 128){
    // console.log(passwordPlaceHolder);
    return "Password length must be no shoter than 8 characters and no longer than 128 characters";

  }else if(arrayHolder.length == 0){
      return "You must select a character type";
  }else{
      // randomizes which array to pull from
      console.log(arrayHolder.length);
      for (var i = 0; i < passwordPlaceHolder[0]; i++) {
        temp = Math.floor(Math.random() * arrayHolder.length + 1);
        passwordTemp.push(temp);
        
      }
      // console.log(passwordTemp);
      passwordTemp.forEach(number => {
        var hold;
        
        if (number == 1) {
          hold = arrayHolder[0][Math.floor(Math.random() * arrayHolder[0].length)]; 
        }else if (number == 2) {
          hold = arrayHolder[1][Math.floor(Math.random() * arrayHolder[1].length)];
        }else if (number == 3){
          hold = arrayHolder[2][Math.floor(Math.random() * arrayHolder[2].length)];
        }else if (number == 4){
          hold = arrayHolder[3][Math.floor(Math.random() * arrayHolder[3].length)];
        }
        
        password.push(hold);  
      });     
  }

  // creates a string from the array for display
   var passwordDisplay = password;

  // clears array inorder to be reuseable
  password = [];

  return passwordDisplay.join("");
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

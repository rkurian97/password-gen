// Assignment code here

//Prompting password length and validating that its a number between 8 and 128
var validation= true;
while (validation){
  var passLength = prompt('type any number 8 - 128 !! what is the length of the password?');
  if (passLength>=8 && passLength<=128){
    validation=false;
  }else{
    window.alert("Not a valid input. Please enter an number between 8 and 128");
  }
}

//Asking for character types and validating that at least one character type is selected
validation=true;
while(validation){
  var confirmUpper= confirm("Do you want uppercase letters");
  var confirmLower= confirm("Do you want lowercase letters");
  var confirmNumber= confirm("Do you want numbers?");
  var confirmSpecial= confirm("Do you want special characters?");
  if(confirmUpper || confirmLower || confirmNumber || confirmSpecial){
    validation=false;
  }else{
    window.alert("You need to confirm at least one character type");
  }
}

//array of the different character types
var upperCase=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers= ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special=[' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=','>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~' ];
//Empty array that will hold all the types that user selected
var allChoices = [];

//adding types to the allChoices array if Confirm was selected by user for that type. The array will eventually hold all the character types that the user selected. 
if(confirmUpper){
  allChoices=allChoices.concat(upperCase);
}
if(confirmLower){
  allChoices=allChoices.concat(lowerCase);
}
if(confirmNumber){
  allChoices=allChoices.concat(numbers);
}
if(confirmSpecial){
  allChoices=allChoices.concat(special);
}

function generatePassword(){
  var pass= "";
  // Creating a password by selecting a random index in the allChoices array
  for(i=0; i<passLength; i++){
    pass=pass+ allChoices[Math.floor(Math.random() * ((allChoices.length-1) - 0) + 0)]
  }
  return pass;
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

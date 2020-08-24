"use strict";

// create a function with two parameters one to log the word you want to have confirmed and a second to match the index you are trying to see if it containss
// create a variable and set it equal to the first parameter sliced by -1 of the second parameters length 
//slicing by -1 will start from the end of the secong parameter as long as the second parameter is equal to the last letter
// loggin displays a boolean value of true
// must use triple equals to make sure it is exactaly the same STRICT
function confirmEnding(string, check) {
  var confirmedEnd = string.slice(-check.length) === check;
  console.log(confirmedEnd);
}

confirmEnding('Bastion', 'n');
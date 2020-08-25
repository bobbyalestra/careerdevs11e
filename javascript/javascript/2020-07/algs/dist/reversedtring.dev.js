"use strict";

// create a function with a callback
// create a loop so it will continue to cycle through the string 
// set the initializer to the length of the string - 1 to get the last index
// create a condition so that the string length is equal to - 1, equal to 0 will not include the first letter of the string
// degrement the condition by one  each time it runs the code block
// set the reverseString callback + and = to the string index
// you have to use 'var' to declare the variable, let wont work because it wont change in a local scope, of the for loop , you have to keep inside the loop so that it will constantly add it to the new array as longa as the condition is met
// log the function
// call the function and  set the call back 
function reverseString(string) {
  for (var reverseString = "", i = string.length - 1; i > -1; i--) {
    reverseString += string[i];
  }

  console.log(reverseString);
}

reverseString('hello');
reverseString('Arneezy');
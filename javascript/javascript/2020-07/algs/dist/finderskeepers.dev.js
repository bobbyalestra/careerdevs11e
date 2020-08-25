"use strict";

// first create a function with two parameter to use two arguments
// have the first arguement equal the array's length
// have the second equal the function itself to runagain
// make a local variable in the function  to refeer back to the value of 0
// create a loop to cycle through the array 
// setvthe initializer to zero, a condition of the arrays length and for a post expression, incrememnt the initializer by 1
// declare the local function varaible "num" equal to the array's index
// make an if statement the second argument will accept another parameter of the num local variable
// then return the num and if it doesnt meet the condition return undefined
function findElement(arr, func) {
  var num = 0;

  for (var i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) return num;
  }

  return undefined;
}

findElement([1, 3, 5, 8, 9, 10], function (num) {
  return num % 2 === 0;
});
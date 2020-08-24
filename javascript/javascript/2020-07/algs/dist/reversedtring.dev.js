"use strict";

function reverseString(str) {
  // you have to use 'var' to declare the variable, let wont work because it wont change in a local scope, you have to keep inside the loop so that it will constantly add it to the new array as longa as the condition is met
  for (var reversedStr = "", i = str.length - 1; i > -1; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

console.log(reverseString);
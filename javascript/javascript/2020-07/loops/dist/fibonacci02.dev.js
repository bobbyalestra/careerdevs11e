"use strict";

// nextNumber = current + previous
var numberArray = [0, 1];

for (var i = 1; i < 9; i++) {
  numberArray.push(numberArray[i] + numberArray[i - 1]);
}

console.log(numberArray);
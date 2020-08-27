"use strict";

// create a function with two parameter
// one parameter to declare the string
// the second to delcare how many times you want it to run
//use an if statement to set contitions instead of a for loop. you arent cycling through anything you just want it to repeat itself in the if statement condition
// if the number of times running is less than 1 return the string
// set the num parameter to 1 and if else statement that if else the second parameterstrictly equals 1 to return the value
//and as a final result use else to return the string + the function that repeats the string
var val;

function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else if (num === 1) {
    return str;
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

repeatStringNumTimes('heyyyyy', 5); /////trying to  ake it work with a loop
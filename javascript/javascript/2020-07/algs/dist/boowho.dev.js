"use strict";

// HINT Uses the operator typeof to check if the variable is a boolean. If it is, it will return true. Otherwise, if it is any other type it will return false.
// create a function with a parameter
// use typeof on the parameter to determine the data type of the arguement
// set the arguement strictly equal to the string "boolean" which will find out if the arguement is true or false
// call the functon with a parameter of null to make it neutral
function booWho(bool) {
  console.log(typeof bool === "boolean");
}

booWho(null);
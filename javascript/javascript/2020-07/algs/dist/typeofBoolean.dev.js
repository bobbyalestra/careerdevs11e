"use strict";

// create a function with a parameter to call back to 
// create an array
// creatge a variable convertToArray
// use split on the variable to use the argument of ' ' and  convert it to lopwercase using the function to lowercase()
// create another varaible to equal the convertedArray
// The second variable is equal to the first variable map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// return a new variable equal to an array using the function and adding val as a parameter val.map(function(val)
// return the parameter val.replace(val.charAt(0), val.charAt(0).to uppercase) to make it so the first index is uppercase
// or return the second variable to = second variable.join(' ') so it will join the array at the element of a space
//call the function with the arguements to finalize
function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function (val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

titleCase("I'm a little tea pot");
"use strict";

// create a string variable to log how many times each letter is displayed in the string
//create a loop to cycle through the string
// sort the string in alphabetcal order 
// find each letter[i] and push it into its ouwn sub array 
// create another variable to increase its value each time if letter[i] = letter[i]
var string = "Mary had a little lamb it’s fleece was white as snow, everywhere that Mary went her lamb was sure to go. Baby girl loved those lamb chopzzz"; //string.sort()

var lowercase = string.toLowerCase(); // created an array to push the string into and convert the string to an array

var stringSplit = lowercase.split(' ');
var stringSort = stringSplit.sort(); // pushed the string into the array

var stringArray = stringSort.push(); // sort throught the array and put it in alphabetical order

console.log(stringSort); // crating another variable so i can store the letters into

var lettersArr = []; //  making a for loop so i am able to cycle throught the string i converted into an array
// initializing i as 0 to access the first index
// condition will be i < the length of the string array
// post expression will increment i each time until there arent anymore letters in the array
// i want to sort the array alphabetically to visually see how many letter there are consecutivelly

for (var i = 0; i < stringArray.length; i++) {} //stringArr[i].sort();
//    console.log(stringArray[i])
/////////////////////////
// able to get each letter into a sub array


var string1 = "Mary had a little lamb it’s fleece was white as snow, everywhere that Mary went her lamb was sure to go. Baby girl loved those lamb chopzzz";
var lowerCaseStr = string1.toLowerCase();
var splitString = lowerCaseStr.split('').sort();

for (var _i = 0; _i < splitString.length; _i++) {
  if (splitString.includes(splitString[_i]) && splitString[_i] == splitString[_i]) {
    var subArrString = [];
    subArrString.push([splitString[_i]]);
    console.log(subArrString);
  } //gives me each individual letter individually
  //    console.log(splitString[i])

} // gives me a log of all word alphabetically
//console.log(splitString);
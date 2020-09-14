// turn the number data into an array with Let to set it as a global scope
// create another variable assigning it to make the number array variable into a string containing all of the numbers
// create an empty to so when we cycle through the array we will be able to assign the odds to it 
// create a loop with the number string's length with a post expression increment the value of i which will be identified as numToStr[i]


// each time i increments i want it to push each index into its own array
// convert it to a string to  check the length of it
// use the if statement as long as index.length % 2 != 0 it will put it into another array;
// use another if statement as long as secondArray[index] % 2 != 0  that will be the odd numbers
// have the secondArray[index] be put into a string to again check the length of secondArrayString[index].length that if its % 2 != 0 put those into another string
// logs those BIH to solve the problem


 
let number = [337941312819039, 5602256151929824, 30225170444787,3551910535291105, 4041593896103, 5347039149245184,337941624752787, 67099423720619241, 6394362198407475, 3560667783239439, 4017950948196059, 
6759393197130163, 6771549142615186, 201836980226124, 3556519446278575, 3566850663741161, 3528172140783618, 3537563353849766, 6331107836502898, 4508928697689785]


// turn number into a string
let numberToString = number.toString();



// trying to put each number into its own seperate array so i can get the length of each number to check if its odd
let NumberArray = [];




// changed from numToString condition

for (let i = 0; i <number.length; i++) {

console.log(number[i])
    if (number[i].length % 2 != 0) {
        // oddNumStr += numToStr[i]

        NumberArray.push(number[i]);
    }

 }
 // logging the numbers into an array
 console.log(NumberArray);

 // logging the numbers with an odd amount of numbers
console.log(numToStr.length)



// logging all of the odds into a string
 console.log(oddNumStr)



 // to log all of the numbers as a string
 //console.log(numToStr);







//  let number = [337941312819039, 5602256151929824, 30225170444787,3551910535291105, 4041593896103, 5347039149245184,337941624752787, 67099423720619241, 6394362198407475, 3560667783239439, 4017950948196059, 6759393197130163, 6771549142615186, 201836980226124, 3556519446278575, 3566850663741161, 3528172140783618, 3537563353849766, 6331107836502898, 4508928697689785];

//  // making the number to a string will allow me to cycle through each digit in the number
// let numToStr = number.toString();

// // assigning numToStr[i] and have it += the empty string will allow you to add the digit each time it runs through the loop
// let oddNumLength = ''
// let oddNumStr = '';


// for (let i = 0; i < numToStr.length; i++) {
//     if (numToStr[i] % 2 != 0) {
//         oddNumStr += numToStr[i];
//     }
// }

// console.log(oddNumStr)
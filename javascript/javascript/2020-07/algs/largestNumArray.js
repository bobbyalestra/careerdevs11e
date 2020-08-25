
//  create a function with a call back to run
// create a global array variable inside the function so it will store the current highest array of numbers
// create a loop with 1 = 0 with a condition equal to the array  callback .length
// and inccement the post expression by 1 each time the condition is met
// before starting the second for loop create another variable to find the largest number inside each sub array and set it equal to the current first index of the array,
// before create the nested for loop you have to set the largest number to the array[i][0]and hard code the zero or as long as the fist condtion is met it will run the second for loop
// create andother for loop with a new initializer set to j
// set the condition so that as long as j is less than the array[i].length it will "JITTERATE" through the nested array
// create an additional if statement condition so that if largest number = array[i][j], 
// create another variable outside of the if statement but inside the nested for loop and set it to the results [i] = largestNumber to give the whole array 



function largestOfFour(array) {
    let results = [];
    for (let i = 0; i < array.length; i++) {
      let largestNumber = array[i][0];
      for (let j = 1; j < array[i].length; j++) {
        if (array[i][j] > largestNumber) {
          largestNumber = array[i][j];
        }
      
      results[i]= largestNumber;
    }
    }
    console.log(results)
  }

  largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])
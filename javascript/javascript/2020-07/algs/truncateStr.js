
//  create a function with to parameter
// parameters set to a string and a number
// make an if statement to set condition of the return
// set the first parameter to equale the arg of a string
// set the second parameter to equal the arg of the number of times
// set the if statement condition to length of the first paramwter  greater than the second parameter
// if thats true return the string sliced at the second parameter number
// the number argument is equal to how many letter it will show


// in doing it this way as long as the string is less the the number it will display the letter character up to that number


function truncateString(str, num) {
    if (str.length > num) {
        console.log(str.slice(0, num) + "...")
      return str.slice(0, num) + "...";
    } else {
        console.log(str)
      return str;
    }
  }
  truncateString('Arneeeeeeeezy', 3)


function truncateStrings (string, number) {
  if (string.length > number) {
    console.log(string.slice(0, number) + "...")
  }
 else {
  console.log(string)
} 
}
truncateStrings('Cameroooooon' , 3)
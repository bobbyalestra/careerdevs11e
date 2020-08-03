


// in this loop im going to split a number in half and add both halves together

let number = 3545754345476866454354523456408

let numberString = number.toString()
let number1 = numberString.substring(0, numberString.length / 2)
let number2 = numberString.substring(0, numberString.length / 2 + 1)

let result = parseInt(number1) + parseInt(number2)

console.log(` ${number1} + ${number2} = ${result}` )
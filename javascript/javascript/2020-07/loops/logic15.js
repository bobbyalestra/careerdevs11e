

let number = 345064099452310 ;
let numString = number.toString();
let num1 = numString.substring(0, numString.length / 2);
let num2 = numString.substring(numString.length / 2 + 1);

parseInt(num1);
parseInt(num2);

let result = parseInt(num1) + parseInt(num2)
console.log(num1)
console.log(num2)

console.log( ` ${num1} +  ${num2} = ${result} ` )
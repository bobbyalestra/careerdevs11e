

// create an intereger variable called number
// get rid of each instance of the number 1
let number = 893714737174461;
let numberString = number.toString();
let numberArry = "";

for (let i = 0; i < numberString.length; i ++) {
    if (numberString[i] != '1') {
      numberArry += numberString[i]      
    }

}
console.log(numberArry);

console.log(numberArry);
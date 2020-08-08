


let numbersArray = [1234, 76543, 3456, 8765];
let numberString = numbersArray.toString();




for (let i = 0; i < numberString.length; i++ ){

    let number1 = numberString.substring(0, numberString[i].length /2);
let number2 = numberString.substring(0, numberString[i].length /2 + 1);
    console.log( parseInt(number1) + parseInt(number2))
}
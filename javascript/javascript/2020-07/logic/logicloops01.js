


//  output the number of times that a letter appears in a string


let string = 'abAbzlwbB';
let stringSplitLowerCase = string.toLowerCase().split('').sort();

let count = 1;
let strArr = [];
let tally = []
for (let i = 0; i < stringSplitLowerCase.length; i++){
    if (stringSplitLowerCase[i] == stringSplitLowerCase[i + 1]) {
      if (stringSplitLowerCase[i + 1] !== stringSplitLowerCase[i + 2]) {
        tally.push(stringSplitLowerCase[i], ++count)
    } 
}else {
        count = 1;
    }
console.log(tally)
    //console.log(stringSplitLowerCase[i], ++count)
}
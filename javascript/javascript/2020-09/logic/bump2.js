
let number = 234345676875454;
let numStr = number.toString();
let newStr = ''

for (let i = 0; i < numStr.length; i++) {
    let numToNum = parseInt(numStr[i])
    if (numToNum % 2 != 0 )
    newStr +=numToNum

}
console.log(newStr);
//console.log(numToNum)
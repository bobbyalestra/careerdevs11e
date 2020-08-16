

let string =  "Capitalize the first letter of each word in this string"
let newString = string.split(' ');

for (let i = 0 ; i < newString.length; i++){

   newString[i] = newString[i][0].toUpperCase() + newString[i].substring(1)    
}
console.log(newString.join(" "))  
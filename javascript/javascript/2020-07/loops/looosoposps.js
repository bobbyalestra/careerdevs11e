
//  capitalize the first letter each word

let string =  "I'm a little tea pot"
let newString = string.split(' ');
//console.log(newString)
for (let i = 0 ; i < newString.length; i++){

   newString[i] = newString[i][0].toUpperCase() + newString[i].substring(1)


    
}
console.log(newString.join(" "))  
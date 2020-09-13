
// console log only the numbers that have an odd number of odd numbers
// create a loop cycle through the number 
// make a condition if [i] % 2 != 0 =  wil make it equal odd





let num = 404159389610;
let numString = num.toString();
let numArray = [];
let newString = '';
//let numSubString = " ";


for (let i = 0; i < numString.length; i++) {
        //console.log(numString[i]);
        if (numString[i] % 2 != 0) {
             // numSubString.substring(numString[i])  

             // each one incrementing through all odds push [i] each time until all odds are present
                numArray.push(numString[i])
                newString += numString[i]
              // console.log(numArray);

               // all of them individually as a string
               console.log(numString[i]);
               console.log(newString)

        }
   
}





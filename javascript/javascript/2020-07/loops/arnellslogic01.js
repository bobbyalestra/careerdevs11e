

// create a program that creates one new string, made up of alternating string element , number element, number element
// j6a7c4k3
// write this program as in few lines of code as possible
// let string1 = "Jack and Jill ran up the hill.";
// let numbers1 = 674356577688757;
// let numberString = numbers1.toString()
// let newString = ""
//  for (let i = 0 ; i < string1.length; i++){
//     newString = string1[i] + numberString[i]
//     if ( string1.length != undefined ){



//     console.log(newString)
//      }
    
//     }
let string1 = "Jack and Jill ran up the hill.";
let numbers1 = 674356577688757;
let numberString = numbers1.toString();
let newString = "";

 for (let i = 0 ; i < string1.length; i++) {
    // console.log(string1[i]);
    // console.log(numberString[i]);

    if (numberString[i] !== undefined) {
      newString = string1[i] + numberString[i];
     
      console.log(newString);
    
    } 

     }
   
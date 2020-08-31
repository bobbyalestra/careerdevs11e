
// create a string variable to log how many times each letter is displayed in the string
//create a loop to cycle through the string
// sort the string in alphabetcal order 
// find each letter[i] and push it into its ouwn sub array 
// create another variable to increase its value each time if letter[i] = letter[i]




// let string = "Mary had a little lamb it’s fleece was white as snow, everywhere that Mary went her lamb was sure to go. Baby girl loved those lamb chopzzz";

// //string.sort()
// let stringArray = []
// let lowercase = string.toLowerCase()
// // created an array to push the string into and convert the string to an array
// let stringSplit = lowercase.split(' ')

// let stringSort = stringSplit.sort()

// // pushed the string into the array
// stringArray.push(stringSort);

// // sort throught the array and put it in alphabetical order
// //console.log(stringSort)
// console.log(stringArray)

// // crating another variable so i can store the letters into
// let lettersArr = []

// //  making a for loop so i am able to cycle throught the string i converted into an array
// // initializing i as 0 to access the first index
// // condition will be i < the length of the string array
// // post expression will increment i each time until there arent anymore letters in the array
// // i want to sort the array alphabetically to visually see how many letter there are consecutivelly
// for (let i = 0; i < stringArray.length ; i++){
    
//      //stringArr[i].sort();

//    //    console.log(stringArray[i])
// }



/////////////////////////
// able to get each letter into a sub array

let string1 = "Mary had a little lamb it’s fleece was white as snow, everywhere that Mary went her lamb was sure to go. Baby girl loved those lamb chopzzz";
let lowerCaseStr = string1.toLowerCase();
let splitString = lowerCaseStr.split('').sort();   
let space = ' ';
let comma = ",";
let period = ".";
let apost = "’";
let lettersArray = [];

let count = 0;


for (let i = 0; i < splitString.length; i++){
   count++
    if ( splitString[i] !== splitString[i - 1]){
       
    if (splitString[i] !== space )  {
        if (splitString[i] !== comma){
            if ( splitString[i] !== period){
                if (splitString[i] !== apost ){
                    splitString[i].length = count

                  
     let subArrString = []   
     subArrString.push(splitString[i], count)

      console.log(subArrString)
       // console.log(splitString)
   
    
//gives me each individual letter individually
//    console.log(splitString[i])
            }
        }
    }
    
}

}

}

numberOfLetters();
// gives me a log of all word alphabetically
//console.log(splitString);



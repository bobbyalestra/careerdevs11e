// create a for loop use psuedo code to explain the loop

// for , starts the loop
// then initialiize i, giving it a value to start at
// then give it a condition to follow, the loop will execute until conidtion is met
// the incrementor, will add from the initiliazer
// i++ really means 0 = 0 + 1
// for (let i = initializer ; condition; incrementation) {

//}


// create a loop that cycle throught the numbers
// create two variables that equal the first and second number
// add those numbers together to get the total
//then add the second and third numbers for a total and so on

// use and if statement to set a condition so that if number 1 is > number two it will select the larger sum
// i need to set a variable += highest total
// i need to make highest total an array and cylcle through that
// then highesttotal[i] < highesttotal[i + 1] 



// let groupNumbers = [ [number1, number2, numTotal], [number1, number2, numTotal], [number1, number2, numTotal], [number1, number2, numTotal] ]


let numbersArray = [358276442183, 355932218848, 3554259136937, 5602212994565, 353022164588, 639921161300, 56022354427689,51087587653044, 6333641549180, 560224431936850, 5020192861974, 676324012630737, 3530627464605, 63043786670877, 372301634211413 ];
let groupNumbers = [];
let numTotalArray = [];

// adding a 1 to the initializer instead of zero doeesnt log the first sub array twice
// adding a -1 to the conditions will prevent it from log undefined and NaN at the last log

for (let i = 1; i < numbersArray.length - 1; i++) {
    
        let number1 = numbersArray[i];
        let number2 = numbersArray[i + 1];
        let numTotal = number1 + number2;
        let highestTotal =  numTotal += numTotal + 1;
        let numTotalArray = [];
        let numTotalString = '';
       

        groupNumbers.push(number1, number2, numTotal);
        numTotalArray.push(numTotal);

        numTotalString = numTotalArray.toString()
       console.log((numTotalString) , "");

        if (highestTotal < highestTotal + 1 ){

            highestTotal = highestTotal + 1;

       
          //  console.log((highestTotal) , "");
        }

            // gives me each total
           //console.log(numTotal)

        
        
      }
    


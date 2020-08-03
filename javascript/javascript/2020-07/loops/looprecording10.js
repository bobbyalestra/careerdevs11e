

// in this exercise i will cycle through a nested array


numbersArray = [ [1234,456,876,2345], [987, 23456, 234567, 987], [765, 23456, 098, 3456987], [345678, 98765,"A String", 5678] ]

for (let i = 0 ; i < numbersArray.length; i++){
    for (let j = 0; j < numbersArray[i].length; j++){

        console.log(numbersArray[i][i])
    }
}
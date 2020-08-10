


// nextNumber = current + previous




    let numberArray = [0,1]
    for (let i = 1; i < 9; i++){

        numberArray.push(numberArray[i] + numberArray[i - 1 ] )
        
    }
    console.log(numberArray)

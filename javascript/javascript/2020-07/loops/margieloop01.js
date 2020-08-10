


let numbersArray = [6, 7, 13, 22, 101, 3]


for (let i = 0; i < numbersArray.length; i++){
    let result= [] ;
    let num1 = numbersArray[i]
    let num2 = numbersArray[i + 1]
    result.push ( num1 + num2)


    console.log(result)
}
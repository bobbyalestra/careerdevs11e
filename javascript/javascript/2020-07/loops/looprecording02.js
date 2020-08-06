
// going to cylce through the nested array and console log each number


let numberArray = [ [12312, 234324 , 34534 , 4353], [234234, 23424, 212312, 5345], [234324, 4535, 54645 ,123] ];



for (let i = 0; i < numberArray.length; i++){
    for (let j = 0; j <numberArray[i].length; j++){

        console.log(numberArray[i][j]);
    }

}
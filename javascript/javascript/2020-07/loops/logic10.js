

let arr = [ [101, 102, 103], [201, 202, 203, 204,223, 233, 205, 206], [301, 302, 303, 333] ];


for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++){

       //console.log("the arrays index :" ,[i], "The sub-arrays index value" ,arr[i][j])

        let numberAsString = arr[i][j].toString().indexOf('3') > -1 ;
        if (numberAsString === '3'){
            
        }
console.log("Element " + arr[i][j], "contains a " + 3,  numberAsString)
    }
}
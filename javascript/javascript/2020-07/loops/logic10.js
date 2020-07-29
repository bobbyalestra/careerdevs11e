

let arr = [ [101, 102, 103], [201, 202, 203, 204,223, 233, 205, 206], [301, 302, 303, 333] ];
let numArrNew = [];

for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++){

        let numberAsString = arr[i][j].toString().indexOf('3') > -1 ;
        if (numberAsString === true){
            numArrNew.push(arr[i][j])         
        }
    }
}
console.log( numArrNew.toString())
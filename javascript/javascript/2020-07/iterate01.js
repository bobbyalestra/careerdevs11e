
function largestOfFour(arr) {
    
    for (let i = 0; i < arr.length; i++) {
      let largestNumber = arr[i][0];
      for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > largestNumber) {
          largestNumber = arr[i][j];
        }
      }
  console.log(largestNumber)
     
    }
  }
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  largestOfFour([[1, 2, 3, 4, 5], [7, 9, 11, 12, 4], [21, 22, 23, 24, 25],[1001,2323,3453,6785,43543534]])
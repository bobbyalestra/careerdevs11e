
let arr = [[1, 2, 3, 4, 5], [7, 9, 11, 12, 4], [21, 22, 23, 24, 25], ];




function largestOfFour(arr) {
    var results = [];
    for (var i = 0; n < arr.length; i++) {
      var largestNumber = arr[i][0];
      for (var j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > largestNumber) {
          largestNumber = arr[i][j];
        }
      }
      console.log(largestNumber)
      results[i] = largestNumber;
      console.log(results)
    }
  
    console.log(results)
    return results;
  }
 
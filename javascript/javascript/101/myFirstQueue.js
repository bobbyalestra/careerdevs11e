

  function nextInLine(arr, item) {
    // Your code here
    arr.push(item);
    var removed = arr.shift();
    return removed; // Change this line
  }
  
  // Setup.
  var testArr = [1,2,3,4,5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));
  

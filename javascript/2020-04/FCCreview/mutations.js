
// create a function(give it a callback)
// create two variables 
//and have one equal to the callbacks parameters with the first index to all lower case
//have the second elemtent equal the call back of index zero to all lower case
// for loop to cycle through rhe length of element one
// if element1 has and element to dont have a matching index return false
// if true return the new array


function mutation(arr) {
    let element1 = arr[1].toLowerCase();
    let element2 = arr[0].toLowerCase();
    for (let i = 0; i < element1.length; i++) {
      if (element2.indexOf(element1[i]) < 0) return false;
      console.log(arr)
    }
    return true;
    
  }
  mutation(["hello", "hey"]);
  


// create a function wth a call back to set how many times you want it to run
// set the initializer to a 'var' product equal to 1
// make the condition the call back > than zero to find an Nth number
// the post expression should decrement the number call back by 1 so it can meet the condition
// well the condition is met i want to take the product to stay at 1 so the number callback will mulitply itself times itself until the count is down to zero
// log the outcome
// and call the function with the call back of the number you want factoralized

function factorialize(number) {
    for (var product = 1; number > 0; number--) {
      product *= number;
    }

    console.log(product)
  }
  
  factorialize(0);
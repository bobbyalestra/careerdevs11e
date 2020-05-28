// intro to just else statements

function testElse(val) {
    let result = "";
    
    if (val >= 6 ){
      result = `number ${val}is bigger than 5`;
    }else                       //no other if statement or condition that needs to be met. just add the result and return result.
      result = "the number is 5 or Smaller";
    return result;
  }
  
  testElse(3); //changing the number will change the result
  console.log(testElse());


  // intro to else if statements


  function testElseIf(num) {
    
     

    if (num > 10) {
      return "number is bigger than 10";
    } else if (num < 5) { // adding an else if statement gives it an additional condition.
      return "Smaller than 5";
    } else{ // always end in else 
      return "somewhere between 5 and 10";
  }
  }
  testElseIf(3); //will change log
  console.log(testElseIf())

  // my examples other than code camp. 

  function testElseif(about){
        if (about < 6 ){
            return "Yay"
        }   else 
      return "nooooo"
      }
  testElseif(3); // this will change the return line 
console.log(testElseif()); 


// another example 
 
function testOtherElseif(score){
  if (score < 90) {
    return "Sorry, but you will be here forever"
  
  } else 
  return "Cradulations Bobby, You are an allstar student!"
}
  
 testOtherElseif(99);
  
 console.log (testOtherElseif());


 //more examples of functions
  // code camp example and explanations
 3 == '3'  // returns true because JavaScript performs type conversion from string to number
3 === '3' // returns false because the types are different and type conversion is not performed

 
function testNotEqual(val) {
  if (val != 99) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testNotEqual(10);
console.log(testNotEqual())

//more practice

function newFun(a, b) {
  

  if (newFun || a, b ){
    return true;
  }
 return false ;
}

  console.log(newFun());

 
let a =6;
let b =6 ;

function newTester(a,b){
    if ( newTester ||a, b ){
      return false;
    }
   return true ;
  }

  
    console.log(newTester());
  
  
  
    

      
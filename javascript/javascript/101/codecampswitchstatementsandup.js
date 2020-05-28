var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  

// the == operator allows you to compare the parameters?
if (strokes == 1) {
    return "Hole-in-one!";
}else if (strokes <= par -2 ){
  return "Eagle"
}else if (strokes == par - 1){
  return "Birdie"
}else if (strokes == par){
    return "Par"
}else if (strokes == par + 1){
  return "Bogey"
}else if (strokes == par + 2){
  return "Double Bogey"
}else {
    return "Go Home!"

}
}
  

  


golfScore(4,1 );
console.log(golfScore())

        // switch statement
        // to use switch statements you use the parameters that are inside that function you want to switch
  function caseInSwitch(val) {
        var answer = "";
        // Only change code below this line
      
    switch (val){  //you are switching the value in the first "case" or exapample so it will display Alpha
        case 1:  
        return ("alpha");
     case 2:  
        return("beta");
        break;
    case 3:  
        return("gamma");
        break;
      case 4: 
        return("delta");
        break;
      }
      {return answer;
      }
      caseInSwitch(1);
      }


      // this is the code camp of how to "return early pattern for functions"
function abTest(a, b) {
    // 1 declare the function and give it parameter
    // 2 make the if statement you want to test against the conditions
    //  example ( a < 0 || b < 0) means that parameter a is less and zero and so is parameter b
   // 3 make a return statement for a false statement
  if (a < 0|| b < 0)
  return undefined
  
    
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  // call the function again to execute the command . Changing the aruments below we change the test of the function.
  abTest(2,-2);
  
  
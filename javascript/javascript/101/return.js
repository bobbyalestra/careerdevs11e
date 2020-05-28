
function doorDash(restaurant, orders, address){
    if (restaurant == 'Plant City') {
        return `Your order of ${orders} will arrive at ${address}`;

    }else if (restaurant == ' Capriccio'){

return `Your order of ${orders} will arrive at ${address}`;
    
}else if (restaurant == 'Capital Grille')
{ 
return `Your order of ${orders} will arrive at ${address}`;
} 
}
console.log(doorDash('Plant City', 'Filet Mignon Salad', '100 Niantic Ave'));




// this function will display the name and my address 

function newLocation(name, address, state ){
    if (name == 'Bobby'){ // start with if statement the "()" to set arguement which equals Bobby.tement what to do. start with "return" , then the back tick " ` ` ", then you can start with the template literals.
   // no quotes needed in the back ticks just the s
    // then you have to "call the function" if staewtup for the template literals. "${insert parameter here}""
   
    return `This package is for ${name} who lives at ${address} ${state}`;


    }
}

console.log(newLocation('Bobby', '27 N. Fal HWY', 'MA' ));


//     name of func...below are called paramiters
function aboutMe( name, age, gender, like, dislike){

 if (name == 'Bobby'){ // // start with if statement the "()" to set arguement which equals Bobby.

 // then you have to "call the function" if statement what to do. start with "return" , then the back tick " ` ` ", then you can start with the template literals.
// no quotes needed in the back ticks just the setup for the template literals. "${insert parameter here}".
     return `Hi my name is ${name} .  I am a ${age} ${gender} who likes to ${like} but dislikes ${dislike} `
 }
}    //                 these below are called arguements
console.log(aboutMe('Bobby', '27 years old', 'male', 'coding', 'sleep'));


// more practice with returns and template literals

function theNews(corona, president, school, homework){
    if (corona == ' again more information about the COVID-19') 
        return `Today in the news, the first topic was ${corona} , . Also ${president} was also in the new per usual, luckily theres ${school} and ${homework}`
    } 

console.log(theNews(' again more information about COVID-19', ' the President, Donald Trump', 'CareerDevs', 'ifStatement and returns'  ));


// more practice with returns and template literals

function theNews(corona, president, school, homework){
    if (corona == ' again more information about the COVID-19') {
        // the difference bet this one and the one above it, is that i tried to have no string text in the return and just console.log it.
      }  return ` ${corona}  ${president}  ${school} ${homework}`
    } 
 //trying to us only templatle literals in the return
console.log(theNews('Today in the news, the first topic was again mroe information about COVID-19', ' . Also the President, Donald Trump was also in the new per usual', 'luckily i have CareerDevs and that keeps my mind focused on other important things', ' and we also have homework which was to practice ifStatement and returns and im adding template literals'  ));




// console logs all the names that have a letter B in them in lowercase and alphatbetical order

let names = ['Bobby', 'Brittany',  'Brett', "Bibble", 'John', "Arnell", "will"].sort();


for (let i = 0; i < names.length; i++){
    for ( let j = 0; j <names[i].length; j++){
  
        let stringWithOutB = [];
        let namesToString = names[i].toString().toLowerCase()
        let indexB = namesToString.indexOf('b') > -1;
            if ( indexB === true){
                stringWithOutB.push(namesToString)
                console.log(stringWithOutB)
            }
    }
}




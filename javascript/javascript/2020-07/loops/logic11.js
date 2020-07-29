

let names = ['Bobby', 'Brittany',  'Brett', "Bibble", 'John', "Arnell", "will"].sort();


for (let i = 0; i < names.length; i++){
    for ( let j = 0; j <names[i].length; j++){

    let namesToString = names[i].toString().toLowerCase()

     let indexB = namesToString.indexOf('b') > -1;

console.log(` The letter ${namesToString[j]} in ${namesToString}, contains a B ${indexB} `);

    }
}




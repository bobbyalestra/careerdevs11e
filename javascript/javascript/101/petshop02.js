

let typesOfPets = ["Dogs", "cats", 'Lions','Tigers', 'Bears'];
let costOfPets = [7500, 700, 12000, 1100, 15000 ];
let budget = 8000;
    for (let i = 0; i < typesOfPets.length; i++) 
// while "i" begins at 0, .length counts the number of ELEMENTS (starting at number 1). 
     if (costOfPets[i] < budget){
         console.log(`${typesOfPets[i]} are ${budget - costOfPets[i]} out of your range`)
     }


     else if (costOfPets[i] > budget){
         console.log(`${typesOfPets[i]}  out of your budget by ${costOfPets[i] - budget} `)
     }
       


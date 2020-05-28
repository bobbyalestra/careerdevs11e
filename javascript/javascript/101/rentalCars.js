let carNames =["Ford", "chevy", "Honda", "Lambo", "Ferrari" ];
let carPrices = [35, 45, 30, 160, 120 ]
let carRented = [23, 54, 21, 2, 5];

for ( i = 0; i < carNames.length; i++){
    
    console.log(`Today we sold ${ carNames[i]} ${carPrices[i]} and rented ${carRented[i]}`);
}

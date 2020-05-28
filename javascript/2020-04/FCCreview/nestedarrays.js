

let candies =["Fruity", "Chocolate", "Peanut Butter"];
let candyTypes =[['Fruit Rollups', 'Life Savers', 'Skittles'], ['Herseys', 'Cadbury', 'Milky Way'], ['Reeses', 'Butterfinger', 'Mr. Good Bar']];

for (i = 0; i < candies.length; i++) {
    for (j = 0; j < candyTypes[i].length; j++) {
        console.log(`  ${candies[i]} :  ${candyTypes[i][j]}  `)
    
    }

}


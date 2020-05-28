
// first array logs 7 ,4 ,7 five undefined?

let typeOfFriends = ["Childhood", "Work", "School"];
let myFriends = [["Matty J", "Andy", "Erika" ], ["Drew", "Michelle", "Maddie"], ["Arneezy", "Chelsea", "Will I Am"]];
let numOfYears = [[30,28, 26],  [2,1,3], [1,1,1]]

for (i = 0; i < typeOfFriends.length; i++){
    for (j = 0; j < myFriends[i].length; j++)
console.log( `${typeOfFriends[i]}: ${myFriends[i][j]} ${numOfYears[i][j]} `)
}




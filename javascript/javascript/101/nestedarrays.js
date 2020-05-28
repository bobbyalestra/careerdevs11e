


let departments = ['sales', 'technology', 'managment'];
let employee = [['Arnell', 'Bobby', 'Will'], ['Margie', 'Gabby', 'Chelsea'], ['Jamie', 'Joe']]
  // will console log the first array in the array of arrays
    for(let i = 0; i < departments.length; i++ ){
        for (let j = 0; j < employee[i].length; j++ )
     //1 if (j == 1){ first name of each department
  // 2 if (i == 2){
   console.log(`${departments[i]}: ${employee[i][j]}`)
    }
//1}
   //2 }
  // above is the right way 




    console.log((employee[0]) , departments[0])
    console.log((employee[1]) , departments[1])
    console.log((employee[2]) , departments[2])

// 2
    console.log((employee[0][1]) , departments[0])
    console.log((employee[1][1]) , departments[1])
    console.log((employee[2][1]) , departments[2])
// 3
    console.log((employee[2][0][0]) , departments[2])
    console.log((employee[2][1][0]) , departments[2])
    
   
    

        //extra credit?
    console.log((employee[2][0][4]), departments[2]) // logs the last letter of the last array of arrays 
    console.log((employee[2][1][2]), departments[2]) // logs the last  letter of the second variable in the last array
    


    // adding th [0] will choose first array. adding the second [0] will choose first element in array third[0] selects first character in element.


    //1 pring all all employee names in each deparetmemnt
//2 print out just the second employee in each department
// 3 print out the first letter of each employee in the last department.

//4 print out the last letter of each employee
// 5 use for loops
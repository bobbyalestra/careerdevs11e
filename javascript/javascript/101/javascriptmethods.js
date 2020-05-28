
let allStudents = ["Bobby", "Joe","Chelsea", "Will", "Jamie", "Steven", "Jean"];
let theTeacher = ["Arnell"];



allStudents.shift(); //removes for item of array
console.log(allStudents);
allStudents.pop(); //removes last item of array.

console.log(allStudents);

allStudents.unshift("Arneezy"); // adds "Arneezy" to the array
console.log(allStudents);

allStudents.push("Matt");
console.log(allStudents);// adds "Matt" to the array but dont know why two columns..

let someClassmates = allStudents.slice(2);
console.log(someClassmates); //removes first two elements from allStudents and adds them to the new variable someClassmates





let theBoys = ["Bobby", "Joe", "Will", "Jamie"];
let onlyGirl = ["Chelsea"];
    let theClass = theBoys.concat(onlyGirl);

console.log(theClass); // nests both arrays into a completely new array 


console.log(...allStudents); // "the spread or three ..." take the elements out of the array, meaning it only going to show the elements not the indexes.

const findStudent = theBoys.includes("Bobby");
console.log(findStudent); // the .includes() searches for x and will return true if its there and false if it is not

// more methods




  var student = {                 // object name
    firstName:"Bobby",           // list of properties and values
    lastName:"Alestra",
        age : 21 ,
        height:170,
        fullName : function() {     // object function
           return this.firstName + " " + this.lastName;
        }
    }; 
    student.age = 19;           // setting value

    name = student.fullName();  // call object function

    console.log(student) //logs all the the data found in the student variable






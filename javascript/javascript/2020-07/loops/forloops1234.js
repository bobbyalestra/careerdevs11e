

// create a for loop that returns the index of the boolean value

let array = [3, "Hello", true, 13, "CareerDevs", "Arneezy"]


for (let  i= 0; i < array.length; i++){
    
    if (typeof(array[i]) == "boolean"){
        console.log(i)
    }

}
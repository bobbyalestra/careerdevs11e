let businessName = 'Feliciafruit';
let businessSlongan = "Bye Felicia";


let fruits = ['Apples', 'Oranges', 'Peaches'];
let fruitCosts = [1.10, .5, .75];
let fruitSales = [100, 50, 25];

//there are two ways to describe the contents of an array
// 1. index = the first item, however the number begins at "0" 
// we use the index number to refeerence the items in an array computationally.
// 2. elements = the first item, where the number begins with 1. Element 1 where as index is zero

//output all of the elements, entries in the fruits array.
console.log(fruits)


//output just the second element of the array

console.log(fruits[1])
console.log(`${fruits[1]} cost ${fruitCosts[1]} each. Today we sold ${fruitSales[1]} ${fruits[1]}. For a  total of ${fruitCosts[1] * fruitSales[1]} in sales.`)

// homework console log the other two fruit sales 
// temeperate literals check out for loops code camp

console.log(`${fruits[0]} cost ${fruitCosts[0]} each. Today we sold ${fruitSales[0]} ${fruits[0]}. For a  total of ${fruitCosts[0] * fruitSales[0]} in sales.`)

console.log(`${fruits[1]} cost ${fruitCosts[1]} each. Today we sold ${fruitSales[1]} ${fruits[1]}. For a  total of ${fruitCosts[1] * fruitSales[1]} in sales.`)

console.log(`${fruits[2]} cost ${fruitCosts[2]} each. Today we sold ${fruitSales[2]} ${fruits[2]}. For a  total of ${fruitCosts[2] * fruitSales[2]} in sales.`)
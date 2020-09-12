

let letters = 'AdffsSAkmvc';
let lowercaseLetters = letters.toLowerCase();
let sortLetters = lowercaseLetters.split('').sort();
let count = 1
let letterArr = [ ];

for (let i = 0; i < sortLetters.length ; i++) {
    // cylce through the string to get each letter
    // console.log(sortLetters);


    // make a condition that if the first letter match the next letter it will push it to the array
    // and if it does match add 1 to the count
    // 
    if (sortLetters[i] == sortLetters[i + 1]){
        letterArr.push(sortLetters[i]);
        count + 1;
        console.log(letterArr, count);

    // make a condition that states if the first letter doesnt match the second letter it will log the letter without a pair
    } else if ( sortLetters[i] !== sortLetters[i + 1]) {
            console.log(sortLetters[i])
        }
    }

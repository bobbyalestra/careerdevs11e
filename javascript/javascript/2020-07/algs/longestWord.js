
// first create the function with a call back
// set a local variable words and have it use the split function, and have it split the string each time it encounters a space " " so it will only take the word
//make another local variable and set it to zero to start a Maximum length
//create a loop with an i equalling 0
// with he condition set to the length of the word variable
// and incremement it by 1 each time the condtion is met
//create a seperate condition so if the index of the word variable is greater than the length of the Max Word it will make the Max Word equal to the current index length of the current word
// log the maxWordlenfth variable
// call the function and set the callback to a word you want to find the largest length of

function findLongestWordLength(string) {
    let words = string.split(' ');
    let maxWordLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxWordLength) {
        maxWordLength = words[i].length;
      }
    }
  
    console.log(maxWordLength);
  }

  findLongestWordLength('try to find the longest word in the string so that Arneezy will be happy')
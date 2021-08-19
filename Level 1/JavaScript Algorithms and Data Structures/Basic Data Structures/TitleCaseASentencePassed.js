/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

function titleCase(str) {
let lowerCaseString = str.toLowerCase();

let splitString = lowerCaseString.split(' ');

let titleCaseArray = splitString.map( (word) => {
return word[0].toUpperCase() + word.slice(1);
});

let titleCaseSentence = titleCaseArray.join(' ')

    return titleCaseSentence;
  }
  
  titleCase("I'm a little tea pot");
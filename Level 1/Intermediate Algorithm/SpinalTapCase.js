/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {

let newStr = '';

for (let i = 0; i < str.length; i++) {
    // store the current character and next character in variables
    const char = str[i]
    const nextChar = str[i + 1]

    // non-letter characters can be converted to dash and added
    if (char === ' ' || char === '_' || char === '-') {
      newStr += '-'
      // continue means stop here and go to the next item
      continue
    }

    // handle uppercase chars
    if (char.toUpperCase() === char) {
      // lowercase it and add to str
      newStr += char.toLowerCase()
      continue
    }

    // char is lowercase can add it at this point
    newStr += char

    // check if next char is a word
    if (nextChar
        && nextChar !== '-'
        && nextChar !== ' '
        && nextChar !== '_'
        && nextChar.toUpperCase() === nextChar)
    {
      newStr += '-' + nextChar.toLowerCase()
      i++
    }
  }

  // return the newly built spinal-cased string
  return newStr
}

spinalCase('This Is Spinal Tap');
console.log(spinalCase('This Is Spinal Tap'));

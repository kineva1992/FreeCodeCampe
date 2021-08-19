/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  const vovelStr = "aeiou";
  if(vovelStr.includes(str[0])) return str + "way";

  else
  {
    for(let item in str)
    {
      if (vovelStr.includes(str[item])) {
                return str.slice(item, str.length) + str.slice(0, item) + "ay";
            }
    }
  }
  return str + "ay";
}

translatePigLatin("consonant");
console.log(translatePigLatin("consonant"));

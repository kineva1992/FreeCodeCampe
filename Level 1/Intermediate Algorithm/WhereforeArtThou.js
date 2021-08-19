/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), 
because it contains the name and its value, that was passed on as the second argument.
*/

function whatIsInAName(collection, source) {
  let found = []

  // search through collection for objects that match any in the source array
  for (let i = 0; i < collection.length; i++) {
    // current object to test if its a match to our source
    const currentObj = collection[i]

    // if any of the keys are not in the collection object
    // we will change this to false
    let match = true

    // loop over the source object's keys
    for (let key in source) {
      // must have the same keys and same values
      if (currentObj[key] !== source[key]) {
        // does not have key or same value
        // set match to false and exit this loop immediately
        match = false
        continue;
      }
    }

    // add found objects to found variable
    if (match) found.push(currentObj)
  }

  // return array of found objects or empty array
  return found
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

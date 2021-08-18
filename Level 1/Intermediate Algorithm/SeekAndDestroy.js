/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
*/
function destroyer(arr) {
  const destroyerArr = Object.values(arguments).slice(1);

  return arr.filter(x => !destroyerArr.find(y => y === x));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

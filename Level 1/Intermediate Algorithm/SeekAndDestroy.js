function destroyer(arr) {
  const destroyerArr = Object.values(arguments).slice(1);

  return arr.filter(x => !destroyerArr.find(y => y === x));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

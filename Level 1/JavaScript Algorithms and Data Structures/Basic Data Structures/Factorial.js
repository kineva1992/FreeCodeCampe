function factorialize(num) {

    for(var product = 1; num > 0; num --)
    {
        product *= num;
    }

    return product;
  }

  function factorialize(num) {
    if (num === 0) {
      return 1;
    }
    return num * factorialize(num - 1);
  }

  function factorialize(num, factorial = 1) {
    if (num == 0) {
      return factorial;
    } else {
      return factorialize(num - 1, factorial * num);
    }
  }
  
  function factorialize(num, factorial = 1) {
    return num < 0 ? 1 : (
      new Array(num)
        .fill(undefined)
        .reduce((product, val, index) => product * (index + 1), 1)
    );
  }  
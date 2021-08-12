function largestOfFour(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) 
    {      
        let lastNumber = arr[i][0];
        for(let j = 0; j < arrp[i].length; j++)
        {
            if(arr[i][j] > lastNumber)
            {
                lastNumber[i][j];
            }
        }   
        result[i] = lastNumber;
    }
    return result;
  }
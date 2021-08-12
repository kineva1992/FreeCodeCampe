function repeatStringNumTimes(str, num) {
    var accumulateStr = "";

    while(num > 0)
    {
        accumulateStr += str;
        num--;
    }
    return accumulateStr;
  }
  
  function repeatStringNumTimes(str, num) {
    
    if(num < 1)
        return "";
    
    else 
    return str + repeatStringNumTimes(str, num - 1);
  }

  function repeatStringNumTimes(str, num) {
    return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
  }
/* 
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/
function booWho(bool) {
    if(bool === true || bool === false)
    {
        return true;
    }
    else return false;
  }
  
  booWho(null);

  function booWho(bool) {
    if(typeof bool === 'boolean')
    {
        return true;
    }
    else return false;
  }
  
  function booWho(bool) {
    return typeof bool === 'boolean' ? true : false
  }
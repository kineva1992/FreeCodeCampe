/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
 */

//ver 1
function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
      } else {
        return str;
      }
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);
// ver 2
  function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str;
  }
/* Given a number n (represented as a binary number string), convert n to base 10. */

function binaryToDecimal (n) {
  var result = 0;
  var multiplier = 1;
  //iterate backwards starting at the ones place
  for(var i = n.length-1; i >= 0; i--) {
    //check for a 1 and add the multiplier to the result
    if(n[i] === '1') {
      result += multiplier;
    }
    //change the multiplier to represent the next binary index
    multiplier *= 2;
  }
  
  return result;
}


/*  An input of '111' should result in an output of 7 etc. */
/* Given two strings are arguments, write a function that returns all the common characters that the two strings hold.
  Do not include spaces. */ 

function commonCharacters(a, b) {
  var cache = {};
  var common = '';
  
  //loop through the first string to build a set of possible common characters in the cache
  for(var i = 0; i < a.length; i++) {
    if(!cache[a[i]] && a[i] !== ' ') {
      cache[a[i]] = 1;
    }
  }

  //now that we've established possible common characters, loop through the second to find common chars
  for(var j = 0; j < b.length; j++) {
    if(cache[b[j]]) {
      common += b[j];
      //change the value of the letter to make sure we don't have duplicates in our returned string
      cache[b[j]] = 0;
    }
  }

  return common;
}
/* Challenge: Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value. */

function arrayception (array, counter, deepest) {
  //counter measures how many arrays deep we are
  var counter = counter || 0;
  //deepest tracks the deepest we've ever gone
  var deepest = deepest || 0;
  //each time this function is called, we're one level deeper. For instance, the first time arrayception is called, we're at depth level 1
  counter++;
  for(var i = 0; i < array.length; i++) {
    //check if index is an array
    if(Array.isArray(array[i])) {
      //if it is, recursively call the function
      deepest = arrayception(array[i], counter, deepest)
    } else if (array[i] !== undefined && counter > deepest) {
      //if this is the deepest we've gone, set deepest to the current counter
      deepest = counter;
    }
  }
  return deepest;
}
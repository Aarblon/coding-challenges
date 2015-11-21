/* Given a number n >= 1, write a function that returns the nth number in the look-and-say sequence as a string. */

function lookAndSay (n) {
  var count = function(current, output) {
    if(current === n) {
      return output;
    }
    ouput = output || '';
    var counter = 0;
    var num;
    var result = '';
    for(var i = 0; i <= output.length; i++) {
      if(num !== output[i] && num !== undefined) {
        result += counter + num;
        num = output[i]
        counter = 1;
      } else {
        num = output[i];
        counter++;
      }
    }
    return count(current+1, result)
  }
  return count(1, '1');
}

// assert lookAndSay(1) === '1'
// assert lookAndSay(2) === '11'
// assert lookAndSay(3) === '21'
// assert lookAndSay(4) === '1211'
// assert lookAndSay(5) === '111221'
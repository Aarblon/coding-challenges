//Given a string, return true if it contains all balanced parenthesis (), curly-brackets {}, and square-brackets []
function isBalanced (str) {
  var left = '';
  var brackets = {
    '[': ']',
    '(': ')',
    '{': '}'
  };
  var closing = [')', '}', ']'];
  for(var i = 0; i < str.length; i++) {
    if (closing.indexOf(str[i]) > -1 && left.length === 0) {
      left += 'false';
      break;
    }
    if(brackets.hasOwnProperty(str[i])) {
      left += str[i];
    } else if (closing.indexOf(str[i]) > -1 && str[i] !== brackets[left[left.length-1]]) {
      break;
    } else if (closing.indexOf(str[i]) > -1 && str[i] === brackets[left[left.length-1]]) {
      left = left.slice(0, left.length-1);
    }
  }
  
  if(left.length > 0) {
    return false;
  } else {
    return true;
  }
}
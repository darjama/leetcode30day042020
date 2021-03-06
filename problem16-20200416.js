/**
 * Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:
 * 
 * Any left parenthesis '(' must have a corresponding right parenthesis ')'.
 * Any right parenthesis ')' must have a corresponding left parenthesis '('.
 * Left parenthesis '(' must go before the corresponding right parenthesis ')'.
 * '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
 * An empty string is also valid.
**/

var checkValidString = function(s) {
    var charMap = {
        '(': [],
        '*': []
    };
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ')') {
            if (charMap['('].length) {
             charMap['('].pop();
            } else if (charMap['*'].length) {
             charMap['*'].pop();
            } else {
                return false;
            }
        } else {
            charMap[s[i]].push(i);
        }
    }
    while (charMap['('].length){
        if (!charMap['*'].length) {
            return false;
        } else if (charMap['('][charMap['('].length -1] > charMap['*'][charMap['*'].length -1] ) {
            return false;
        } else {
            charMap['*'].pop();
            charMap['('].pop();
        }        
    }    
    return true; 
};

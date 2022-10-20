/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x.toString().split("").reverse().join() === x
};


//Follow up: Could you solve it without converting the integer to a string?
var isPalindrome = function(x) {
    if(x < 0) return false;
    let reversed  = 0;
     for(let i = x ; i >= 1; i = Math.floor(i/10)) reversed = reversed10 + i%10;
     return reversed === x ;

};
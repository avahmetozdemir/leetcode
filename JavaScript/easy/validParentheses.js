/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const hashMap = {"(" : ")", "[" : "]", "{" : "}"}
    const stack  = []

    for(let char of s) {
        if(hashMap[char]){
            stack.push(hashMap[char])
        }else if(stack.length > 0 && stack[stack.length -1] == char) {
            stack.pop()
        }else {
            return false
        }

    }
    return stack.length === 0
};
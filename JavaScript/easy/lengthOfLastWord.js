/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function(s) {
    const arr = s.trim().split(" ")
    const n = arr.length

    return arr[n-1].length
}; // Space Comp: Using trim() caused to create a new arr and make our complexity : O(N)

// Try better by finding a way for O(1)
var lengthOfLastWord = function(s) {
    let lastWordCount = 0

    for(let i = s.length-1; i >=0; i--){
        if( s[i] !== " "){
            for(let j = i; j >= 0; j--){
                if(s[j] !== " "){
                    lastWordCount++
                }else {
                    return lastWordCount
                }
            }
        return lastWordCount;
        }
    }
};
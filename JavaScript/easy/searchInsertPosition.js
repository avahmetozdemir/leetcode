/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 //--First Solution
var searchInsert = function(nums, target) {
    for(let i  = 0; i < nums.length; i++) {
        if(nums[i] >= target){
            return i
        }
    }
    return nums.length;
};

//--Second Solution

var searchInsert = function(nums, target) {
    let left = 0
    let right = nums.length -1
    if(target < nums[left]) return 0;
    if(target > nums[right]) return nums.length;

    while(left <= right){
        let middle = Math.floor((left+right)/ 2);
        if(target=== nums[middle]){
            return middle
        }else if(target < nums[middle]){
            right = middle -1;
        }else {
            left = middle +1
        }
    }
    return left;


};

// Time Complexity : O(n2) Space Complexity: O(1)
// var containsDuplicate = function(nums) {
    
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = i+1 ; j< nums.length; j++){
//             if(nums[i]=== nums[j]) return true
//         }
        
//     }
//     return false
// };
  
//-------------------------------------------------------------------------------


// Time Complexity : O(nlogn) Space Complexity: O(1)

// var containsDuplicate = function(nums) {
    
//     const sorted= nums.sort((a,b)=>a - b)
//     for(let i = 0; i < sorted.length; i++) {
//        if(sorted[i]=== sorted[i+1]) return true
//     }
//     return false
// };

//-------------------------------------------------------------------------------

// var containsDuplicate = function(nums) {
//     const set =  new Set([...nums])
    
//     return set.size !== nums.length
// };

//-------------------------------------------------------------------------------

var containsDuplicate = function (nums) {
	const hashTable = new Map();

	for (let i = 0; i < nums.length; i++) {
		if (hashTable.has(nums[i])) return true;
		else hashTable.set(nums[i], true);
	}
	return false;
};
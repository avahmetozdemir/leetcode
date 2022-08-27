// const twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++ ){
//         for(let j = 1; j < nums.length; j++ ) {
//             if(nums[i]+ nums[j] === target && i !== j) {
//                 return [i,j]
//             }
//         }
//     }
// };


const twoSum = function(nums, target) {
    const prevMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if (prevMap.has(diff)) {
            return [prevMap.get(diff), i]
        }

        prevMap.set(nums[i], i)
    }
};
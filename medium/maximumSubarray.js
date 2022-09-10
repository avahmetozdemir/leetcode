//-----------------Brute force solution
// var maxSubArray = function (nums) {
//   let maxSum = -Infinity;
//   let currSum;
//   for (let i = 0; i < nums.length; i++) {
//     currSum = 0;
//     for (let j = i; j < nums.length; j++) {
//       currSum += nums[j];
//       if (maxSum < currSum) {
//         maxSum = currSum;
//       }
//     }
//   }
//   return maxSum;
// };

//Linear Solution
var maxSubArray = function (nums) {
  let solution = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    solution = Math.max(nums[i], solution);
  }
  return solution;
};

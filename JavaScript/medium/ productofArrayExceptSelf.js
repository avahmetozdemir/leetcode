
//Time Complexity : O(n) Space Cmplexity : O(n)
// var productExceptSelf = function(nums) {   

//     const L = nums.length
    
//     let left_products = []
//     let right_products = []
    

    
//     let output_arr = []
    
//     left_products[0] = 1

//     right_products[L - 1] = 1
    
    
//     for (let i = 1; i< L; i++){
//         left_products[i] = nums[i-1] * left_products[i-1]
//     }
    
//     for(let i = L-2; i>=0; i--){
//         right_products[i]=nums[i+1] * right_products[i+1]
//     }
    
//     for(let i = 0; i<L;i++){
//         output_arr[i] = left_products[i] * right_products[i]
//     }
//     return output_arr
// };

//-------------------------------------------------------------------------------

//Time Complexity : O(n) Space Cmplexity : O(1)

function productExceptSelf(nums) {

    let output = new Array(nums.length).fill(nums[0])
    let cacheVar= nums[nums.length-1]
    
    for(let i =1 ; i<nums.length; i++){
        output[i] = output[i-1]*nums[i]
    }
     
     output[nums.length-1] = output[output.length-2]
     for(let j = nums.length-2; j>0; j--){
         output[j] = output[j-1] * cacheVar
         cacheVar = cacheVar* nums[j]
     }
     
     output[0] = cacheVar
     return output
 };
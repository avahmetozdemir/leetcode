class Solution {
    public int searchInsert(int[] nums, int target) {
        int left  = 0;
        int right = nums.length -1 ;

        while(left <= right){
            int midIndex = (left+right)/2;
            if(nums[midIndex] == target) {
                return midIndex;
            }else if(nums[midIndex] > target){
                right = midIndex-1;
            }else {
                left = midIndex + 1;
            }
        }

        return left;
    }
}
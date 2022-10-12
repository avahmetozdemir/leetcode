class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int first = m -1;
        int second = n -1;
        int i = m+n-1;

        while(first >= 0 && second >= 0){
            if(nums1[first] > nums2[second]){
                nums1[i] = nums1[first];
                first --;
                i--;
            }else{
                nums1[i]=nums2[second];
                second--;
                i--;
            }
        }

        while(second >= 0){
            nums1[i] = nums2[second];
            second--;
            i--;
        }

    }
}
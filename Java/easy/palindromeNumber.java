class Solution{
    public boolean isPalindrome(int x){
        if(x < 0 || (x % 10 == 0 && x != 0)){
            return false;
        }

        int reversed = 0;

        while (x > reversed){
            r = r * 10 + x % 10;
            x = x/10;
        }

        return r == x || reversed/10 = x;
    }
}
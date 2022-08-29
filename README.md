# LeetCode

## Two Sum

### Description

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

### Solution

We first try to use two for-loop for the solution and have O(n2) Time Complexity. This demonstrates us that the solution with two for loop is not effecient.
The second try is to use Hash Table. By using an auxiliary map of value:index, we solve the problem in O(n).We are checking that difference between target and the value in the array that exists in the map and if there is we return index of value in the array and the index. 

## Best Time to Buy and Sell Stock

### Description

You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

### Solution

We first try to use two for-loop for the solution and have O(n²) Time Complexity and O(1) Space Complexity because only two variable were created. This demonstrates us that the solution with two for loop is not effecient. We also pass most of the tests but with a bigger input, the code is getting slow and show us 'Time Limit Exceeded' error. 
Now we are looking for a better approach using One For Loop. Instead of having to recalculate all the values with each other, we can instead keep track of the minimum price and subtract it from the selling prices. Now we see that Time Complexity is O(n) and Space Complexity O(1). 
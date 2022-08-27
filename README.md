# leetcode

## Two Sum

### Description

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

### Solution

We first try to use two for-loop for the solution and have O(n2) Time Complexity. This demonstrates us that the solution with two for loop is not effecient.
The second try is to use Hash Table. By using an auxiliary map of value:index, we solve the problem in O(n).We are checking that difference between target and the value in the array that exists in the map and if there is we return index of value in the array and the index. 
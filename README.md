# LeetCode

## Two Sum

### Description

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

### Solution

We first try to use two for-loop for the solution and have O(n2) Time Complexity. This demonstrates us that the solution with two for loop is not effecient.
The second try is to use Hash Table. By using an auxiliary map of value:index, we solve the problem in O(n).We are checking that difference between target and the value in the array that exists in the map and if there is we return index of value in the array and the index. 

## Best Time to Buy and Sell Stock(maxProfit)

### Description

You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

### Solution

We first try to use two for-loop for the solution and have O(n²) Time Complexity and O(1) Space Complexity because only two variable were created. This demonstrates us that the solution with two for loop is not effecient. We also pass most of the tests but with a bigger input, the code is getting slow and show us 'Time Limit Exceeded' error. 
Now we are looking for a better approach using One For Loop. Instead of having to recalculate all the values with each other, we can instead keep track of the minimum price and subtract it from the selling prices. Now we see that Time Complexity is O(n) and Space Complexity O(1). 

## Sum of Two Integers

### Description

Given two integers a and b, return the sum of the two integers without using the operators + and -.

### Solution

Sum of two bits can be obtained by performing XOR (^) of the two bits. Carry bit can be obtained by performing AND (&) of two bits. 
    
    -Iterate till there is no carry 
    -carry now contains common set bits of a and b
    -Sum of bits of a and b where at least one of the bits is not set
    -Carry is shifted by one so that adding it to a gives the required sum

## Contains Duplicate

### Description

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

### Solution

First we tried to use two for-loop to compare integers that they are duplicate or not. Space complexity was O(1) because we did not use more memory but the time complexity was O(n2) that was to big for runtime. 

Secondly we sorted the array and find the duplicate integers with for loop. Its time complexity was O(nlogn) which is better than the first try but with sorted array we used memory and sacrifice the memory for time.

Converting numbers array into Set() we used the memory more than the first one but had a great runtime and this became faster than the before ones. 

Lastly we tried to create a hash table of our array as we're iterating and evaluate it in place.We first iterate over the array of numbers. If the map already has the value then we return true. We check this with the .has property of maps. This code has the best runtime and the fastest of all the others. 

## Product of Array Except Self

### Description

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

**Follow up:** Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

### Solution

We first think that we can multiply all of intergers and divide with the value of indexes. But as you can see we are forbiddeb to use division operation. 

With the first solution we have O(n) for time complexity and O(n) for space complexity. Everything is fine and we are good with this solution. But in the description, they want us to solve the problem in O(1) extra space complexity. 

Instead of using right side array, we are going to store it on a variable. 

## Reverse Linked List

### Description

Given the head of a singly linked list, reverse the list, and return the reversed list.

![reverseLinkedList](https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg)

    Input: head = [1,2,3,4,5]
    Output: [5,4,3,2,1]

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

### Solution

- **First Solution:** "Iterative Approach"- Changing pointers of nodes by using previous, current and next.To solve this problem we should be manipulating the node pointers in place and not creating a new linked list. 

    Time Complexity : O(n) Space Complexity: O(1)

- **Second Solution:** "Recursive Approach"- We started at the top with the head node to reverse the list then recursively traverse down the call stack until we reached the last node. 
    
    Time Complexity : O(n) Space Complexity : O(n)

## Linked List Cycle

### Description

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

### Solution

        1.Traverse the given list with two pointers

        2.Slow pointer moves by one and fast pointer by two

        3.If two pointers meet, returns true, if not returns false

- Time complexity: O(n). Only one traversal of the linked list is needed.

- Space complexity: O(1). No space is needed, it’s constant.
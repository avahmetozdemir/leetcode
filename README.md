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

## Number of 1 Bits

### Description

Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

        Note:
            - Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.

            - In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.

**Example:**

        Input: n = 00000000000000000000000000001011
        Output: 3
        Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.

## Maximum Subarray

### Description

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
A subarray is a contiguous part of an array.

**Example:**

        Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
        Output: 6
        Explanation: [4,-1,2,1] has the largest sum = 6.

**Follow up:** If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

### Solution

First solution is the brute force solution by using two for-loops, not very efficent calculate the sum of every possible contiguous subarray and play-king-of-the-hill with a maxSum variable.

Time: O(n²) , Space: O(1)

In second solution; by comparing previous number with its front number, we find the max of twos. Then we compare again this max of twos again and again until find the maximum subarray.

Time Complexity : O(n)
Space Complexity: O(1)

## Longest Repeating Character Replacement

### Description

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

**Example 1:**

                Input: s = "ABAB", k = 2
                Output: 4
                Explanation: Replace the two 'A's with two 'B's or vice versa.

**Example 2:**

                Input: s = "AABABBA", k = 1
                Output: 4
                Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
                The substring "BBBB" has the longest repeating letters, which is 4.

### Solution

        Keep count of all the characters in the string
        left pointer, character with the current max frequency, return value
        Increment count of the current character
        Update the character frequency
        Shrink the window of characters we are looking at until we can have a window of all the same characters + k charcters to change
        Update the output if the current window is greater than our previous max window

## Maximum Depth of Binary Tree

### Description

Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

![example](https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg)

                Input: root = [3,9,20,null,null,15,7]
                Output: 3

#### Solution Complexity:

**Time complexity :** O(n).
**Space complexity :** O(1).

## Valid Anagram

### Description

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1:**

                Input: s = "anagram", t = "nagaram"
                Output: true

### Solution

**First Solution** Used javascript array methods to sort and compare them to return true or false.

But using sort method is unnecessary work.Instead we could use hash map to find the frequency of each character.

## Climbing Stairs

### Description

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

**Example 1:**

        Input: n = 2
        Output: 2
        Explanation: There are two ways to climb to the top.
        1. 1 step + 1 step
        2. 2 steps

### Solution

![climbing-stairs](https://github.com/avahmetozdemir/leetcode/blob/main/screenshots/climbing-stairs.png?raw=true)

## Merge Sorted Array

### Description

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

**Example**

                Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
                Output: [1,2,2,3,5,6]
                Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
                The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

**Time Complexity :** Worst Case : O(m+n) , O(n)
**Space Complexity:** O(1)

## Length of Last Word

### Description

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

**Example :**

    Input: s = "   fly me   to   the moon  "
    Output: 4
    Explanation: The last word is "moon" with length 4.

### Solution

    1.Create lastWordCount variable.
    2.Loop backwards s.
      a. Condition if current char is not a space.
        i. loop backwards for current char.
          1. condition if current char is not a space.
            a. increment lastWordCount
          2. else return lastWordCount

## Remove Element

## Description

Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

## Add Two Numbers 

## Description

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Time Complexity :** O(max(m.n))
**Space Complexity :** O(max(m,n))
m and n are size of l1 and l2

## Valid Parentheses

### Description
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

**Time Complexity :** O(N)
**Space Complexity :** O(N)

## Palindrome Number

### Description

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.

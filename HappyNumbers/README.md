# Happy Numbers

## Description
A happy number is defined by the following process. Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers. Find the first 8 happy numbers.

## Approach
1. Start with input number x.
2. If the value of x is 1, return true.
3. Store the value of x in an array.
4. Isolate the digits of x.
5. Add the sum of the squares of the digits of x, and assign this sum to x.
6. If the value of x has been reached before, return false.
7. Repeat from step 3.

## Reference
Idea obtained from [Programming Ideas 2](https://play.google.com/store/apps/details?id=com.alansa.ideabag2)
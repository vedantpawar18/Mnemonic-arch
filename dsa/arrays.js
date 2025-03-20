// ➤ Arrays and Strings:

// 1. **Find the maximum sum subarray.**  
//    - Given an array of integers, find the contiguous subarray (containing at least one number) which has the largest sum. Return the sum of that subarray.
//      Example: Input: [-2,1,-3,4,-1,2,1,-5,4], Output: 6 (The subarray [4,-1,2,1] has the largest sum)

// 2. **Find all substrings that are palindromes.**  
//    - Write a function that takes a string as input and returns all the substrings that are palindromes.
//      Example: Input: "madam", Output: ["madam", "ada", "mad", "ada", "a"] 

// 3. **Implement the "two sum" problem.**  
//    - Given an array of integers and a target value, return the indices of the two numbers that add up to the target. Assume that each input would have exactly one solution.
//      Example: Input: nums = [2, 7, 11, 15], target = 9, Output: [0, 1]

// 4. **Implement Kadane's algorithm for maximum subarray sum.**  
//    - Given an integer array, find the contiguous subarray (containing at least one number) which has the largest sum. Use Kadane's algorithm to solve this in linear time.
//      Example: Input: [-2,1,-3,4,-1,2,1,-5,4], Output: 6

// 5. **Find the missing number in an array of integers.**  
//    - Given an array of integers from 1 to n with one missing number, find the missing number.
//      Example: Input: [1,2,4,6,3,7,8], Output: 5

// 6. **Merge two sorted arrays into one sorted array.**  
//    - Given two sorted arrays, merge them into one sorted array without using built-in sorting functions.
//      Example: Input: [1,3,5], [2,4,6], Output: [1, 2, 3, 4, 5, 6]

// 7. **Check if a string is a palindrome.**  
//    - Write a function that checks whether a given string is a palindrome, considering only alphanumeric characters and ignoring spaces, punctuation, and case.
//      Example: Input: "A man, a plan, a canal: Panama", Output: true

// 8. **Find the first non-repeating character in a string.**  
//    - Given a string, find the first non-repeating character. If there is no such character, return an empty character ('').
//      Example: Input: "loveleetcode", Output: 'v'

// 9. **Write a program to remove duplicates from a sorted array.**  
//    - Given a sorted array, remove the duplicates in place such that each element appears only once and return the new length of the array.
//      Example: Input: [1,1,2], Output: 2, and the array should be modified to [1, 2]

// ➤ Linked Lists:

// 10. **Reverse a linked list.**  
//    - Write a function to reverse a singly linked list.  
//      Example: Input: 1 -> 2 -> 3 -> 4 -> 5, Output: 5 -> 4 -> 3 -> 2 -> 1

// 11. **Detect a cycle in a linked list.**  
//    - Given a linked list, determine if it has a cycle. If there is a cycle, return true, otherwise return false.  
//      Example: Input: 3 -> 2 -> 0 -> -4 (Cycle starts at node 2), Output: true

// 12. **Find the middle of a linked list.**  
//    - Write a function to find the middle node of a singly linked list. If there are two middle nodes, return the second one.  
//      Example: Input: 1 -> 2 -> 3 -> 4 -> 5, Output: 3

// 13. **Merge two sorted linked lists.**  
//    - Given two sorted linked lists, merge them into a single sorted linked list.  
//      Example: Input: 1 -> 2 -> 4, 1 -> 3 -> 4, Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4

// 14. **Implement a stack using linked list.**  
//    - Design and implement a stack data structure using a singly linked list. Implement the operations `push()`, `pop()`, and `peek()`.  
//      Example: Input: Push 10, Pop, Output: 10

// 15. **Find the intersection point of two linked lists.**  
//    - Given two linked lists, determine if they intersect. If they do, return the node where the intersection begins.  
//      Example: Input: List A: 1 -> 2 -> 3, List B: 3 -> 4 -> 5, Output: 3

// ➤ Stacks and Queues:

// 16. **Implement a stack using an array.**  
//    - Design and implement a stack using an array. Implement the operations `push()`, `pop()`, and `peek()`.  
//      Example: Input: Push 1, Push 2, Pop, Output: 2

// 17. **Implement a stack that supports push, pop, top, and retrieving the minimum element.**  
//    - Implement a stack that supports the operations `push()`, `pop()`, `top()`, and `getMin()` in constant time.  
//      Example: Input: Push 2, Push 3, Push 1, getMin(), Output: 1

// 18. **Implement a circular queue.**  
//    - Design a circular queue that supports the operations `enqueue()`, `dequeue()`, and `peek()`. The queue should be circular, meaning after reaching the end, it wraps around.  
//      Example: Input: Enqueue 10, Dequeue, Output: 10

// 19. **Design a max stack that supports push, pop, top, retrieve maximum element.**  
//    - Design a stack that supports `push()`, `pop()`, `top()`, and `getMax()` operations, with the `getMax()` operation returning the maximum element in constant time.  
//      Example: Input: Push 1, Push 3, Push 2, getMax(), Output: 3

// 20. **Design a queue using stacks.**  
//    - Implement a queue using two stacks. The queue should support `enqueue()` and `dequeue()` operations.  
//      Example: Input: Enqueue 5, Dequeue, Output: 5

// ➤ Trees and Binary Search Trees:

// 21. **Find the height of a binary tree.**  
//    - Write a function to find the height (maximum depth) of a binary tree.  
//      Example: Input: [3, 9, 20, null, null, 15, 7], Output: 3

// 22. **Find the lowest common ancestor of two nodes in a binary tree.**  
//    - Given a binary tree and two nodes, return the lowest common ancestor of the two nodes.  
//      Example: Input: Root: [3, 5, 1], p: 5, q: 1, Output: 3

// 23. **Validate if a binary tree is a valid binary search tree.**  
//    - Write a function to validate if a given binary tree is a valid binary search tree.  
//      Example: Input: [2,1,3], Output: true

// 24. **Serialize and deserialize a binary tree.**  
//    - Write methods to serialize a binary tree into a string and deserialize a string back into the original tree structure.  
//      Example: Input: [1,2,3], Output: "1,2,3"

// 25. **Implement an inorder traversal of a binary tree.**  
//    - Implement an inorder traversal of a binary tree and return the nodes' values in the order they were visited.  
//      Example: Input: [1, null, 2], Output: [1, 2]

// 26. **Find the diameter of a binary tree.**  
//    - The diameter of a binary tree is the length of the longest path between any two nodes in the tree. Write a function to compute the diameter of a binary tree.  
//      Example: Input: [1, 2, 3, 4, 5], Output: 3

// 27. **Convert a binary tree to its mirror tree.**  
//    - Write a function to convert a binary tree to its mirror image, where the left and right subtrees are swapped.  
//      Example: Input: [1, 2, 3], Output: [1, 3, 2]

// ➤ Graphs:

// 28. **Implement depth-first search (DFS).**  
//    - Write an algorithm for depth-first search on a graph. It should return the nodes in the order they were visited.  
//      Example: Input: Graph = {A: [B, C], B: [D, E]}, Output: [A, B, D, E, C]

// 29. **Implement breadth-first search (BFS).**  
//    - Implement breadth-first search (BFS) on a graph. Return the nodes in the order they were visited.  
//      Example: Input: Graph = {A: [B, C], B: [D, E]}, Output: [A, B, C, D, E]

// 30. **Find the shortest path between two nodes in an unweighted graph.**  
//    - Write a function to find the shortest path between two nodes in an unweighted graph using BFS.  
//      Example: Input: Graph = {A: [B, C], B: [D], C: [D]}, Start: A, End: D, Output: [A, B, D]

// 31. **Detect a cycle in an undirected graph using DFS.**  
//    - Implement a function to detect a cycle in an undirected graph using depth-first search (DFS).  
//      Example: Input: Graph = {A: [B], B: [A, C], C: [B]}, Output: true

// 32. **Check if a graph is bipartite.**  
//    - Given an undirected graph, determine if it is bipartite (can be colored with two colors without two adjacent nodes having the same color).  
//      Example: Input: Graph = {A: [B], B: [A, C], C: [B]}, Output: true

// 33. **Find the number of connected components in an undirected graph.**  
//    - Write a function to find the number of connected components in an undirected graph.  
//      Example: Input: Graph = {A: [B], B: [A, C], C: [B]}, Output: 1

// 34. **Find bridges in a graph.**  
//    - Given a graph, find all the bridges (edges that, if removed, would increase the number of connected components).  
//      Example: Input: Graph = {A: [B], B: [A, C], C: [B]}, Output: [A, B]

// ➤ Sorting and Searching:

// 35. **Implement (bubble, insertion, selection, merge) sort.**  
//    - Write algorithms to perform bubble sort, insertion sort, selection sort, and merge sort.  
//      Example: Input: [5, 3, 8, 4, 2], Output: [2, 3, 4, 5, 8]

// 36. **Implement quicksort.**  
//    - Implement the quicksort algorithm to sort an array in O(n log n) average time.  
//      Example: Input: [5, 3, 8, 4, 2], Output: [2, 3, 4, 5, 8]

// 37. **Implement binary search.**  
//    - Given a sorted array, implement binary search to find the index of a target element.  
//      Example: Input: [1, 2, 3, 4, 5], Target: 3, Output: 2

// 38. **Implement interpolation search.**  
//    - Implement interpolation search, an algorithm that works on sorted arrays by estimating the position of the target value.  
//      Example: Input: [10, 20, 30, 40, 50], Target: 30, Output: 2

// 39. **Find the kth smallest element in an array.**  
//    - Write a function to find the kth smallest element in an unsorted array.  
//      Example: Input: [3, 2, 1, 5, 6, 4], k = 2, Output: 2

// 40. **Given an array of integers, count the number of inversions it has.**  
//    - An inversion is a pair of elements in the array that are out of order. Write a function to count the number of inversions.  
//      Example: Input: [2, 3, 8, 6, 1], Output: 5



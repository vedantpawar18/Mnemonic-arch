/* Question: Reverse a string.
   Answer: Swap characters from start to end.
   Explanation: Imagine writing your name on a piece of paper and holding it up to a mirror. It looks backward, right? We do the same with a string! */
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('hello')); // Output: 'olleh'

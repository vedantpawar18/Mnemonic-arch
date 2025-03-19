/* Question: Find the maximum number in an array.
   Answer: Loop through the array and keep track of the biggest number.
   Explanation: Imagine you have a basket of apples with different sizes. You pick up each apple one by one and check if it is the biggest one you've seen so far. The last biggest one is your answer! */
function findMax(arr) {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) max = num;
    }
    return max;
}
console.log(findMax([3, 1, 7, 4, 2])); // Output: 7

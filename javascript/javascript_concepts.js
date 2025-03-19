/* Question: What is a closure in JavaScript?
   Answer: A function inside another function that remembers the outer function's variables.
   Explanation: Imagine you have a backpack with cookies. You put your hand inside to grab a cookie. Your hand (inner function) still knows the cookies (outer variables) exist, even if you close the bag! */
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter(); // 1
counter(); // 2

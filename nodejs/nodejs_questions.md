# Question: What is the Event Loop in Node.js?
   **Answer:** The Event Loop allows Node.js to handle many tasks without blocking.
   **Explanation:** Imagine a waiter at a restaurant taking multiple orders at once. They don’t wait for one dish to be ready before taking another order. Instead, they keep checking and serving as soon as food is ready.
   ```js
   console.log('Start');
   setTimeout(() => console.log('Hello'), 0);
   console.log('End');
   ```
   Output:
   Start
   End
   Hello (this runs later because of the event loop).

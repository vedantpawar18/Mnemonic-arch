# Question: What is middleware in Express.js?
   **Answer:** Middleware functions handle requests before they reach the final route.
   **Explanation:** Imagine a security guard at a mall entrance checking people before they go inside.
   ```js
   const express = require('express');
   const app = express();

   function logger(req, res, next) {
       console.log(`Request made to: ${req.url}`);
       next();
   }

   app.use(logger);

   app.get('/', (req, res) => res.send('Hello, world!'));

   app.listen(3000, () => console.log('Server running...'));
   ```
   The middleware logs requests before sending a response.

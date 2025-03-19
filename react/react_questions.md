# Question: What is the Virtual DOM?
   **Answer:** The Virtual DOM is a lightweight copy of the actual DOM that React uses to update changes efficiently.
   **Explanation:** Imagine drawing a picture on a notebook before painting it on a wall. This way, you can fix mistakes easily before making the final version.
   ```jsx
   function App() {
       const [count, setCount] = React.useState(0);
       return <button onClick={() => setCount(count + 1)}>Click {count}</button>;
   }
   ```
   The Virtual DOM updates only the changed button, not the whole page.

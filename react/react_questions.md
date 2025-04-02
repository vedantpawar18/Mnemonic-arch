# React Interview Questions

## 1. What is React?

**Answer:**

- React is an open-source JavaScript library for building user interfaces, especially for single-page applications.
- Developed and maintained by Facebook and a community of developers.
- Uses a Virtual DOM to optimize performance by minimizing direct updates to the actual DOM.
- Follows a declarative approach, where you describe the UI for a given state, and React handles updates efficiently.
- Uses JSX (JavaScript XML), a syntax that allows mixing HTML-like code with JavaScript.
- Built on a component-based architecture, allowing the development of reusable, modular UI components.

**Explanation:**  

### a. What is the difference between a framework and a library?

- A **library** provides a set of tools or functions that help you accomplish specific tasks. You call the library when you need it (e.g., React, lodash).
- A **framework**, on the other hand, is a more comprehensive solution that dictates the structure and flow of your application. It gives you a skeleton to build upon and often controls the flow of execution (e.g., Angular, Vue.js).
- In short, the difference is that a **library** lets you choose how and when to use it, while a **framework** imposes certain conventions and structures.

### b. What is the difference between a declarative and imperative approach ?

- A **declarative approach** means describing what the UI should look like for a given state, and React takes care of the logic of how to update the UI. Instead of focusing on the steps to update the UI, you simply describe the desired result, and React handles all the necessary updates behind the scenes.
- The counterpart to the declarative approach is the **imperative approach**. In an imperative approach, you need to specify how to update the UI step by step. You directly manipulate the DOM elements and their states, which can lead to more complex and error-prone code as the app grows. For example, traditional JavaScript DOM manipulation is usually imperative.

### c. What is the significance of components in React??

- Components are the building blocks of a React application. They allow you to break down the UI into smaller, reusable pieces, each responsible for a specific part of the interface. Components can be either **functional (using hooks)** or **class-based (older approach)**, and they can manage their own state and lifecycle.


---

## 2. What are the features of React?
   **Answer:**  
  ## Features of React

1. **Component-Based Architecture**  
   React is based on components, which are **reusable**, **self-contained** units of code that define how the UI should look and behave. Each component has its own **logic** and **rendering**.

2. **Virtual DOM**  
   React uses a **Virtual DOM** to improve performance. It updates only the changed parts of the UI rather than the entire page, resulting in **faster rendering**.

3. **JSX (JavaScript XML)**  
   React allows developers to write UI elements using **JSX**, a syntax extension that looks similar to **HTML** but is used with **JavaScript**. It makes code more **readable** and **easy to write**.

4. **Unidirectional Data Flow**  
   **Data flows in one direction** (from parent to child components), which helps maintain **predictable state management** and easier **debugging**.

5. **Declarative Syntax**  
   React's **declarative** approach makes it easier to design interactive UIs. You describe **what the UI should look like** based on the state, and React handles the rendering efficiently.

6. **React Hooks**  
   **Hooks** like `useState` and `useEffect` enable **state** and **side-effect management** within functional components, making it easier to write and maintain code without the need for class components.

7. **React Router**  
   React's **React Router** library allows developers to implement **navigation** in Single Page Applications (SPAs), providing **dynamic routing** without page reloads.

8. **State Management**  
   React provides a built-in **state management** system that allows components to hold and manage **local states**. For global state, libraries like **Redux** or **Context API** can be used.

9. **Rich Ecosystem**  
   React has a **vast ecosystem** with tools, libraries, and **community support**, making it easy to **extend** and **scale applications**.

10. **React Developer Tools**  
   **React Developer Tools** browser extension allows developers to **inspect the React component tree** and **debug applications** efficiently.

---

## 3. What is JSX?
   **Answer:**  

- **JSX (JavaScript XML)** is a **syntax extension** for JavaScript that allows developers to write HTML-like code within JavaScript.
  
- JSX makes the code more **readable** and **expressive** by combining the **structure** of HTML and the **logic** of JavaScript in a single file.
  
- It is **not a requirement** in React, but it is highly recommended because it improves the development experience and simplifies the process of building React components.

- JSX is ultimately **transpiled** into regular JavaScript by tools like **Babel**. For example, JSX like `<h1>Hello World</h1>` is converted to `React.createElement('h1', null, 'Hello World')`.

- **Key Benefits**:
  - **Improved Readability**: The structure of HTML in JavaScript makes it easier to visualize the UI.
  - **Integration with JavaScript**: Developers can easily embed JavaScript expressions within JSX using curly braces `{}`.
  - **Better Error Handling**: Errors in JSX are easier to catch since it gets transpiled into regular JavaScript.

- **Example**:
  
  ```jsx
  const element = <h1>Hello, world!</h1>;
 

---

## 4. What is DOM?
   **Answer:**  
  - **DOM (Document Object Model)** is a programming interface for web documents. It represents the structure of a web page as a **tree of objects**, where each object corresponds to a part of the page (like elements, attributes, text content, etc.).

- The DOM is language-independent and allows programming languages like **JavaScript** to manipulate HTML and XML documents in a structured way.

- **Key Concepts**:
  - **Elements**: The basic building blocks of the DOM (e.g., `<div>`, `<p>`, `<button>`).
  - **Nodes**: Every part of the document is a node in the DOM tree (e.g., elements, attributes, text nodes).
  - **Tree Structure**: The DOM is structured as a tree where the **root node** represents the document itself, and all other elements are **child nodes**.

- JavaScript can use the DOM to:
  - **Read** the content and structure of a webpage.
  - **Modify** the page by adding, changing, or removing elements.
  - **React** to user events like clicks, form submissions, etc.

- **Example**: If you have an HTML element like:

  ```html
  <h1 id="title">Hello, World!</h1>

   **Explanation:**  
   _[Your explanation here]_

---

## 5. What is Virtual DOM?
   **Answer:**  

- **Virtual DOM** is a concept implemented by React (and other libraries) to optimize the performance of web applications by minimizing direct manipulation of the **real DOM**.

- The **Virtual DOM** is a lightweight, **in-memory** representation of the **real DOM**. It is essentially a virtual copy of the actual DOM that React can work with.

- **How it works**:
  1. When a change occurs in the application (like user interaction or state update), React first updates the **Virtual DOM**.
  2. It then **compares** the updated Virtual DOM with the previous version using an efficient algorithm called **reconciliation**.
  3. React calculates the **minimal number of changes** required to update the real DOM, thus avoiding unnecessary re-renders and improving performance.
  4. Finally, React applies only the **changed parts** of the real DOM, not the entire page.

- **Key Benefits**:
  - **Improved Performance**: Since React avoids direct manipulation of the real DOM, updates are faster.
  - **Efficient Rendering**: By comparing changes to the Virtual DOM first, React reduces the number of updates to the real DOM.
  - **Consistency**: The Virtual DOM ensures that changes are applied in a controlled and optimized manner.

- **Example**:
  If the state of a React component changes (for example, a counter increments), React updates the Virtual DOM first and then applies only the necessary changes to the actual DOM, making the process faster and more efficient.

In summary, the **Virtual DOM** allows React to efficiently update the UI by minimizing expensive operations on the real DOM and optimizing the rendering process.
 

---

## 6. What is the component lifecycle of a React class component?
   **Answer:**  
## Component Lifecycle of a React Class Component

React class components have a **lifecycle** that can be broken into three main phases: **Mounting**, **Updating**, and **Unmounting**. Each phase has specific lifecycle methods that allow developers to hook into certain points of the component's lifecycle.

### 1. **Mounting** (When the component is being created and inserted into the DOM)
- **constructor()**:  
  Called when the component is first created. It's used for **initializing state** and **binding event handlers**.

- **static getDerivedStateFromProps()**:  
  Called before every render, both on mount and updates. It allows the component to **update its state** based on **changes in props**.

- **render()**:  
  Required method that returns the **JSX** for the component. It should be **pure** and return the UI that reflects the current state and props.

- **componentDidMount()**:  
  Called once after the component is mounted in the DOM. Ideal for **initial data fetching**, adding event listeners, or setting up subscriptions.

### 2. **Updating** (When a component’s state or props change)
- **static getDerivedStateFromProps()**:  
  Called during every update, similar to when it’s called in the mounting phase. It allows changes to the state based on updated props.

- **shouldComponentUpdate()**:  
  Called before re-rendering the component. It can return **true or false** to decide whether the component should **re-render** based on changes in state or props (performance optimization).

- **render()**:  
  Called again to re-render the component when the state or props change.

- **getSnapshotBeforeUpdate()**:  
  Called right before changes are flushed to the DOM. It allows you to **capture information** (like scroll position) from the DOM before it is updated.

- **componentDidUpdate()**:  
  Called after the component is updated in the DOM. It's used to perform operations like **network requests** or DOM updates based on prop or state changes.

### 3. **Unmounting** (When a component is being removed from the DOM)
- **componentWillUnmount()**:  
  Called before the component is **removed** from the DOM. It is used to **clean up** resources like **canceling network requests**, removing event listeners, or clearing timers.

---

### **Summary of Lifecycle Methods**

| Phase        | Method                         | Description                                                  |
|--------------|--------------------------------|--------------------------------------------------------------|
| **Mounting** | `constructor()`                | Initialize state and bind event handlers.                    |
|              | `getDerivedStateFromProps()`   | Update state based on props before rendering.                |
|              | `render()`                     | Return JSX to render UI.                                     |
|              | `componentDidMount()`          | Perform initializations like data fetching after mounting.   |
| **Updating** | `getDerivedStateFromProps()`   | Update state before each render when props change.           |
|              | `shouldComponentUpdate()`      | Decide whether the component should re-render.               |
|              | `render()`                     | Re-render the component.                                     |
|              | `getSnapshotBeforeUpdate()`    | Capture DOM information before changes are applied.          |
|              | `componentDidUpdate()`         | Perform operations after an update to the component.         |
| **Unmounting** | `componentWillUnmount()`     | Clean up before the component is removed from the DOM.       |

---

In summary, React class components follow a **well-defined lifecycle** with hooks (lifecycle methods) that allow you to perform certain actions at specific points during the component's existence. These lifecycle methods give you control over how your component interacts with the DOM and state changes.

 

---

## 7. What are fragments in React?
   **Answer:**   
- **Fragments** in React are a way to group multiple elements without adding an extra **DOM node**. They allow you to return multiple elements from a component’s **render** method without wrapping them in a parent container (like a `div`).

- **Why Use Fragments?**
  - Sometimes adding an extra `<div>` or other container element can cause unwanted issues, such as breaking styles or layouts.
  - Fragments help avoid unnecessary **DOM elements**, keeping the DOM structure clean and efficient.

### How to Use Fragments:

1. **Using `<React.Fragment>`**:
   ```jsx
   function MyComponent() {
     return (
       <React.Fragment>
         <h1>Title</h1>
         <p>Content</p>
       </React.Fragment>
     );
   }


   **Explanation:**  
   _[Your explanation here]_

---

## 8. What are props in React?

**Answer:**  

- **Props** (short for **properties**) are used to pass **data** and **event handlers** from a parent component to a child component in React. They are read-only and help make components **dynamic** and **reusable**.

- Props allow a component to be configured or customized from its **parent**, and they ensure that the child component receives the necessary data it needs to render the UI.

### Key Characteristics of Props:

- **Read-Only**: Props are **immutable**, meaning they cannot be modified by the child component. If a child needs to change a value, it must send a request to the parent via a callback function.
  
- **Passed from Parent to Child**: Props are always passed **downwards** from a parent component to its child component.

- **Customizable**: Props can contain any type of data, including:
  - **Strings**, **numbers**, and **booleans**
  - **Objects** and **arrays**
  - **Functions** (for event handling)

   **Explanation:**  
   _[Your explanation here]_

---

## 9. What is the difference between state and props in React?

**Answer:**  
Both **state** and **props** are used to manage data in React, but they serve different purposes. Understanding the distinction between the two is essential for building dynamic and reusable React components.

### **Props**:
- **Definition**: Props (short for **properties**) are used to pass data from a **parent component** to a **child component**.
- **Immutability**: Props are **read-only** and cannot be modified by the component receiving them.
- **Purpose**: Props allow a component to be **customized** and **configured** by its parent. They are the mechanism for communication between components.
- **Usage**: Used to pass static data or callback functions to child components.
  
#### Example of Props:
```jsx
function ParentComponent() {
  const message = "Hello, Child!";
  return <ChildComponent text={message} />;
}

function ChildComponent(props) {
  return <h1>{props.text}</h1>;
}


   **Explanation:**  
   _[Your explanation here]_

---

## 10. What is props drilling and how can it be avoided?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 11. What are synthetic events in React?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 12. What are Pure components in React?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 13. What are refs in React?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 14. What is meant by forward ref in React?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 15. What are error boundaries in React?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 16. What are higher-order components in React?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 17. What are controlled and uncontrolled components in React?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 18. What is useMemo in React?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 19. What is useCallback in React?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 20. What is the difference between useMemo and useCallback?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 21. What is useReducer hook in React?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 22. What is useState vs useReducer?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 23. What are keys in React?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 24. What is lazy loading in React?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 25. What is Suspense in React?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 26. What are custom hooks in React?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 27. What are Portals in React?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 28. What is Context API in React?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 29. Give an example of using Context API in React.
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 30. What is the purpose of the callback function as an argument of `setState()`?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 31. Which lifecycle hooks in class components are replaced by `useEffect` in functional components?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 32. What is Strict Mode in React?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 33. What are the different ways to pass data from a child component to a parent component in React?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 34. How to send data from a child to a parent using callback functions in React?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 35. How to send data from a child to a parent using `useRef` in React?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 36. How do you optimize your React application?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 37. How would you consume a RESTful JSON API in React?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 38. What are the different design patterns used in React?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 39. Context API vs Redux: What are the differences?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 40. How to apply validation on props using PropTypes in React?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 41. What are React Mixins?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 42. What are the different hooks you have used in React?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 43. What are render props in React?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 44. What are the different types of exports and imports in React?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 45. What is the difference between `createElement` and `cloneElement` in React?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 46. What are protected routes in React?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 47. What is react-router context menu?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 48. What are the differences between `package.json` and `package-lock.json`?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---

## 49. What are the differences between client-side and server-side rendering?
   **Answer:**  
   _[Your answer here]_

   **Explanation:**  
   _[Your explanation here]_

---


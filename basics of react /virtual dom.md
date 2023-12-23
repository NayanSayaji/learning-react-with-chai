# Virtual DOM in React

## What is the Virtual DOM?

The Virtual DOM (Document Object Model) is a lightweight copy of the actual DOM in memory. React uses the Virtual DOM to improve performance by minimizing unnecessary manipulation of the actual DOM.

- **The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM.** 
*****This process is called reconciliation.*****
- **The old reconciler algorithm (also known as the Stack Reconciler) because it uses stack internally. [React Fiber](https://github.com/acdlite/react-fiber-architecture) Reconciler is the new reconciliation algorithm introduced in React 16. It represents a complete reimplementation of React's core algorithm for rendering user interfaces.**

This approach enables the declarative API of React: You tell React what state you want the UI to be in, and it makes sure the DOM matches that state. This abstracts out the attribute manipulation, event handling, and manual DOM updating that you would otherwise have to use to build your app.

Since “virtual DOM” is more of a pattern than a specific technology, people sometimes say it to mean different things. In React world, the term “virtual DOM” is usually associated with React elements since they are the objects representing the user interface. React, however, also uses internal objects called “fibers” to hold additional information about the component tree. They may also be considered a part of “virtual DOM” implementation in React.

### Is the Shadow DOM the same as the Virtual DOM?
No, they are different. The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. The virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.

<img src="../assets/virtual%20dom.png" alt="virtual dom" title="virtual DOM" width="600">

### How It Works:

1. **Representation of DOM**: The Virtual DOM is a representation of the actual DOM as a tree structure composed of React elements.

2. **Efficient Updates**: When a React component's state or props change, a new Virtual DOM representation is created.

3. **Diffing Algorithm**: React compares the new Virtual DOM with the previous one, finding the differences (changes in state/props).

4. **Minimized DOM Updates**: React calculates the most efficient way to update the actual DOM based on the differences found in the Virtual DOM.

5. **Batch Updates**: React performs these updates in batches and then updates the actual DOM in a single operation. This approach minimizes browser layout reflows and repaints, improving overall performance.

### Benefits of Virtual DOM:

- **Performance Optimization**: By minimizing direct manipulation of the actual DOM, React optimizes rendering and boosts application performance.

- **Cross-Platform Consistency**: The Virtual DOM abstracts the underlying browser-specific DOM, ensuring consistent behavior across different browsers.

- **Developer-Friendly**: Simplifies development by allowing developers to work with a virtual representation that closely resembles the actual DOM.

### Example:

Suppose we have a list of items and want to update one item's content. React's Virtual DOM efficiently identifies the specific item to update in the actual DOM without re-rendering the entire list.

```javascript
// Example of using the Virtual DOM in React
import React, { useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default MyComponent;
```
```
In this example, when the button is clicked, React updates only the specific part of the DOM
representing the count value, leveraging the efficiency of the Virtual DOM.
```

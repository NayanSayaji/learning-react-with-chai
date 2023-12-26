# `useEffect()`, `useRef()` and `useCallback() ` hooks

- **[Lifecycle Equivalent in React Hooks:](#Lifecycle-Equivalent-in-React-Hooks-1)**
  - [Usage of useEffect](#usage-of-useeffect-to-simulate-lifecycle-methods)
  - [Mounting](#mounting)
  - [Updating](#Updating)
  - [Unmounting](#unmounting)
- **[`useRef()` hook](#useref-hook)**
  - [Example Usage of `useRef` Hook](#example-usage-of-useref-hook)
  - [Accessing a DOM Element](#1-accessing-a-dom-element)
  - [Persisting Values Across Renders](#2-persisting-values-across-renders)
- **[`useCallback()` Hook](#usecallback-hook)**
  - [Depedancy array](#memoization-in-react)
  - [Memoization in React](#memoization-in-react)

In React, when using hooks, the concept of lifecycle methods is slightly different compared to class components. Hooks don't directly replicate every lifecycle method available in class components. Instead, they offer functional alternatives that cater to different lifecycle stages within a component. 

### Lifecycle Equivalent in React Hooks:

1. **`useEffect()` Hook:**
   - **Purpose:** Mimics the behavior of multiple lifecycle methods.
   - **Equivalents lifecycle methods in class Components in react :**
     - **`componentDidMount()`:** Executed after the first render. Ideal for performing side effects that require access to the DOM.
     - **`componentDidUpdate()`:** Runs after every update, but can be configured to execute conditionally based on dependencies. Useful for side effects after component updates.
     - **`componentWillUnmount()`:** Performs cleanup before the component is unmounted. Executed when the component is about to be removed from the UI.


## `useEffect()` hook
### Usage of `useEffect()` to Simulate Lifecycle Methods:

#### **Mounting:**
  ```javascript
  useEffect(() => {
    // Perform actions after the component mounts
    // e.g., fetching data, setting up subscriptions, interacting with the DOM
    return () => {
      // Cleanup function (equivalent to componentWillUnmount)
    };
  }, []); // Empty dependency array to trigger only on mount
  ```

#### **Updating:**
  ```javascript
  useEffect(() => {
    // Perform actions based on changes in specific dependencies (componentDidUpdate)
    return () => {
      // Cleanup function (equivalent to componentWillUnmount)
    };
  }, [dependency1, dependency2]); // List dependencies to trigger updates
  ```

#### **Unmounting:**
  ```javascript
  useEffect(() => {
    return () => {
      // Cleanup function (equivalent to componentWillUnmount)
    };
  }, []); // Empty dependency array ensures it only runs on unmount
  ```

By using `useEffect()` with dependencies or empty dependency arrays, you can simulate the behavior of various lifecycle methods at different stages of a functional component's existence in React. This allows for managing side effects, subscriptions, and cleanup operations effectively within functional components using hooks.



## `useRef()` hook
The `useRef()` hook in React allows functional components to create mutable references to DOM elements or values that persist across renders. It returns a mutable ref object whose `current` property is initialized to the provided argument (initial value) and persists between renders.

### Detailed Explanation of `useRef` Hook:

#### 1. **Creating a Ref:**
   - **Syntax:** `const refContainer = useRef(initialValue);`
   - Initializes a ref object `refContainer` with an optional initial value.

#### 2. **Accessing the Ref:**
   - The `refContainer.current` property holds the value of the reference. This property remains consistent across renders.

#### 3. **Use Cases:**
   - **DOM References:** Accessing/manipulating DOM elements imperatively.
   - **Persisting Values:** Holding mutable values that persist between renders.

### Example Usage of `useRef` Hook:

#### 1. **Accessing a DOM Element:**
   ```javascript
   import React, { useRef, useEffect } from 'react';

   const MyComponent = () => {
     const inputRef = useRef(null);

     useEffect(() => {
       // Focuses on the input element when the component mounts
       inputRef.current.focus();
     }, []);

     return (
       <div>
         <input ref={inputRef} type="text" />
         <button onClick={() => inputRef.current.focus()}>Focus Input</button>
       </div>
     );
   };

   export default MyComponent;
   ```
   - In this example, `useRef` is used to create a reference `inputRef`.
   - The `ref` attribute is used to assign the input element to `inputRef`.
   - `inputRef.current` is accessed to focus on the input when the component mounts and when the button is clicked.

#### 2. **Persisting Values Across Renders:**

   ```javascript
   import React, { useState, useRef } from 'react';

   const MyComponent = () => {
     const [count, setCount] = useState(0);
     const previousCountRef = useRef();

     // Store previous count value on update
     useEffect(() => {
       previousCountRef.current = count;
     }, [count]);

     return (
       <div>
         <p>Current Count: {count}</p>
         <p>Previous Count: {previousCountRef.current}</p>
         <button onClick={() => setCount(count + 1)}>Increment Count</button>
       </div>
     );
   };

   export default MyComponent;
   ```
   - Here, `useRef` is used to create `previousCountRef` to persist the previous count value.
   - `useEffect` updates `previousCountRef.current` whenever `count` changes, preserving the previous count value even after re-renders.

The `useRef` hook is versatile and allows for the creation of mutable references to DOM elements and values that persist between renders, offering a way to interact with the DOM imperatively and store mutable data in functional components.



## `useCallback` Hook:

1. **Purpose:**
    - `useCallback` is a React hook used to memoize functions, optimizing performance by avoiding unnecessary re-creation of functions on re-renders.
2. **Function Memoization:**
   - Memoization is the technique of caching the results of expensive function calls to improve performance.
3. **Syntax:**
   ```javascript
   const memoizedCallback = useCallback(
      () => {
        // Callback function body
      },
      [dependencies]
    );
   ```
   - It returns a memoized callback.
4. **Dependencies Array:**
   - The dependencies array determines when the function is re-created. If the dependencies change, the function is re-memoized.
5. **Example:**
    ```javascript
    import React, { useCallback, useState } from 'react';

    const ExampleComponent = () => {
      const [count, setCount] = useState(0);

      // Increment function is memoized using useCallback
      const increment = useCallback(() => {
        setCount(count + 1);
      }, [count]); // Dependency array includes 'count'

      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={increment}>Increment</button>
        </div>
      );
    };
    ```
6. **Memoization Benefits:**
   - Reduces unnecessary re-rendering in child components that rely on callback props.
   - Helps in optimizing performance by preventing re-creation of functions.

### Memoization in React:

1. **Definition:**
   - Memoization is the optimization technique where the results of expensive calculations are cached to improve performance.

2. **Memoization in React:**
   - In React, `useMemo` hook is used for memoization, caching the result of expensive computations.
   
3. **Usage:**
   - `useMemo` is typically used to memoize values, especially when calculations are involved in rendering.

4. **Syntax:**
   - `const memoizedValue = useMemo(() => computeExpensiveValue(dep1, dep2), [dep1, dep2]);`
   
5. **Example:**

    ```javascript
    import React, { useMemo } from 'react';

    const ExampleComponent = () => {
      const computedValue = useMemo(() => {
        // Expensive computation to get a value
        return computeExpensiveValue(dep1, dep2);
      }, [dep1, dep2]); // Dependency array includes 'dep1' and 'dep2'

      return (
        <div>
          <p>Computed Value: {computedValue}</p>
        </div>
      );
    };
    ```

6. **Memoization Benefits in React:**
   - Helps in optimizing rendering performance by avoiding recalculations.
   - Reduces unnecessary work during re-renders, particularly for computationally heavy operations.

### Summary:

`useCallback` and memoization in React are optimization tools. `useCallback` memoizes functions, preventing re-creation on re-renders based on dependencies. `useMemo` caches the results of expensive computations, enhancing performance by avoiding unnecessary recalculations. Both hooks aid in optimizing React components by efficiently managing computations and callback functions.
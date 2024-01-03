# A react interview question on counter and `useState()`

```This is the most asked interview question in interviews```

```javascript
  const addValue = () => {

    // if we do Counter + 1 multiple times what will be the output of it.
    setCounter(Counter + 1);
    setCounter(Counter + 1);
    setCounter(Counter + 1);
    setCounter(Counter + 1);

    // mostly people will say it will increase counter value by 4 but it will add 1 only.
  };
```

`App.jsx`
```javascript
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(15);

  //let counter = 15

  const addValue = () => {

    // if we do Counter + 1 multiple times what will be the output of it.
    setCounter(Counter + 1);
    setCounter(Counter + 1);
    setCounter(Counter + 1);
    setCounter(Counter + 1);

    // mostly people will say it will increase counter value by 4 
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
        <h2>Counter value: {counter}</h2>

        <button onClick={addValue}>
            Add value
        </button>
        <br />
        <button onClick={removeValue}>
            remove value
        </button>
      
    </>
  );
}

export default App;
```

- Calling `setCounter` multiple times in a row might not produce the expected result due to the asynchronous nature of state updates in React.
- React batches state updates for efficiency, and when using `setCounter`, React doesn't guarantee that each update will be applied instantly.
    - It means though we are calling setCounter again and again but still that `counter state` will change only once.
- `addValue`: This function is intended to increment the counter but may not function as expected due to the multiple consecutive calls to `setCounter`.
- `removeValue`: Decrements the counter by 1 when the button is clicked.

#### Improvement:
- To ensure proper state updates and avoid potential issues with multiple state updates, consider using the functional update form of `setCounter`. This form accepts a function that receives the previous state and returns the new state.

For instance:
```javascript
const addValue = () => {

  // suppose value of counter is 15 then value of prevCounter will be also 15

  //               15    =>     15+1
  setCounter(prevCounter => prevCounter + 1); 
  //               16    =>     16+1
  setCounter(prevCounter => prevCounter + 1); 
  //               17    =>     17+1
  setCounter(prevCounter => prevCounter + 1); 
  //               18    =>     18+1
  setCounter(prevCounter => prevCounter + 1); 
  // Increment by 4

  //         So counter === 19 now
};

const removeValue = () => {
  setCounter(prevCounter => prevCounter - 1); // Decrement by 1
};
```

`setCounter()` takes a callback as argument which where callback has the value of the previous counter. 

So here in this case `setCounter()` taking a `callback function` as a argument, and that callback function having a argument `prevCounter` which is equal to the previous value of `counter`.

This way, you're assured that the state updates will be based on the most recent state value, preventing unexpected behavior due to the asynchronous nature of state updates in React.

The original code's multiple consecutive calls to `setCounter` might not produce the expected result and could lead to unpredictable behavior when updating the state in React components.
# State and Props in react

- **[State in react](#state-in-react)**
    - *[Characteristics](#characteristics)*
- **[Props](#props)**
    - *[Definition](#props-in-react)*
        - Attributes in React used to pass data from parent to child components.
    - *[Characteristics](#2-characteristics)*
        - Read-only nature, allowing unidirectional data flow.
    - *[Props Usage](#3-usage)*
        - [Example of props](#example-of-props-in-react)
            - [Parent Component](#parent-component)
            - [Child Component](#child-component)
    - *[Notes on Props](#Notes-on-Props)*
       
    

This index includes hyperlinks that will direct you to the specific sections discussing various aspects of props in React.

## State in React
In simple words can we say state is kind of a variable in react.

So yes, that's a great way to conceptualize it! In React, you can think of state as a type of variable that's internal to a component and holds data that can change over time. 

Here are some key points that emphasize why state can be seen as a variable in React:
### Characteristics :

1. **Data Storage:** State stores information that a component needs to keep track of and potentially modify during its lifecycle.

2. **Mutable and Local:** Like a variable, state can change its value, but it's local to the component where it's defined, meaning other components can't directly access or modify it.

3. **Dynamic Nature:** It allows components to be dynamic by influencing their behavior and rendering based on changes to its state.

4. **Component-Specific:** Each component can have its own state, acting similarly to individual variables for each instance of a component.

5. **Managed and Controlled:** State is managed internally by React and is controlled by the component logic, enabling UI updates and re-renders when the state changes.

So yes, considering state as a kind of variable within a React component is a valid and helpful analogy to understand its purpose and behavior within the framework.


# Props in react
In React, `props` (short for properties) are a way to pass data from a parent component to a child component. They are read-only and help in creating dynamic and reusable components by allowing values to be passed down the component tree.

### Explanation of Props in React:

#### 1. **Passing Props:**
   - **Parent Component:** Passes data to a child component as attributes.
   - **Child Component:** Receives and utilizes the passed data.

#### 2. **Characteristics:**
   - **Read-Only:** Props cannot be modified by the child component.
   - **Unidirectional Flow:** Data flows from parent to child.

#### 3. **Usage:**
   - **Data:** Information, functions, or any value that needs to be accessed by a child component.
   - **Configuration:** Customizing behavior or appearance of child components.

### Example of Props in React:

#### **Parent Component:**
```javascript
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const greeting = 'Hello,';
  const username = 'John';

  return (
    <div>
      {/* Passing props 'greeting' and 'username' to ChildComponent */}
      <ChildComponent greeting={greeting} username={username} />
    </div>
  );
};

export default ParentComponent;
```

#### **Child Component:**
```javascript
import React from 'react';

const ChildComponent = (props) => {
  // Accessing props passed from ParentComponent
  return (
    <div>
      <p>{props.greeting} {props.username}</p>
    </div>
  );
};

export default ChildComponent;
```

In this example:

- `ParentComponent` renders `ChildComponent` and passes two props: `greeting` and `username`.
- `ChildComponent` receives the props via its function parameters (`props`) and uses them to render a greeting message.

### Notes on Props:

- **Dynamic Data:** Props enable dynamic rendering by allowing components to receive and display changing data.
- **Reusability:** Components become reusable as they can be configured differently based on props.
- **Consistency:** Props maintain a unidirectional flow of data, promoting a predictable data flow within the application.
- **Immutability:** Props should not be modified directly within the child component to maintain data integrity and avoid side effects.

Props in React facilitate the passing of data from parent to child components, allowing for the creation of flexible and reusable components that can be configured or personalized based on specific needs.
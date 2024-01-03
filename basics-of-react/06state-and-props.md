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


## Props Example 

- [main.jsx](#mainjsx)
- [App.jsx](#appjsx)
- [components/Card.jsx](#componentscardjsx)

Sure, here's a cleaner version of the code with added comments:

#### `components/Card.jsx`
```javascript
import React from 'react';

// Component for displaying a card
function Card({ username, btnText = 'visit me' }) {
  // Displays the card with user details and a button
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        {/* Displays the username */}
        <h1 className="text-lg font-semibold text-white">{username}</h1>
        <p className="mt-2 text-sm text-gray-300">
          {/* Placeholder text */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          {/* Displays the button text */}
          {btnText} →
        </button>
      </div>
    </div>
  );
}

export default Card;
```

#### `App.jsx`
```javascript
import { useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  // State for the count
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Title */}
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      {/* Renders two Card components */}
      <Card username="nayansayaji" btnText="click me" />
      <Card username="xyz" />
    </>
  );
}

export default App;
```

#### `main.jsx`
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';

// Renders the App component inside root
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```


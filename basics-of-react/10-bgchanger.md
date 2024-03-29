# Background color changer using Props and `useState()`

- [Setting up project](#project-setup)
- [components/Button.jsx](#componentsbuttonjsx)
- [App.jsx](#appjsx)
- [State Lifting in React](#state-lifting-in-react)
  - [Example](#appjsx)
  - [Features of State Lifting](#features-of-state-lifiting)


## Project setup -

### Create vite app
```
npm create vite@latest
```
```
$ npm create vite@latest
√ Project name: ... vite-react-app
? Select a framework: » - Use arrow-keys. Return to submit.
    Vanilla
    Vue
>   React (select react for react app)
    Preact
    Lit
    Svelte
    Solid
    Qwik
    Others
```

#### Navigate to the project directory:
```bash
cd my-react-app
```
`or`

Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.
```bash
npm create vite@latest my-project -- --template react
cd my-project
```

### Install tailwind - 
Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### Start the development server:
```bash
npm run dev
```

### [=> Access Project Here](https://github.com/NayanSayaji/react-projects/tree/main/bg-changer)

#### `App.jsx`
```javascript
import { useState } from "react";
import Button from "./components/Buttons"
function App() {
  const [backgroundColor, setBackgroundColor] = useState("olive");

  // Array of colors
  const colors = ["red", "green", "blue","yellow","crimson","cyan","grey","brown","black","olive"];

  return (
    <div className="w-full h-screen duration-1000" style={{ backgroundColor }}>
      <div className="flex flex-wrap justify-center align-middle pt-40 font-bold uppercase underline ">{backgroundColor}</div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colors.map((color, index) => (
            <Button
              key={index}
              color={color}
              onClick={() => setBackgroundColor(color)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
```

#### `components/Button.jsx`

```javascript
// Button component that receives color and onClick function as props

const Button = ({ color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: color }}
    >
      {color.charAt(0).toUpperCase() + color.slice(1)}
    </button>
  );
};

export default Button;
```

### Project Demo
<video src="../assets/bg-changer.mp4" controls title="Title"></video>
Let's start by explaining state lifting in React using the provided code as an example.

### State Lifting in React

State lifting refers to the process of managing and sharing state between components in a React application. It involves lifting the state up to a common ancestor component that needs to share the state with its descendants.

In the given code:

### App.jsx

```javascript
import { useState } from "react";
import Button from "./components/Buttons";

function App() {
  // State declaration using the useState hook
  const [backgroundColor, setBackgroundColor] = useState("olive");

  // Array of colors
  const colors = ["red", "green", "blue", "yellow", "crimson", "cyan", "grey", "brown", "black", "olive"];

  return (
    <div className="w-full h-screen duration-1000" style={{ backgroundColor }}>
      {/* Displaying the current background color */}
      <div className="flex flex-wrap justify-center align-middle pt-40 font-bold uppercase underline ">{backgroundColor}</div>
      
      {/* Button container */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {/* Mapping through colors and rendering buttons */}
          {colors.map((color, index) => (
            <Button
              key={index}
              color={color}
              onClick={() => setBackgroundColor(color)} // onClick function to update the background color
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
```

### Explanation:

1. `App` Component:
   - Manages the `backgroundColor` state using `useState` hook. It initializes the state with the default color "olive".
   - Renders a div with the current `backgroundColor` as its style.
   - Renders a set of buttons (using the `Button` component) based on the `colors` array.
   - Passes down an `onClick` handler to each button that updates the `backgroundColor` state when a button is clicked.

### components/Button.jsx

```javascript
// Button component that receives color and onClick function as props
const Button = ({ color, onClick }) => {
  return (
    <button
      onClick={onClick} // Trigger the onClick function passed from the parent component
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: color }} // Set button's background color based on the prop
    >
      {/* Capitalize and display the color name */}
      {color.charAt(0).toUpperCase() + color.slice(1)}
    </button>
  );
};

export default Button;
```

### Explanation:

1. `Button` Component:
   - Receives `color` and `onClick` function as props from the parent (`App`) component.
   - Renders a button element with:
     - The specified `color` as its background color.
     - Text content, where the color name is capitalized.
   - Executes the `onClick` function when the button is clicked, triggering the state update in the parent (`App`) component.

### State Lifting:

- **State Management:** The `backgroundColor` state is managed in the `App` component using the `useState` hook.
- **State Passing:** The `backgroundColor` state value is passed down to the `Button` component as a prop called `color`.
- **State Modification:** The `onClick` handler passed from the `App` component to the `Button` component modifies the `backgroundColor` state in the `App` component when a button is clicked.

This way, the state (`backgroundColor`) is lifted up to the common ancestor (`App`) and shared with its descendant (`Button`) component to manage and update the background color of the app.


Absolutely, here's a breakdown of state lifting in React:

---

### Features of state lifiting 

State lifting is a pattern in React used to manage and share state between components by moving the state to a higher-level component in the component tree. 
It involves the following key aspects:

#### 1. **Centralized State Management:**

- **Higher-Level Component:** State lifting involves identifying a higher-level component, often termed as a "container" or "parent" component, that holds the shared state data.
  
#### 2. **Passing State as Props:**

- **State as Props:** The higher-level component passes down the necessary state data as props to its child components.
- **Read-Only Nature:** Child components receive the state data as props and utilize it for rendering purposes. They cannot directly modify this data; instead, they interact with it through callback functions passed down as props.

#### 3. **Updating State via Callbacks:**

- **Callback Functions:** The higher-level component passes down callback functions as props to allow child components to update the shared state.
- **Indirect State Modification:** Child components trigger these callbacks to inform the parent about the necessary state changes. The parent component then updates its state, triggering a re-render throughout the component tree.

#### 4. **Benefits of State Lifting:**

- **Centralized Control:** By lifting state up to a common ancestor, you have better control and visibility over the shared state and its modifications.
- **Reusable Components:** Encourages the creation of reusable and more modular components by separating state management from the display logic.

#### 5. **Use Cases for State Lifting:**

- **Shared Data:** When multiple components in different branches of the component tree need access to the same data.
- **Syncing State:** Ensuring that changes in one part of the UI are reflected consistently across other related components.

#### 6. **Considerations:**

- **Avoid Overlifting:** Carefully choose which state needs to be lifted to prevent unnecessary complexity and prop drilling in your application.
- **Maintainability:** Keep the codebase understandable by properly documenting the flow of state and its modifications across components.

---

State lifting is a crucial concept in React development, facilitating efficient state management and communication between components in complex applications. It promotes a structured and scalable approach to handling shared data within the component hierarchy.
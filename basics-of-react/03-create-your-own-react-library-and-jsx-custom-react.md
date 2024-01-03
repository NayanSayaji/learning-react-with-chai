# Create your own react library and JSX (Custom React - Basics of how react works under the hood)


### Index:

- **[Create your own React Library and JSX (Custom React - Basics of how React works under the hood)](#create-your-own-react-library-and-jsx-custom-react---basics-of-how-react-works-under-the-hood)**
    - *[index.html](#indexhtml)*
    - *[customReact.js](#customreactjs)*
        - [customRender Function](#customrender-function)
        - [Example React-like Element](#example-react-like-element)
        - [Usage Example](#usage-example)
        - [Simplifications and Limitations](#simplifications-and-limitations)


This index links to the main sections of the provided content, allowing for quick navigation to each specific part.

### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom React App</title>
</head>
<body>
    <div id="root"></div>
    <script src="./customreact.js"></script>
</body>
</html>
```

### customReact.js
```javascript
function customRender(reactElement, container) {
    // Create DOM element based on the type of the React-like element
    const domElement = document.createElement(reactElement.type);

    // Check if the children of the React-like element are strings or nested elements
    if (typeof reactElement.children === 'string') {
        // If the children are strings, set the textContent of the DOM element
        domElement.textContent = reactElement.children;
    } else {
        // If the children are an array of elements, render each one recursively
        reactElement.children.forEach(child => {
            customRender(child, domElement);
        });
    }

    // Loop through props and set attributes or properties on the DOM element
    for (const prop in reactElement.props) {
        if (prop === 'children') continue; // Skip the 'children' prop

        // Check if the prop is a simple attribute or a more complex property
        if (typeof reactElement.props[prop] !== 'object') {
            // Set simple attributes on the DOM element
            domElement.setAttribute(prop, reactElement.props[prop]);
        } else {
            // Set more complex properties directly on the DOM element
            Object.assign(domElement, { [prop]: reactElement.props[prop] });
        }
    }

    // Append the created DOM element to the provided container
    container.appendChild(domElement);
}

// Example React-like element with nested children
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: ['Click me to visit Google', {
        type: 'span',
        props: {
            className: 'highlight',
        },
        children: ' (opens in new tab)'
    }]
};

const mainContainer = document.querySelector('#root');

// Render the React-like element into the DOM
customRender(reactElement, mainContainer);
```

Certainly! Here are some notes that explain key aspects of the provided code:

### `customRender` Function:
- **Purpose:** Mimics a simplified version of React's rendering mechanism by converting React-like elements into DOM elements and rendering them into a specified container.
- **Parameters:**
  - `reactElement`: Represents a React-like element containing `type`, `props`, and `children`.
  - `container`: Represents the DOM container where the rendered element will be appended.

### `customRender` Function Workflow:
1. **Creating DOM Element:**
   - Creates a DOM element (`<tagName>`) based on the `type` specified in the `reactElement`.

2. **Handling Children:**
   - Determines whether the `children` of the `reactElement` are strings or nested elements.
   - If the `children` are strings, sets the `textContent` of the created DOM element.
   - If the `children` are an array of elements, iterates through each and recursively calls `customRender` to render them.

3. **Setting Attributes/Properties:**
   - Loops through `props` of the `reactElement`.
   - If a prop is not `'children'`:
     - If it's a simple attribute (non-object type), sets it using `setAttribute()` on the DOM element.
     - If it's a more complex property (object type), directly sets it on the DOM element using `Object.assign()`.

4. **Appending to Container:**
   - Appends the created DOM element to the provided `container`.

### Example React-like Element:
- **Structure:**
  - `type`: Specifies the HTML tag name or custom component.
  - `props`: Contains attributes and properties to be set on the DOM element.
  - `children`: Represents the content within the element, which can be a string or an array of nested elements.

### Usage Example:
- Creates a React-like element (`reactElement`) representing an anchor (`<a>`) with nested children (text and a `<span>`).
- Specifies `href` and `target` attributes for the anchor.
- Renders the `reactElement` into the DOM by calling `customRender` with the `mainContainer` as the rendering target.

### Simplifications and Limitations:
- This implementation is highly simplified and lacks many features and optimizations of React.
- It doesn't handle event listeners, component lifecycle, state management, or reconciliation, which are core aspects of React's rendering.

This code provides a basic understanding of how React-like elements can be transformed into DOM elements and rendered onto a web page, but it's essential to recognize its limitations in comparison to the comprehensive functionality provided by React itself.

This revised version of `customRender` function handles nested elements by iterating through an array of children. Additionally, it considers handling object-type props. However, keep in mind that this is a simplified example and doesn't cover all aspects of React rendering.

Learning and experimenting in this way is great for understanding the basics, but for a full-scale library, React's sophisticated rendering mechanisms and optimizations would be necessary.

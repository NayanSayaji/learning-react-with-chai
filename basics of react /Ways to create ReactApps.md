# Ways to create ReactApps

- [Using CDN links of react & react-dom](#1creating-a-react-app-using-html-css-and-javascript-with-cdn-links)
- [Using create-react-app CLI](#2creating-a-react-app-using-create-react-app-cli)
    - [Project Structure](#Project-Structure)
    - [3 main files in CRA](#You-should-know-about-the-3-files-mainly)
    - [ReactDOM.render() and ReactDOM.createRoot().render()](#ReactDOM.render())
- [Using Vite CLI](#3creating-a-react-app-using-vite-cli)


### Pre-requisite
```
NodeJs should be installed if not the install nodejs first.
```

## 1.Creating a React App using HTML, CSS, and JavaScript with CDN Links

Below is an example of how you can create a simple React app using HTML, CSS, and JavaScript along with React and ReactDOM via CDN links.

### HTML File (`index.html`)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>React App</title>
  <!-- React CDN links -->
  <script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
  <!-- Your custom CSS -->
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="root"></div>

  <!-- Your JavaScript - React Components -->
  <script src="app.js"></script>
</body>
</html>
```

### JavaScript File (`app.js`)
```JavaScript
// Your React components
function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is a simple React app using CDN links.</p>
    </div>
  );
}

// Render your React app
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

### CSS File (`styles.css`)
```css
/* Your custom styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

/* Add your styles for the components */

```

This structure allows you to create a basic React app using CDN links for React and ReactDOM. 
You can write your components in app.js, define styles in styles.css, and connect them in the index.html file.
For production applications, it's advisable to use package managers and build tools to manage dependencies and optimize your code.
[Read about package bundler here](../package%20bundler.md)


## 2.Creating a React App using create-react-app CLI

`create-react-app` is a command-line tool provided by the React team to generate a new React application with a pre-configured setup. It simplifies the initial setup process by handling dependencies, build configurations, and development environments.

### Installation

Before using `create-react-app`, ensure you have Node.js and npm (Node Package Manager) installed on your system.

To install `create-react-app` globally, run the following command:

```bash
npm install -g create-react-app
```
Replace my-react-app with your preferred app name. This command creates a new directory with the specified name and sets up a basic React project inside it.

### Creating a New React App
To generate a new React application, execute the following command in your terminal:
```bash
npx create-react-app my-react-app
```

### Project Structure

The `create-react-app` command generates a project structure with the following folders and files:

- `node_modules`: Contains project dependencies.
- `public`: Includes the HTML template and static assets like images.
- `src`: Holds the React application source code.
  - `index.js`: Entry point for React rendering.
  - `App.js`: Default component representing the main app.
  - `App.css`: Default styles for the main app.
- `package.json`: Configuration file with project metadata and dependencies.
- `package-lock.json`: Lock file specifying exact versions of dependencies.


### You should know about the 3 files mainly
- index.html
- app.js
- index.js

index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>React App</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```
### Role:
- Provides the base HTML structure for the React application.
- Includes the root <div> element where React components are rendered.

### Usage:
- Serves as the entry point for the React app.
- The <div id="root"></div> is the placeholder where the React components will be mounted/rendered by ReactDOM.render() in index.js.

app.js
```javascript
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App!</h1>
        {/* Other components and content */}
      </header>
    </div>
  );
}

export default App;
```
### Role:
- Represents the main application component.
- Structures the layout and includes child components.

### Usage:
- Renders components and manages the overall structure of the app.
- Handles state, logic, and data flow within the application.

index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// we can render in this way this is a so called stable render no need to remember
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// or can render like this using createRoot method
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Role:
- Initializes React and ReactDOM libraries.
- Renders the root component (App) into the DOM.
### Usage:
- Renders the React application into the HTML document.
- Utilizes the ReactDOM.render() method to attach the root component to the HTML root element.

///////////////////////////////////////////////////

## ReactDOM.render() and ReactDOM.createRoot().render() -

### ReactDOM.render()

**Method Purpose:**

`ReactDOM.render()` is the standard method used to render a React element into the DOM.

**Usage:**

- It takes two arguments: the React element to render and the target DOM node where the element should be rendered.
- It initializes the provided React element within the target DOM node, replacing its content.

### ReactDOM.createRoot().render()

**Method Purpose:**

`ReactDOM.createRoot()` is an experimental method introduced in React 16.9 as part of concurrent mode, allowing the creation of a root instance for rendering React elements.

**Usage:**

- It returns a root instance on which you can call the `.render()` method to render React elements into the DOM.
- This method is intended for experimental features or future optimizations and isn't recommended for general use in stable production applications.

### Key Differences

- `ReactDOM.render()` is the standard method used for rendering React elements into the DOM and is widely used in most React applications.
- `ReactDOM.createRoot().render()` is an experimental method, primarily used for advanced features like concurrent mode or experimental improvements to the rendering pipeline. It allows creating a root instance and rendering React elements but isn't recommended for general use yet due to its experimental nature.

///////////////////////////////////////////////////

## Available Scripts

After creating the app, navigate into the project folder (`cd my-react-app`) and you can use the following npm scripts:

- `npm start`: Starts the development server. It opens the app in the default browser and auto-refreshes on code changes.
- `npm build`: Builds the app for production. It optimizes and bundles the code for deployment.
- `npm test`: Runs the test suite for the app.
- `npm eject`: **Caution**: Ejects the project from `create-react-app` configuration. It exposes all configuration files for customization.

## Customization and Configuration

`create-react-app` provides a pre-configured setup to start developing immediately. However, it allows some level of customization:

- **Adding Dependencies**: Use `npm` or `yarn` to add additional dependencies required for your project.
- **Customizing Environment Variables**: Modify `.env` files to set environment-specific variables. (No need to know about this at beginner level.)

```
Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline,
so you can use it with any backend you want. Under the hood, it uses Babel and webpack,
but you don’t need to know anything about them.


A package manager, such as Yarn or npm.
      It lets you take advantage of a vast ecosystem of third-party packages, and easily install or update them.
A bundler, such as webpack or Parcel.
      It lets you write modular code and bundle it together into small packages to optimize load time.
A compiler such as Babel.
      It lets you write modern JavaScript code that still works in older browsers.
```
## Conclusion

Using `create-react-app` is an efficient way to start a new React project with minimal setup. It provides a solid foundation, allowing developers to focus on building the application rather than configuring the build environment.

```
create-react-app is a bulky way of creating react app.
So nowadays this is not recommended instead vite CLI is
widely used one.
```

## 3.Creating a React App using vite CLI

# Ways to create ReactApps

- [Using CDN links of react & react-dom](#cli-react-react-dom)
- Using create-react-app CLI
- Using Vite CLI


### Pre-requisite
```
NodeJs should be installed if not the install nodejs first.
```

### Creating a React App using HTML, CSS, and JavaScript with CDN Links

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

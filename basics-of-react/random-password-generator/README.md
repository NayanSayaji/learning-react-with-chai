# React + Vite


#### Navigate to the project directory:
```bash
cd random-password-generator
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

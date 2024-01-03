# Random Password Generator

## Using `useState(), useEffect(), useRef(), useCallback()` hooks

- [Introduction](#introduction)
- [Hooks Used](#importing-hooks)
- [States Used](#states-used)
- [Functions](#functions)
    - `passwordGenerator()`
    - `copyToClipBoard()`
- [Effects](#effects)
    - `useEffect()`
- [User Interface](#user-interface)
- [Event Handling](#event-handling)
- [Overall Flow](#overall-flow)



## Introduction

The Random Password Generator is a React-based application designed to dynamically create secure and customizable passwords. Leveraging the power of React's core features and hooks like `useState`, `useEffect`, `useRef`, and `useCallback`, this project provides users with a flexible interface to generate passwords based on their specified criteria.

### [=> Access Project Here](https://github.com/NayanSayaji/react-projects/tree/main/random-password-generator)


### Key Features

- **Dynamic Password Generation:** Users can define the length of the password and choose to include numbers and special characters.
- **Clipboard Copy:** Generated passwords can be easily copied to the clipboard for convenient usage.
- **Interactive UI:** The interface offers intuitive controls for adjusting password length and selecting character types.
- **Real-time Updates:** Changes in criteria instantaneously reflect in the generated password.

### Functionality Breakdown

- **State Management:** Utilizes `useState` to manage password-related states such as length, inclusion of numbers, special characters, and the generated password itself.
- **Ref for Interaction:** Employs `useRef` to create a reference for the password input field, facilitating easy selection and copying.
- **Generation Logic:** Implements `useCallback` to create the password generation logic based on the user-defined criteria.
- **Effects Handling:** Utilizes `useEffect` to trigger password generation when relevant state changes occur.


### Importing hooks

```javascript
import { useState, useEffect, useRef, useCallback } from "react";
```

### States Used:

- `useState`: Manages states for:
  - `length`: Password length.
  - `numberAllowed`: Toggle for including numbers.
  - `characterAllowed`: Toggle for including special characters.
  - `password`: Holds the generated password.

```javascript
const [length, setLength] = useState(8); // State for password length
const [numberAllowed, setNumberAllowed] = useState(false); // State for allowing numbers in password
const [characterAllowed, setcharacterAllowed] = useState(true); // State for allowing special characters in password
const [password, setPassword] = useState(""); // State for storing generated password
```

- `useRef`: Creates a reference for the password input field.

```javascript
const passwordRef = useRef(null); // Creating a reference using useRef for password input
```

### Functions

#### `passwordGenerator()`

- Generates passwords based on user-defined criteria:
  - Initializes an empty password string `pass`.
  - Defines a string `str` containing uppercase, lowercase letters.
  - Appends numbers (`0123456789`) and special characters (`!@#$%^&*-_+=[]{}~\`) to `str` based on user selection.
  - Generates a password by randomly selecting characters from `str` according to the defined length.
  - Sets the generated password in the `password` state.

```javascript
// Function to generate a password based on conditions
const passwordGenerator = useCallback(() => {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if (numberAllowed) str += "0123456789";
  if (characterAllowed) str += "!@#$%^&*-_+=[]{}~`";

  for (let i = 0; i < length; i++) {
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }

  setPassword(pass);
}, [length, numberAllowed, characterAllowed, setPassword]);
```

#### `copyToClipBoard()`

- Copies the generated password to the clipboard.
- Utilizes the `passwordRef` to select and set a range for the password input field.
- Copies the password using `navigator.clipboard.writeText()`.

```javascript
// Function to copy generated password to clipboard
const copyToClipBoard = useCallback(() => {
  passwordRef.current?.select(); // Selecting the password input field

  // Setting a range for selection (0 to 16 characters)
  passwordRef.current?.setSelectionRange(0, 16);

  // Copying the password to clipboard
  window.navigator.clipboard.writeText(password);
}, [password]);
```

### Effects

#### `useEffect()`

- Triggers the `passwordGenerator` function when:
  - `length`, `numberAllowed`, or `characterAllowed` states change.

```javascript
// Generating a new password when length, numberAllowed, or characterAllowed change
useEffect(() => {
  passwordGenerator();
}, [length, numberAllowed, characterAllowed, passwordGenerator]);
```

## User Interface

- Displays a header indicating the purpose of the application.
- Provides an input field to display the generated password.
- Includes a "Copy" button to copy the password to the clipboard.
- Offers controls for:
  - Adjusting password length using a slider.
  - Toggling inclusion of numbers and special characters using checkboxes.

## Event Handling

- Slider's `onChange` updates the `length` state, triggering a password regeneration.
- Checkbox toggles (`numberAllowed` and `characterAllowed`) trigger password updates.
- "Copy" button's `onClick` event copies the password to the clipboard.

```javascript
return (
  <>
    {/* Header */}
    <h1 className="w-full max-w-lg mx-auto py-4 shadow-md rounded-lg px-4 my-12 bg-gray-700 text-4xl text-center text-orange-400">
      Random Password Generator Using React
    </h1>

    {/* Password input and controls */}
    <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-400 bg-gray-700 ">
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        {/* Password input field */}
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        {/* Copy button */}
        <button
          onClick={copyToClipBoard}
          className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-zero"
        >
          Copy
        </button>
      </div>
      {/* Controls for password length, numbers, and characters */}
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          {/* Slider for password length */}
          <input
            type="range"
            min={6}
            max={32}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor="">{length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          {/* Checkbox for including numbers */}
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          {/* Checkbox for including characters */}
          <input
            type="checkbox"
            defaultChecked={characterAllowed}
            id="characterInput"
            onChange={() => {
              setcharacterAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  </>
);

export default App;
```
## Overall Flow

- User interactions with sliders and checkboxes dynamically update password generation criteria.
- Password updates are reflected instantly in the input field.
- Clicking the "Copy" button allows users to copy the generated password to the clipboard.

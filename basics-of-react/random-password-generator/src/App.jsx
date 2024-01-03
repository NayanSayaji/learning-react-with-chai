import { useState, useEffect, useRef, useCallback } from 'react';

function App() {
  const [length, setLength] = useState(8); // State for password length
  const [numberAllowed, setNumberAllowed] = useState(false); // State for allowing numbers in password
  const [characterAllowed, setcharacterAllowed] = useState(true); // State for allowing special characters in password
  const [password, setPassword] = useState(""); // State for storing generated password

  const passwordRef = useRef(null); // Creating a reference using useRef for password input

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

  // Function to copy generated password to clipboard
  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select(); // Selecting the password input field

    // Setting a range for selection (0 to 16 characters)
    passwordRef.current?.setSelectionRange(0, 16);

    // Copying the password to clipboard
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // Generating a new password when length, numberAllowed, or characterAllowed change
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  return (
    <>
      {/* Header */}
      <h1 className='w-full max-w-lg mx-auto py-4 shadow-md rounded-lg px-4 my-12 bg-gray-700 text-4xl text-center text-orange-400'>Random Password Generator Using React</h1>

      {/* Password input and controls */}
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-400 bg-gray-700 '>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          {/* Password input field */}
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          {/* Copy button */}
          <button
            onClick={copyToClipBoard}
            className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-zero">
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
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
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
  )
}

export default App

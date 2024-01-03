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

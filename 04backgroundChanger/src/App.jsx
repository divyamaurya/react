import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("Red");
  return (
    <div>
      <div
        className="w-full h-screen duration-200"
        style={{ background: bgColor }}
      >
        <div className="fixed flex-wrap justified-center bottom-12 inset-x-0 px-2">
          <button onClick={() => setBgColor("Red")}>Red</button>
          <button onClick={() => setBgColor("Green")}>Green</button>
          <button onClick={() => setBgColor("Blue")}>Blue</button>
          <button onClick={() => setBgColor("White")}>White</button>
        </div>
      </div>
    </div>
  );
}

export default App;

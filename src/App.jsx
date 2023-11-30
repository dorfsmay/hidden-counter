import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [, setRerender] = useState(false);
  const hidden = useRef(0);

  useEffect(() => {
    const now = new Date();
    console.log(`${now.toISOString()}: rendering`);
  });

  return (
    <main>
      <div className="counters">
        <div>{counter}</div>
        <div> {hidden.current} </div>
      </div>
      <div className="buttons">
        <button onClick={() => setCounter((x) => x + 1)}>counter</button>
        <button onClick={() => setRerender()}>render</button>
        <button onClick={() => (hidden.current = hidden.current + 1)}>
          hidden
        </button>
      </div>
    </main>
  );
}

export default App;

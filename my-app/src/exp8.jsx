import React, { useState } from "react";
import "./exp8.css"; // Imports its own specific stylesheet

function Exp8_Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="outer-frame">
      <div className="counter-container">
        <h1>React Counter<br />Application</h1>
        <h2 className="counter">{count}</h2>
        
        <div className="button-row">
          <button className="btn-blue" onClick={() => setCount(count + 1)}>Increment (+)</button>
          <button className="btn-blue" onClick={() => setCount(count - 1)}>Decrement (-)</button>
        </div>
        
        <div className="button-row">
          <button className="btn-blue btn-reset" onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Exp8_Counter;
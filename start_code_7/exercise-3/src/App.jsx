import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");
  const [result, setResult] = useState("");

  /* You will need some function to handle the key pressed and button events */
  function onA(e) {
    setValueA(e.target.value);
  }

  function onB(e) {
    setValueB(e.target.value);
  }

  function onCompute(e) {
    if (valueA.trim() === "" || valueB.trim() === "") {
      alert("Please enter values for A and B!");
      return;
    } 

    let a = parseFloat(valueA);
    let b = parseFloat(valueB);

    if (isNaN(a) || isNaN(b)) {
      setResult("A and B shall be numbers!");
      return;
    }
    
    setResult(a + b);
  }
  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled value={result} 
             className={result === "A and B shall be numbers!" ? "error" : ""}
      />
      <button onClick={onCompute}>Compute</button>
    </main>
  );
}

export default App;

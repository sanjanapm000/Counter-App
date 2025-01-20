import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0); 

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const reset = () => setCount(0);

  return (
    <div className="App">
      <h1> Counter App</h1>

      <div className="counter">
        <h2>{count}</h2>
        <div>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;

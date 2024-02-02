// import logo from './logo.svg';
// import './App.css';
import "./index.css";
import { useState } from "react";
import Problem1 from "./Problem1.js";
import Problem2 from "./Problem2.js";
import Problem3 from "./Problem3.js";



function App() {
  let [count, setcount] = useState(0);

  const handleIncrement = () => {
    setcount(count + 1);
  };

  const handleDecrement = () => {
    setcount(count - 1);
  };

  const reset = () => {
    setcount(0);
  };

  return (
    <div className="App">
      <div className="numberWrapper shadow">
        <h1>Number Increment</h1>
        <h1> {count} </h1>
        <div className="btn">
          <button onClick={handleDecrement}>-</button>
          <button onClick={reset}>x</button>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
      <Problem1></Problem1>
      <Problem2></Problem2>
      <Problem3></Problem3>
     
      
    </div>
  );
}

export default App;

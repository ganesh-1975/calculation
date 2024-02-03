// import logo from './logo.svg';
// import './App.css';
import "./index.css";
import { useState } from "react";
import Problem1 from "./Problem1.js";
import Problem2 from "./Problem2.js";
import {
  Primenumber,
  Leapyear,
  CalculateBMI,
  Ageband,
  Guessnumber,
} from "./Problem3.js";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function Counter() {
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
    </div>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="linkWrapper">
          <Link to={"counter"} className="stylelink">Counter</Link>
          <Link to={"multiplier"} className="stylelink">Multiplier</Link>
          <Link to={"pallindrome"} className="stylelink">Check Pallindrome </Link>
          <Link to={"primenumber"} className="stylelink">Check PrimeNumber</Link>
          <Link to={"leapyear"} className="stylelink">Check LeapYear </Link>
          <Link to={"bmi"} className="stylelink">Calculate BMI</Link>
          <Link to={"ageband"} className="stylelink">Check AgeBand</Link>
          <Link to={"guessnumber"} className="stylelink">Guess Number</Link>
        </nav>
        <Routes>
          <Route path="counter" element={<Counter />} />
          <Route path="multiplier" element={<Problem1 />} />
          <Route path="pallindrome" element={<Problem2 />} />
          <Route path="primenumber" element={<Primenumber />} />
          <Route path="leapyear" element={<Leapyear />} />
          <Route path="bmi" element={<CalculateBMI />} />
          <Route path="ageband" element={<Ageband />} />
          <Route path="guessnumber" element={<Guessnumber />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

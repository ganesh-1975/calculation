import { useState, useEffect } from "react";

function Problem3() {
  return (
    <>
      <Primenumber></Primenumber>
      <Leapyear></Leapyear>
      <CalculateBMI></CalculateBMI>
      <Ageband></Ageband>
      <Guessnumber></Guessnumber>
    </>
  );
}

function Primenumber() {
  let [primecount, setprimecount] = useState("");
  let [inputNum, setinputNum] = useState(1);

  const handleInput = (e) => {
    setinputNum(e.target.value);
  };

  const checkPrimeNumber = () => {
    for (let i = 2; i < inputNum; i++) {
      if (inputNum % 2 === 0) {
        setprimecount("it is not a Prime number");
      } else {
        setprimecount("It is a Prime Number");
      }
    }
  };

  return (
    <div className="wrapper">
      <div className="border_box shadow">
        <h1>Check Prime Number</h1>
        <input onChange={handleInput} type="text" value={inputNum} />
        <button onClick={checkPrimeNumber}>Check Prime Num</button>
        <h1>{primecount}</h1>
      </div>
    </div>
  );
}

function Leapyear() {
  let [inputYear, setinputYear] = useState(2024);
  let [leapCount, setleapCount] = useState("");

  let handleLeap = () => {
    if (inputYear % 4 === 0) {
      setleapCount("It is Leap Year");
    } else {
      setleapCount("It is not a Leap Year");
    }
  };

  useEffect(() => {
    if (inputYear < 1900 || inputYear > 2200) {
      console.error("invalid Year");
    }
  }, [inputYear]);

  return (
    <div className="leapYear border_box shadow">
      <h1>Check Leap Year</h1>
      <input
        value={inputYear}
        type="number"
        onChange={(e) => {
          setinputYear(e.target.value);
        }}
      />
      <button onClick={handleLeap}>Check LeapYear</button>
      <h1>{leapCount}</h1>
    </div>
  );
}

function CalculateBMI() {
  let [inputheight, setinputheight] = useState("");
  let [inputweight, setinputweight] = useState("");
  let [bmicount, setbmicount] = useState("");

  let handlebmi = () => {
    let heightinmeter = inputheight / 100;
    let bmiResult = inputweight / (heightinmeter * heightinmeter);
    setbmicount(bmiResult.toPrecision(3));
  };

  useEffect(() => {
    console.log("mounted, something changes");
  }, []);

  useEffect(() => {
    console.log("updating");
  });

  return (
    <div className="bmi border_box shadow">
      <h1>Check BMI</h1>
      <input
        type="number"
        value={inputheight}
        onChange={(e) => setinputheight(e.target.value)}
        placeholder="Enter Height"
      />
      <br></br>
      <input
        type="number"
        value={inputweight}
        onChange={(e) => setinputweight(e.target.value)}
        placeholder="Enter Weight"
      />
      <br></br>
      <button onClick={handlebmi}>Calculate BMI</button>
      <h1>{bmicount}</h1>
    </div>
  );
}

export function Ageband() {
  let [inputAge, setinputAge] = useState("");
  let [agecount, setagecount] = useState("");

  let handleAgeBand = () => {
    if (inputAge < 11) {
      setagecount("KID");
    } else if (inputAge > 10 && inputAge < 20) {
      setagecount("TEEN");
    } else {
      setagecount("Adult");
    }
  };

  return (
    <div className="age border_box shadow">
      <h1>Check AgeBand</h1>
      <input
        value={inputAge}
        onKeyUp={handleAgeBand}
        onChange={(e) => setinputAge(e.target.value)}
        placeholder="Enter Age"
      />
      <h1>{agecount}</h1>
    </div>
  );
}

export function Guessnumber() {
  let [inputnumtoguess, setinputnumtoguess] = useState(0);
  let [guesscount, setguesscount] = useState("");
  let [score, setscore] = useState(10);
  let [random1to10, setrandom1to10] = useState(() => {
    let randomNum = Math.random();
    return Math.floor(randomNum * 10 + 1);
  });

  let handleGuess = () => {
    if (inputnumtoguess == random1to10) {
      setguesscount("You are Correct");
      alert("You Won");
    } else {
      setguesscount("You are Wrong");
      score = score - 1;
      setscore(score);
    }
  };

  return (
    <div className="guessNum border_box shadow">
      <h1>Guess the Number 1 to 10</h1>
      <input
        type="number"
        onChange={(e) => setinputnumtoguess(e.target.value)}
        value={inputnumtoguess}
      />
      <button onClick={handleGuess}>Check</button>
      <h2>{guesscount}</h2>
      <p> score : {score}</p>
    </div>
  );
}

export default Problem3;
export {Primenumber}
export {CalculateBMI}
export {Leapyear}
import { useState } from "react";

function Problem2() {
  let [count, setcount] = useState();
  let [input, setinput] = useState("");

  const handleInput = (e) => {
    setinput(e.target.value);
  };

  const checkPallin = () => {
    let inValue = input;
    let stringArr = inValue.split("");
    let reverseArr = stringArr.reverse();
    let reverseStr = reverseArr.join("");

    setcount(inValue === reverseStr);

  };

  return (
    <div className="wrapper">
      <div className="border_box shadow">
        <h1>Check Pallindrome</h1>
        <input onChange={handleInput} onKeyUp={checkPallin} type="text" value={input} placeholder="Enter text" />
        {/* <button onClick={checkPallin}>Check Pallindrome</button> */}
        {count && <h1>It is a pallindrome</h1>}
        {!count && <p>It is not a pallindrome</p>}
      </div>
    </div>
  );
}

export default Problem2;

import {useState} from "react";

function Problem1() {
  let [num1, setnum1] = useState(1)
  let [num2, setnum2] = useState(1)
  let [multipliedValue, setmultipliedValue] = useState(1)


  

  const multiplyNum = () => {
    setmultipliedValue(num1 * num2)
  }

  const handleNum1 = (e) => {
    setnum1(e.target.value)
  }

  const handleNum2 = (e) => {
    setnum2(e.target.value)

  }


  return (
      <div className="numberWrapper shadow">
        <h1>Multiplier</h1>
        <h1> {multipliedValue} </h1>
        <div className="btn">
            <Myinput onChange={handleNum1} />
            {/* <Myinput onChange={handleNum1} value={num1} name="userNum1"/> */}
            <button onClick={multiplyNum}>x</button>
            <Myinput onChange={handleNum2}  />
            {/* <Myinput onChange={handleNum2} value={num2} name="userNum2" /> */}
        </div>
      </div>
  );

}

export default Problem1;

const Myinput = (prop) => {

    let handleNum1 = prop.onChange
    let num1 = prop.value
    let name = prop.name
   return <> <input onChange={handleNum1} value={num1} name = {name} className="userNum" type="number"/> </>
   
}
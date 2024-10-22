import { useState } from "react";

//state uplifiting:creating useState in parent so that any child can have access to it  
//  passing state and setState as props to child, so that anyone(par/child) can modify and consume it.
//reason to use useEffect
const Test = ({ count, updateCount }) => {
  //   console.log(count);
  function increase() {
    updateCount(count + 1);
  }
  return (
    <>
      <h1>Count:{count}</h1>
      <button onClick={increase}>Increase from Child</button>
    </>
  );
};

function UpLifting() {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }
  return (
    <>
      <Test count={count} updateCount={setCount} />
      <br></br>
      <button onClick={increase}>Increase from Parent</button>
    </>
  );
}

export default UpLifting;

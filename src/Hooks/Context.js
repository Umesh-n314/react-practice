import "./context.scss";
import { createContext, useState, useContext } from "react";

const CounterContext = createContext("abcd");
//if a component is outside the Provider then, use context returns default context value, which is passed.
const A = () => {
  const { count, setCount } = useContext(CounterContext);
  const incrementCount = () => {
    setCount((p) => p + 1);
  };
  return (
    <div className="box">
      {/* <h4>Inside A age:{user?.age}</h4> */}
      <h4>Inside A count:{count} </h4>
      <button onClick={incrementCount}>Increase count</button>
    </div>
  );
};

const B = () => {
  const { count, setCount } = useContext(CounterContext);
  const decrementCount = () => {
    setCount((p) => p - 1);
  };
  return (
    <div className="box">
      {/* <h4>Inside B age: {user?.age}</h4> */}
      <h4>Inside B count:{count} </h4>
      <button onClick={decrementCount}>Decrease count</button>
    </div>
  );
};

export const Parent = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="parent">
      <CounterContext.Provider value={{ count, setCount }}>
        <h2>Inside Parent count : {count} </h2>
        <B />
        <A></A>
      </CounterContext.Provider>
      {/* <A/> outside the provider recieves defalut value */}
    </div>
  );
};

// you can call component in two ways
// <A></A>  opening & closing tag => when a has children or you dont want pass children as props
// <B /> self closeing tag => when no childrens to B
// we can also Provide multiple contexts to a child.

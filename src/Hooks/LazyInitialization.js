import { useState } from "react";

const findSum = () => {
  let sum = 0;
  const n = 3000;
  console.log("findsum Called")
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

//if we pass findsum() in useState it will call findsum func every time when state is updated, and increase the component rendering time.
// so simply pass findsum to useState, it will call during first render only and update the state directly without calling findSum again in next renders.

// Lazy initialisation : we can pass a function as an argument to the useState method so that it will ensure to call that callback during first render only
export default function LazyInitialization() {
  const [count, setCount] = useState(findSum);

  return (
    <>
      <h4>Counter :{count}</h4>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    </>
  );
}

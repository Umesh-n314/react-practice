import { useEffect, useState } from "react";

/**
 *  Signature of useEffect:
 *      useEffect takes 2 args:
 *          1.callback func
 *          2.dependency list (optional)
 *       and do not return anything or returns disposer function, must be used inside a function/comp
 */
//useEffect(func) will act like both componentDidMount and componentDidUpdate
//useEffect(func, []) empty dependency list will act like componentDidMount
//useEffect(func, [x,y,z]) dependency list will act like componentDidMount and componentDidUpdate when there is an update or change in the atleast one list item

// let x = 19;
// const Effect = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log("inside useEff func");
//   }, [x]);

//   return (
//     <>
//       <h5>UseEffect: {count}</h5>
//       <button onClick={() => ++x}>Increase X</button>
//       <button
//         onClick={() => {
//           setCount((x) => x + 1);
//         }}
//       >
//         Increase Count
//       </button>
//     </>
//   );
// };

//useEffect as a componentDidUnmount
//useEffect will return a cleanUp/disposer function which is called by react after the child is unmounted, unlike in classComponent componentWillUnmount where it is executed just before the child unmount.
const Child = () => {
  useEffect(() => {
    //effect / sideeffect
    console.log("inside useEff func");
    return function () {
      // cleanUp/disposer function
      console.log("executed after child removed");
    };
  }, []);
  return <h3>Child</h3>;
};
const Effect = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <h5>componentWillUnmount</h5>
      {toggle && <Child />}
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Delete Child
      </button>
    </>
  );
};
export default Effect;

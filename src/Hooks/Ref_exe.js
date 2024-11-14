import { useEffect, useRef, useState } from "react";

//useRef => creates an object in the first render(mounting) of the component and serves the same object across all other re renders.
//useRef donot considers the valuse passed from second render onwards,gives error.
//useRef(x)=> returns {current:x}
//useRef can be used to maintain single memory reference accross multiple re renders of the component.
// where as useState is used when the data is mutable and component should render for every change of the state of a variable.
// const arr = [];
// // const obj = { name: "umesh" };
// export const Reference_Exe = () => {
//   const [count, setCount] = useState(0);
//   let obj = useRef({ name: "umesh" });
//   //   const obj = { name: "umesh" };
//   console.log(obj);
//   arr.push(obj);
//   if (arr.length === 2) {
//     console.log(arr[0], arr[1]);
//     console.log(arr[0] === arr[1]);
//     // obj = useRef({ name: "arvind" }); //gives error if you try to call conditionally
//   }

//   return (
//     <div>
//       <h1>Count :{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Inc</button>
//     </div>
//   );
// };

//example
//we can interact directly with native html elements, without using querySelected ot getElementById or classname methods
//and changes can be done without re rendering of the component as we are directly mutating the native elements
export const Reference_Exe = () => {
  const [count, setCount] = useState(0);
  let user = useRef({ name: "umesh", age: 24 });
  let btnRef = useRef(null);

  useEffect(() => {
    console.log(btnRef);
    console.log(btnRef.current.innerText);
    btnRef.current.innerText = "Custom AGE Text";
  }, []);

  const incrementAge = () => {
    user.current.age++;
    console.log(user.current.age);
  };
  return (
    <div>
      <h1>Count:{count}</h1>
      <p>
        <b>Name :{user.current.name} </b> <i> age:{user.current.age}</i>
      </p>
      <button ref={btnRef} onClick={incrementAge}>
        Increment Age
      </button>
      <button onClick={() => setCount(count + 1)}>Inc Count</button>
    </div>
  );
};

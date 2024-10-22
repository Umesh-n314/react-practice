import { useState } from "react";

export function ArrayPrimitive() {
  const [arr, setArr] = useState(["umesh", "veeresh", "vamsi"]);
  const [name,newName]=useState("");
  function addName(){
    setArr([...arr,name]);
    newName("");
  }
  function setName(e){
      newName(e.target.value)
  }
  return <>
  <input placeholder="Enter Name" value={name} onChange={setName}  />
  <button onClick={addName}>Add Name to List</button>
  <ul>
    {arr.map((x,index)=>{
      return <li key={index}>{x}</li>
    })}
  </ul>
  </>;
}

export default function NonPrimitives() {
  const [user, setUser] = useState({ name: "umesh", age: 21 }); //user @ #200
  const incrementAge = () => {
    user.age++;
    // setUser(user) //#200 this will not update the age, because user is at same address in heap memory
    console.log(user.age);
    setUser({ ...user }); //#500 new object/array is created using spread operator for user so address in memory changes
  };
  return (
    <>
      <div>
        Name: {user.name}, Age: {user.age}
      </div>
      <button onClick={incrementAge}>Inc Age</button>
    </>
  );
}

import { memo } from "react";
import { useState } from "react";

const A = memo(({ a }) => {
  console.log("inside A");
  return (
    <div>
      <p>Inside Component A</p>
      <p>The value of a:{a}</p>
    </div>
  );
});

const MemoExample = () => {
  console.log("Inside Memo Example");
  const [toggleMemo, setToggleMemo] = useState(false);
  return (
    <div>
      <h5>Inside MemoExample</h5>
      <A a={15} />
      <button onClick={() => setToggleMemo(!toggleMemo)}>
        Toggle MemoExample Component
      </button>
    </div>
  );
};

export default MemoExample;
//global state => is a state which can be modified/Changed from anywhere in the application

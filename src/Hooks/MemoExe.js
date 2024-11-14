import { useMemo } from "react";
import { useState } from "react";
const sumOfN = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

function MemoExe() {
  const [toggle, setToggle] = useState(true);
  const [n, setN] = useState(5);

  const sum = useMemo(() => {
    return sumOfN(n);
  }, [n]);

  return (
    <div>
      <p>
        Sum of first {n} numbers :{sum}
      </p>
      <button onClick={() => setN((prev) => prev + 1)}>Increase N</button>
      <button onClick={() => setToggle(!toggle)}>Toggle the Comp</button>
    </div>
  );
}

export default MemoExe;

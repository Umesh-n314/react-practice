import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const n = 100;
function Home() {
  const navigate =useNavigate();
  // console.log(navigate);
  const findsum = () => {
    let sum = 0;
    for (let i = 1; i <= n; i++) sum += i;
    // console.log(sum);
    if (sum % 2 === 0) {
      return navigate('/about');
    }
  };
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">About</Link> <br></br>
      <button onClick={findsum}>Find Sum and Navigate</button>
    </div>
  );
}

export default Home;

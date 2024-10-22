import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Counter from "../FunctionalComponents/Counter"

export default function AppPages() {
  return (
    <div className="App">
      <p>
        <a href="/Home">Home </a>
      </p>
      <a href="/About"> About</a>
      <p>
        <a href="/Counter">Counter </a>
      </p>

      <BrowserRouter>
        <Routes>
          <Route path="Home" element={<Home />}></Route>
          <Route path="About" element={<About />}></Route>
          <Route path="Counter" element={<Counter/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

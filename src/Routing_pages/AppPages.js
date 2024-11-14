import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const RoutesPages = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<h2>404 Page Not Found</h2>}></Route>
          <Route path="/home/*" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/product/:prodId"
            element={<h1>Product View</h1>}
          ></Route>
          <Route
            path="/Blinkit/cn/:catName/cid/:catId/:prodId"
            element={<h1>Categories</h1>}
          ></Route>
        </Routes>
        <Link to="/home">To Home</Link>
      </BrowserRouter>
    </>
  );
};

export default function AppPages() {
  return (
    <div className="pages">
      <h2>Inside App Pages </h2>
      <RoutesPages />
    </div>
  );
}

// if html anchor tags are used to post the url / routing to the pages bundle.js is reloaded every time and page gets loaded again and again, so use Link Component provided by React-Router-Dom
// <div className="anchor-tags">
// <p>
//   <a href="/home">Home </a>
// </p>
// <p>
//   <a href="/about"> About</a>
// </p>
// </div>

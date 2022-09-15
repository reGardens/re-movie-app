import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Counter } from "../../../features/counter/Counter";

// styles
import "./style.scss";

// pages
import Dashboard from "../Dashboard";
import More from "../More";
import Details from "../Details";

function App() {
  return (
    <div className="App">
      <nav>
        <div className="left">
          <p>TestLogo</p>
        </div>
        <div className="right">
          <Link to="/">Home</Link>
          <Link to="details/:id">Detail</Link>
          {/* <Link to="detail">Popular</Link> */}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="more" element={<More />} />
        {/* <Route path="rating" element={<Rating />} /> */}
      </Routes>
    </div>
  );
}

export default App;

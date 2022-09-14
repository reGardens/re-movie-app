import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { Counter } from '../../../features/counter/Counter';

// styles
import "./style.scss";

// pages
import Popular from "../Popular";
import Dashboard from "../Dashboard";

function App() {
  return (
    <div className="App">
    <nav>
      <div className="left">
        <p>TestLogo</p>
      </div>
      <div className="right">
        <Link to="/">Home</Link>
        {/* <Link to="detail">Popular</Link> */}
      </div>
    </nav>

    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="detail/:id" element={<Popular />} />
      {/* <Route path="rating" element={<Rating />} /> */}
    </Routes>
  </div>

    // <div className="App">
      
      // {/* <header className="App-header">
      //   <Counter />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <span>
      //     <span>Learn </span>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org/"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       React
      //     </a>
      //     <span>, </span>
      //     <a
      //       className="App-link"
      //       href="https://redux.js.org/"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Redux
      //     </a>
      //     <span>, </span>
      //     <a
      //       className="App-link"
      //       href="https://redux-toolkit.js.org/"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Redux Toolkit
      //     </a>
      //     ,<span> and </span>
      //     <a
      //       className="App-link"
      //       href="https://react-redux.js.org/"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       React Redux
      //     </a>
      //   </span>
      // </header> */}
    // </div>
  );
}

export default App;

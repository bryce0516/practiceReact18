import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import CounterScreen from "./counter";
import TodoScreen from "./todo";

function App() {
  return (
    <div className="App">
      <nav>
      <Link to="/">todo</Link>
      <Link to="/counter">counter</Link>
      </nav>
      <Routes>
        <Route path="/" element={<TodoScreen />} />
        <Route path="counter" element={<CounterScreen />} />
      </Routes>
    </div>
  );
}

export default App;

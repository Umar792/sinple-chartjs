import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Wraper from "./Wraper";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wraper>Home</Wraper>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

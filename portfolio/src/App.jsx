import { useState } from "react";
import Home from "./containers/home/Home";
import About from "./containers/about/About";
import Work from "./containers/work/Work";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="flex justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/work" element={<Work />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="App bg-gradient-to-tl from-primary/35 via-secondary/35 to-indigo-100">
        <header className="shadow-sm">
          <div className="container mx-auto flex justify-center items-center">
            <div className="flex">
              <img
                src="/logo.png"
                alt="FungiFusion Logo"
                className="h-14 p-2"
              />
              <h1 className="p-2 text-2xl">FungiFusion</h1>
            </div>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

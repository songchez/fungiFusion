import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="bg-slate-900 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <img src="/logo.png" alt="FungiFusion Logo" className="h-20" />
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link to="/" className="btn btn-ghost text-lg">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="btn btn-ghost text-lg">
                    About Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

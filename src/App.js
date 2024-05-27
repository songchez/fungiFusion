import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="bg-gray-100 py-5 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <img
              src="path/to/logo.png"
              alt="FungiFusion Logo"
              className="h-12"
            />
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link to="/" className="text-gray-800 text-lg">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-800 text-lg">
                    About Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Features from "./components/Features";
import About from "./components/About";
import SuccessStories from "./components/SuccessStories";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

const App = () => (
  <div className="w-full min-h-screen">
    <NavBar />
    <Banner />
    <Features />
    <About />
    <SuccessStories />
    <CallToAction />
    <Footer />
  </div>
);

export default App;

import React from "react";

const About = () => (
  <div className="container mx-auto py-16 flex flex-col lg:flex-row items-center">
    <div className="lg:w-1/2 flex flex-col items-start mb-8 lg:mb-0">
      <h2 className="text-4xl font-bold">What is FungiFusion?</h2>
      <p className="mt-4">Discover the core services of our platform.</p>
      <button className="btn btn-primary mt-6">Explore More</button>
    </div>
    <div className="lg:w-1/2">
      <div className="w-44 h-44 bg-zinc-300 opacity-50" />
    </div>
  </div>
);

export default About;

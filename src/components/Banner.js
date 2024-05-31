import React from "react";
import ThreeDSquare from "./ThreeDSquare";

const Banner = () => (
  <div className="hero min-h-[70vh] bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">
          Turn Your Ideas into Reality with FungiFusion!
        </h1>
        <p className="py-6">
          Innovative ideas coming together to shape a new future.
        </p>
        <button className="btn btn-primary">Get Started Now</button>
      </div>
      <div className="flex-shrink-0">
        <ThreeDSquare />
      </div>
    </div>
  </div>
);

export default Banner;

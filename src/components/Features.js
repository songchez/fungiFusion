import React from "react";

const Features = () => (
  <div className="container mx-auto py-16">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold">Key Features of FungiFusion</h2>
      <p className="mt-4">Explore the innovative features of our platform.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: "Virtual Credit Investment",
          description:
            "Safely invest using virtual credits and cash out when successful.",
        },
        {
          title: "Real-time Feedback",
          description: "Improve ideas with real-time feedback.",
        },
        {
          title: "Data-driven Decisions",
          description: "Use data for better decision-making.",
        },
        {
          title: "Mentoring Program",
          description: "Benefit from mentoring sessions with experts.",
        },
      ].map((feature) => (
        <div key={feature.title} className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Features;

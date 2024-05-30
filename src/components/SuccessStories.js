import React from "react";

const SuccessStories = () => (
  <div className="container mx-auto py-16">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold">Success Stories</h2>
      <p className="mt-4">Explore stories of successful entrepreneurs.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          name: "Kim Hyuk-shin",
          story: "Achieved success through FungiFusion.",
        },
        {
          name: "Entrepreneur X",
          story: "Transformed ideas into profitable ventures.",
        },
        {
          name: "Entrepreneur Y",
          story: "Found success with community support.",
        },
      ].map((story) => (
        <div key={story.name} className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex items-center mb-4">
              <div className="avatar">
                <div className="w-16 rounded-full bg-zinc-300 opacity-50" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-medium">{story.name}</h3>
              </div>
            </div>
            <p>{story.story}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SuccessStories;

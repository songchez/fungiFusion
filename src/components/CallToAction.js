import React from "react";

const CallToAction = () => (
  <div className="container mx-auto py-16">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold">Join FungiFusion Today!</h2>
      <p className="mt-4">
        Sign up now and start your entrepreneurial journey.
      </p>
    </div>
    <form className="max-w-md mx-auto">
      <div className="form-control mb-4">
        <label className="label" htmlFor="name">
          <span className="label-text">Name</span>
        </label>
        <input
          className="input input-bordered"
          id="name"
          type="text"
          placeholder="Enter your name"
          required
        />
        <p className="mt-1 text-xs text-gray-500">
          Must be at least 3 characters
        </p>
      </div>
      <div className="form-control mb-4">
        <label className="label" htmlFor="email">
          <span className="label-text">Email</span>
        </label>
        <input
          className="input input-bordered"
          id="email"
          type="email"
          placeholder="Enter your email"
          required
        />
        <p className="mt-1 text-xs text-gray-500">
          We'll send verification link
        </p>
      </div>
      <div className="form-control mb-6">
        <label className="label" htmlFor="password">
          <span className="label-text">Password</span>
        </label>
        <input
          className="input input-bordered"
          id="password"
          type="password"
          placeholder="Enter your password"
          required
        />
        <p className="mt-1 text-xs text-gray-500">Minimum 8 characters</p>
      </div>
      <button className="btn btn-primary w-full">Start for Free</button>
    </form>
  </div>
);

export default CallToAction;

import React from "react";

const NavBar = () => (
  <div className="navbar bg-base-100 shadow">
    <div className="flex-1">
      <button className="btn btn-ghost normal-case text-xl font-['Marck Script']">
        <img className="w-9 h-9 mr-1" src="/logo.png" alt="Logo" />
        FungiFusion
      </button>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal p-0">
        {["Home", "About Us", "Success Stories", "Community", "Sign Up"].map(
          (item) => (
            <li key={item}>
              <button>{item}</button>
            </li>
          )
        )}
      </ul>
    </div>
  </div>
);

export default NavBar;

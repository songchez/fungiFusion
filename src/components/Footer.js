import React from "react";

const Footer = () => (
  <footer className="bg-base-200 py-10 text-base">
    <div className="container mx-auto text-center">
      <div className="flex justify-center mt-4 gap-4">
        {["Twitter", "LinkedIn", "Instagram"].map((platform) => (
          <button key={platform} href="#" className="text-xl">
            {platform}
          </button>
        ))}
      </div>
      <p className="text-lg">&copy; 2024 FungiFusion. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;

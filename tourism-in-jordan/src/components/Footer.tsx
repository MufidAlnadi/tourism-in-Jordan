import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 fixed bottom-0 w-full mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">&copy; 2023 All rights reserved.</div>
        <div className="text-sm">
          Made with <span className="text-red-500">&hearts;</span> by Me
        </div>
      </div>
    </footer>
  );
};

export default Footer;

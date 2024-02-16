import React from "react";

const Navbar = () => {
  return (
    <nav className="flex sm:max-md:justify-between justify-around bg-blue-800 text-white text-xl h-12 items-center py-5 lg:px-10 sm:px-2">
      <div className="logo">
        <span className="font-bold text-2xl ">Task Tracker</span>
      </div>
      <ul className="flex gap-10 text-lg">
        <li className="cursor-pointer hover:font-semibold transition-all duration-75">
          Home
        </li>
        <li className="cursor-pointer hover:font-semibold transition-all duration-75">
          Your Tasks
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import { Menu, X } from "lucide-react";

import React, { useState } from "react";
import { BsCoin } from "react-icons/bs";

const Navbar = ({ coins }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "Fixture", "Teams", "Schedules"];
  return (
    <div>
      <nav className=" mx-auto  w-full z-50 fixed left-0 top-0 bg-white  mb-15 shadow-md">
        <div className="w-5/6 mx-auto">
          <div className=" flex justify-between items-center h-[80px]">
            {/* logo */}
            <div className="logo">
              <img
                src="/assets/logo.png"
                alt="logo"
                className="h-[60px] w-auto"
              />
            </div>
            {/* coin in mobile */}
            <a
              href="#"
              className="md:hidden absolute left-1/2 transform -translate-x-1/2 text-black flex items-center gap-2"
            >
              {coins.toLocaleString()} Coin
              <BsCoin className="text-yellow-500" />
            </a>
            {/* desktop menu */}
            <div className="hidden md:flex space-x-6 gap-8 items-center capitalize text-gray-500 justify-items-stretch">
              {navItems.map((item) => (
                <a key={item} href="#" className="">
                  {item}
                </a>
              ))}
              <a
                href="#"
                className="btn bg-transparent border text-black border-gray-300 px-5 py-3 rounded-xl flex items-center gap-2"
              >
                {coins.toLocaleString()} Coin
                <BsCoin className="text-yellow-500" />
              </a>
            </div>

            {/* mobile menu btn */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {/* mobile dropdown */}

        <div
          className={`
    md:hidden bg-white absolute top-[80px] left-0 w-full z-50 shadow-lg
    transform transition-all duration-300 ease-in-out
    ${
      isOpen
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 -translate-y-5 pointer-events-none"
    }
  `}
        >
          {navItems.map((item) => (
            <a
              href="#"
              key={item}
              className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-blue-500 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

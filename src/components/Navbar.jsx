import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { name: "Home", section: "home" },
    { name: "Projects", section: "projects" },
    { name: "Contact", section: "contact" },
    { name: "experience", section: "experience" },
    { name: "About Me", section: "about" },
  ];
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = (section) => {
    if (onNavigate) onNavigate(section);
    setIsOpen(false);
  };

  return (
    <nav className="w-full bg-slate-950 fixed z-100 shadow-[0_0_20px_rgba(255,255,255,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex h-16 justify-between items-center">
          <a
            to={"/home"}
            className="bg-gradient-to-r from-slate-100 to-slate-600 uppercase font-bold text-transparent bg-clip-text"
          >
            Bishal
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm uppercase text-white">
            {menuItems.map((item) => (
              <button
                onClick={() => handleClick(item.section)}
                key={item.name}
                className="relative group uppercase cursor-pointer"
              >
                {item.name}
                <span className="absolute w-0 h-[2px] bg-white left-0 bottom-0 transition-all duration-500 ease-in group-hover:w-full"></span>
              </button>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-slate-400 focus:outline-none"
            >
              {isOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden shadow-md mt-2 rounded-b-lg text-white">
          {menuItems.map((item) => (
            <button
              // to={item.to}
              key={item.name}
              onClick={() => handleClick(item.section)}
              className="relative group block p-2 uppercase cursor-pointer"
            >
              {item.name}
              <span className="absolute w-0 h-[2px] bg-white left-0 bottom-0 transition-all duration-500 ease-in group-hover:w-full"></span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

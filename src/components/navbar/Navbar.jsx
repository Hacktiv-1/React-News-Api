import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Search from "./Search";
import NavItem from "./NavItem";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="bg-yellow-500">
        <nav className="w-full mx-auto px-4 sm:px-6 lg:px-8 container">
          <div className="flex items-center justify-between md:justify-between h-16">
            <div className="flex items-center">
              <div className="md:hidden mr-1">
                <button
                  className="inline-flex items-center justify-center p-2 rounded-md text-slate-800 hover:text-slate-800 focus:outline-none"
                  onClick={handleOpen}
                >
                  {isOpen ? <FaTimes /> : <FaBars />}
                </button>
              </div>
              <div className="flex">
                <Link to={"/"}>
                  <h1 className="text-slate-800 font-semibold text-2xl">
                    News
                  </h1>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <NavItem />
              </div>
            </div>
            <div className="sm:ml-10">
              <Search />
            </div>
          </div>
        </nav>
        {isOpen && (
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-yellow-300 md:hidden block">
            <NavItem />
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;

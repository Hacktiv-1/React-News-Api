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
        <nav className="w-full mx-auto px-4  container">
          <div className="flex items-center justify-between md:justify-between h-16">
            <div className="flex items-center">
              <div className="md:hidden mr-2 flex">
                <button
                  className=" text-slate-800 hover:text-slate-800 focus:outline-none"
                  onClick={handleOpen}
                >
                  {isOpen ? <FaTimes /> : <FaBars />}
                </button>
              </div>
              <div className="flex">
                <Link to={"/"}>
                  <h1 className="text-slate-800 font-bold text-2xl">
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
          <div className="  bg-yellow-500 md:hidden absolute w-full  z-10">
            <div className="px-4 pt-2 pb-3 space-y-1 container mx-auto">
              <NavItem onClick={handleOpen}/>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Search from "./Search";
import NavItem from "./NavItem";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
    // console.log(open);
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
                  <h1 className="text-slate-800 font-semibold text-xl">News</h1>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <NavItem
                  style={
                    "text-slate-800 hover:underline transition duration-500"
                  }
                />
              </div>
            </div>
            <div className="sm:ml-10">
              <Search />
            </div>
          </div>
        </nav>
        {isOpen && (
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-yellow-300 block">
            <NavItem
              style={
                "text-slate-800 hover:underline transition duration-500 block"
              }
            />
          </div>
        )}
      </header>
      {/* <div className=" bg-slate-400">
        <div className="flex flex-col sm:flex-row container mx-auto items-center justify-between p-4 space-y-4 sm:space-y-0">
          <div className="space-x-4 font-bold text-slate-800 text-md">
            <Link to="/">Indonesia</Link>
            <Link to="/programming">Programming</Link>
            <Link to="/covid">Covid</Link>
            <Link to="/bookmark">Bookmark</Link>
          </div>
          <div className=" w-full sm:w-[300px]">
            <div className="relative">
              <label htmlFor="Search" className="sr-only">
                {" "}
                Search{" "}
              </label>

              <input
                type="text"
                id="Search"
                placeholder="Search for..."
                className="w-full rounded-md border-gray-200 px-2 py-2.5 pe-10 shadow-sm sm:text-sm"
                value={input}
                onChange={handleInputChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />

              <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                <button
                  type="button"
                  className="text-gray-600 hover:text-gray-700"
                  onClick={handleSearch}
                >
                  <span className="sr-only">Search</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <ul className="flex container mx-auto items-center justify-evenly">
        <li>
          <Link to={"/"}>Indonesia</Link>
        </li>
        <li>
          <Link to={"/programming"}>Programming</Link>
        </li>
        <li>
          <Link to={"/covid"}>Covid-19</Link>
        </li>
        <li>
          <Link to={"/bookmark"}>Bookmark</Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;

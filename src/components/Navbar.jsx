import React, { useState } from "react";
import menu from "../assets/menu.png";
import NavMenuBar from "./NavMenuBar";

const Navbar = () => {
 const [active , setActive] = useState(false)

function handleMenu(){
  {active ? setActive(false) : setActive(true)}
}
  return (
    <header className="w-full h-36">
      {/* Navigation Menu */}
      <NavMenuBar active={active} onClose={() => setActive(false)} />

      {/* Navbar */}
      <div className="flex justify-between items-center w-full max-w-7xl h-36 mix-blend-exclusion z-20 top-0 fixed">
        <div className="font-inter font-bold text-lg">Cultivate</div>

        {/* Desktop and Mobile Menus */}
        <div className="flex gap-10 font-inter">
          {/* Desktop Menu */}
          <ul className="max-w-xs hidden sm:flex">
            <div className="pr-10">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Project</a>
              </li>
            </div>
            <div className="pr-10">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Mockups</a>
              </li>
            </div>
            <div className="pr-10">
              <li>
                <a href="">Skills</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </div>
          </ul>

          {/* Mobile Menu Button */}
          <div
            onClick={handleMenu}
            className="bg-white rounded-lg p-2 sm:hidden cursor-pointer"
          >
            <img src={menu} alt="Menu Icon" className="w-7 h-7" />
          </div>

          {/* Request Button */}
          <div>
            <button className="bg-white text-black py-2 px-8 font-inter font-semibold hidden sm:flex text-sm">
              Request Design
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

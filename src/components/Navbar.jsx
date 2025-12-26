import React, { useState } from "react";
import menu from "../assets/menu.png";
import close from "../assets/exis.png";
import NavMenuBar from "./MobileBar";

const Navbar = ({
  projScroll,
  desigScroll,
  skillsScroll,
  contactScroll,
  homeScroll,
}) => {
  const [active, setActive] = useState(false);

  const handleMenu = () => {
    setActive(prev => !prev);
  };
  const handleWidth = () =>{
    window.innerWidth > 640 && setActive (false)
  }
  const navigationLinks = [
    { name: "Home", action: homeScroll },
    { name: "Projects", action: projScroll },
    { name: "Designing", action: desigScroll },
    { name: "Skills", action: skillsScroll },
    { name: "Contact", action: contactScroll },
  ];

  return (
    <header className="w-full h-36">
    <NavMenuBar
        active={active}
        links={navigationLinks}
        onClose={() => setActive(false)}
      />
   
      {/* Navbar */}
      <div className="fixed top-0   z-50 flex justify-between items-center w-full max-w-7xl h-36  pr-10 mix-blend-exclusion">
        <div className="font-inter font-bold text-lg ">Richard Parado</div>

        <div className="flex items-center gap-6 font-inter">
          {/* Desktop Menu */}
          <ul className="hidden sm:flex gap-8">
            {navigationLinks.map(link => (
              <li
                key={link.name}
                onClick={link.action}
                className="cursor-pointer hover:text-red-300"
              >
                {link.name}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={handleMenu}
            className="bg-white rounded-lg p-2 sm:hidden mr-2"
          >
            <img src={active ? close : menu} alt="Menu" className="w-7 h-7" />
          </button>

          {/* Desktop Button */}
          <button
            onClick={contactScroll}
            className="hidden sm:block bg-white text-black py-2 px-8 font-semibold text-sm"
          >
            Request Design
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

import React, { useState } from 'react';

const UserComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative w-full">
      {/* Toggle Button */}
      <button
        onClick={toggleMenu}
        className="bg-blue-500 text-white py-2 px-4 rounded-md fixed top-4 left-4 z-50"
      >
        {isMenuOpen ? 'Close Menu' : 'Open Menu'}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/90 text-white z-40 flex flex-col items-center justify-center">
          <ul className="text-2xl space-y-4">
            <li className="hover:underline">
              <a href="#home">Home</a>
            </li>
            <li className="hover:underline">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:underline">
              <a href="#about">About</a>
            </li>
            <li className="hover:underline">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserComponent

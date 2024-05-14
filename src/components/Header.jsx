import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="catcream text-black py-4 mt-3">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="grid grid-cols-4">
          <div>
            <img className="w-20" src="./friskay.png" alt="" />
          </div>
          <div className="pl-9 md:pl-10 pt-1">|</div>
          <div className="font-medium text-lg md:pl-4 pt-1">Home</div>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-10">
            <li>
              <a href="#" className="text-lg font-bold hover:text-darkcream">
                Our Food
              </a>
            </li>
            <li>
              <a href="#" className="text-lg font-bold hover:text-darkcream">
                Ingredients
              </a>
            </li>
            <li>
              <a href="#" className="text-lg font-bold hover:text-darkcream">
                Studies
              </a>
            </li>
            <li>
              <a href="#" className="text-lg font-bold hover:text-darkcream">
                FAQ
              </a>
            </li>
          </ul>
        </nav>
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M3 18h18v-2H3v2zM3 11h18V9H3v2zm0-7v2h18V4H3z"
            ></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col items-center mt-4">
            <li>
              <a href="#" className="text-lg font-bold hover:text-darkcream">
                Our Food
              </a>
            </li>
            <li>
              <a href="#" className="text-lg font-bold hover:text-darkcream">
                Ingredients
              </a>
            </li>
            <li>
              <a href="#" className="text-lg font-bold hover:text-darkcream">
                Studies
              </a>
            </li>
            <li>
              <a href="#" className="text-lg font-bold hover:text-darkcream">
                FAQ
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

/* eslint-disable react/prop-types */
import { useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import NavCategory from "./NavCategory";

function NavCategories({ categories }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu open/close state
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="basis-1/3  z-10">
      {/* Hamburger / Close Icon */}

      <button
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      >
        {isMenuOpen ? (
          <XMarkIcon className="h-6 w-6 text-black" />
        ) : (
          <Bars3Icon className="h-6 w-6 text-black" />
        )}
      </button>

      {/* Navigation Menu */}
      <ul
        className={`flex absolute  top-full  flex-col border-t-2 border-black   sm:flex-row sm:static    sm:border-none sm:justify-between sm:max-w-full ${
          isMenuOpen ? "block" : "hidden"
        } sm:flex`}
      >
        {categories.map((category) => (
          <NavCategory key={category.id} category={category} />
        ))}
      </ul>
    </div>
  );
}

export default NavCategories;

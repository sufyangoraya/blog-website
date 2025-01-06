"use client";

import React, { useState } from "react";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 p-4 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <h1 className="text-xl font-bold dark:text-gray-100">
          Marshal <span className="text-blue-500">Blog</span>
        </h1>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="lg:hidden text-gray-800 dark:text-gray-200 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Links (Desktop) */}
        <div className="hidden lg:flex space-x-6">
          <a
            href="#home"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            About
          </a>
          <a
            href="#blogs"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            Blogs
          </a>
          <a
            href="#contact"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            Contact
          </a>
        </div>

        {/* Dark Mode Toggle */}
        <ModeToggle />
      </div>

      {/* Dropdown Menu (Mobile) */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 space-y-2">
          <a
            href="#home"
            className="block text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            Home
          </a>
          <a
            href="#about"
            className="block text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            About
          </a>
          <a
            href="#blogs"
            className="block text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            Blogs
          </a>
          <a
            href="#contact"
            className="block text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

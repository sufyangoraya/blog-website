"use client";

import React, { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { IoIosSearch } from "react-icons/io";
// import { Link } from "lucide-react";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

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
        <div className="hidden lg:flex space-x-6 relative">
          {/* Trading */}
          <div className="group relative">
            <a
              href="#Trading"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
            >
              Trading
            </a>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white dark:bg-gray-700 shadow-lg rounded-md p-4 w-48">
              <ul className="space-y-2">
                {[
                  "Trade",
                  "CFDs",
                  "Options",
                  "Markets",
                  "Forex",
                  "Derived Indices",
                  "Stocks",
                  "Stock Indices",
                  "Commodities",
                  "Cryptocurrencies",
                  "ETFs",
                  "Tactical Indices",
                  "Tools",
                  "TradingView",
                  "MT5 signals",
                  "Trading Calculator",
                  "Product Explorer",
                  "Trading Central",
                  "Economic Calendar",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Platforms */}
          <div className="group relative">
            <a
              href="#Platforms"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
            >
              Platforms
            </a>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white dark:bg-gray-700 shadow-lg rounded-md p-4 w-48">
              <ul className="space-y-2">
                {[
                  "CFDs",
                  "Deriv MT5",
                  "Deriv cTrader",
                  "Deriv X",
                  "Options",
                  "Deriv Trader",
                  "Deriv Bot",
                  "Deriv GO",
                  "SmartTrader",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Learning and Support */}
          <div className="group relative">
            <a
              href="#LearningSupport"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
            >
              Learning & Support
            </a>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white dark:bg-gray-700 shadow-lg rounded-md p-4 w-48">
              <ul className="space-y-2">
                {[
                  "Learn",
                  "Deriv Academy",
                  "Deriv Blog",
                  "Glossary",
                  "Get support",
                  "Help centre",
                  "Community",
                  "Contact us",
                  "Resources",
                  "Payment methods",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* About */}
          <div className="group relative">
            <a
              href="#About"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
            >
              About
            </a>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white dark:bg-gray-700 shadow-lg rounded-md p-4 w-48">
              <ul className="space-y-2">
                {[
                  "Who we are",
                  "Why choose us",
                  "Regulatory information",
                  "Secure & responsible trading",
                  "Careers",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>
        <div className="flex justify-center items-center gap-4 px-4">
  {/* Log In Button */}
  <Button className="px-4 py-2 font-bold text-black bg-white border border-black rounded-md hover:bg-gray-200">
    Log In
  </Button>
  <br />
  {/* Open Account Button */}
  <Button className="px-4 py-2 font-bold text-white bg-red-500 border border-black rounded-md hover:bg-red-600">
    Open account
  </Button>
</div>


        {/* Dark Mode Toggle */}
        <ModeToggle />
      </div>

      {/* Dropdown Menu (Mobile) */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 space-y-2">
          {["Trading", "Platforms", "Learning & Support", "About"].map(
            (item) => (
              <a
                key={item}
                href={`#${item}`}
                className="block text-gray-800 dark:text-gray-200 hover:text-blue-500"
              >
                {item}
              </a>
            )
          )}
        </div>
      )}
        
         {/* Search Bar */}
         <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-lg text-black border border-black rounded-md hover:bg-gray-200"
            />
             {/* Search Icon */}
         <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
        </div>

        {/* Navbar Items */}
        <ul className="flex items-center space-x-6 px-10">
          <li>
            <a
              href="#home"
              className="hover:text-blue-300 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className="hover:text-blue-300 transition-colors duration-300"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#forex"
              className="hover:text-blue-300 transition-colors duration-300"
            >
              Forex
            </a>
          </li>
          <li>
            <a
              href="#forex-trading"
              className="hover:text-blue-300 transition-colors duration-300"
            >
              Forex Trading on Deriv
            </a>
          </li>

          {/* Dropdown Menu with Down Arrow */}
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2 hover:text-blue-300 transition-colors duration-300"
            >
              <span>Others</span>
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <ul className="absolute bg-white text-black shadow-lg mt-2 py-2 px-4 rounded-lg space-y-2 w-48">
                <li>
                  <a href="#videos" className="hover:text-blue-500">
                    Videos
                  </a>
                </li>
                <li>
                  <a href="#markets" className="hover:text-blue-500">
                    Markets
                  </a>
                </li>
                <li>
                  <a href="#trade-types" className="hover:text-blue-500">
                    Trade Types
                  </a>
                </li>
                <li>
                  <a href="#platforms" className="hover:text-blue-500">
                    Platforms
                  </a>
                </li>
                <li>
                  <a href="#news" className="hover:text-blue-500">
                    News & Updates
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
    </nav>
  );
};

export default Navbar;

"use client";
import { useState } from "react";
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-6 relative z-50">

      {/* LOGO */}
      <h1 className="text-2xl md:text-3xl font-bold text-green-300 cursor-pointer tracking-tight">
        FloraVision
      </h1>

      {/* DESKTOP NAVIGATION */}
      <ul className="hidden md:flex gap-10 text-base text-gray-300">
        {["Home", "Plants", "New", "Contact"].map((item) => (
          <li
            key={item}
            className="hover:text-green-400 transition duration-300 cursor-pointer relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-green-400 group-hover:w-full transition-all duration-300" />
          </li>
        ))}
      </ul>

      {/* ICONS */}
      <div className="hidden md:flex gap-5 text-[22px] text-gray-300">
        <FiSearch className="cursor-pointer hover:text-green-400 transition duration-300" />
        <FiShoppingCart className="cursor-pointer hover:text-green-400 transition duration-300" />
        <FiUser className="cursor-pointer hover:text-green-400 transition duration-300" />
      </div>

      {/* MOBILE HAMBURGER */}
      <button
        className="md:hidden text-gray-300 text-2xl z-50"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 bg-[#021b11]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10 z-40 transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-8 text-2xl text-gray-200">
          {["Home", "Plants", "New", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:text-green-400 transition duration-300 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="flex gap-8 text-[26px] text-gray-300">
          <FiSearch className="cursor-pointer hover:text-green-400 transition duration-300" />
          <FiShoppingCart className="cursor-pointer hover:text-green-400 transition duration-300" />
          <FiUser className="cursor-pointer hover:text-green-400 transition duration-300" />
        </div>
      </div>

    </nav>
  );
}
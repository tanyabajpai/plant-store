import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-8">
      
      {/* Logo */}
      <h1 className="text-3xl font-bold text-green-300">
        FloraVision
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-8 text-base text-gray-300">
        <li className="cursor-pointer hover:text-green-400 transition">
          Home
        </li>

        <li className="cursor-pointer hover:text-green-400 transition">
          Plants
        </li>

        <li className="cursor-pointer hover:text-green-400 transition">
          New
        </li>

        <li className="cursor-pointer hover:text-green-400 transition">
          Contact
        </li>
      </ul>

      {/* Icons */}
      <div className="flex gap-5 text-xl text-gray-300">
        <FiSearch className="cursor-pointer hover:text-green-400 transition" />

        <FiShoppingCart className="cursor-pointer hover:text-green-400 transition" />

        <FiUser className="cursor-pointer hover:text-green-400 transition" />
      </div>

    </nav>
  );
}
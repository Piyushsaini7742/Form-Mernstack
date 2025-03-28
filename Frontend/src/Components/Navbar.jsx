import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-semibold">
          Form Mernstack Project
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <ul className="hidden md:flex space-x-6 text-white text-lg">
          <li>
            <Link to="/" className="hover:text-gray-300 transition">Home</Link>
          </li>
          <li>
            <Link to="/add" className="hover:text-gray-300 transition">Register</Link>
          </li>
          <li>
            <Link to="/get" className="hover:text-gray-300 transition">Login</Link>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div className="md:hidden bg-blue-700 p-4 text-white space-y-3 text-center">
          <Link to="/" className="block py-2 hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/add" className="block py-2 hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>Register</Link>
          <Link to="/get" className="block py-2 hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

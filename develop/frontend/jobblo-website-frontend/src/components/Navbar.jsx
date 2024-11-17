import React from "react";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold">Jobblo</a>
        <ul className="flex space-x-4">
          <li><a href="#features" className="hover:text-gray-300">Features</a></li>
          <li><a href="#about" className="hover:text-gray-300">About</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          <li><a href="/login" className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100">Login</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

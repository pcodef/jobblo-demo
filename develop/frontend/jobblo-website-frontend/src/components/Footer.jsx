import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; 2024 Jobblo. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://google.com" className="hover:text-gray-400">Facebook</a>
          <a href="https://google.com" className="hover:text-gray-400">Twitter</a>
          <a href="https://google.com" className="hover:text-gray-400">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

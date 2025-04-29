import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-transparent border-b border-gray-200 p-4 backdrop-blur-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-600">
          Protocol
        </Link>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Find something..."
                className="border border-gray-300 rounded-3xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <a href="#" className="text-gray-600 hover:text-green-600">
              API
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600">
              Documentation
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600">
              Support
            </a>
            <a
              href="#"
              className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900"
            >
              Sign In
            </a>
          </div>
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Find something..."
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <a href="#" className="text-gray-600 hover:text-green-600">
            API
          </a>
          <a href="#" className="text-gray-600 hover:text-green-600">
            Documentation
          </a>
          <a href="#" className="text-gray-600 hover:text-green-600">
            Support
          </a>
          <a
            href="#"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900"
          >
            Sign In
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
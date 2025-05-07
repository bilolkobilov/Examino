import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <GraduationCap className="h-7 w-7 text-indigo-600 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-display font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">Examino</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`nav-link ${isActive('/') ? 'text-indigo-600 after:bg-indigo-600' : ''}`}>
              Home
            </Link>
            <Link to="/semesters" className={`nav-link ${isActive('/semesters') ? 'text-indigo-600 after:bg-indigo-600' : ''}`}>
              Semesters
            </Link>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'text-indigo-600 after:bg-indigo-600' : ''}`}>
              About
            </Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'text-indigo-600 after:bg-indigo-600' : ''}`}>
              Contact
            </Link>
          </nav>

          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden absolute w-full bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50 transition-all duration-300 ease-in-out transform ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 animate-slide-down'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="space-y-1 px-4 pb-5 pt-2">
          <Link
            to="/"
            className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
              isActive('/') ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/semesters"
            className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
              isActive('/semesters') ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Semesters
          </Link>
          <Link
            to="/about"
            className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
              isActive('/about') ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
              isActive('/contact') ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-indigo-950 text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-indigo-400" />
              <span className="font-display font-bold text-xl">Examino</span>
            </Link>
            <p className="mt-4 text-sm text-gray-300 max-w-xs">
              Your ultimate resource for B.Tech exam preparation. Excel in your finals with comprehensive subject guides and solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-indigo-400 tracking-wider uppercase">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/semesters" className="text-gray-300 hover:text-white transition-colors">
                    Semesters
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-indigo-400 tracking-wider uppercase">Contact</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start space-x-2">
                  <Mail className="h-4 w-4 text-gray-300 mt-1" />
                  <a href="mailto:bilolkobilov1@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                    bilolkobilov1@gmail.com
                  </a>
                </li>
                <li className="flex items-start space-x-2">
                  <Github className="h-4 w-4 text-gray-300 mt-1" />
                  <a href="https://github.com/bilolkobilov" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                    bilolkobilov
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Examino. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
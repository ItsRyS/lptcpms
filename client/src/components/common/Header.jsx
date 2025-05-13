import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold text-primary">
            Lampang Tech College - IT Department
          </h1>

          <button
            className="md:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>

          <nav className="hidden md:flex space-x-6 text-text">
            <a href="#hero" className="hover:text-accent transition-all-300">
              Home
            </a>
            <a href="#about" className="hover:text-accent transition-all-300">
              About
            </a>
            <a href="#staff" className="hover:text-accent transition-all-300">
              Staff
            </a>
            <a
              href="#programs"
              className="hover:text-accent transition-all-300"
            >
              Programs
            </a>
            <a href="#contact" className="hover:text-accent transition-all-300">
              Contact
            </a>

            <Link
              to="/projects"
              className="hover:text-accent transition-all-300"
            >
              Projects
            </Link>
            <Link
              to="/login"
              className="px-4 py-1 bg-orange-500 text-black rounded hover:hover:bg-orange-600 transition-all-300"
            >
              Login
            </Link>
          </nav>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden flex flex-col space-y-4 py-4 text-text animate-fade-in">
            <a
              href="#hero"
              className="hover:text-accent transition-all-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-accent transition-all-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#staff"
              className="hover:text-accent transition-all-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Staff
            </a>
            <a
              href="#programs"
              className="hover:text-accent transition-all-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Programs
            </a>
            <a
              href="#contact"
              className="hover:text-accent transition-all-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Link
              to="/projects"
              className="hover:text-accent transition-all-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/login"
              className="px-4 py-2 bg-orange-500 text-white rounded inline-block text-center hover:bg-orange-600 transition-all-300 w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

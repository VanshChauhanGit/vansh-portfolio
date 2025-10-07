import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Code2, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const navLinks = [
  { to: "about", label: "About" },
  { to: "skills", label: "Skills" },
  { to: "projects", label: "Projects" },
  { to: "certifications", label: "Certifications" },
  { to: "contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ to, label, onClick }) => (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="text-gray-600 transition-colors duration-300 cursor-pointer hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
      activeClass="text-blue-500 dark:text-blue-400"
      onClick={onClick}
    >
      {label}
    </Link>
  );

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-800"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Code2 className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
              Vansh Chauhan
            </span>
          </Link>

          <nav className="items-center hidden gap-8 md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.to} {...link} />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 transition-colors rounded-full dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <a
              href="/Vansh_Chauhan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
            >
              Resume
            </a>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pb-6 border-b border-gray-200 md:hidden bg-white/95 backdrop-blur-lg dark:bg-gray-900/95 dark:border-gray-800"
        >
          <nav className="flex flex-col items-center gap-6 pt-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                {...link}
                onClick={() => setIsOpen(false)}
              />
            ))}
            <a
              href="/Vansh_Chauhan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-4/5 px-5 py-3 mt-4 text-sm font-semibold text-center text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              Resume
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;

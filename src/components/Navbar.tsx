"use client"
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md py-4 px-6 md:px-12 flex justify-between items-center z-50">
      {/* Logo */}
      <a href="#" className="text-2xl font-bold text-blue-600 dark:text-white">
        Amran.dev
      </a>

      {/* Menu Desktop */}
      <div className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300">
        <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">À Propos</a>
        <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400">Expérience</a>
        <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">Compétences</a>
        <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projets</a>
        <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
      </div>

      {/* Bouton Mode Clair/Sombre */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
      >
        {mounted && theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>

      {/* Menu Mobile */}
      <button className="md:hidden text-gray-700 dark:text-gray-300" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Dropdown Mobile */}
      {isOpen && (
        <div className="absolute top-16 right-6 bg-white dark:bg-gray-800 shadow-lg p-4 rounded-lg md:hidden">
          <a href="#about" className="block py-2 text-gray-700 dark:text-gray-300">À Propos</a>
          <a href="#experience" className="block py-2 text-gray-700 dark:text-gray-300">Expérience</a>
          <a href="#skills" className="block py-2 text-gray-700 dark:text-gray-300">Compétences</a>
          <a href="#projects" className="block py-2 text-gray-700 dark:text-gray-300">Projets</a>
          <a href="#contact" className="block py-2 text-gray-700 dark:text-gray-300">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

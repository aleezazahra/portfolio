import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#F4E2DE] dark:bg-gray-800 dark:text-white border-t-4 border-[#D291BC] dark:border-gray-900 p-4 flex items-center justify-between relative">
    
      <button
        onClick={toggleTheme}
        className="text-black dark:text-white p-2 rounded z-20"
      >
        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>

  
      <button
        className="lg:hidden text-black dark:text-white p-2 z-20"
        onClick={toggleMenu}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <div
        className={`
          lg:flex lg:flex-row lg:gap-10
          ${isOpen ? 'flex fixed inset-0 flex-col justify-center items-center bg-[#F4E2DE] dark:bg-gray-800 gap-6 z-10' : 'hidden'}
          transition-all duration-300
        `}
      >
        <Link
          to="/"
          style={{ fontFamily: "Poppins" }}
          className="text-black dark:text-white text-2xl lg:text-base hover:underline underline-offset-4 decoration-2 decoration-[#9B5E85]"
          onClick={() => setIsOpen(false)}
        >
          Home
          
        </Link>
        <Link
          to="/about"
          style={{ fontFamily: "Poppins" }}
          className="text-black dark:text-white text-2xl lg:text-base hover:underline underline-offset-4 decoration-2 decoration-[#9B5E85]"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          to="/projects"
          style={{ fontFamily: "Poppins" }}
          className="text-black dark:text-white text-2xl lg:text-base hover:underline underline-offset-4 decoration-2 decoration-[#9B5E85]"
          onClick={() => setIsOpen(false)}
        >
          Projects
        </Link>
       
      </div>
    </nav>
  );
}

export default Header;

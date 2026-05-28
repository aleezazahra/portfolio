import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


function Footer(){


     const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [darkMode]);


  const toggleTheme=()=>{
    setDarkMode(!darkMode);
  }
    return (<footer className=" bg-[#F4E2DE] text-black dark:text-gray-400 dark:bg-gray-800 p-6 flex flex-col items-center space-y-3">
  <p className="text-center"> 🩷 Made with coffee and React</p>

  <div className="flex space-x-6">
    <Link to="/" className="text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-500">Home</Link>
    <Link to="/about" className="text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-500">About</Link>
    <Link to="/projects" className="text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-500">Projects</Link>

  </div>
</footer>
    )
}
export default Footer;
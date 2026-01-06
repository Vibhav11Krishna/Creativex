import React, { useState, useEffect } from "react";
import { LogIn } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://ik.imagekit.io/siddharth637/codetutor/TT1.png?updatedAt=1757572626290"
            alt="Logo"
            className="w-16 object-contain" // also reduced logo size slightly
          />
        </div>

        {/* Center Menu */}
        <nav className="flex-1 flex justify-center">
          <div className="flex gap-10 px-6 py-2 rounded-lg">
            {["Home", "About", "Features", "Solution","Our Team", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative uppercase text-sm text-gray-800 font-medium transition group"
                >
                  {item}
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            )}
          </div>
        </nav>

        {/* Login */}
        <Link
          to='/login'
          className="flex items-center gap-2 px-3 py-1.5 ml-6 text-sm font-medium text-gray-800 rounded-full border-transparent transition hover:bg-blue-300 hover:border-blue-600"
        >
          <LogIn size={16} /> {/* slightly smaller icon */}
          LOGIN
        </Link>
      </div>
    </header>
  );
};

export default Navbar;

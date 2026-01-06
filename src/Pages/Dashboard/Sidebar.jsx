import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaChartLine,
  FaSignOutAlt,
  FaBook,
  FaUsers,
  FaMapMarkedAlt,
  FaFileAlt,
  FaRocket,
  FaBriefcase // ✅ Icon for PioneerPlatform
} from "react-icons/fa";
import Logo from "../../assets/Logocx.png";

const Sidebar = () => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  const links = [
    { name: "Profile", path: "profile", icon: <FaUser className="text-xl" /> },
    { name: "Progress", path: "progress", icon: <FaChartLine className="text-xl" /> },
    { name: "E-Learning", path: "elearning", icon: <FaBook className="text-xl" /> },
    { name: "Community", path: "community", icon: <FaUsers className="text-xl" /> },
    { name: "Roadmap", path: "roadmap", icon: <FaMapMarkedAlt className="text-xl" /> },
    { name: "Resume", path: "resume", icon: <FaFileAlt className="text-xl" /> },
    { name: "Insights", path: "insights", icon: <FaRocket className="text-xl" /> },
    { name: "Pioneer Platform", path: "pioneer", icon: <FaBriefcase className="text-xl" /> } // ✅ New section
  ];

  const handleLogout = () => {
    setClicked(true);
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="bg-white text-[#0B1F5C] w-64 h-screen p-6 flex flex-col justify-between fixed shadow-md z-40 border-r border-gray-200">
    
      <div>
        <div className="flex justify-center mb-6">
          <img
            src={Logo}
            alt="Creativex Logo"
            className="h-10 w-auto object-contain"
            onError={(e) => (e.target.style.display = "none")}
          />
        </div>

        <h2 className="text-sm font-semibold uppercase tracking-wide mb-6 text-center text-[#0B1F5C]/70">
          Dashboard
        </h2>

       
        <nav className="mt-6 space-y-5" aria-label="Main navigation">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#0B1F5C] text-white border-l-4 border-white shadow-md"
                    : "bg-white text-[#0B1F5C] hover:bg-[#E2E8F0]"
                }`
              }
            >
              {link.icon}
              <span>{link.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      
      <button
        onClick={handleLogout}
        aria-label="Logout"
        className={`mt-10 flex items-center gap-3 px-4 py-2 rounded-md font-medium transition ${
          clicked
            ? "bg-white text-[#0B1F5C] border border-[#0B1F5C]"
            : "bg-red-500 text-white hover:bg-red-600"
        }`}
      >
        <FaSignOutAlt className="text-xl" />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
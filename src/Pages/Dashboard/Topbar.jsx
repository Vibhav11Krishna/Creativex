import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaBell } from "react-icons/fa";

const Topbar = () => {
  const navigate = useNavigate();
  const profile = JSON.parse(localStorage.getItem("userProfile")) || {};
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const now = new Date();
  const time = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const date = now.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const currentHour = now.getHours();
  const greeting =
    currentHour < 12
      ? "Good Morning"
      : currentHour < 18
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <div className="bg-white px-6 py-6 flex items-center justify-between text-sm font-medium text-[#0B1F5C] border-b border-gray-200 relative z-20">
      
      <div className="flex items-center gap-4">
        <span className="text-base font-semibold">📚 Student Dashboard</span>
      </div>

      
      <div className="absolute left-1/2 transform -translate-x-1/2 text-sm text-[#0B1F5C]">
        {date} — {time}
      </div>

    
      <div className="flex items-center gap-4">
        <span className="hidden sm:inline">
          {greeting}, {profile.name || "Student"} 
        </span>

        <button
          className="text-gray-700 hover:text-[#0B1F5C] transition"
          title="Notifications"
        >
          <FaBell className="text-lg" />
        </button>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="flex items-center gap-2 px-3 py-1 bg-white hover:bg-gray-100 rounded-md border border-gray-300 text-gray-700 transition"
          >
            <FaUserCircle className="text-lg" />
            {profile.name || "Student"}
          </button>

          {open && (
            <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg w-40 z-30">
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-600"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
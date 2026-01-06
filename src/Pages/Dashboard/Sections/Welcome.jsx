import React from "react";
import { FaUserCircle, FaRocket } from "react-icons/fa";

const Welcome = () => {
  const profile = JSON.parse(localStorage.getItem("userProfile")) || {};
  const firstName = profile.firstName || "User";

  return (
    <div className="h-screen bg-gray-100 font-sans flex items-center justify-start px-6">
      <div className="bg-white rounded-xl shadow-md p-10 text-center max-w-2xl w-full ml-120">
        <h1 className="text-5xl font-extrabold text-[#0B1F5C] tracking-tight mb-6 flex items-center justify-center gap-3">
          Welcome, Student!
          <FaUserCircle className="text-[#0B1F5C]" />
        </h1>

        <p className="text-lg text-[#0B1F5C] mb-4">
          Your personalized dashboard is ready. Let’s get started!
        </p>

        <p className="text-md text-[#0B1F5C] mb-2">
          Use the sidebar to explore your tools, insights, and journey.
        </p>

        <p className="mt-6 text-[#0B1F5C] italic flex items-center justify-center gap-2">
          <FaRocket className="text-[#0B1F5C]" />
          “Creativity is intelligence having fun.” — Albert Einstein
        </p>
      </div>
    </div>
  );
};

export default Welcome;
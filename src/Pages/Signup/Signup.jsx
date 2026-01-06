import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Education from "../../assets/Education.png";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const existing = JSON.parse(localStorage.getItem("userProfile")) || {};
    const updated = {
      ...existing,
      fullName: formData.fullName,
      email: formData.email
    };

    localStorage.setItem("userProfile", JSON.stringify(updated));
    navigate("/onboarding");
  };

  return (
    <div className="min-h-screen flex">
     
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white rounded-lg p-8 shadow-lg mx-6">
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: "#0B1F5C" }}>
            Create Your Account
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: "#0B1F5C" }}>
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border border-[#0B1F5C] rounded-md focus:outline-none focus:ring-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: "#0B1F5C" }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-[#0B1F5C] rounded-md focus:outline-none focus:ring-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: "#0B1F5C" }}>
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a strong password"
                className="w-full px-4 py-2 border border-[#0B1F5C] rounded-md focus:outline-none focus:ring-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: "#0B1F5C" }}>
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter your password"
                className="w-full px-4 py-2 border border-[#0B1F5C] rounded-md focus:outline-none focus:ring-2"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full text-white font-semibold py-2 rounded-md hover:brightness-90 transition"
              style={{ backgroundColor: "#0B1F5C" }}
            >
              Create My Account
            </button>
          </form>

          <p className="mt-6 text-center text-sm" style={{ color: "#0B1F5C" }}>
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="font-semibold cursor-pointer underline hover:opacity-80"
              style={{ color: "#0B1F5C" }}
            >
              Login
            </span>
          </p>
        </div>
      </div>

      
      <div className="w-1/2 h-screen bg-[#0B1F5C]">
        <img
          src={Education} 
          alt="Signup Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Signup;
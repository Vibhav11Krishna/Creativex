import React, { useState } from "react";

const PersonalInfo = ({ onNext }) => {
  const [formData, setFormData] = useState({
    dob: "",
    gender: "",
    phone: "",
    location: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const existingProfile = JSON.parse(localStorage.getItem("userProfile")) || {};
    const updatedProfile = {
      ...existingProfile,
      dob: formData.dob,
      gender: formData.gender,
      phone: formData.phone,
      location: formData.location
    };

    localStorage.setItem("userProfile", JSON.stringify(updatedProfile));
    onNext(); 
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-12 font-sans">
      <div className="w-full max-w-3xl bg-white rounded-xl p-10 shadow-[0_0_30px_rgba(11,31,92,0.3)]">
        <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: "#0B1F5C" }}>
          Tell Us a Bit About Yourself
        </h2>
        <p className="text-base mb-10 text-center" style={{ color: "#0B1F5C" }}>
          This helps us personalize your experience.
        </p>

        <form className="space-y-8" onSubmit={handleSubmit}>
         
          <div>
            <label className="block text-base font-medium mb-2" style={{ color: "#0B1F5C" }}>
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-md focus:outline-none focus:ring-2"
              style={{
                fontSize: "1rem",
                border: "1px solid #ccc"
              }}
              required
            />
          </div>

         
          <div>
            <label className="block text-base font-medium mb-2" style={{ color: "#0B1F5C" }}>
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-md focus:outline-none focus:ring-2"
              style={{
                fontSize: "1rem",
                border: "1px solid #ccc"
              }}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

         
          <div>
            <label className="block text-base font-medium mb-2" style={{ color: "#0B1F5C" }}>
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full px-5 py-3 rounded-md focus:outline-none focus:ring-2"
              style={{
                fontSize: "1rem",
                border: "1px solid #ccc"
              }}
              required
            />
          </div>

        
          <div>
            <label className="block text-base font-medium mb-2" style={{ color: "#0B1F5C" }}>
              City / State
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="E.g. Danapur, Bihar"
              className="w-full px-5 py-3 rounded-md focus:outline-none focus:ring-2"
              style={{
                fontSize: "1rem",
                border: "1px solid #ccc"
              }}
              required
            />
          </div>

          
          <button
            type="submit"
            className="w-full text-white font-semibold py-3 text-lg rounded-md hover:brightness-90 transition"
            style={{ backgroundColor: "#0B1F5C" }}
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
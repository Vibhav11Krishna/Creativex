import React, { useState, useEffect } from "react";

const EducationalInfo = ({ onNext }) => {
  const [formData, setFormData] = useState({
    level: "",
    institution: "",
    stream: "",
    performance: ""
  });

  const [streamOptions, setStreamOptions] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    switch (formData.level) {
      case "10th":
        setStreamOptions(["Science", "Commerce", "Arts"]);
        break;
      case "12th":
        setStreamOptions(["Engineering", "Medical", "Commerce", "Arts"]);
        break;
      case "UG":
        setStreamOptions(["B.Tech", "B.Sc", "B.Com", "BA", "BBA", "Other"]);
        break;
      case "PG":
        setStreamOptions(["M.Tech", "MBA", "M.Sc", "M.Com", "MA", "Other"]);
        break;
      case "Diploma":
        setStreamOptions(["Polytechnic", "ITI", "Design", "Other"]);
        break;
      case "Other":
        setStreamOptions(["General", "Vocational", "Other"]);
        break;
      default:
        setStreamOptions([]);
    }
  }, [formData.level]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingProfile = JSON.parse(localStorage.getItem("userProfile")) || {};
    const updatedProfile = {
      ...existingProfile,
      educationLevel: formData.level,
      institution: formData.institution,
      stream: formData.stream,
      performance: formData.performance
    };
    localStorage.setItem("userProfile", JSON.stringify(updatedProfile));
    onNext();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-12 font-sans">
      <div className="w-full max-w-2xl bg-white rounded-xl p-10 shadow-[0_0_30px_rgba(11,31,92,0.3)]">
        <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: "#0B1F5C" }}>
          Your Educational Details
        </h2>
        <p className="text-base mb-8 text-center" style={{ color: "#0B1F5C" }}>
          So we can guide you better
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
        
          <div>
            <label className="block text-base font-medium mb-2" style={{ color: "#0B1F5C" }}>
              Current Educational Level
            </label>
            <select
              name="level"
              value={formData.level}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-md focus:outline-none"
              style={{ fontSize: "1rem", border: "1px solid #ccc" }}
              required
            >
              <option value="">Select Level</option>
              <option value="10th">10th</option>
              <option value="12th">12th</option>
              <option value="UG">Undergraduate (UG)</option>
              <option value="PG">Postgraduate (PG)</option>
              <option value="Diploma">Diploma</option>
              <option value="Other">Other</option>
            </select>
          </div>

          
          <div>
            <label className="block text-base font-medium mb-2" style={{ color: "#0B1F5C" }}>
              School / College Name
            </label>
            <input
              type="text"
              name="institution"
              value={formData.institution}
              onChange={handleChange}
              placeholder="Enter institution name"
              className="w-full px-5 py-3 rounded-md focus:outline-none"
              style={{ fontSize: "1rem", border: "1px solid #ccc" }}
              required
            />
          </div>

          
          {streamOptions.length > 0 && (
            <div>
              <label className="block text-base font-medium mb-2" style={{ color: "#0B1F5C" }}>
                Academic Stream
              </label>
              <select
                name="stream"
                value={formData.stream}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-md focus:outline-none"
                style={{ fontSize: "1rem", border: "1px solid #ccc" }}
                required
              >
                <option value="">Select Stream</option>
                {streamOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label className="block text-base font-medium mb-2" style={{ color: "#0B1F5C" }}>
              Academic Performance
            </label>
            <input
              type="text"
              name="performance"
              value={formData.performance}
              onChange={handleChange}
              placeholder="Enter CGPA or %"
              className="w-full px-5 py-3 rounded-md focus:outline-none"
              style={{ fontSize: "1rem", border: "1px solid #ccc" }}
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

export default EducationalInfo;
import React, { useState } from "react";
import {
  FaLaptopCode,
  FaUserMd,
  FaBriefcase,
  FaPaintBrush,
  FaBalanceScale,
  FaRocket,
  FaQuestionCircle
} from "react-icons/fa";

const careerDomains = [
  { label: "Tech & Engineering", icon: <FaLaptopCode /> },
  { label: "Medical & Healthcare", icon: <FaUserMd /> },
  { label: "Commerce & Finance", icon: <FaBriefcase /> },
  { label: "Arts & Design", icon: <FaPaintBrush /> },
  { label: "Law & Civil Services", icon: <FaBalanceScale /> },
  { label: "Entrepreneurship", icon: <FaRocket /> },
  { label: "Not Sure Yet", icon: <FaQuestionCircle /> }
];

const domainInterestMap = {
  "Tech & Engineering": ["AI/ML", "Web Development", "Cybersecurity", "Data Science", "Robotics"],
  "Medical & Healthcare": ["Surgery", "Pharmacy", "Nursing", "Diagnostics", "Public Health"],
  "Commerce & Finance": ["Accounting", "Investing", "Marketing", "Entrepreneurship", "Banking"],
  "Arts & Design": ["Graphic Design", "UI/UX", "Writing", "Photography", "Animation"],
  "Law & Civil Services": ["Judiciary", "UPSC", "Legal Research", "Public Policy", "Administration"],
  "Entrepreneurship": ["Startup Strategy", "Product Building", "Fundraising", "Leadership", "Innovation"],
  "Not Sure Yet": ["Exploration", "General Skills", "Career Guidance", "Soft Skills"]
};

const Interest = ({ onNext }) => {
  const [domain, setDomain] = useState("");
  const [interests, setInterests] = useState([]);
  const [careerGoal, setCareerGoal] = useState("");

  const handleAddInterest = (value) => {
    const trimmed = value.trim();
    if (trimmed && !interests.includes(trimmed)) {
      setInterests((prev) => [...prev, trimmed]);
    }
  };

  const handleRemoveInterest = (tag) => {
    setInterests((prev) => prev.filter((i) => i !== tag));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingProfile = JSON.parse(localStorage.getItem("userProfile")) || {};
    const updatedProfile = {
      ...existingProfile,
      preferredDomain: domain,
      interests,
      careerGoal
    };
    localStorage.setItem("userProfile", JSON.stringify(updatedProfile));
    onNext();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-12 font-sans">
      <div className="w-full max-w-2xl bg-white rounded-xl p-10 shadow-[0_0_30px_rgba(11,31,92,0.3)]">
        <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: "#0B1F5C" }}>
          What Excites You Most
        </h2>
        <p className="text-base mb-8 text-center" style={{ color: "#0B1F5C" }}>
          Select your interests and career domain
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
        
          <div>
            <label className="block text-base font-medium mb-2" style={{ color: "#0B1F5C" }}>
              Preferred Career Domain
            </label>
            <select
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="w-full px-5 py-3 rounded-md focus:outline-none"
              style={{ fontSize: "1rem", border: "1px solid #ccc" }}
              required
            >
              <option value="">Select Domain</option>
              {careerDomains.map(({ label }) => (
                <option key={label} value={label}>{label}</option>
              ))}
            </select>
          </div>

         
          {domain && domainInterestMap[domain] && (
            <div>
              <label className="block text-base font-medium mb-2" style={{ color: "#0B1F5C" }}>
                Domain-Specific Interests
              </label>
              <select
                onChange={(e) => handleAddInterest(e.target.value)}
                className="w-full px-5 py-3 rounded-md focus:outline-none"
                style={{ fontSize: "1rem", border: "1px solid #ccc" }}
              >
                <option value="">Select Interest</option>
                {domainInterestMap[domain].map((interest) => (
                  <option key={interest} value={interest}>{interest}</option>
                ))}
              </select>
            </div>
          )}

          
          {interests.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {interests.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#0B1F5C] text-white px-3 py-1 rounded-full text-sm flex items-center gap-2"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveInterest(tag)}
                    className="text-white hover:text-red-300"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}

         
          <div>
            <label className="block text-base font-medium mb-2" style={{ color: "#0B1F5C" }}>
              Career Goal <span className="text-sm text-gray-500">(Optional)</span>
            </label>
            <input
              type="text"
              value={careerGoal}
              onChange={(e) => setCareerGoal(e.target.value)}
              placeholder="What’s your dream career?"
              className="w-full px-5 py-3 rounded-md"
              style={{ fontSize: "1rem", border: "1px solid #ccc" }}
            />
          </div>

         
          <button
            type="submit"
            className="w-full text-white font-semibold py-3 text-lg rounded-md hover:brightness-90 transition"
            style={{ backgroundColor: "#0B1F5C" }}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Interest;
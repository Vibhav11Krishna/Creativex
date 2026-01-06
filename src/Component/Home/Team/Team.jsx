import React from "react";
import Leader from "../../../assets/leader.png";
import Siddhart from "../../../assets/Siddhart.png";
import Kritika from "../../../assets/Kritika.png";
import Praveen from "../../../assets/Praveen.png";
import Ritu from "../../../assets/Ritu.png";
import Aniket from "../../../assets/Aniket.png";

const Team = () => {
  const leader = {
    name: "Pulkit Krishna",
    role: "Team Leader",
    image: Leader, 
  };

  const teammates = [
    { name: "Siddharth", role: "Frontend", image: Siddhart },
    { name: "Kritika Singh", role: "Designer", image: Kritika },
    { name: "Praveen Kumar", role: "Backend/Research", image: Praveen },
    { name: "Aniket Singh", role: "Tester", image: Aniket },
    { name: "Ritu Mishra", role: "Frontend", image: Ritu },
  ];

  return (
    <section id="our team" className="bg-gray-50 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
          <span
                    style={{ fontFamily: "'Michroma', sans-serif" }}
                    className="text-[#0B1F5C]">
                Our Team
          </span>
        </h2>
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Leader with lines */}
        <div className="flex items-center justify-center mb-16 relative">
          {/* Left Line */}
          <div className="hidden md:block flex-1 border-t-2 border-gray-400 mr-4"></div>

          {/* Circle Leader */}
          <div className="relative">
            <img
              src={leader.image}
              alt={leader.name}
              className="w-44 h-44 rounded-full object-cover border-8 border-white shadow-xl"
            />
            <h3 className="text-xl font-bold text-gray-800 mt-4">{leader.name}</h3>
            <p className="text-gray-600">{leader.role}</p>
          </div>

          {/* Right Line */}
          <div className="hidden md:block flex-1 border-t-2 border-gray-400 ml-4"></div>
        </div>

        {/* Teammates in product-card style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-15">
          {teammates.map((member, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden shadow-lg transition"
            >
              <div className="w-full h-50 bg-gray-200 flex items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h4>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

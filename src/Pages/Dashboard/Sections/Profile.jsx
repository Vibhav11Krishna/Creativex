import React, { useEffect, useState } from "react";
import {
  HiMail,
  HiPhone,
  HiAcademicCap,
  HiUser,
  HiCalendar,
  HiDocumentText,
  HiLocationMarker,
  HiGlobeAlt,
  HiLightBulb
} from "react-icons/hi";
import Student from "../../../assets/Student.png";

const Profile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const stored = localStorage.getItem("userProfile");
    if (stored) setProfile(JSON.parse(stored));
  }, []);

  const display = (value) => value || "—";

  const formatDate = (dateStr) => {
    if (!dateStr) return "—";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  const infoItems = [
    { icon: <HiMail />, label: "Email", value: profile.email },
    { icon: <HiPhone />, label: "Phone", value: profile.phone },
    { icon: <HiCalendar />, label: "Date of Birth", value: formatDate(profile.dob) },
    { icon: <HiUser />, label: "Gender", value: profile.gender },
    { icon: <HiLocationMarker />, label: "Location", value: profile.location },
    { icon: <HiAcademicCap />, label: "Education Level", value: profile.educationLevel },
    { icon: <HiDocumentText />, label: "Institution", value: profile.institution },
    { icon: <HiUser />, label: "Stream", value: profile.stream },
    { icon: <HiDocumentText />, label: "Performance", value: profile.performance },
    { icon: <HiGlobeAlt />, label: "Preferred Domain", value: profile.preferredDomain },
    {
      icon: <HiLightBulb />,
      label: "Interests",
      value: Array.isArray(profile.interests)
        ? profile.interests.join(", ")
        : profile.interests
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans flex">

      <div className="ml-64 w-full px-10 py-0">
       <div className="bg-white rounded-xl shadow-md p-10 text-[#0B1F5C]  space-y-10">

         
        {/* Heading and subtext */}
<div className="text-left sm:text-left space-y-2 pl-6">
  <h1 className="text-4xl font-bold">Student Profile</h1>
  <p className="text-base text-[#0B1F5C]/70">
    Your personalized dashboard showcasing academic background, interests, and career aspirations.
  </p>
</div>


        
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <div className="relative">
              <img
                src={Student}
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover border border-gray-300 shadow-md"
              />
              <span className="absolute bottom-2 right-2 bg-[#0B1F5C] text-white text-xs px-2 py-0.5 rounded-full">
                #OPENTOWORK
              </span>
            </div>

            <div className="text-center sm:text-left space-y-2">
              <h1 className="text-3xl font-bold">{display(profile.fullName)}</h1>
              <p className="text-md text-gray-700">
                Turning Vision Into Code | Passionate About Web Development & Innovation
              </p>
              <p className="text-sm text-gray-500">{display(profile.location)}</p>
            </div>
          </div>

         
          <hr className="border-gray-300" />

          
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Personal Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-base">
              {infoItems.map(({ icon, label, value }, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="text-xl mt-1">{icon}</div>
                  <div>
                    <p className="font-semibold">{label}</p>
                    <p className="text-gray-700">{display(value)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        
          {profile.careerGoal && (
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Career Goal</h3>
              <p className="text-gray-700">{display(profile.careerGoal)}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import EducationalInfo from "../EducationalInfo/EducationalInfo";
import Interest from "../Interest/Interest";

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const nextStep = () => {
    if (step === 3) {
      navigate("/dashboard");
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfo onNext={nextStep} />;
      case 2:
        return <EducationalInfo onNext={nextStep} />;
      case 3:
        return <Interest onNext={nextStep} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen px-4 py-10 font-sans bg-white">
      
      <div className="flex items-center justify-center mb-8 space-x-4">
        {["Personal Info", "Educational Info", "Academic Interest"].map((label, index) => {
          const isActive = step === index + 1;
          const isCompleted = step > index + 1;

          return (
            <div key={index} className="flex items-center space-x-2">
              <div
                onClick={() => setStep(index + 1)}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm cursor-pointer transition duration-200 ${
                  isActive || isCompleted ? "bg-[#0B1F5C] text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                {index + 1}
              </div>
              {index < 2 && <div className="w-10 h-1 bg-gray-300" />}
            </div>
          );
        })}
      </div>

      
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold text-gray-900">
          {step === 1 && "Personal Info"}
          {step === 2 && "Educational Info"}
          {step === 3 && "Stream & Interests"}
        </h2>
      </div>

      <div className="max-w-2xl mx-auto">
        {renderStep()}
      </div>
    </div>
  );
};

export default Onboarding;
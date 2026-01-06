import React from "react";

const Slider = ({ title, value, max = 100, color = "indigo" }) => {
  const percent = Math.min((value / max) * 100, 100);

  return (
    <div className="mb-6">
      <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className={`bg-${color}-600 h-4 rounded-full transition-all`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <p className="text-sm text-blue-600 mt-1">{value} / {max}</p>
    </div>
  );
};

export default Slider;
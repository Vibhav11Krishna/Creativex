import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const Progress = () => {
  const [progressPercent, setProgressPercent] = useState(0);
  const [monthlyActual, setMonthlyActual] = useState([]);
  const [monthlyTarget, setMonthlyTarget] = useState([]);

  useEffect(() => {
    const randomProgress = Math.floor(Math.random() * 101);
    const actual = Array.from({ length: 12 }, () => Math.floor(Math.random() * 100));
    const target = Array.from({ length: 12 }, () => Math.floor(Math.random() * 100));

    setProgressPercent(randomProgress);
    setMonthlyActual(actual);
    setMonthlyTarget(target);
  }, []);

  const statisticsData = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    datasets: [
      {
        label: "Actual",
        data: monthlyActual,
        backgroundColor: "#0B1F5C",
        barThickness: 14,
        borderRadius: 6
      },
      {
        label: "Target",
        data: monthlyTarget,
        backgroundColor: "#93B4E5",
        barThickness: 14,
        borderRadius: 6
      }
    ]
  };

  const statisticsOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#0B1F5C",
          font: { weight: "bold" }
        }
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}`
        }
      }
    },
    scales: {
      x: {
        ticks: { color: "#0B1F5C", font: { weight: "bold" } },
        grid: { display: false }
      },
      y: {
        beginAtZero: true,
        ticks: { color: "#0B1F5C" },
        grid: { color: "#E5E7EB" }
      }
    }
  };

  const lineData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    datasets: [
      {
        label: "Trend",
        data: monthlyActual.slice(0, 5),
        type: "line",
        borderColor: "#0B1F5C",
        backgroundColor: "rgba(11, 31, 92, 0.1)",
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: "#0B1F5C"
      }
    ]
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `Trend: ${context.raw}`
        }
      }
    },
    scales: {
      x: {
        ticks: { color: "#0B1F5C", font: { weight: "bold" } },
        grid: { display: false }
      },
      y: {
        beginAtZero: true,
        ticks: { color: "#0B1F5C" },
        grid: { color: "#E5E7EB" }
      }
    }
  };

  return (
    <div className="bg-gray-100 font-sans flex">
      <div className="ml-64 w-full px-10 py-0 flex justify-center">
        <div className="bg-white rounded-xl shadow-md p-10 text-[#0B1F5C] w-full max-w-6xl">
          
        
          <div className="text-center mb-10">
             <h1 className="text-4xl font-bold mb-4">Your Progress</h1>
            <p className="text-lg">
              Here's a snapshot of your recent activity. Keep the momentum going!
            </p>
          </div>

         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          
            <div className="flex flex-col items-center space-y-6">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" stroke="#E5E7EB" strokeWidth="10" fill="none" />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="#0B1F5C"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray="282.6"
                    strokeDashoffset="282.6"
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                    style={{
                      transition: "stroke-dashoffset 1.2s ease-out",
                      strokeDashoffset: 282.6 - (282.6 * progressPercent) / 100
                    }}
                  />
                  <text
                    x="50"
                    y="55"
                    textAnchor="middle"
                    fontSize="18"
                    fill="#0B1F5C"
                    fontWeight="bold"
                  >
                    {progressPercent}%
                  </text>
                </svg>
              </div>
              <div className="text-center italic text-[#0B1F5C]">
                “Progress is not in perfection, but in persistence.”
              </div>
            </div>

          
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl shadow-md border border-indigo-200 p-6 w-full flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="bg-[#0B1F5C] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                    
                  </div>
                  <h3 className="text-lg font-semibold text-[#0B1F5C]">Learning Reminder</h3>
                </div>
                <span className="text-xs text-gray-500">Friday, Sep 12</span>
              </div>

              <div className="space-y-2 text-sm text-[#0B1F5C]">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Time:</span>
                  <span className="text-gray-700">10:00 AM – 10:30 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Upcoming:</span>
                  <span className="text-gray-600">1 more event tomorrow</span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button className="px-4 py-1.5 text-sm font-medium text-white bg-[#0B1F5C] rounded-lg hover:bg-[#0a1a4a] transition duration-200">
                  View Details
                </button>
              </div>
            </div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
           
            <div>
              <h3 className="text-xl font-semibold mb-1"> Statistics</h3>
              <p className="text-sm text-gray-600 mb-4"></p>
              <div className="bg-white p-4 rounded-xl border border-gray-300 w-full">
                <div style={{ height: "260px" }}>
                  <Bar data={statisticsData} options={statisticsOptions} />
                </div>
              </div>
            </div>

           
            <div>
              <h3 className="text-xl font-semibold mb-4"> View Analytical Graph</h3>
              <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-200 w-full">
                <div style={{ height: "260px" }}>
                  <Bar data={lineData} options={lineOptions} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Progress;
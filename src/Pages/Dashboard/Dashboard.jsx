import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Chatbot from "../../Component/Chatbot";

const Dashboard = () => {
  useEffect(() => {
    const visits = JSON.parse(localStorage.getItem("dashboardVisits")) || {};
    const now = new Date();
    const month = now.toLocaleString("en-IN", { month: "short" });
    visits[month] = (visits[month] || 0) + 1;
    localStorage.setItem("dashboardVisits", JSON.stringify(visits));
  }, []);

  return (
    <div className="min-h-screen flex bg-gray-50 relative">
      
      <Sidebar />

     
      <div className="flex-1 flex flex-col bg-gray-100">
        <Topbar />
        <main className="flex-1 p-6 overflow-auto bg-gray-100">
          <Outlet />
        </main>
      </div>

      
      <div className="fixed bottom-6 right-6 z-50 w-[900px] h-[900px] max-w-full sm:max-w-[420px]">
        <Chatbot />
      </div>
    </div>
  );
};

export default Dashboard;
import React, { useState } from "react";

const tags = [
  "HTML", "CSS", "JavaScript", "React", "Node.js",
  "Express", "MongoDB", "TailwindCSS", "TypeScript", "Next.js",
  "Authentication", "Routing", "API Integration"
];

const problems = [
 
  { id: 201, title: "Build a Responsive Navbar", difficulty: "Easy", rate: "78.2%" },
  { id: 202, title: "Create a Semantic Blog Layout", difficulty: "Medium", rate: "64.1%" },
  { id: 203, title: "Design a Landing Page with Flexbox", difficulty: "Medium", rate: "61.5%" },
  { id: 204, title: "Build a Multi-section Portfolio", difficulty: "Hard", rate: "47.9%" },
  { id: 205, title: "Create an Accessible Form", difficulty: "Medium", rate: "58.3%" },
  { id: 206, title: "Design a Pricing Table", difficulty: "Easy", rate: "72.4%" },
  { id: 207, title: "Build a Hero Section with CTA", difficulty: "Easy", rate: "75.6%" },
  { id: 208, title: "Create a Newsletter Signup", difficulty: "Medium", rate: "62.9%" },
  { id: 209, title: "Design a Footer with Social Links", difficulty: "Easy", rate: "70.1%" },
  { id: 210, title: "Build a Responsive Grid Layout", difficulty: "Hard", rate: "45.2%" },


  { id: 211, title: "Create a Dynamic Portfolio Grid", difficulty: "Medium", rate: "48.3%" },
  { id: 212, title: "Style a Login Form with Transitions", difficulty: "Medium", rate: "55.6%" },
  { id: 213, title: "Build a Responsive Card Layout", difficulty: "Easy", rate: "74.2%" },
  { id: 214, title: "Design a Gradient Button Set", difficulty: "Easy", rate: "76.8%" },
  { id: 215, title: "Create a CSS-Only Tooltip", difficulty: "Medium", rate: "60.4%" },
  { id: 216, title: "Build a Sticky Header", difficulty: "Medium", rate: "63.7%" },
  { id: 217, title: "Animate a Loading Spinner", difficulty: "Easy", rate: "71.9%" },
  { id: 218, title: "Design a CSS Timeline", difficulty: "Hard", rate: "43.5%" },
  { id: 219, title: "Create a Responsive Image Gallery", difficulty: "Hard", rate: "46.8%" },
  { id: 220, title: "Style a Modal with Overlay", difficulty: "Medium", rate: "59.2%" },

 
  { id: 221, title: "Implement Dark Mode Toggle", difficulty: "Medium", rate: "59.8%" },
  { id: 222, title: "Create a Login Form with Validation", difficulty: "Medium", rate: "65.4%" },
  { id: 223, title: "Build a Countdown Timer", difficulty: "Easy", rate: "73.1%" },
  { id: 224, title: "Create a To-Do List App", difficulty: "Medium", rate: "60.7%" },
  { id: 225, title: "Implement Tab Switching", difficulty: "Easy", rate: "75.3%" },
  { id: 226, title: "Build a Custom Dropdown Menu", difficulty: "Medium", rate: "57.6%" },
  { id: 227, title: "Create a Quiz App", difficulty: "Hard", rate: "42.9%" },
  { id: 228, title: "Implement Form Auto-Save", difficulty: "Hard", rate: "44.3%" },
  { id: 229, title: "Build a Scroll Progress Bar", difficulty: "Medium", rate: "58.9%" },
  { id: 230, title: "Create a Password Strength Meter", difficulty: "Hard", rate: "40.2%" },

  
  { id: 231, title: "Implement Protected Routes in React", difficulty: "Medium", rate: "44.9%" },
  { id: 232, title: "Build a Reusable Modal Component", difficulty: "Medium", rate: "50.5%" },
  { id: 233, title: "Create a Todo App with Hooks", difficulty: "Medium", rate: "56.2%" },
  { id: 234, title: "Build a Multi-step Form", difficulty: "Hard", rate: "43.1%" },
  { id: 235, title: "Implement Theme Switching", difficulty: "Medium", rate: "52.7%" },
  { id: 236, title: "Create a Dashboard with Charts", difficulty: "Hard", rate: "41.6%" },
  { id: 237, title: "Build a Searchable List", difficulty: "Easy", rate: "69.4%" },
  { id: 238, title: "Implement Pagination", difficulty: "Medium", rate: "54.8%" },
  { id: 239, title: "Create a Notification System", difficulty: "Hard", rate: "39.9%" },
  { id: 240, title: "Build a Profile Card Component", difficulty: "Easy", rate: "72.3%" },

 
{ id: 241, title: "Set Up React Router", difficulty: "Easy", rate: "72.5%" },
{ id: 242, title: "Create Nested Routes", difficulty: "Medium", rate: "58.9%" },
{ id: 243, title: "Implement Dynamic Routing", difficulty: "Medium", rate: "61.3%" },
{ id: 244, title: "Protect Routes with Auth", difficulty: "Hard", rate: "45.7%" },
{ id: 245, title: "Add Route Transitions", difficulty: "Medium", rate: "53.2%" },
{ id: 246, title: "Handle 404 Pages", difficulty: "Easy", rate: "76.1%" },
{ id: 247, title: "Use URL Params in Components", difficulty: "Medium", rate: "59.4%" },
{ id: 248, title: "Redirect After Login", difficulty: "Medium", rate: "60.8%" },
{ id: 249, title: "Lazy Load Routes", difficulty: "Hard", rate: "43.6%" },
{ id: 250, title: "Create Breadcrumb Navigation", difficulty: "Hard", rate: "41.9%" },


{ id: 251, title: "Deploy React App to Netlify", difficulty: "Easy", rate: "74.3%" },
{ id: 252, title: "Set Up CI/CD with GitHub Actions", difficulty: "Hard", rate: "39.8%" },
{ id: 253, title: "Deploy Node.js API to Render", difficulty: "Medium", rate: "52.6%" },
{ id: 254, title: "Configure Environment Variables", difficulty: "Medium", rate: "55.1%" },
{ id: 255, title: "Optimize Bundle Size for Production", difficulty: "Hard", rate: "42.7%" },
{ id: 256, title: "Deploy Full-Stack App to Vercel", difficulty: "Medium", rate: "50.9%" },
{ id: 257, title: "Set Up Custom Domain", difficulty: "Easy", rate: "70.4%" },
{ id: 258, title: "Enable HTTPS with SSL", difficulty: "Medium", rate: "56.3%" },
{ id: 259, title: "Monitor Uptime and Logs", difficulty: "Hard", rate: "44.2%" },
{ id: 260, title: "Automate Deployment with Webhooks", difficulty: "Hard", rate: "41.5%" }
];

const sectionButtons = ["HTML", "CSS", "JavaScript", "React", "Routing", "Deployment"];

const sectionMap = {
  HTML: problems.filter(p => p.id >= 201 && p.id <= 210).map(p => p.title),
  CSS: problems.filter(p => p.id >= 211 && p.id <= 220).map(p => p.title),
  JavaScript: problems.filter(p => p.id >= 221 && p.id <= 230).map(p => p.title),
  React: problems.filter(p => p.id >= 231 && p.id <= 240).map(p => p.title),
  Routing: problems.filter(p => p.id >= 241 && p.id <= 250).map(p => p.title),
  Deployment: problems.filter(p => p.id >= 251 && p.id <= 260).map(p => p.title)
};

const ELearning = () => {
  const now = new Date();
  const today = now.getDate();
  const currentMonth = now.toLocaleString("en-IN", { month: "long" });
  const currentYear = now.getFullYear();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getCalendarDays = () => {
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
    const totalDays = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const calendar = [];
    for (let i = 0; i < firstDay; i++) calendar.push(null);
    for (let i = 1; i <= totalDays; i++) calendar.push(i);
    return calendar;
  };

  const calendarDays = getCalendarDays();
  const [selectedSection, setSelectedSection] = useState(null);

  const filteredProblems = selectedSection
    ? problems.filter((p) => sectionMap[selectedSection]?.includes(p.title))
    : problems;

    
  return (
    
    <div className="bg-gray-100 min-h-screen px-6 py-0 flex justify-start items-start">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-10 w-full max-w-[1400px] ml-57">
               
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-bold text-[#0B1F5C] mb-2">Web Dev Challenges</h1>
          <p className="text-gray-600 text-lg mb-4">
            Practice daily problems to sharpen your frontend and full-stack skills.
          </p>
        </div>

        <div className="flex justify-between items-start mb-10">
         
          <div className="bg-blue-50 p-4 rounded-xl shadow-sm w-[360px]">
            <div className="text-xl font-semibold text-[#0B1F5C] mb-4">
              {currentMonth} {currentYear}
            </div>
            <div className="grid grid-cols-7 gap-3 text-sm text-[#0B1F5C] font-medium">
              {days.map((day) => (
                <div key={day} className="text-center">{day}</div>
              ))}
              {calendarDays.map((day, idx) => {
                const isToday = day === today;
                const isRedDay = [5, 12, 19, 26].includes(day);
                return (
                  <div
                    key={idx}
                    className={`h-8 w-8 flex items-center justify-center rounded-full font-bold ${
                      isToday
                        ? "bg-[#0B1F5C] text-white"
                        : isRedDay
                        ? "bg-red-500 text-white"
                        : "text-[#0B1F5C]"
                    }`}
                  >
                    {day || ""}
                  </div>
                );
              })}
            </div>
          </div>


<div className="flex justify-center mb-12">
  <svg viewBox="0 0 200 200" className="w-72 h-72">
    <circle cx="100" cy="100" r="100" fill="#F0F9FF" />

 
    <path d="M100,100 L100,0 A100,100 0 0,1 186.6,50 Z" fill="#0B1F5C" />       {/* HTML */}
    <path d="M100,100 L186.6,50 A100,100 0 0,1 186.6,150 Z" fill="#1D4ED8" />     {/* CSS */}
    <path d="M100,100 L186.6,150 A100,100 0 0,1 100,200 Z" fill="#3B82F6" />      {/* JS */}
    <path d="M100,100 L100,200 A100,100 0 0,1 13.4,150 Z" fill="#60A5FA" />       {/* React */}
    <path d="M100,100 L13.4,150 A100,100 0 0,1 13.4,50 Z" fill="#93C5FD" />       {/* Routing */}
    <path d="M100,100 L13.4,50 A100,100 0 0,1 100,0 Z" fill="#BFDBFE" />          {/* Deployment */}

   
    <text x="140" y="30" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">HTML</text>
    <text x="170" y="100" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">CSS</text>
    <text x="140" y="170" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">JS</text>
    <text x="60" y="170" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">React</text>
    <text x="30" y="100" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Routing</text>
    <text x="60" y="30" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Deploy</text>
  </svg>
</div>
        </div>

        
        <div className="flex justify-center mb-10">
          <button className="bg-[#0B1F5C] text-white px-12 py-5 rounded-xl text-xl font-semibold hover:bg-[#09204A] transition w-full max-w-3xl">
            Question of the Day
          </button>
        </div>

       
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-blue-100 text-[#0B1F5C] px-4 py-2 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

      
        <div className="flex justify-start gap-4 mb-10 overflow-x-auto">
          <div className="flex flex-nowrap gap-4">
            {sectionButtons.map((label, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedSection(label)}
                className={`px-8 py-4 rounded-md text-base font-semibold w-44 text-center whitespace-nowrap transition ${
                  selectedSection === label
                    ? "bg-[#0B1F5C] text-white"
                    : "bg-blue-100 text-[#0B1F5C] hover:bg-blue-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        
        <div className="space-y-6">
          {filteredProblems.map((problem) => (
            <div
              key={problem.id}
              className="flex justify-between items-center border-b border-gray-200 pb-4"
            >
              <div>
                <h2 className="text-[#0B1F5C] font-semibold text-base">
                  {problem.id}. {problem.title}
                </h2>
                <p className="text-sm text-gray-600">{problem.difficulty}</p>
              </div>
              <span className="text-green-600 font-bold text-base">{problem.rate}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ELearning;
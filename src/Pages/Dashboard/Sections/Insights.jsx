import React from "react";
import Frontend from "../../../assets/Frontend.png";
import ui from "../../../assets/ui.png";
import React1 from "../../../assets/React1.png";
import Watsonx from "../../../assets/Watsonx.png";
import WebCrumbs from "../../../assets/WebCrumbs.png";
import JavaScript from "../../../assets/JavaScript.png";
import GeeksforGeeks from "../../../assets/GeeksforGeeks.png";
import Tools from "../../../assets/Tools.png";


const newsItems = [
  {
    title: "AI in Web Development",
    description: "Discover how AI is transforming frontend technologies.",
    image: Frontend,
    link: "https://example.com/ai-web",
  },
  {
    title: "Top Study Platforms",
    description: "Explore the best websites for students to learn coding and design.",
    image: GeeksforGeeks,
    link: "https://example.com/study-sites",
  },
  {
    title: "React 19 Preview",
    description: "What’s coming in the next major React release—hooks, suspense, and more.",
    image:  React1,
    link: "https://example.com/react19",
  },
  {
    title: "Design Challenges 2025",
    description: "Participate in global UI/UX contests and showcase your creativity.",
    image: ui,
    link: "https://example.com/challenges",
  },
  {
    title: "Frontend Tools for Students",
    description: "A curated list of tools to simplify your frontend journey.",
    image: Tools,
    link: "https://example.com/tools",
  },
  {
    title: "Webcrumbs",
    description: "Instant Component Generation with TailwindCSS",
    image: WebCrumbs,
    link: "https://example.com/resumes",
  },
  {
    title: "Watsonx Code Assistant",
    description: "Enterprise Level Code Generation and Automation",
    image: Watsonx,
    link: "https://example.com/ui-trends",
  },
  {
    title: "The Evolution of JavaScript Frameworks",
    description: "JavaScript remains the leader in web development even today.",
    image: JavaScript,
    link: "https://example.com/portfolio-tips",
  },
];

const Insights = () => {
  return (
    <div className="ml-64 px-6 py-0">
      <div className="bg-white rounded-xl shadow-md p-10 max-w-screen-xl">
  
        <div className="mb-10 flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold mb-4 text-[#0B1F5C]">Insights</h1>
          <p className="text-xl font-medium text-[#0B1F5C] text-opacity-80 mt-2">
            Articles curated for student growth and web development
          </p>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-lg shadow-sm border border-gray-200 
              hover:border-[#0B1F5C] hover:shadow-lg hover:scale-[1.02] 
              transition-all duration-300 ease-in-out transform overflow-hidden"
            >
              
              <div className="h-32 bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

             
              <div className="p-6 flex flex-col justify-between h-48">
                <h3 className="text-lg font-semibold text-[#0B1F5C] leading-tight">
                  {item.title}
                </h3>
                <p className="text-base text-[#0B1F5C] mt-2">{item.description}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-sm text-indigo-600 hover:underline"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insights;
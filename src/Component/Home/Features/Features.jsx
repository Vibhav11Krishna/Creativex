import React from "react";
import { Briefcase, BookOpen, Cpu, Users, Megaphone, Bot, UserCheck, BarChart3 } from "lucide-react";

const features = [
  {
    title: "Career Assessment",
    icon: <Briefcase className="w-10 h-10 text-[#0B1F5C]" />,
    desc: "Discover your strengths and explore the right career path with guided assessments."
  },
  {
    title: "Smart Course Finder",
    icon: <BookOpen className="w-10 h-10 text-green" />,
    desc: "Get AI-powered suggestions for courses aligned with your career goals."
  },
  {
    title: "Industry-Aligned Skill Development",
    icon: <Cpu className="w-10 h-10 text-[#0B1F5C]" />,
    desc: "Learn in-demand skills that match industry standards and future trends."
  },
  {
    title: "Common Field-Interest Community",
    icon: <Users className="w-10 h-10 text-[#0B1F5C]" />,
    desc: "Connect with peers, mentors, and professionals sharing similar interests."
  },
  {
    title: "Gov. Schemes & Job Announcements",
    icon: <Megaphone className="w-10 h-10 text-[#0B1F5C]" />,
    desc: "Stay updated with the latest government initiatives, jobs, and opportunities."
  },
  {
    title: "AI Chatbot",
    icon: <Bot className="w-10 h-10 text-[#0B1F5C]" />,
    desc: "Get instant answers and guidance with our smart AI-powered assistant."
  },
  {
    title: "Personal Mentor Support",
    icon: <UserCheck className="w-10 h-10 text-[#0B1F5C]" />,
    desc: "One-on-one mentor guidance to help you at every step of your journey."
  },
  {
    title: "Career Tracking",
    icon: <BarChart3 className="w-10 h-10 text-[#0B1F5C]" />,
    desc: "Track your growth, progress, and milestones with smart analytics."
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2
          style={{ fontFamily: "'Michroma', sans-serif" }}
          className="text-4xl md:text-4xl font-bold text-[#0B1F5C] mb-6"
        >
          Our Features
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Unlock the full potential of your career journey with our smart,
          AI-powered features designed to guide, mentor, and accelerate your success.
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className=" rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl transition duration-300"
          >
            <div className="mb-6">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

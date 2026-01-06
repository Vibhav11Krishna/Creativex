import React from "react";

const internships = [
  {
    title: "Web Dev Intern – React",
    company: "YugAtara Retail",
    location: "Remote · India",
    applicants: "100+",
    link: "https://example.com/internship/react",
  },
  {
    title: "Frontend Intern – Merkle Science",
    company: "Merkle Science",
    location: "Remote · India",
    applicants: "50+",
    link: "https://example.com/internship/merkle",
  },
  {
    title: "WordPress Intern",
    company: "Adhivaha Pvt Ltd",
    location: "Onsite · Patna",
    applicants: "30+",
    link: "https://example.com/internship/wordpress",
  },
  {
    title: "UI/UX Intern",
    company: "Designify",
    location: "Hybrid · Bangalore",
    applicants: "80+",
    link: "https://example.com/internship/uiux",
  },
  {
    title: "Backend Intern – Node.js",
    company: "TechNest",
    location: "Remote · India",
    applicants: "60+",
    link: "https://example.com/internship/node",
  },
];

const jobs = [
  {
    title: "Frontend Developer – React",
    company: "Codeyoung",
    location: "Remote · India",
    applicants: "200+",
    link: "https://example.com/job/react",
  },
  {
    title: "JavaScript Developer",
    company: "Jash IT",
    location: "Remote · US Hours",
    applicants: "150+",
    link: "https://example.com/job/js",
  },
  {
    title: "HTML/CSS Developer",
    company: "Virito Digital",
    location: "Onsite · Danapur",
    applicants: "60+",
    link: "https://example.com/job/htmlcss",
  },
  {
    title: "Backend Developer – Django",
    company: "Aretiz Innovations",
    location: "Hybrid · Hyderabad",
    applicants: "90+",
    link: "https://example.com/job/django",
  },
  {
    title: "Full Stack Developer",
    company: "DevForge",
    location: "Remote · India",
    applicants: "120+",
    link: "https://example.com/job/fullstack",
  },
];

const JobCard = ({ title, company, location, applicants, link }) => (
  <div className="bg-white border border-[#0B1F5C] rounded-md p-6 shadow-sm hover:shadow-md transition w-full hover:bg-[#F0F4FF]">
    <h3 className="text-lg font-semibold text-[#0B1F5C] hover:underline">{title}</h3>
    <p className="text-base text-[#0B1F5C]/80">{company}</p>
    <p className="text-base text-[#0B1F5C]/60">{location}</p>
    <p className="text-base text-[#0B1F5C]/40 mt-1">{applicants} applicants</p>
    <div className="flex justify-between items-center mt-4">
      <a
        href={link}
        className="text-base text-[#0B1F5C] underline hover:text-[#09204A]"
        target="_blank"
        rel="noopener noreferrer"
      >
        Click here
      </a>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="bg-[#0B1F5C] text-white text-base px-5 py-2 rounded hover:bg-[#09204A] transition">
          Apply
        </button>
      </a>
    </div>
  </div>
);

const PioneerPlatform = () => {
  return (
    <div className="w-full flex justify-end pt-0 pb-16 pr-25">
      <div className="w-full max-w-[1200px] bg-white border border-gray-200 rounded-xl shadow-lg p-10">
        <h1 className="text-4xl font-bold text-[#0B1F5C] text-center mb-4">Pioneer Platform</h1>
        <p className="text-base text-[#0B1F5C]/70 text-center mb-12">
          Curated internships and job opportunities tailored for aspiring developers. Explore roles
          that match your skills, interests, and career goals — all in one place.
        </p>

        <div className="flex gap-8">
          {/* Internships Section */}
          <div className="w-1/2 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-[#0B1F5C]">Internships</h2>
              <p className="text-base text-[#0B1F5C]/70">
                Grow your skills and gain real-world experience.
              </p>
            </div>
            <div className="space-y-5">
              {internships.map((job, index) => (
                <JobCard key={index} {...job} />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-[2px] bg-[#0B1F5C] rounded-full"></div>

          {/* Jobs Section */}
          <div className="w-1/2 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-[#0B1F5C]">Jobs</h2>
              <p className="text-base text-[#0B1F5C]/70">
                Discover full-time roles to launch your career and make an impact in tech.
              </p>
            </div>
            <div className="space-y-5">
              {jobs.map((job, index) => (
                <JobCard key={index} {...job} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PioneerPlatform;

import React from "react";

const steps = [
    {
        number: "4",
        title: "Jobs, Internships & Training",
        description:
          "Students can explore internships, training programs, apprenticeships, and jobs directly from the platform. End-to-end support from learning to earning.",
        color: "#fbbf24", // yellow
        offset: "ml-16", // far right
      },
      {
        number: "3",
        title: "Personalized Dashboard & Roadmap",
        description:
          "A profile is created for each student with their results. They receive a custom roadmap highlighting the right courses, colleges, skills, and opportunities.",
        color: "#34d399", // green
        offset: "ml-25", // mid shift
      },
      {
        number: "2",
        title: "Career Test & Stream Selection",
        description:
          "Take an AI-powered career test to discover interests, strengths, and skills. Get guided recommendations for streams, courses, and future paths.",
        color: "#38bdf8", // blue
        offset: "ml-5", // shifted right
      },
    {
      number: "1",
      title: "Register & Get Started",
      description:
        "Students sign up and log in easily. They are welcomed with an introductory dashboard showing available career tools and resources.",
      color: "#f87171", // red
      offset: "ml-18", // no shift
    },

    
    
  ];
  
  const Step = ({ number, title, description, color, offset }) => (
    <div className={`flex items-start gap-4 mb-10 ${offset}`}>
      {/* Step Number Box */}
      <div
        className="flex items-center justify-center w-20 h-20 rounded-xl text-white font-bold text-4xl"
        style={{ backgroundColor: color }}
      >
        {number}
      </div>
  
      {/* Text Content */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed max-w-md">
          {description}
        </p>
      </div>
    </div>
  );
  
  const Solution = () => {
    return (
      <section id="solution" className="py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side Steps with uneven alignment */}
          <div className="flex flex-col justify-center">
            {steps.map((step, idx) => (
              <Step key={idx} {...step} />
            ))}
          </div>
  
          {/* Right Roadmap Image */}
          <div className="w-[500px] h-[500px] rounded-full overflow-hidden mx-auto">
  <img
    src="https://ik.imagekit.io/siddharth637/codetutor/Rmap3.png?updatedAt=1757579779875"
    alt="Roadmap"
    className="w-full h-full object-cover"
  />
</div>

        </div>
      </section>
    );
  };
  
  export default Solution;
  
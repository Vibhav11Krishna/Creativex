import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Target,
  Brain,
  Lightbulb,
} from "lucide-react";

const resumeSteps = [
  {
    id: 1,
    icon: <Target className="w-10 h-10 text-green-600" />,
    title: "Mission",
    description:
      "To empower students to make informed career decisions, develop industry-ready skills, embrace lifelong learning, and access equal opportunities for a brighter future.",
  },
  {
    id: 2,
    icon: <Brain className="w-10 h-10 text-blue-600" />,
    title: "Vision",
    description:
      "To build a future-ready India where every student, regardless of location or background, has access to personalized career guidance and employment opportunities.",
  },
  {
    id: 3,
    icon: <Lightbulb className="w-10 h-10 text-orange-500" />,
    title: "Values",
    description:
      "Inclusivity ensures every student deserves fair opportunities, Innovation leverages technology to solve real problems, and Impact drives measurable change in employability and success.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-20 relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">
        {/* Section Title Centered Across */}
        <h2
          style={{ fontFamily: "'Michroma', sans-serif" }}
          className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     text-[3rem] md:text-[4rem] font-normal tracking-tight text-gray-900 
                     whitespace-nowrap z-20"
        >
          ABOUT US
        </h2>

        {/* Left Image */}
        <div className="relative">
          <img
            src="https://ik.imagekit.io/siddharth637/codetutor/about2.jpg?updatedAt=1757837834683"
            alt="About Us"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center space-y-6 relative z-10">
          <p className="text-gray-600 leading-relaxed">
            CreativX is built with a vision to empower students and young
            professionals by bridging the gap between learning, career
            opportunities, and real-world growth. We understand that navigating
            education and employment can be overwhelming, with limited guidance
            and unclear paths. That’s why CreativX offers a complete
            ecosystem—combining e-learning, personalized career roadmaps,
            resume-building tools, and mentorship—to help individuals discover
            their strengths, build relevant skills, and take confident steps
            toward their goals.
          </p>

          <p className="text-gray-600 leading-relaxed">
            What makes us different is our focus on innovation, accessibility,
            and community. At CreativX, we don’t just prepare people for
            jobs—we nurture creativity, confidence, and leadership. By bringing
            together technology, guidance, and collaboration, we aim to create
            an inclusive platform where ambition meets opportunity. For us,
            success is not only about landing a career but also about building a
            future where every learner has the power to thrive and make an impact.
          </p>

          {/* Social + Underline Row */}
          <div className="flex justify-between items-center pt-2">
            <div className="flex items-center gap-6 text-gray-700">
              <Twitter className="w-5 h-5 hover:text-blue-500 cursor-pointer" />
              <Facebook className="w-5 h-5 hover:text-blue-600 cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-pink-500 cursor-pointer" />
            </div>
            <div className="w-12 h-2 bg-black"></div>
          </div>
        </div>
      </div>

      {/* Mission - Vision - Values Section */}
      <div className="max-w-7xl mx-auto mt-24">
        <div className="relative flex flex-col md:flex-row items-center justify-center md:justify-between gap-10">
          {resumeSteps.map((step, index) => (
            <div key={step.id} className="relative flex flex-col items-center">
              {/* Step Box */}
              <div className="bg-[#F9FAFB] border border-gray-200 rounded-lg px-10 py-8 shadow-sm hover:shadow-md transition w-80 md:w-96">
                <div className="flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-base leading-relaxed text-center">
                  {step.description}
                </p>
              </div>

              {/* Connector Line (only show if not last item) */}
              {index < resumeSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-full w-32 border-t-2 border-dashed border-gray-400"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

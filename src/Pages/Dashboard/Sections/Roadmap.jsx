import React, { useState } from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaRoute,
  FaVial,
  FaRocket,
} from 'react-icons/fa';

const roadmapSteps = [
  {
    id: 1,
    level: 'Beginner',
    title: 'HTML',
    icon: <FaHtml5 className="text-orange-500 text-2xl" />,
    description: [
      'Understand the structure of web pages using semantic tags.',
      'Learn essential elements like headings, paragraphs, links, and lists.',
      'Create forms with input fields, buttons, and labels.',
      'Embed images, videos, and external content.',
      'Practice building static layouts with proper nesting and hierarchy.',
    ],
  },
  {
    id: 2,
    level: 'Beginner',
    title: 'CSS',
    icon: <FaCss3Alt className="text-blue-500 text-2xl" />,
    description: [
      'Style HTML elements using selectors and properties.',
      'Master the box model, margins, padding, and borders.',
      'Build responsive layouts with Flexbox and Grid.',
      'Apply fonts, colors, shadows, and transitions.',
      'Create media queries for mobile-friendly design.',
    ],
  },
  {
    id: 3,
    level: 'Beginner',
    title: 'JavaScript',
    icon: <FaJsSquare className="text-yellow-500 text-2xl" />,
    description: [
      'Learn variables, data types, and operators.',
      'Write functions and control flow with conditions and loops.',
      'Manipulate the DOM to update content dynamically.',
      'Handle user events like clicks and form submissions.',
      'Debug code using console and browser dev tools.',
    ],
  },
  {
    id: 4,
    level: 'Intermediate',
    title: 'React',
    icon: <FaReact className="text-cyan-500 text-2xl" />,
    description: [
      'Build components using JSX and props.',
      'Manage state with useState and useEffect hooks.',
      'Create reusable UI blocks and organize code modularly.',
      'Handle user input and form data in React.',
      'Understand component lifecycle and conditional rendering.',
    ],
  },
  {
    id: 5,
    level: 'Intermediate',
    title: 'Routing',
    icon: <FaRoute className="text-purple-500 text-2xl" />,
    description: [
      'Set up React Router for navigation.',
      'Define routes and nested routes for different views.',
      'Use dynamic parameters for detail pages.',
      'Protect routes with authentication logic.',
      'Link between pages using <Link> and <Navigate>.',
    ],
  },
  {
    id: 6,
    level: 'Advanced',
    title: 'Testing',
    icon: <FaVial className="text-green-600 text-2xl" />,
    description: [
      'Write unit tests for components and functions.',
      'Use Jest and React Testing Library for assertions.',
      'Simulate user interactions and validate behavior.',
      'Test asynchronous logic and API calls.',
      'Automate test suites and integrate with CI tools.',
    ],
  },
  {
    id: 7,
    level: 'Advanced',
    title: 'Deployment',
    icon: <FaRocket className="text-red-500 text-2xl" />,
    description: [
      'Choose hosting platforms like Vercel or Netlify.',
      'Configure build settings and environment variables.',
      'Set up GitHub Actions for CI/CD pipelines.',
      'Optimize performance with lazy loading and caching.',
      'Monitor deployments and handle rollback strategies.',
    ],
  },
];

const Roadmap = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [completedIds, setCompletedIds] = useState([]);

  const activeStep = currentIndex !== null ? roadmapSteps[currentIndex] : null;
  const currentLevel = activeStep?.level || 'Beginner';

  const handleComplete = () => {
    if (activeStep && !completedIds.includes(activeStep.id)) {
      setCompletedIds([...completedIds, activeStep.id]);

      const nextIndex = currentIndex + 1;
      if (nextIndex < roadmapSteps.length) {
        setTimeout(() => {
          setCurrentIndex(nextIndex);
        }, 500);
      } else {
        setCurrentIndex(null); // All steps done
      }
    }
  };

  const getProgressWidth = () => {
    if (currentIndex === null) return '0%';
    return `${(currentIndex / (roadmapSteps.length - 1)) * 100}%`;
  };

  return (
    <div className="w-full min-h-screen px-5 py-5 text-blue-900 flex justify-center items-center">
      {/* Slightly shifted right */}
      <div className="w-full max-w-[1200px] bg-white rounded-2xl shadow-lg p-16 ml-70 mr-16">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold mb-4">Road of a Web Developer</h1>
          <p className="text-lg text-gray-600">
            Follow the path, master the skills, and build the future of the web.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-center mb-16">{currentLevel} Roadmap</h2>

        <div className="relative flex flex-wrap justify-center gap-10 items-center mb-20">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300 z-0 transform -translate-y-1/2"></div>
          <div
            className="absolute top-1/2 left-0 h-1 bg-blue-900 z-10 transform -translate-y-1/2 transition-all duration-300"
            style={{ width: getProgressWidth() }}
          ></div>

          {roadmapSteps.map((step, index) => {
            const isActive = index === currentIndex;

            return (
              <div
                key={step.id}
                className="flex flex-col items-center cursor-pointer z-20 mx-4 my-6"
                onClick={() => setCurrentIndex(index)}
              >
                <span className="text-lg font-semibold text-center mb-2">{step.title}</span>
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold transition-colors ${
                    isActive
                      ? 'bg-blue-900 text-white'
                      : 'bg-white border-2 border-blue-900 text-blue-900'
                  }`}
                >
                  {step.id}
                </div>
                <div className="mt-3">{step.icon}</div>
              </div>
            );
          })}
        </div>

        <div className="text-center max-w-3xl mx-auto">
          {activeStep ? (
            <>
              <h3 className="text-3xl font-bold mb-6 flex items-center justify-center gap-3">
                {activeStep.icon} {activeStep.title}
              </h3>
              <ul className="text-gray-700 mb-8 leading-relaxed text-lg list-disc list-inside text-left">
                {activeStep.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <button
                className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-lg font-medium"
                onClick={handleComplete}
              >
                Take Exam
              </button>
            </>
          ) : (
            <p className="text-gray-500 text-lg mt-24">
              Select a topic above to explore its details.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;

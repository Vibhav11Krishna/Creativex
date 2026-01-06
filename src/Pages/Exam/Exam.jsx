import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const questionBank = {
  "Tech & Engineering": [
    { question: "Which data structure uses LIFO?", options: ["Queue", "Stack", "Array", "Tree"], correct: "B" },
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Machine Language", "Hyperlink Text Management Language", "None"], correct: "A" },
    { question: "Which keyword declares a constant in JS?", options: ["let", "var", "const", "static"], correct: "C" },
    { question: "Which sorting algorithm has the best average-case time complexity?", options: ["Bubble Sort", "Quick Sort", "Selection Sort", "Insertion Sort"], correct: "B" },
    { question: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Power Unit", "Core Processing Utility", "Control Panel Unit"], correct: "A" },
    { question: "Which protocol is used to transfer files over the internet?", options: ["HTTP", "FTP", "SMTP", "IP"], correct: "B" }
  ],
  "AI/ML": [
    { question: "Which algorithm is used for classification?", options: ["K-Means", "SVM", "DFS", "Bubble Sort"], correct: "B" },
    { question: "What does 'epoch' mean in training?", options: ["One pass over data", "Model accuracy", "Loss function", "None"], correct: "A" },
    { question: "Which metric is used to evaluate classification models?", options: ["MSE", "Accuracy", "RMSE", "R-Squared"], correct: "B" },
    { question: "Which technique prevents overfitting?", options: ["Dropout", "Gradient Descent", "Batch Normalization", "ReLU"], correct: "A" }
  ],
  "Web Development": [
    { question: "Which tag creates a hyperlink in HTML?", options: ["<link>", "<a>", "<href>", "<url>"], correct: "B" },
    { question: "Which is a JavaScript framework?", options: ["React", "Laravel", "Django", "Flask"], correct: "A" },
    { question: "Which CSS property controls spacing inside an element?", options: ["margin", "padding", "border", "gap"], correct: "B" },
    { question: "What does DOM stand for?", options: ["Document Object Model", "Data Output Method", "Digital Order Map", "None"], correct: "A" }
  ],
  "General": [
    { question: "What is recursion?", options: ["Looping", "Function calling itself", "Array sorting", "None"], correct: "B" },
    { question: "Which method converts JSON to JS object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"], correct: "A" }
  ]
};

const Exam = () => {
  const navigate = useNavigate();
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const profile = JSON.parse(localStorage.getItem("userProfile")) || {};
  const domain = profile.preferredDomain || "General";
  const interests = profile.interests || [];

  const domainQuestions = questionBank[domain] || [];
  const interestQuestions = interests.flatMap((interest) => questionBank[interest] || []);
  const fallbackQuestions = questionBank["General"] || [];

  const questions = [...domainQuestions, ...interestQuestions];
  const finalQuestions = questions.length > 0 ? questions : fallbackQuestions;

  const handleSelect = (qIndex, optionIndex) => {
    setSelectedAnswers((prev) => ({ ...prev, [qIndex]: optionIndex }));
  };

  useEffect(() => {
    localStorage.setItem("selectedAnswers", JSON.stringify(selectedAnswers));
  }, [selectedAnswers]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("quizBranch", domain);
    localStorage.setItem("quizQuestions", JSON.stringify(finalQuestions));
    navigate("/result");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-10 font-sans">
      <div className="w-full max-w-4xl bg-white rounded-xl p-10 shadow-[0_0_30px_rgba(11,31,92,0.2)]">
        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "#0B1F5C" }}>
          {domain} Quiz
        </h2>
        <form className="space-y-8" onSubmit={handleSubmit}>
          {finalQuestions.map((q, index) => (
            <div key={index}>
              <p className="text-lg font-semibold mb-4" style={{ color: "#0B1F5C" }}>
                {index + 1}. {q.question}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {q.options.map((opt, optIndex) => {
                  const label = String.fromCharCode(65 + optIndex);
                  const isSelected = selectedAnswers[index] === optIndex;
                  return (
                    <div
                      key={optIndex}
                      onClick={() => handleSelect(index, optIndex)}
                      className={`border rounded-lg px-4 py-3 cursor-pointer transition text-left ${
                        isSelected
                          ? "bg-white text-[#0B1F5C] border-[#0B1F5C] font-semibold"
                          : "bg-[#F0F4FF] text-[#0B1F5C] border-[#CBD5E1] hover:border-[#0B1F5C]"
                      }`}
                    >
                      <strong>{label}.</strong> {opt}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          <button
            type="submit"
            className="w-full text-white font-semibold py-3 text-lg rounded-md hover:brightness-90 transition"
            style={{ backgroundColor: "#0B1F5C" }}
          >
            Submit & View Result
          </button>
        </form>
      </div>
    </div>
  );
};

export default Exam;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserGraduate, FaMedal, FaTrophy } from "react-icons/fa";

const Result = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [branch, setBranch] = useState("General");
  const [answers, setAnswers] = useState([]);

  const getLevel = (score) => {
    if (score >= 6) return "Top";
    if (score >= 4) return "Intermediate";
    return "Beginner";
  };

  const getBadge = (score) => {
    if (score >= 6) return { icon: <FaTrophy />, label: "Expert", color: "bg-yellow-400 text-blue-900" };
    if (score >= 4) return { icon: <FaMedal />, label: "Intermediate", color: "bg-blue-400 text-white" };
    return { icon: <FaUserGraduate />, label: "Learner", color: "bg-gray-400 text-white" };
  };

  useEffect(() => {
    const storedAnswers = JSON.parse(localStorage.getItem("selectedAnswers")) || {};
    const storedBranch = localStorage.getItem("quizBranch") || "General";
    const storedQuestions = JSON.parse(localStorage.getItem("quizQuestions")) || [];

    setBranch(storedBranch);

    const evaluated = storedQuestions.map((q, i) => {
      const selectedIndex = storedAnswers[i];
      const selectedLabel = selectedIndex !== undefined ? String.fromCharCode(65 + selectedIndex) : "Not Answered";
      const correctLabel = q.correct;
      const isCorrect = selectedLabel === correctLabel;
      return {
        question: q.question,
        selected: selectedLabel,
        correct: correctLabel,
        isCorrect
      };
    });

    const correctCount = evaluated.filter((q) => q.isCorrect).length;
    setScore(correctCount);
    setAnswers(evaluated);

    const resultData = {
      score: correctCount,
      level: getLevel(correctCount),
      badge: getBadge(correctCount).label,
      branch: storedBranch
    };

    localStorage.setItem("quizResult", JSON.stringify(resultData));
  }, []);

  const handleFinish = () => {
    navigate("/dashboard");
  };

  const badge = getBadge(score);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-12 font-sans">
      <div className="w-full max-w-2xl bg-white rounded-xl p-10 shadow-[0_0_30px_rgba(11,31,92,0.2)] text-center">
        <h2 className="text-4xl font-bold mb-4" style={{ color: "#0B1F5C" }}>
          {branch} Quiz Result
        </h2>
        <p className="text-2xl font-semibold mb-2" style={{ color: "#0B1F5C" }}>
          Marks: {score} / {answers.length}
        </p>
        <p className="text-xl font-bold mb-2" style={{ color: "#0B1F5C" }}>
          Level: {getLevel(score)}
        </p>

        {/* Badge */}
        <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold ${badge.color} mb-6`}>
          <span className="text-xl">{badge.icon}</span>
          <span>{badge.label}</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
          <div
            className="bg-[#0B1F5C] h-4 rounded-full transition-all"
            style={{ width: `${(score / answers.length) * 100}%` }}
          ></div>
        </div>

        {/* Answer Breakdown */}
        <div className="text-left space-y-4 mb-6">
          {answers.map((q, i) => (
            <div key={i} className="border rounded-lg p-4">
              <p className="font-medium mb-1">{i + 1}. {q.question}</p>
              <p className="text-sm">Your Answer: <strong>{q.selected}</strong></p>
              <p className="text-sm">Correct Answer: <strong>{q.correct}</strong></p>
              <p className={`text-sm font-semibold ${q.isCorrect ? "text-green-600" : "text-red-600"}`}>
                {q.isCorrect ? "Correct" : "Incorrect"}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={handleFinish}
          className="px-6 py-2 bg-[#0B1F5C] text-white font-medium rounded-lg hover:brightness-90 transition"
        >
          Continue to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Result;
import React, { useState, useEffect, useRef } from "react";
import { FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";

const Community = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hey everyone! Excited to start the React module.",
      sender: "Rohan",
      role: "Student",
      timestamp: "10:02 AM"
    },
    {
      text: "Welcome, Rohan! Let me know if you need help with component structure.",
      sender: "Mentor Alex",
      role: "Mentor",
      timestamp: "10:05 AM"
    },
    {
      text: "Can someone explain useEffect with an example?",
      sender: "Riya",
      role: "Student",
      timestamp: "10:10 AM"
    },
    {
      text: "Sure Riya! useEffect runs after render. I’ll share a code snippet shortly.",
      sender: "Mentor Neha",
      role: "Mentor",
      timestamp: "10:12 AM"
    }
  ]);

  const [input, setInput] = useState("");
  const [role, setRole] = useState("Student");
  const [name, setName] = useState("You");
  const messagesEndRef = useRef(null);

  const sendMessage = () => {
    if (input.trim() === "") return;

    const newMessage = {
      text: input,
      sender: name || "You",
      role,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      })
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getAvatar = (role) =>
    role === "Mentor" ? (
      <FaChalkboardTeacher className="text-[#0B1F5C] text-3xl" />
    ) : (
      <FaUserGraduate className="text-blue-500 text-3xl" />
    );

  return (
    <div className="bg-gray-100 font-sans flex">
   
      <div className="ml-64 w-full px-10 py-0 flex justify-center">
        <div className="w-full max-w-[90vw] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-300 flex flex-col">
          
       
          <div className="bg-white px-8 py-6 border-b border-gray-300 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-[#0B1F5C]">Community Chat</h2>
            <div className="flex gap-3 items-center">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-base px-3 py-2 rounded-md border border-gray-300"
              />
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="bg-white border border-gray-300 text-gray-700 text-base px-3 py-2 rounded-md"
              >
                <option value="Student">Student</option>
                <option value="Mentor">Mentor</option>
              </select>
            </div>
          </div>

          
          <div className="px-8 py-6 space-y-5 bg-white">
            {messages.map((msg, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1">{getAvatar(msg.role)}</div>
                <div
                  className={`max-w-[90%] px-6 py-4 rounded-xl shadow-md border text-lg ${
                    msg.role === "Mentor"
                      ? "bg-[#E6ECF8] text-[#0B1F5C] border-[#C5D1EA]"
                      : "bg-blue-50 text-blue-900 border-blue-200"
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">
                      {msg.sender}
                      {msg.role === "Mentor" && (
                        <span className="ml-2 text-xs bg-[#0B1F5C] text-white px-2 py-0.5 rounded-full">
                          Mentor
                        </span>
                      )}
                    </span>
                    <span className="text-sm text-gray-500">{msg.timestamp}</span>
                  </div>
                  <p>{msg.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

    
          <div className="bg-gray-100 px-8 py-6 border-t border-gray-300 flex items-center">
            <input
              type="text"
              className="flex-1 p-4 rounded-lg border border-white bg-white text-gray-800 text-lg outline-none"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="ml-4 bg-[#0B1F5C] hover:bg-[#09204A] text-white px-6 py-3 rounded-lg text-base"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
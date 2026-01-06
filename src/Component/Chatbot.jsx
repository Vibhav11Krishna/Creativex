import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hi! I'm your assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage = { sender: 'user', text: input.trim() };
    setMessages([...messages, newMessage]);
    setInput('');

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { sender: 'bot', text: "Thanks for your message! I'm working on it." }
      ]);
    }, 600);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white shadow-2xl rounded-xl w-[500px] h-[700px] p-6 flex flex-col border border-gray-300">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-blue-900">Ask Me Anything</h3>
            <button onClick={() => setIsOpen(false)} aria-label="Close chatbot">
              <FaTimes className="text-red-500 text-xl" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto border rounded-lg p-4 mb-4 text-base text-gray-700 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 ${msg.sender === 'user' ? 'text-right text-blue-600' : 'text-left text-blue-900'}`}
              >
                <span className="inline-block bg-white px-4 py-2 rounded-lg shadow-sm max-w-[80%]">
                  {msg.text}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex items-center gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-1 border rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
            />
            <button
              onClick={handleSend}
              className="bg-blue-900 text-white p-3 rounded-full hover:bg-blue-800 transition"
              aria-label="Send message"
            >
              <FaPaperPlane className="text-lg" />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-900 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition"
          aria-label="Open chatbot"
        >
          <FaRobot className="text-xl" />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
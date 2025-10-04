import React, { useState, useEffect, useRef } from "react";
import { FaCommentDots } from "react-icons/fa";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hello! Welcome to B2 Tech Services. How can I help you today?" },
  ]);

  const chatEndRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    const botMsg = {
      sender: "bot",
      text: getBotReply(input),
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  const getBotReply = (message) => {
    const msg = message.toLowerCase();

    // Greetings
    if (msg.includes("hello") || msg.includes("hi"))
      return "👋 Hi there! Welcome to B2 Tech Services. Ask me about our services, training, resumes, or contact info.";

    // General Services
    if (msg.includes("services") || msg.includes("what do you offer"))
      return "🌟 We provide Recruitment Services, Software Training, Resume Preparation, and UI/UX Design Training.";

    // Recruitment
    if (msg.includes("recruitment") || msg.includes("hiring") || msg.includes("jobs"))
      return "💼 Our recruitment covers permanent staffing, contract staffing, executive hiring, project-based hiring, and hands-on recruitment. We specialize in tech domains like AI, Data Science, Cloud, Embedded, Salesforce, UI/UX, and more.";

    // Training
    if (msg.includes("training") || msg.includes("courses") || msg.includes("learn"))
      return "📚 We offer training in AI, Generative AI, Data Science, Salesforce, Python, Cloud (AWS/Azure), UI/UX, Embedded Systems, 4G/5G, Golang, and more.";

    // Resume Services
    if (msg.includes("resume") || msg.includes("cv"))
      return "📝 Yes! We create ATS-optimized resumes that increase your chances of getting shortlisted. Our resume services start at just ₹2000.";

    // UI/UX Design
    if (msg.includes("ui") || msg.includes("ux") || msg.includes("design"))
      return "🎨 Our UI/UX training includes research, prototyping, usability testing, responsive design, and mastery of Figma/Adobe XD/Sketch.";

    // Industries Covered
    if (msg.includes("industries") || msg.includes("domains"))
      return "🌍 We work across BFSI, Automotive, Healthcare, Retail, Manufacturing, Pharma, Telecom (4G/5G), Cloud, Cybersecurity, Embedded Systems, Semiconductor, and more.";

    // Contact
    if (msg.includes("contact") || msg.includes("email") || msg.includes("reach"))
      return "📩 You can contact us at hrushikesh@b2techservices.in or WhatsApp us at +91 63640 53221.";

    // Founder
    if (msg.includes("founder") || msg.includes("who started") || msg.includes("vision"))
      return "🚀 Our founder is a seasoned talent acquisition strategist who envisioned B2 Tech Services as a platform to empower professionals and organizations. Our motto: Believe & Become.";

    // Taglines
    if (msg.includes("tagline") || msg.includes("motto"))
      return "✨ Our taglines include: 'Your Go-To Partner for Hiring Excellence' and 'Believe & Become'. We exist to empower people and businesses to grow.";

    // Why Choose Us
    if (msg.includes("why choose") || msg.includes("why b2 tech"))
      return "💡 Because we focus on expertise, speed, people-first solutions, measurable impact, and long-term partnerships. We don’t just fill roles — we build futures.";

    // Guarantee
    if (msg.includes("guarantee") || msg.includes("assurance"))
      return "✅ For eligible candidates, we provide a 100% job guarantee through guided placements and trusted hiring partners.";

    // Default
    return "🤔 I didn’t quite get that. Try asking me about services, training, resumes, industries, or contact info.";
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      {/* Chat window */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-5 pointer-events-none"
        }`}
      >
        <div className="w-80 h-96 bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl shadow-2xl flex flex-col p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold">💬 B2 Tech Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-3 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-end ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "bot" && (
                  <div className="w-7 h-7 bg-green-500 text-white flex items-center justify-center rounded-full mr-2 text-xs">
                    🤖
                  </div>
                )}
                <div
                  className={`px-3 py-2 rounded-lg max-w-[70%] ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white rounded-br-none"
                      : "bg-gray-200 text-gray-800 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.sender === "user" && (
                  <div className="w-7 h-7 bg-blue-500 text-white flex items-center justify-center rounded-full ml-2 text-xs">
                    🧑
                  </div>
                )}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <div className="mt-3 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-1 border border-gray-300 px-3 py-1.5 rounded-md text-sm focus:outline-none"
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 text-sm"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#320A6B] hover:bg-blue-700 text-white p-4 rounded-full shadow-xl transition"
        aria-label="Chat with us"
        title="Chat with us"
      >
        <FaCommentDots size={22} />
      </button>
    </div>
  );
};

export default ChatWidget;

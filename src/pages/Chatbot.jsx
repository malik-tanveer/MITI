// src/pages/Chatbot.jsx
import React, { useState } from "react";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!message.trim()) return;

    const newMessage = { user: message };
    setChatHistory([...chatHistory, newMessage]);
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateMessage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer AIzaSyDwO35quNEIA2IMpmtHITRaCilK3uO6HIQ`, // yaha tumhari Gemini key
          },
          body: JSON.stringify({
            prompt: { text: message },
            temperature: 0.7,
          }),
        }
      );

      const data = await response.json();
      const botReply = data?.candidates?.[0]?.content || "Sorry, no response.";

      setChatHistory((prev) => [...prev, { bot: botReply }]);
    } catch (error) {
      console.error("Error:", error);
      setChatHistory((prev) => [...prev, { bot: "Something went wrong!" }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-slate-900 text-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-indigo-400">MITI Chatbot</h2>

      <div className="mb-4 h-64 overflow-y-auto border border-slate-700 rounded p-2 flex flex-col gap-2">
        {chatHistory.map((msg, idx) => (
          <div key={idx}>
            {msg.user && (
              <p className="text-right bg-indigo-500/50 inline-block p-2 rounded-lg">{msg.user}</p>
            )}
            {msg.bot && (
              <p className="text-left bg-slate-700/50 inline-block p-2 rounded-lg">{msg.bot}</p>
            )}
          </div>
        ))}
        {loading && <p className="text-left text-gray-400">Bot is typing...</p>}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          className="flex-1 px-2 py-2 rounded bg-slate-800 focus:outline-none"
        />
        <button onClick={handleSend} className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;

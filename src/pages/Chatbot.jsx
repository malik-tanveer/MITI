import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Mic, Send, Download, Home, ThumbsUp, ThumbsDown, Copy } from "lucide-react";
import { Link } from "react-router-dom";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), type: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
      // Replace with real API
      const response = await fetch("https://api.example.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();

      const botMsg = {
        id: Date.now() + 1,
        type: "bot",
        content: data.reply,
        isCode: data.isCode || false,
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), type: "bot", content: "Oops! Something went wrong." },
      ]);
    }
  };

  const downloadChat = () => {
    const chatText = messages
      .map((m) => (m.type === "user" ? `User: ${m.content}` : `Bot: ${m.content}`))
      .join("\n");
    const blob = new Blob([chatText], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "chat.txt";
    link.click();
  };

  const handleLikeDislike = (msgId) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === msgId ? { ...msg, feedback: true } : msg
      )
    );
  };

  const playVoice = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="w-full h-screen bg-gradient-to-b from-black via-slate-900 to-black text-gray-300 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md fixed w-full z-10">
        <Link to="/" className="flex items-center gap-2 text-indigo-400 hover:text-white transition">
          <Home className="w-6 h-6" /> Back to Home
        </Link>
        <h1 className="text-xl md:text-2xl font-bold text-white">MITI AI Chatbot</h1>
      </div>

      {/* Chat container */}
      <div className="flex-1 py-20 mt-20 px-[20%] overflow-y-auto flex flex-col gap-4 pb-32">
        {messages.length === 0 && (
          <div className="text-center text-gray-400 mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Welcome to MITI AI Chatbot</h2>
            <p className="text-lg md:text-xl max-w-xl mx-auto">
              Ask questions, get AI-powered guidance on data analysis, ML, or anything related to your projects. Start by typing your message below!
            </p>
          </div>
        )}

        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[70%] p-4 rounded-xl break-words ${
                msg.type === "user" ? "bg-indigo-600 text-white" : "bg-slate-800 text-gray-300 font-medium"
              }`}
            >
              {msg.isCode ? <pre className="bg-slate-700 p-2 rounded text-sm">{msg.content}</pre> : msg.content}

              {msg.type === "bot" && (
                <div className="flex gap-2 mt-2 text-xs justify-end">
                  <button onClick={() => handleLikeDislike(msg.id)} title="Like">
                    <ThumbsUp className="w-4 h-4 text-gray-400 hover:text-white" />
                  </button>
                  <button onClick={() => handleLikeDislike(msg.id)} title="Dislike">
                    <ThumbsDown className="w-4 h-4 text-gray-400 hover:text-white" />
                  </button>
                  <button onClick={() => copyText(msg.content)} title="Copy">
                    <Copy className="w-4 h-4 text-gray-400 hover:text-white" />
                  </button>
                  <button onClick={() => playVoice(msg.content)} title="Listen">
                    🔊
                  </button>
                </div>
              )}

              {msg.feedback && msg.type === "bot" && (
                <p className="text-xs text-green-400 mt-1">Thanks for your feedback!</p>
              )}
            </div>
          </motion.div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>

      {/* Input */}
      <div className="flex gap-3 items-center p-4 border-t border-slate-800 bg-slate-900/80 backdrop-blur-md fixed bottom-0 w-full px-[20%]">
        <button className="p-3 bg-slate-800 rounded-xl">
          <Mic className="w-5 h-5 text-gray-300" />
        </button>
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition"
        />
        <button onClick={handleSend} className="p-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl transition">
          <Send className="w-5 h-5 text-white" />
        </button>
        <button onClick={downloadChat} className="p-3 bg-purple-600 hover:bg-purple-700 rounded-xl transition">
          <Download className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;

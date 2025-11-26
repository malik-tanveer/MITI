import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I’m MITI Bot 🤖 Ask me anything." },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {

      const webhookUrl = "https://kyoaykaysgmailcom.app.n8n.cloud/webhook/797f930f-edc1-438c-a95e-d3f16d7fa217/chat";

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }), // hosted chat expects 'message'
      });

      const result = await response.json();

      // hosted chat ka response usually: result.response
      const botText = result?.response || "Sorry, I didn't understand that.";


      setMessages((prev) => [...prev, { sender: "bot", text: botText }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { sender: "bot", text: "API Error. Try again." }]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-200 via-pink-100 to-yellow-200 p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="bg-purple-600 text-white p-4 font-bold text-lg text-center rounded-t-2xl">
          MITI Chatbot
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 space-y-3 overflow-y-auto h-96">
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: m.sender === "user" ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`rounded-xl p-3 max-w-[70%] break-words ${m.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-900"
                  }`}
              >
                {m.text}
              </div>
            </motion.div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="flex border-t border-gray-300 p-3">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="ml-2 bg-purple-600 text-white p-2 rounded-xl hover:bg-purple-700 flex items-center justify-center"
          >
            <Send size={20} />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

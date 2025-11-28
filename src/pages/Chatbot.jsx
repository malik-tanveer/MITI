// src/pages/Chatbot.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Send, Mic, Volume2, ChevronLeft, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

// --- FIREBASE IMPORTS ---
import { getFunctions, httpsCallable, connectFunctionsEmulator } from 'firebase/functions';
import { app, auth } from '../firebase'; // Import the initialized app and auth objects

// --- FIREBASE INITIALIZATION ---
const functions = getFunctions(app, 'us-central1'); // Use your actual functions region

// 🌟 LOCAL TESTING/EMULATOR SETUP 🌟
if (window.location.hostname === "localhost") {
  console.log("Connecting to Firebase Functions emulator on localhost:5001");
  connectFunctionsEmulator(functions, "localhost", 5001);
}
const chatWithMiti = httpsCallable(functions, 'chatWithMiti');
// --- END FIREBASE SETUP ---

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [user, setUser] = useState(null); // State for logged-in user
  
  const containerRef = useRef(null);
  const recognitionRef = useRef(null); // Reference for Speech Recognition

  // Auto-scroll logic remains the same
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history, loading]);

  // Auth State Listener
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  // 🎤 Speech Recognition Logic (Restored)
  useEffect(() => {
    const win = window;
    const SpeechRecognition =
      win.SpeechRecognition || win.webkitSpeechRecognition || null;
    if (!SpeechRecognition) return;

    const recog = new SpeechRecognition();
    recog.lang = "en-US";
    recog.interimResults = false;
    recog.maxAlternatives = 1;

    recog.onresult = (e) => {
      const text = e.results?.[0]?.[0]?.transcript || "";
      if (text) {
        setInput((prev) => (prev ? prev + " " + text : text));
      }
    };

    recog.onend = () => {
      setListening(false);
    };

    recog.onerror = (err) => {
      console.error("Speech recognition error:", err);
      setListening(false);
    };

    recognitionRef.current = recog;
    return () => {
      try {
        recog.stop();
      } catch (e) {}
    };
  }, []);
  
  // TTS (Volume) logic remains the same
  const speakText = (text) => {
    if (!voiceEnabled || !text) return;
    try {
      const synth = window.speechSynthesis;
      if (synth.speaking) synth.cancel();
      const textToSpeak = text.replace(/^MITI:\s*/i, "").trim();
      const utter = new SpeechSynthesisUtterance(textToSpeak);
      utter.lang = "en-US";
      utter.rate = 1;
      synth.speak(utter);
    } catch (e) {
      console.warn("TTS error", e);
    }
  };

  // ... (handleCopyJSON remains the same)

  // --- handleSend FUNCTION (Uses Firebase Function) ---
  const handleSend = async () => {
    const text = input.trim();
    if (!text) return;

    // 1. Frontend Auth Check (Required by your Firebase Function)
    if (!user) {
        alert("Please sign in to start chatting! The service is protected.");
        return;
    }

    const time = new Date().toISOString();
    setHistory((h) => [...h, { user: text, bot: null, time, isError: false }]);
    setInput("");
    setLoading(true);

    try {
        // 2. Call the secure Firebase Function
        const result = await chatWithMiti({ message: text });
        
        const finalBotText = result.data.reply;
        
        const entry = { user: text, bot: finalBotText, time: new Date().toISOString(), isError: false };
        
        // Update the history entry
        setHistory((h) => {
            const copy = [...h];
            const idx = copy.map((e) => e.user).lastIndexOf(text);
            if (idx !== -1 && copy[idx].bot === null) {
                copy[idx] = entry;
                return copy;
            }
            return [...copy, entry];
        });

        speakText(finalBotText);
        setLoading(false);
    } catch (err) {
        console.error("Firebase Function Error:", err);
        
        // Handle specific function errors
        const errorMessage = (err.code === 'unauthenticated') 
            ? "MITI: Please log in to your account."
            : "MITI: Something went wrong. Try again. (API Error)";
            
        const entry = { user: text, bot: errorMessage, time: new Date().toISOString(), isError: true };
        
        // Update the history entry with error
        setHistory((h) => {
            const copy = [...h];
            const idx = copy.map((e) => e.user).lastIndexOf(text);
            if (idx !== -1 && copy[idx].bot === null) {
                copy[idx] = entry;
                return copy;
            }
            return [...copy, entry];
        });
        setLoading(false);
    }
  };
  // --- END handleSend FUNCTION ---

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // 🎤 toggleListen Function (Restored)
  const toggleListen = () => {
    const recog = recognitionRef.current;
    if (!recog) {
      alert("Speech recognition not supported in this browser.");
      return;
    }
    if (listening) {
      try {
        recog.stop();
      } catch {}
      setListening(false);
      return;
    }
    setInput(""); 
    setListening(true);
    try {
      recog.start();
    } catch (e) {
      console.warn("Speech start error", e);
      setListening(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black flex items-center justify-center p-6">
      <div className="w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-slate-900/70 border border-slate-800 rounded-2xl shadow-2xl backdrop-blur-xl overflow-hidden"
        >
          
          {/* Top bar: Back to Home | MITI | Auth Status */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
            
            <Link to="/" className="flex items-center gap-2 text-gray-300 hover:text-indigo-400 transition-colors">
              <ChevronLeft className="w-5 h-5" />
              <span className="font-semibold text-sm sm:text-base">Back to Home</span>
            </Link>

            <div className="flex items-center gap-2">
              <div className="text-right">
                <div className="text-xl font-extrabold text-indigo-400">MITI</div>
                <div className={`text-xs ${loading ? 'text-yellow-500' : 'text-gray-400'}`}>
                  {loading ? 'Thinking...' : 'Smart Chatbot'}
                </div>
              </div>
              <div className="w-3 h-3 rounded-full bg-green-500/80 animate-pulse"></div>
            </div>

             {/* Auth Status Placeholder */}
            <div className="text-sm">
                {user ? (
                    <span className="text-green-400">Logged In ({user.displayName || 'User'})</span>
                ) : (
                    <button className="text-red-400 hover:text-red-300 font-semibold" onClick={() => alert("Implement Sign In logic here!")}>
                        Sign In Required
                    </button>
                )}
            </div>
          </div>
          
          {/* Chat area */}
          <div className="px-4 py-6">
            <div
              ref={containerRef}
              className="h-[60vh] md:h-[64vh] overflow-y-auto p-4 rounded-xl bg-slate-900 border border-slate-700/50 shadow-inner"
            >
              {history.length === 0 && !loading && (
                <div className="text-center text-gray-500 mt-8 space-y-2">
                  <div className="text-4xl">🤖</div>
                  <p className="text-lg text-white font-semibold">Start the conversation!</p>
                  <p className="text-sm">Ask anything — MITI is listening.</p>
                </div>
              )}

              <div className="flex flex-col gap-6">
                {history.map((entry, idx) => (
                  <div key={idx} className="space-y-1">
                    {/* User Message JSX (Same as before) */}
                    <div className="flex justify-end">
                      <div className="max-w-[85%] sm:max-w-[70%]">
                        <div className="text-xs text-gray-500 text-right mb-1">
                          You • {entry.time ? new Date(entry.time).toLocaleTimeString() : '...'}
                        </div>
                        <div className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-t-xl rounded-bl-xl break-words text-left shadow-lg">
                          {entry.user}
                        </div>
                      </div>
                    </div>

                    {/* Bot Message JSX (Same as before) */}
                    {entry.bot !== null && (
                      <div className="flex justify-start items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                          M
                        </div>
                        <div className="max-w-[85%] sm:max-w-[70%]">
                          <div className="text-xs text-gray-500 mb-1">
                            MITI • {entry.time ? new Date(entry.time).toLocaleTimeString() : '...'}
                          </div>
                          <div 
                            className={`px-4 py-2 rounded-t-xl rounded-br-xl break-words text-gray-100 shadow-md ${
                              entry.isError 
                                ? 'bg-red-800/80 border border-red-600'
                                : 'bg-slate-700/80'
                            }`}
                          >
                            {entry.isError && <AlertTriangle className="w-4 h-4 inline-block mr-2 text-red-300" />}
                            {entry.bot}
                          </div>
                          <div className="flex gap-4 mt-2">
                            <button
                              onClick={() => speakText(entry.bot)}
                              className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center"
                              title="Repeat message"
                            >
                              <Volume2 className="w-3 h-3 mr-1" /> Speak
                            </button>
                            {/* Copy buttons remain */}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Loading state */}
                {loading && (
                  <div className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">M</div>
                    <div className="bg-slate-700/60 text-gray-400 px-4 py-2 rounded-xl animate-pulse">
                      MITI is typing...
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Input area */}
            <div className="mt-4">
              <div className="flex gap-3 items-end">
                {/* Mic Button */}
                <button
                  title={listening ? "Stop recording" : "Start voice input"}
                  onClick={toggleListen}
                  className={`p-3 rounded-full transition-colors flex-shrink-0 ${
                    listening ? "bg-red-500 text-white animate-pulse" : "bg-slate-700 hover:bg-slate-600 text-gray-300"
                  }`}
                >
                  <Mic className="w-5 h-5" />
                </button>

                {/* Textarea Input (Same as before) */}
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  rows={Math.min(4, input.split('\n').length || 1)}
                  placeholder={listening ? "Listening... start speaking!" : "Type your message... (Enter to send)"}
                  className="flex-1 px-4 py-3 rounded-xl bg-black/40 text-white resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all border border-transparent focus:border-indigo-500"
                  style={{ maxHeight: '100px' }}
                  disabled={loading}
                />

                {/* Voice Toggle (Same as before) */}
                <button
                  onClick={() => { setVoiceEnabled((v) => !v); }}
                  className={`p-3 rounded-full transition-colors flex-shrink-0 ${
                    voiceEnabled ? "bg-indigo-600 hover:bg-indigo-700 text-white" : "bg-slate-700 hover:bg-slate-600 text-gray-500"
                  }`}
                  title={voiceEnabled ? "Bot voice is ON" : "Bot voice is OFF"}
                >
                  <Volume2 className="w-5 h-5" />
                </button>

                {/* Send Button (Same as before) */}
                <button
                  onClick={handleSend}
                  disabled={loading || !input.trim() || !user} // Disabled if not authenticated
                  className={`flex items-center gap-2 transition-all px-4 py-3 rounded-xl flex-shrink-0 ${
                    loading || !input.trim() || !user
                      ? "bg-indigo-900/50 text-gray-500 cursor-not-allowed"
                      : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg"
                  }`}
                >
                  <Send className="w-4 h-4" />
                  <span className="hidden sm:inline">Send</span>
                </button>
              </div>
            </div>
          </div>
          
        </motion.div>
      </div>
    </div>
  );
}
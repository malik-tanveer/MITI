// src/pages/NotFound.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { useEffect } from "react";

export default function NotFound({ setHideLayout }) {

  // Hide Navbar/Footer when 404 page loads
  useEffect(() => {
    setHideLayout(true);
    return () => setHideLayout(false); 
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black flex items-center justify-center px-4 overflow-hidden relative">

      {/* Soft animated glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.07 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.5),transparent_70%)] blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-slate-900/80 border border-slate-800 rounded-2xl p-10 max-w-md text-center shadow-[0_0_60px_rgba(255,255,255,0.05)] backdrop-blur-xl"
      >
        <div className="flex justify-center mb-6">
          <AlertTriangle className="w-16 h-16 text-indigo-400 animate-pulse" />
        </div>

        <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
          404
        </h1>

        <p className="text-gray-400 text-lg mb-6">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="inline-block bg-indigo-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-indigo-600 transition transform hover:-translate-y-1"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}

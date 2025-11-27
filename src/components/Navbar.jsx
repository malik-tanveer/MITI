import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Chatbot", path: "/chatbot" },
    { name: "Data Tool", path: "/datatool" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black via-slate-900 to-black backdrop-blur-2xl border-b border-slate-800 shadow-md"
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg border border-white/20"
            >
              <GraduationCap className="text-white w-6 h-6" />
            </motion.div>
            <div>
              <h1 className="text-xl font-bold text-white">MITI</h1>
              <p className="text-gray-400 text-xs">
                Memon Industrial & Technical Institute
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-base font-medium transition ${
                    isActive ? "text-indigo-400 drop-shadow-md" : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setOpen(true)} className="md:hidden text-white">
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.07 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black backdrop-blur-sm z-40"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="fixed top-0 left-0 h-full w-72 bg-slate-900/70 border-r border-slate-800 shadow-md z-50 p-6"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-white"
              >
                <X className="w-7 h-7" />
              </button>

              {/* Mobile Logo */}
              <div className="flex items-center gap-4 mt-10 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center border border-white/20">
                  <GraduationCap className="text-white w-6 h-6" />
                </div>
                <h1 className="text-lg font-bold text-white">MITI</h1>
              </div>

              {/* Mobile Nav */}
              <div className="flex flex-col gap-3 mt-6">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="text-lg text-gray-300 py-2 px-2 rounded-lg hover:bg-white/10 hover:text-white"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

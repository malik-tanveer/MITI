import React from "react";
import { motion } from "framer-motion";
import {
  Upload,
  BarChart3,
  BrainCircuit,
  FileDown,
  MessageCircle,
  Layers,
} from "lucide-react";

const features = [
  {
    title: "Data Upload & Management",
    icon: <Upload className="w-12 h-12 text-blue-400" />,
    desc: "Upload CSV, Excel, or TXT files with auto-detection of columns and data types. Manage multiple datasets smoothly.",
    link: "/datatool",
  },
  {
    title: "Charts & Visualizations",
    icon: <BarChart3 className="w-12 h-12 text-purple-400" />,
    desc: "Generate beautiful charts including Bar, Line, Pie, Scatter, and Histograms with instant insights.",
    link: "/datatool",
  },
  {
    title: "Machine Learning Models",
    icon: <BrainCircuit className="w-12 h-12 text-indigo-400" />,
    desc: "Train simple ML models, check accuracy, view predictions, and download your model outputs easily.",
    link: "/datatool",
  },
  {
    title: "Export & Reporting",
    icon: <FileDown className="w-12 h-12 text-pink-400" />,
    desc: "Export cleaned data, predictions, charts, and download full reports in CSV, Excel, or PDF format.",
    link: "/datatool",
  },
  {
    title: "AI Chatbot",
    icon: <MessageCircle className="w-12 h-12 text-green-400" />,
    desc: "Smart conversational assistant built for MITI students — helps with studies, coding, tech, and general queries.",
    link: "/chatbot",
  },
  {
    title: "Multi-Topic Support",
    icon: <Layers className="w-12 h-12 text-yellow-400" />,
    desc: "Covers tech, AI/ML, college queries, general knowledge, and more — with context-aware conversations.",
    link: "/chatbot",
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full bg-gradient-to-b from-black via-slate-900 to-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl text-center font-extrabold text-white"
        >
          Key Features of{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            MITI Digital Hub
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-gray-300 text-center max-w-3xl mx-auto mt-6"
        >
          Explore a powerful set of tools designed for data analysis, machine
          learning, smart conversations, and advanced reporting — all together
          in one modern platform.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 bg-slate-900/60 border border-slate-800 rounded-2xl
                         backdrop-blur-xl shadow-lg text-center flex flex-col h-full"
            >
              <div className="mb-5 flex justify-center">{item.icon}</div>

              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>

              <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                {item.desc}
              </p>

              <a
                href={item.link}
                className="mt-6 inline-block px-5 py-2 rounded-lg
                         bg-indigo-600 hover:bg-indigo-700
                         text-white text-sm font-semibold transition"
              >
                Explore
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

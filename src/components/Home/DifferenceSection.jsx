import React from "react";
import { motion } from "framer-motion";
import { Layers, Cpu, Users, Clock, Monitor, Shield } from "lucide-react";

const differences = [
  {
    icon: <Layers className="w-12 h-12 text-blue-400" />,
    title: "All-in-One Platform",
    description:
      "Upload, clean, visualize, apply ML, merge datasets, and generate reports—all under one roof. No need for multiple tools or complicated setups.",
  },
  {
    icon: <Cpu className="w-12 h-12 text-purple-400" />,
    title: "AI-Powered Assistance",
    description:
      "Our intelligent Chatbot guides users step-by-step, answering queries about data, ML, visualization, or website features instantly.",
  },
  {
    icon: <Users className="w-12 h-12 text-indigo-400" />,
    title: "College & Student Focused",
    description:
      "Designed specifically for academic datasets and student projects, providing a simple interface for both beginners and advanced users.",
  },
  {
    icon: <Clock className="w-12 h-12 text-green-400" />,
    title: "Time-Saving & Efficient",
    description:
      "Automatic data summaries, ML workflow, instant chart generation, and report exports save you hours of manual work.",
  },
  {
    icon: <Monitor className="w-12 h-12 text-yellow-400" />,
    title: "Easy-to-Use Interface",
    description:
      "Modern UI with drag-and-drop uploads, real-time previews, interactive visualizations, and personalized Light/Dark themes.",
  },
  {
    icon: <Shield className="w-12 h-12 text-red-400" />,
    title: "Safe & Secure",
    description:
      "User data privacy is fully maintained. Only uploaded files are processed, ensuring safety and no server-side storage if applicable.",
  },
];

const DifferenceSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-black via-slate-900 to-black py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white text-center"
        >
          The Difference We Make
        </motion.h2>

        <p className="text-gray-400 max-w-3xl mx-auto mt-4 text-lg text-center leading-relaxed">
          Discover why Memon Digital Hub’s Data Tool and Chatbot stand out from generic solutions. Built for students and educators, it saves time, enhances learning, and simplifies workflows.
        </p>

        <div className="mt-16 flex flex-col gap-12">
          {differences.map((diff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Icon */}
              <div className="flex-shrink-0">{diff.icon}</div>

              {/* Content */}
              <div className="mt-4 md:mt-0 md:mx-8 max-w-xl text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">{diff.title}</h3>
                <p className="text-gray-400 leading-relaxed">{diff.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;

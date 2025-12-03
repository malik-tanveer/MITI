import React from "react";
import { Shield, Lock, Server, Eye, CheckCircle, Key, AlertCircle, Zap } from "lucide-react";
import { motion } from "framer-motion";

const trustFeatures = [
  {
    icon: <Shield className="w-12 h-12 text-indigo-400" />,
    title: "Trust Indicators",
    description: "Our platform is designed to build trust with clear policies, transparent workflows, and verified features."
  },
  {
    icon: <Lock className="w-12 h-12 text-purple-400" />,
    title: "Authentication & Authorization",
    description: "Secure login with role-based access ensures only authorized users can perform sensitive actions."
  },
  {
    icon: <Key className="w-12 h-12 text-blue-400" />,
    title: "Data Encryption",
    description: "All files and user data are encrypted during transfer and storage using industry-standard protocols."
  },
  {
    icon: <Server className="w-12 h-12 text-green-400" />,
    title: "Secure Infrastructure",
    description: "Hosted on robust cloud platforms with firewalls, redundancy, and regular security audits."
  },
  {
    icon: <Eye className="w-12 h-12 text-yellow-400" />,
    title: "Privacy & Transparency",
    description: "Users can track how their data is processed and choose what to share with the platform."
  },
  {
    icon: <CheckCircle className="w-12 h-12 text-teal-400" />,
    title: "Compliance & Safety",
    description: "We follow strict compliance standards to ensure your data is handled responsibly and safely."
  },
  {
    icon: <AlertCircle className="w-12 h-12 text-red-400" />,
    title: "Real-Time Monitoring",
    description: "Platform activities are monitored continuously to prevent misuse or unauthorized access."
  },
  {
  icon: <Zap className="w-12 h-12 text-orange-400" />,
  title: "Rapid Threat Response",
  description: "Our system detects and responds to potential threats instantly, minimizing risk and keeping your data secure."
}

];


const SecuritySection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-black via-slate-900 to-black py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white"
        >
          Security & Trust
        </motion.h2>

        <p className="text-gray-400 max-w-3xl mx-auto mt-4 text-lg leading-relaxed">
          MITI Digital Hub prioritizes your safety and trust. Every feature is designed to secure your data, maintain privacy, and ensure a reliable experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl backdrop-blur-xl shadow-lg text-center flex flex-col items-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;

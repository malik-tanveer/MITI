import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Globe, Mail } from "lucide-react";

const team = [
  {
    name: "Tanveer",
    role: "Full Stack Web Developer",
    avatar: "https://avatars.githubusercontent.com/u/197722550?v=4",
    github: "https://github.com/malik-tanveer",
    linkedin: "https://www.linkedin.com/in/tanveer/", // add real LinkedIn if available
    portfolio: "https://protfolio-personal.vercel.app/",
    mail : "youloos477@gmail.com"
  },
  {
    name: "Maroof",
    role: "Passionate Python Developer",
    avatar: "https://avatars.githubusercontent.com/u/188760113?v=4",
    github: "https://github.com/maroofiums",
    linkedin: "https://www.linkedin.com/in/maroof/", // add real LinkedIn if available
    portfolio: "https://maroof-portfolio-zeta.vercel.app/",
    mail : "maroof@gmail.com"
  },
];

const TeamSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-black via-slate-900 to-black py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white"
        >
          Meet Our Team
        </motion.h2>

        <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-lg">
          Behind MITI Digital Hub — two developers building modern AI-powered solutions.
        </p>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {team.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-slate-900/60 border border-slate-800 rounded-2xl
                         backdrop-blur-xl shadow-xl text-center transition"
            >
              {/* Avatar */}
              <img
                src={member.avatar}
                alt={member.name}
                className="w-28 h-28 rounded-full mx-auto shadow-lg border-4 border-indigo-600 object-cover"
              />

              <h3 className="text-2xl font-bold text-white mt-5">{member.name}</h3>
              <p className="text-indigo-400 font-medium mt-1">{member.role}</p>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-5 mt-6">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href={member.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition"
                >
                  <Globe className="w-6 h-6" />
                </a>
                 <a
                  href={`mailto:${member.mail}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

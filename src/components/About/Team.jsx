import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Globe, Mail } from "lucide-react";

const team = [
  {
    name: "Tanveer",
    role: "MERN / Full Stack Developer",
    avatar: "https://avatars.githubusercontent.com/u/197722550?v=4", // Use image path, fallback initials if not available
    initials: "T",
    github: "https://github.com/malik-tanveer",
    linkedin: "https://www.linkedin.com/in/malik-tanveer-342388349/",
    portfolio: "https://protfolio-personal.vercel.app/",
    email: "youloos477@gmail.com",
    bio: "Full-stack developer passionate about building interactive web apps with React, Node.js, Express, MongoDB, and Tailwind CSS. Currently exploring advanced TypeScript, Next.js, and 3D web experiences with Three.js.",
  },
  {
    name: "Maroof",
    role: "Python Developer / AI Enthusiast",
    avatar: "https://avatars.githubusercontent.com/u/188760113?v=4",
    initials: "M",
    github: "https://github.com/maroofiums",
    linkedin: "https://linkedin.com/in/maroofiums",
    portfolio: "https://maroof-portfolio-zeta.vercel.app/",
    email: "maroof96965@gmail.com",
    bio: "Curious and passionate Python Developer. Loves creating impactful projects from ML models to FastAPI & Django backends. Exploring NLP, Generative AI, and making interactive, automated systems.",
  },
];

const Team = () => {
  return (
    <section className="w-full bg-gradient-to-b from-black via-slate-900 to-black py-28">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white"
        >
          Meet Our Team
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-lg">
          Dedicated developers building modern AI-powered solutions for MITI Digital Hub.
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-slate-900/70 border border-slate-800 rounded-2xl
                         backdrop-blur-xl shadow-xl text-center flex flex-col items-center"
            >
              {/* Avatar with image fallback */}
              <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg">
                {member.avatar ? (
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center
                                  text-4xl font-bold text-white
                                  bg-gradient-to-br from-indigo-600 to-purple-600">
                    {member.initials}
                  </div>
                )}
              </div>

              {/* Name & Role */}
              <h3 className="text-2xl font-bold text-white mt-5">{member.name}</h3>
              <p className="text-indigo-400 font-medium mt-1">{member.role}</p>

              {/* Bio */}
              <p className="text-gray-300 mt-4 text-sm md:text-base leading-relaxed">{member.bio}</p>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-6 mt-6">
                <a href={member.github} target="_blank" className="text-gray-300 hover:text-white transition">
                  <Github className="w-6 h-6" />
                </a>
                <a href={member.linkedin} target="_blank" className="text-gray-300 hover:text-white transition">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href={member.portfolio} target="_blank" className="text-gray-300 hover:text-white transition">
                  <Globe className="w-6 h-6" />
                </a>
                <a href={`mailto:${member.email}`} className="text-gray-300 hover:text-white transition">
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

export default Team;

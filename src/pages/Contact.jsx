// src/pages/Contact.jsx
import { useState } from "react";
import { Mail, Phone, MapPin, Users, Github } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"; // make sure this is installed

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS integration
    emailjs
      .send(
        "service_fzo9y4b", // replace with your EmailJS Service ID
        "template_tyq9008", // replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "xslEPC_-4PNQYfakU" // replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(`Thank you, ${formData.name}! Your message has been sent.`);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          alert("Oops! Something went wrong. Please try again.");
        }
      );
  };

  // Framer motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-24 min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-gray-300 px-4"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="text-4xl font-bold text-white mb-3">Contact MITI</h1>
          <p className="text-gray-400 text-lg md:text-xl">
            Connect with MITI or the developers for inquiries, feedback, or support.
            Explore our Data Tool, Chatbot, and other innovative projects.
          </p>
        </motion.div>

        {/* Grid: Info + Form */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-indigo-400" />
                  <span>Plot # ST-1/8, Sector 36-I, (Civic Center-3) Korangi-5, Karachi, Pakistan</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-indigo-400" />
                  <div className="flex flex-col">
                    <span>(+92) 021-35035542</span>
                    <span>(+92) 021-35035543</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-indigo-400" />
                <span>info@wmomiti.com</span>
              </div>
            </div>

            {/* Team */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                <Users className="w-6 h-6 text-indigo-400" /> Our Team
              </h2>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <strong>Tanveer:</strong> Developed the professional Landing Page & Chatbot
                </li>
                <li>
                  <strong>Maroof:</strong> Built the Data Tool, CSV visualization & analysis
                </li>
              </ul>

              <div className="flex gap-4 mt-4">
                <a
                  href="https://github.com/malik-tanveer"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-gray-300 hover:text-indigo-400 transition"
                >
                  <Github className="w-5 h-5" /> Tanveer GitHub
                </a>
                <a
                  href="https://github.com/maroofiums"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-gray-300 hover:text-indigo-400 transition"
                >
                  <Github className="w-5 h-5" /> Maroof GitHub
                </a>
              </div>
            </div>

            <p className="text-gray-400 mt-6">
              MITI offers professional projects and innovative tools for learning.
              Explore our Data Tool for interactive CSV visualization,
              use the Chatbot for assistance, and navigate our Landing Page to discover all resources.
            </p>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-slate-900/70 backdrop-blur-md p-6 rounded-xl border border-slate-800 shadow-lg"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="bg-transparent text-white px-2 py-2 border-b border-slate-600 focus:border-indigo-400 focus:outline-none transition duration-300 placeholder-gray-400 w-full"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="bg-transparent text-white px-2 py-2 border-b border-slate-600 focus:border-indigo-400 focus:outline-none transition duration-300 placeholder-gray-400 w-full"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className="bg-transparent text-white px-2 py-2 border-b border-slate-600 focus:border-indigo-400 focus:outline-none transition duration-300 placeholder-gray-400 resize-none w-full"
              required
            />
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 transition text-white py-2 rounded-lg font-semibold w-full"
            >
              Send Message
            </button>
          </motion.form>
        </div>

        {/* Map */}
        <motion.div variants={itemVariants} className="mt-12 rounded-xl overflow-hidden border border-slate-800 shadow-md">
          <iframe
            title="MITI Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.8643198216378!2d67.16369879999999!3d24.8343132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33a5da6ee528f%3A0xac1e45b1a541fe8c!2sMemon%20Industrial%20%26%20Technical%20Institute!5e0!3m2!1sen!2s!4v1764238870631!5m2!1sen!2s"
            className="w-full h-64 md:h-96 border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </motion.div>
  );
}

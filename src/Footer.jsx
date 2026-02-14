import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-600 text-gray-300 ">

      {/* ===== TOP CTA ===== */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto px-6 py-16 border-b border-gray-700 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Let’s Build Something Meaningful
        </h2>

        <p className="max-w-2xl mx-auto text-gray-400 mt-2 ">
          Open to internships, freelance projects, and engineering
          collaborations focused on scalable systems.
        </p>

       
      </motion.div>

      {/* ===== MAIN GRID ===== */}

      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-5 gap-10">

        {/* BRAND */}

        <div>
          <h3 className="text-white font-bold text-lg mb-3">
            Sonu Maddheshiya
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            Full Stack Developer focused on scalable architecture,
            clean engineering, and production-ready systems.
          </p>
        </div>

        {/* NAVIGATION */}

        <div>
          <h4 className="text-white font-semibold mb-4">
            Navigation
          </h4>

          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/project" className="hover:text-white">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* STACK */}

        <div>
          <h4 className="text-white font-semibold mb-4">
            Core Stack
          </h4>

          <ul className="space-y-2 text-sm text-gray-400">
            <li>React + Tailwind UI</li>
            <li>Node / Express APIs</li>
            <li>Spring Boot Backend</li>
            <li>MongoDB / MySQL</li>
          </ul>
        </div>

        {/* LOCATION — NEW */}

        <div>
          <h4 className="text-white font-semibold mb-4">
            Location
          </h4>

          <ul className="space-y-2 text-sm text-gray-400">
            <li>📍 Delhi / Noida</li>
            <li>🏠 Kushinagar, Uttar Pradesh</li>
            <li>🌐 Available for Remote Work</li>
          </ul>
        </div>

        {/* CONTACT */}

        <div>
          <h4 className="text-white font-semibold mb-4">
            Connect
          </h4>

          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="mailto:sonumaddheshiya718@gmail.com"
                className="hover:text-white"
              >
                Email
              </a>
            </li>

            <li>
              <a
                href="https://github.com/sonu-maddy"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                GitHub
              </a>
            </li>

            <li>
              <a
                href="https://linkedin.com/in/sonu-maddheshiya"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                LinkedIn
              </a>
            </li>

            <li>
              <a
                href="https://leetcode.com/u/sonumaddy_1/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                LeetCode
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* ===== BOTTOM ===== */}

      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-white">Sonu Maddheshiya</span>— Built with React & Tailwind.
      </div>

    </footer>
  );
}

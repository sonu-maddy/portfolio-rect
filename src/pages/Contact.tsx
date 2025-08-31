import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaGithub, FaHackerrank, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_yzd07qe", //  EmailJS Service ID
        "template_yptuyzo", //  Template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "SwbNsCLLTvSj-i0LA" // Public Key
      )
      .then(
        () => {
          alert("Your message has been sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Failed...", error.text);
          alert("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-center border-b border-gray-800">
        <motion.h1
          className="text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Let’s Connect
        </motion.h1>
        <motion.p
          className="text-gray-400 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Got a project, question, or just want to say hello? Reach out through
          the form or any of my platforms below.
        </motion.p>
      </section>

      {/* Form + Info Section */}
      <section className="py-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        {/* Left - Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
          <div className="mb-4">
            <label className="block mb-2 text-gray-400">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-950 border border-gray-700 focus:outline-none focus:border-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-400">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-950 border border-gray-700 focus:outline-none focus:border-white"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-gray-400">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={6}
              className="w-full p-3 rounded-lg bg-gray-950 border border-gray-700 focus:outline-none focus:border-white"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black hover:bg-gray-200 transition rounded-lg py-3 font-semibold"
          >
            Send
          </button>
        </motion.form>

        {/* Right - Info */}
        <motion.div
          className="flex flex-col justify-center bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <p className="text-gray-400 mb-6">
            I'm open to collaboration, freelance work, and exciting project
            opportunities. Reach me directly using these details:
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-700">
              <MdEmail className="text-2xl" />
              <span>sonumaddheshiya718@gmail.com</span>
            </div>
            
            <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-700">
              <FaWhatsapp className="text-2xl" />
              <span>WhatsApp: +91 6307016696</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-700">
              <FaLinkedin className="text-2xl" />
              <a
                href="https://www.linkedin.com/in/sonu-maddheshiya"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Social Links Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="p-6 bg-gray-900 border border-gray-700 rounded-xl text-center hover:bg-gray-800 transition"
            whileHover={{ scale: 1.05 }}
          >
            <FaGithub className="mx-auto text-4xl mb-3" />
            <p className="font-semibold">GitHub</p>
          </motion.a>
          <motion.a
            href="https://leetcode.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="p-6 bg-gray-900 border border-gray-700 rounded-xl text-center hover:bg-gray-800 transition"
            whileHover={{ scale: 1.05 }}
          >
            <SiLeetcode className="mx-auto text-4xl mb-3" />
            <p className="font-semibold">LeetCode</p>
          </motion.a>
          <motion.a
            href="https://www.hackerrank.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="p-6 bg-gray-900 border border-gray-700 rounded-xl text-center hover:bg-gray-800 transition"
            whileHover={{ scale: 1.05 }}
          >
            <FaHackerrank className="mx-auto text-4xl mb-3" />
            <p className="font-semibold">HackerRank</p>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="p-6 bg-gray-900 border border-gray-700 rounded-xl text-center hover:bg-gray-800 transition"
            whileHover={{ scale: 1.05 }}
          >
            <FaLinkedin className="mx-auto text-4xl mb-3" />
            <p className="font-semibold">LinkedIn</p>
          </motion.a>
        </div>
      </section>
    </div>
  );
}

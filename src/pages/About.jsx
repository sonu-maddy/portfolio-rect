import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

/* ================= SCROLL INDICATOR ================= */

function ScrollIndicator() {
  const sections = [
    "about",
    "resume",
    "education",
    "skills",
    "certs",
    "contact",
    "social",
  ];

  const [active, setActive] = useState("about");

  useEffect(() => {
    const handler = () => {
      let closest = "about";
      let min = Infinity;

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - window.innerHeight / 2);

        if (distance < min) {
          min = distance;
          closest = id;
        }
      });

      setActive(closest);
    };

    window.addEventListener("scroll", handler);
    handler();

    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 space-y-4 hidden md:block">
      {sections.map((sec) => (
        <div
          key={sec}
          onClick={() => scrollTo(sec)}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div
            className={`w-3 h-3 rounded-full transition ${
              active === sec
                ? "bg-blue-600 scale-125"
                : "bg-gray-400 group-hover:bg-blue-400"
            }`}
          />

          <span
            className={`text-xs capitalize ${
              active === sec
                ? "text-blue-600 font-semibold"
                : "text-gray-400"
            }`}
          >
            {sec}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ================= MAIN ABOUT PAGE ================= */

export default function About() {
  const formRef = useRef();

  /* EMAIL FUNCTION */

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yzd07qe",     // replace with yours
        "template_ma8mqll",    // replace with yours
        formRef.current,
        "SwbNsCLLTvSj-i0LA"    // replace with your public key
      )
      .then(
        () => {
          alert("✅ Message sent!");
          formRef.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message");
          console.log(error.text);
        }
      );
  };

  /* DATA */

  const education = [
    {
      title: "10th — High School",
      year: "2017",
      desc: "Strong math & analytical foundation.",
    },
    {
      title: "12th — Intermediate",
      year: "2019",
      desc: "Logical reasoning & problem solving focus.",
    },
    {
      title: "Diploma — Computer Science",
      year: "2020-2023",
      desc: "Hands-on programming exposure.",
    },
    {
      title: "B.Tech — Computer Science",
      year: "2023–2026",
      desc: "Full-stack & system design specialization.",
    },
  ];

  const skills = {
    Frontend: ["React", "Tailwind", "JavaScript"],
    Backend: ["Node.js", "Express", "MongoDB"],
    Languages: ["Java", "Python", "C++"],
    Tools: ["Git", "Docker", "Postman"],
  };

  /* ================= UI ================= */

  return (
    <section className="bg-white text-gray-900 py-20 px-6">

      <ScrollIndicator />

      {/* STORY */}

      <div id="about" className="max-w-5xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-10 rounded-2xl bg-blue-50 border shadow-md"
        >
          <h2 className="text-3xl font-bold mb-6">
            My Developer Story
          </h2>

          <p className="text-gray-700 leading-relaxed">
            I’m Sonu Maddheshiya — a full stack developer focused on building
            scalable, production-ready systems. I enjoy engineering software
            that is reliable, maintainable, and impactful.
          </p>
        </motion.div>
      </div>

      {/* RESUME SNAPSHOT */}

      <div id="resume" className="max-w-5xl mx-auto mb-20">
        <h2 className="text-2xl font-bold text-center mb-10">
          Resume Snapshot
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-6 p-8 bg-blue-50 border rounded-xl"
        >
          <p>🎓 Final Year B.Tech CSE</p>
          <p>💻 MERN + Spring Engineering</p>
          <p>📚 300+ DSA Problems</p>
          <p>🏅 HackerRank Achievements</p>
          <p>🚀 Internship Experience</p>
          <p>⚙ Backend Architecture Builds</p>
        </motion.div>
      </div>

      {/* EDUCATION */}

      <div id="education" className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl font-bold text-center mb-10">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-6 border rounded-xl bg-gray-50"
            >
              <h3 className="font-semibold">{edu.title}</h3>
              <p className="text-sm text-gray-500">{edu.year}</p>
              <p className="mt-2 text-gray-600">{edu.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SKILLS */}

      <div id="skills" className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl font-bold text-center mb-10">
          Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {Object.entries(skills).map(([cat, list], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-6 border rounded-xl bg-gray-50"
            >
              <h3 className="font-semibold mb-3">{cat}</h3>

              {list.map((skill, idx) => (
                <p key={idx} className="text-gray-600">
                  ✓ {skill}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* CERTIFICATIONS */}

      <div id="certs" className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl font-bold text-center mb-10">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 border rounded-xl bg-gray-50"
          >
            ✓ GeeksforGeeks DSA Challenge
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 border rounded-xl bg-gray-50"
          >
            ✓ AWS S3 Certification
          </motion.div>

        </div>
      </div>

      {/* CONTACT */}

      <div id="contact" className="max-w-3xl mx-auto mb-20">

        <h2 className="text-2xl font-bold text-center mb-8">
          Contact Me
        </h2>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="p-8 border rounded-xl bg-gray-50 space-y-4"
        >
          <input
            name="user_name"
            placeholder="Your Name"
            className="w-full border p-3 rounded"
            required
          />

          <input
            name="user_email"
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            className="w-full border p-3 rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>

      </div>

      {/* SOCIAL */}

      <div id="social" className="max-w-6xl mx-auto">

        <h2 className="text-2xl font-bold text-center mb-10">
          Connect
        </h2>

        <div className="grid md:grid-cols-5 gap-6">
          {["Email", "LinkedIn", "GitHub", "LeetCode", "Instagram"].map(
            (s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="p-6 border rounded-xl bg-gray-50 text-center"
              >
                {s}
              </motion.div>
            )
          )}
        </div>

      </div>

    </section>
  );
}

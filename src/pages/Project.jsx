import React from "react";
import { motion } from "framer-motion";

export default function Project() {

  /* ================= FLAGSHIP PRIVATE WORKSPACE ================= */

  const workspace = {
    title: "My Workspace Platform (Private)",
    desc: "A SaaS-style productivity ecosystem managing teams, communication, and project workflows. Designed as a real-world engineering environment demonstrating scalable architecture and secure backend systems.",
    features: [
      "Multi-team collaboration workflows",
      "Real-time messaging architecture",
      "Secure authentication & role management",
      "Modular backend design",
      "Production-grade UI structure",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Tailwind",
      "AWS",
    ],
  };

  /* ================= MAJOR PROJECTS ================= */

  const majorApps = [
    {
      title: "Journal App Backend",
      desc: "Java + MongoDB journaling backend with scalable CRUD architecture and REST API structure.",
      tech: ["Java", "Spring Boot", "MongoDB", "REST API"],
      demo: null,
      repo: "#",
    },
    {
      title: "Hotel Management Backend",
      desc: "Spring Boot backend with JWT authentication, JPA persistence, and email workflow integration.",
      tech: ["Spring Boot", "MySQL", "JWT", "Java Mail", "JPA"],
      demo: null,
      repo: "#",
    },
    {
      title: "Food App Full Stack",
      desc: "Responsive ordering platform with authentication, payment integration, and API-driven architecture.",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Razorpay",
      ],
      demo: "#",
      repo: "#",
    },
    {
      title: "Portfolio System",
      desc: "Dynamic developer portfolio showcasing UI architecture and recruiter-focused presentation.",
      tech: ["React", "Tailwind", "EmailJS"],
      demo: "#",
      repo: "#",
    },
  ];

  /* ================= LEARNING BUILDS ================= */

  const learning = [
    "Task Manager MERN",
    "React Practice Builds",
    "Node API Learning",
    "SQL Exercises",
    "Assessment Projects",
    "DSA Java Practice",
  ];

  /* ================= TECH BADGE ================= */

  const TechStack = ({ stack }) => (
    <div className="flex flex-wrap gap-2 mt-3">
      {stack.map((tech, i) => (
        <span
          key={i}
          className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>
  );

  /* ================= BUTTONS ================= */

  const Buttons = ({ demo, repo }) => (
    <div className="flex gap-3 mt-4 flex-wrap">
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
        >
          Live Demo
        </a>
      )}

      {repo && (
        <a
          href={repo}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 border rounded hover:bg-gray-200 text-sm"
        >
          GitHub Repo
        </a>
      )}
    </div>
  );

  /* ================= UI ================= */

  return (
    <section className="project bg-white text-gray-900 py-20 px-6">

      {/* HEADER */}

      <div className="max-w-5xl mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          Engineering Project Portfolio
        </motion.h1>

        <p className="text-gray-600">
          Real-world backend systems, scalable architecture builds, and
          full-stack applications demonstrating production engineering.
        </p>
      </div>

      {/* ================= PRIVATE WORKSPACE ================= */}

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto mb-20 p-10 rounded-2xl bg-blue-50 border shadow-md"
      >

        <span className="inline-block mb-4 px-4 py-1 text-sm bg-blue-600 text-white rounded-full">
          Private Production System
        </span>

        <h2 className="text-xl font-semibold mb-3">
          {workspace.title}
        </h2>

        <p className="text-gray-600 mb-3">
          {workspace.desc}
        </p>

        <TechStack stack={workspace.tech} />

        <div className="grid md:grid-cols-2 gap-3 mt-6">
          {workspace.features.map((f, i) => (
            <p key={i}>✓ {f}</p>
          ))}
        </div>

        <div className="mt-6 p-5 bg-white border rounded-lg text-sm text-gray-600">
          🔒 This platform is private and used as a real-world engineering
          workspace. Architecture walkthrough available during interviews.
        </div>

      </motion.div>

      {/* ================= MAJOR PROJECTS ================= */}

      <div className="max-w-6xl mx-auto mb-20">

        <h2 className="text-2xl font-bold mb-10 text-center">
          🚀 Major Applications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {majorApps.map((app, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="border rounded-xl p-6 bg-gray-50 hover:shadow-md"
            >
              <h3 className="font-semibold mb-2">
                {app.title}
              </h3>

              <p className="text-gray-600 mb-2">
                {app.desc}
              </p>

              <TechStack stack={app.tech} />

              <Buttons demo={app.demo} repo={app.repo} />
            </motion.div>
          ))}

        </div>
      </div>

      {/* ================= LEARNING BUILDS ================= */}

      <div className="max-w-6xl mx-auto">

        <h2 className="text-2xl font-bold mb-10 text-center">
          📚 Learning & Assessment Builds
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {learning.map((name, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="border rounded-xl p-5 bg-gray-50 hover:shadow-md"
            >
              {name}
            </motion.div>
          ))}

        </div>
      </div>

    </section>
  );
}

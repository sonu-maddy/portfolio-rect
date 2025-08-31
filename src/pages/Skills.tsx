import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  const skills: Record<string, { title: string; desc: string }[]> = {
    frontend: [
      { title: "React", desc: "Building interactive UIs" },
      { title: "TailwindCSS", desc: "Modern styling system" },
      { title: "JavaScript / TypeScript", desc: "Dynamic web apps" },
      { title: "Next.js", desc: "SSR & SSG applications" },
      { title: "Figma", desc: "UI/UX Design tools" },
    ],
    backend: [
      { title: "Node.js", desc: "Scalable backend apps" },
      { title: "Express.js", desc: "REST APIs & middleware" },
      { title: "Java / Spring Boot", desc: "Enterprise applications" },
      { title: "JWT & OAuth", desc: "Authentication & Security" },
      { title: "Kafka", desc: "Event-driven architecture" },
    ],
    database: [
      { title: "MySQL", desc: "Relational database" },
      { title: "MongoDB", desc: "NoSQL database" },
      { title: "PostgreSQL", desc: "Advanced relational DB" },
      { title: "Redis", desc: "Caching & fast storage" },
      { title: "Firebase", desc: "Realtime DB & Auth" },
    ],
    theory: [
      { title: "DSA", desc: "Problem solving & algorithms" },
      { title: "DBMS", desc: "Database concepts & queries" },
      { title: "Operating System", desc: "Process, memory, file systems" },
      { title: "Computer Networks", desc: "Protocols & routing" },
      { title: "System Design", desc: "High-level architecture" },
    ],
    tools: [
      { title: "JWT", desc: "🔐" },
      { title: "Kafka", desc: "📡" },
      { title: "Figma", desc: "🎨" },
      { title: "Git & GitHub", desc: "🌐" },
      { title: "Docker", desc: "🐳" },
      { title: "Postman", desc: "📮" },
      { title: "Linux", desc: "🐧" },
      { title: "VS Code", desc: "💻" },
      { title: "IntelliJ IDEA", desc: "💻" },
    ],
  };

  return (
    <section className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto text-center">
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {Object.keys(skills).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeTab === tab
                  ? "bg-white text-black shadow-md"
                  : "bg-gray-900 hover:bg-gray-700 text-white"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Skills Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills[activeTab].map((skill, i) => (
            <motion.div
              key={i}
              className="p-6 bg-gray-900 rounded-2xl shadow-md hover:scale-105 transition"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-400">{skill.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

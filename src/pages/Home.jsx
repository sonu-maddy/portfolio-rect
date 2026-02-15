import React, { useRef } from "react";
import workspaceImg from "../assets/sonu-workspace.png";

import { motion } from "framer-motion";
import NavBar from "../NavBar";

/* ========= reusable card ========= */

const Card = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="bg-gray-50 border rounded-xl p-8 hover:shadow-md transition"
  >
    {children}
  </motion.div>
);

/* ========= reusable section ========= */

const Section = ({ title, subtitle, children }) => (
  <section className="py-20 px-6 bg-white">
    <div className="max-w-6xl mx-auto">

      {(title || subtitle) && (
        <div className="text-center mb-12">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {children}

    </div>
  </section>
);

export default function Home() {
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToProject = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white min-h-screen">

      <NavBar />

      {/* ================= HERO ================= */}

      <section className="py-28 px-6 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Full Stack Developer
            <span className="text-gray-400"> Building Scalable Systems</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-600 mb-10"
          >
            Secure architecture, performance engineering,
            and production-ready application development.
          </motion.p>

          <div className="flex justify-center gap-6">

            <button

              className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              <a href="/project">View Projects</a>
            </button>

            <button
              onClick={scrollToContact}
              className="px-6 py-3 border rounded hover:bg-gray-100"
            >
              Contact Me
            </button>

          </div>


        </div>
      </section>

      {/* ================= ENGINEERING VALUE ================= */}

      <Section title="Engineering Strength">

        <div className="grid md:grid-cols-3 gap-8">

          {[
            ["System Architecture", "Secure backend workflows & scalable infrastructure."],
            ["Modern Frontend", "Responsive UI with performance focus."],
            ["Production Discipline", "Real-world engineering delivery mindset."],
          ].map(([title, desc], i) => (
            <Card key={i}>
              <h3 className="font-semibold mb-3">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </Card>
          ))}

        </div>

      </Section>



      {/* ================= WORKSPACE FLAGSHIP ================= */}

      <Section
        title="ProjectX — My Workspace Platform"
        subtitle="Private SaaS-style collaboration ecosystem"
      >

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gray-50 border rounded-xl p-10 hover:shadow-md transition"
        >

          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT — description */}

            <div>

              {/* badge */}

              <span className="inline-block mb-4 px-4 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
                Private Production Platform
              </span>

              <h3 className="text-xl font-semibold mb-4">
                Team Collaboration & Workflow System
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                My Workspace is a production-grade internal platform designed to
                manage teams, communication, and project workflows. Built using
                scalable architecture principles, it demonstrates secure
                authentication, modular backend design, and real-world system
                engineering.
              </p>

              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Multi-team project management workflows</li>
                <li>✓ Real-time collaboration architecture</li>
                <li>✓ Secure authentication & role structure</li>
                <li>✓ Modular scalable backend system</li>
                <li>✓ Production-ready UI design</li>
              </ul>

              {/* trust message */}

              <div className="p-5 bg-white border rounded-lg text-sm text-gray-600">
                🔒 This system is private and used as a real-world engineering
                workspace. Architecture and implementation details can be
                discussed during interviews or client meetings.
              </div>

            </div>

            {/* RIGHT — preview placeholder */}

            <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-10 text-center">

              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Workspace Dashboard Preview
              </h3>

              <div className="mt-6">
                <img
                  src={workspaceImg}
                  alt="Sonu Workspace Architecture"
                  className="w-full rounded-xl border border-gray-300 dark:border-zinc-700 shadow-lg hover:scale-105 transition duration-300"
                />
              </div>

            </div>



          </div>

        </motion.div>

      </Section>


      {/* ================= FREELANCE CLIENT SECTION ================= */}

      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">

        <div className="max-w-6xl mx-auto">

          {/* ===== HEADLINE ===== */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Freelance Development for Real Business Needs
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              I help founders, startups, and teams turn ideas into reliable,
              scalable software — without complexity or confusion.
            </p>
          </motion.div>

          {/* ===== WHAT I BUILD ===== */}

          <div className="grid md:grid-cols-3 gap-8 mb-16">

            {[
              [
                "Business Web Apps",
                "Dashboards, admin panels, and workflow systems that support real operations.",
              ],
              [
                "Full Stack Platforms",
                "Secure backend + responsive frontend engineered for growth.",
              ],
              [
                "Performance Upgrades",
                "Optimizing slow or messy systems into clean, fast architecture.",
              ],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="bg-white border rounded-xl p-8 hover:shadow-md transition"
              >
                <h3 className="font-semibold mb-3">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </motion.div>
            ))}

          </div>

          {/* ===== TRUST BLOCK ===== */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-blue-50 border rounded-2xl p-10 mb-16"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">
              Why Clients Like Working With Me
            </h3>

            <div className="grid md:grid-cols-3 gap-6 text-gray-700">

              <div className="bg-white border rounded-xl p-6">
                ✓ Clear communication & realistic timelines
              </div>

              <div className="bg-white border rounded-xl p-6">
                ✓ Clean code built for long-term scalability
              </div>

              <div className="bg-white border rounded-xl p-6">
                ✓ Reliable delivery — no rushed shortcuts
              </div>

            </div>
          </motion.div>

          {/* ===== SIMPLE PROCESS ===== */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h3 className="text-xl font-semibold text-center mb-8">
              Simple Collaboration Process
            </h3>

            <div className="grid md:grid-cols-4 gap-6 text-gray-700">

              {[
                "Discuss goals & requirements",
                "Plan architecture & timeline",
                "Build with progress updates",
                "Launch & refine",
              ].map((step, i) => (
                <div
                  key={i}
                  className="bg-gray-50 border rounded-xl p-6 text-center"
                >
                  {step}
                </div>
              ))}

            </div>
          </motion.div>

          {/* ===== STRONG CTA ===== */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center bg-white border rounded-2xl p-12 shadow-md"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>

            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you’re launching an MVP, improving an internal tool,
              or building something new — let’s create software that works
              in the real world.
            </p>

            <div className="flex flex-wrap justify-center ">
              <div ref={contactRef} className="w-full">

                <section className="py-6 md:py-10 px-6 bg-gray-50">

                  <div className="max-w-4xl mx-auto text-center">

                    <motion.h2
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="text-3xl md:text-4xl font-bold mb-4"
                    >
                      Contact Me
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                      className="text-gray-600 mb-6"
                    >
                      Let’s discuss your next project.
                    </motion.p>

                    <motion.a
                      href="https://wa.me/916307016696"
                      target="_blank"
                      rel="noreferrer"
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                      className="inline-block px-8 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
                    >
                      Chat on WhatsApp
                    </motion.a>

                  </div>

                </section>

              </div>
            </div>
          </motion.div>

        </div>

      </section>


    </div>
  );
}

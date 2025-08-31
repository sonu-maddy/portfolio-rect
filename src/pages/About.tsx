import React from "react";

// ⭐ About Section
function AboutSection() {
  const education = [
    {
      year: "2016",
      title: "10th (High School)",
      desc: "Completed with strong foundation in Mathematics and Science.",
      institute: "Your School Name",
    },
    {
      year: "2018",
      title: "12th (Intermediate)",
      desc: "Focused on Physics, Chemistry, and Mathematics.",
      institute: "Your College Name",
    },
    {
      year: "2021",
      title: "Diploma in Computer Science (3 Years)",
      desc: "Gained practical knowledge of programming, databases, and networking.",
      institute: "Your Polytechnic College Name",
    },
    {
      year: "2022 - 2026",
      title: "B.Tech in Computer Science",
      desc: "Currently pursuing B.Tech with expected graduation in 2026. Exploring Full Stack Development, System Design, and Problem Solving.",
      institute: "Your University Name",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white py-16 px-6"
    >
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-300">
          Hi 👋 I’m <span className="font-semibold">Sonu Maddheshiya</span>, a
          passionate Full Stack Developer and problem solver. My journey started
          with curiosity for technology in school and now I am continuously
          learning & building projects while pursuing my B.Tech.
        </p>
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="border-l-4 border-white absolute h-full left-6 top-0"></div>
        <div className="space-y-12 pl-16">
          {education.map((edu, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-8 top-2 w-6 h-6 rounded-full bg-white border-4 border-black"></div>
              <div className="bg-neutral-900 p-6 rounded-2xl shadow-lg hover:shadow-gray-500/40 transition">
                <h3 className="text-xl font-bold">{edu.title}</h3>
                <p className="text-sm text-gray-400">
                  {edu.institute} | {edu.year}
                </p>
                <p className="mt-2 text-gray-300">{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ⭐ Skills Section
function SkillsSection() {
  const skills = {
    Languages: ["JavaScript", "Java", "C++", "Python"],
    Frontend: ["React.js", "Tailwind CSS", "HTML5", "CSS3"],
    Backend: ["Node.js", "Express.js", "MongoDB", "MySQL"],
    Tools: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
  };

  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white py-16 px-6"
    >
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Skills</h2>
        <p className="text-lg text-gray-300">
          These are the technologies, tools, and languages I work with.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {Object.entries(skills).map(([category, items], idx) => (
          <div
            key={idx}
            className="bg-neutral-900 p-6 rounded-2xl shadow-lg hover:shadow-gray-500/40 transition"
          >
            <h3 className="text-xl font-bold mb-4">{category}</h3>
            <ul className="space-y-2">
              {items.map((skill, i) => (
                <li key={i} className="text-gray-300 hover:text-white">
                  ⚡ {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

// ⭐ Combined Page
export default function AboutAndSkills() {
  return (
    <div>
      <AboutSection />
      <SkillsSection />
    </div>
  );
}

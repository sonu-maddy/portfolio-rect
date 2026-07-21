export const stats = [
  { value: "300+", label: "DSA problems solved" },
  { value: "2026", label: "final-year B.Tech CSE" },
  { value: "MERN", label: "+ Spring Boot" },
  { value: "AWS S3", label: "certified" },
];

export const projects = [
  {
    id: "01",
    status: "private",
    year: "ongoing",
    title: "My Workspace Platform",
    tagline: "SaaS-style team collaboration ecosystem",
    problem: "Teams scattered across chat apps, docs and spreadsheets lose track of who owns what and why a decision was made.",
    build: "A production-grade internal platform for managing teams, communication and project workflows, with modular backend design and role-based auth.",
    bullets: [
      "Multi-team project workflows with role-based access",
      "Real-time collaboration architecture",
      "Modular backend built for scale, not just the demo",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind", "AWS"],
    links: [],
    note: "Private build — architecture walkthrough on request.",
  },
  {
    id: "02",
    status: "live",
    year: "2026",
    title: "Watch Party",
    tagline: "Real-time synced video rooms",
    problem: "Watching something together over a call means someone is always a few seconds ahead, and re-syncing by hand gets old fast.",
    build: "A room-based app where play, pause and seek events broadcast over WebSockets so every viewer stays frame-aligned.",
    bullets: [
      "Room system for creating and joining watch sessions",
      "Socket.IO broadcasts keep playback state in sync across clients",
      "Reconnect handling so a dropped tab does not break the room",
    ],
    stack: ["React", "Node.js", "Express", "Socket.IO", "MongoDB", "JWT"],
    links: [
      { label: "Live demo", href: "https://watch-party-socket-io.netlify.app/" },
      { label: "Source", href: "https://github.com/sonu-maddy/WATCH-PARTY-SOCKET-IO" },
    ],
  },
  {
    id: "03",
    status: "full stack",
    year: "2025",
    title: "Food Ordering Platform",
    tagline: "Responsive ordering app with payments",
    problem: "Small food businesses need an ordering flow as smooth as the apps their customers already use, without enterprise overhead.",
    build: "An end-to-end ordering platform with auth, cart and checkout wired to Razorpay, on a REST API backend.",
    bullets: [
      "JWT-based auth across customer and admin flows",
      "Razorpay integration for real payment handling",
      "REST API structured for menu, orders and inventory",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Razorpay"],
    links: [],
    note: "Repo link on request.",
  },
  {
    id: "04",
    status: "backend",
    year: "2025",
    title: "Hotel Management Backend",
    tagline: "Booking backend with auth and email workflows",
    problem: "A booking system needs reliable persistence and confirmation emails as much as it needs a nice UI.",
    build: "A Spring Boot backend handling bookings with JWT auth, JPA persistence and automated email confirmations.",
    bullets: [
      "JWT authentication and role structure",
      "JPA persistence over MySQL",
      "Java Mail workflow for booking confirmations",
    ],
    stack: ["Spring Boot", "MySQL", "JWT", "Java Mail", "JPA"],
    links: [],
    note: "Repo link on request.",
  },
  {
    id: "05",
    status: "backend",
    year: "2025",
    title: "Journal App Backend",
    tagline: "CRUD journaling API",
    problem: "A journaling tool is only as good as the API underneath it — it has to hold up under real, frequent writes.",
    build: "A Java and MongoDB backend with a scalable CRUD structure exposed through a clean REST API.",
    bullets: [
      "REST API design for entries, tags and users",
      "MongoDB schema built for frequent small writes",
    ],
    stack: ["Java", "Spring Boot", "MongoDB", "REST API"],
    links: [],
    note: "Repo link on request.",
  },
];

export const learningBuilds = [
  "Task Manager (MERN)",
  "React practice builds",
  "Node API learning",
  "SQL exercises",
  "Assessment projects",
  "DSA in Java",
];

export const skills = {
  Frontend: ["React", "Tailwind CSS", "JavaScript"],
  Backend: ["Node.js", "Express", "MongoDB", "Spring Boot"],
  Languages: ["Java", "Python", "C++"],
  Tools: ["Git", "Docker", "Postman"],
};

export const education = [
  { year: "2023 – 2026", title: "B.Tech — Computer Science", note: "Full-stack and system design specialization" },
  { year: "2020 – 2023", title: "Diploma — Computer Science", note: "Hands-on programming exposure" },
  { year: "2019", title: "12th — Intermediate", note: "Logical reasoning and problem solving focus" },
  { year: "2017", title: "10th — High School", note: "Strong math and analytical foundation" },
];

export const certifications = ["GeeksforGeeks DSA Challenge", "AWS S3 Certification"];

export const socials = [
  { label: "Email", href: "mailto:sonumaddheshiya718@gmail.com" },
  { label: "WhatsApp", href: "https://wa.me/916307016696" },
  { label: "GitHub", href: "https://github.com/sonu-maddy" },
  { label: "LinkedIn", href: "https://linkedin.com/in/sonu-maddheshiya" },
  { label: "LeetCode", href: "https://leetcode.com/u/sonumaddy_1/" },
];
import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useInView,
} from "framer-motion";
import portrait from "./assets/portrait.png";
import "./index.css";

const CHARS = "!<>-_\\/[]{}—=+*^?#";

function useScramble(text) {
  const [display, setDisplay] = useState(text);
  const frame = useRef(null);
  const start = () => {
    let iter = 0;
    clearInterval(frame.current);
    frame.current = setInterval(() => {
      setDisplay(
        text.split("").map((ch, i) => {
          if (ch === " ") return " ";
          if (i < iter) return text[i];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join("")
      );
      iter += text.length / 10;
      if (iter >= text.length) { clearInterval(frame.current); setDisplay(text); }
    }, 28);
  };
  const reset = () => { clearInterval(frame.current); setDisplay(text); };
  return { display, start, reset };
}

const GH_LANGS = ["Java", "JavaScript", "React", "Node.js", "Spring Boot", "MongoDB", "MySQL", "Docker", "AWS", "Git", "Linux", "Postman"];

function GithubCard({ hoverLabel }) {
  return (
    <motion.a
      href="https://github.com/sonu-maddy"
      target="_blank"
      rel="noreferrer"
      className="term"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      {...hoverLabel("OPEN")}
    >
      <div className="term__bar">
        <span className="term__dot term__dot--r" />
        <span className="term__dot term__dot--y" />
        <span className="term__dot term__dot--g" />
        <span className="term__title">sonu-maddy — github</span>
      </div>
      <div className="term__body">
        <p><span className="term__prompt">$</span> whoami</p>
        <p className="term__out">Sonu Maddheshiya — full stack developer, India</p>
        <p><span className="term__prompt">$</span> stats --profile</p>
        <div className="term__stats">
          <div><strong>32</strong><span>repos</span></div>
          <div><strong>3</strong><span>followers</span></div>
          <div><strong>17</strong><span>following</span></div>
          <div><strong>2</strong><span>stars</span></div>
        </div>
        <p><span className="term__prompt">$</span> languages --top</p>
        <div className="term__langs">{GH_LANGS.map((l) => <span key={l} className="tag">{l}</span>)}</div>
        <p className="term__cta"><span className="term__prompt">$</span> open github.com/sonu-maddy <span className="caret">_</span></p>
      </div>
    </motion.a>
  );
}

function Scramble({ text, as: Tag = "span", className }) {
  const { display, start, reset } = useScramble(text);
  return <Tag className={className} onMouseEnter={start} onMouseLeave={reset}>{display}</Tag>;
}

function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start;
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min((t - start) / 1200, 1);
      setVal(Math.floor(p * to));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

function Typewriter({ text }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!inView || i >= text.length) return;
    const t = setTimeout(() => setI((v) => v + 1), 32);
    return () => clearTimeout(t);
  }, [inView, i, text]);
  return <span ref={ref}>{text.slice(0, i)}<span className="caret">_</span></span>;
}

function RotatingBadge() {
  return (
    <div className="badge-spin">
      <svg viewBox="0 0 120 120">
        <defs><path id="circlePath" d="M60,60 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0" /></defs>
        <text fontSize="8.2" letterSpacing="2.5">
          <textPath href="#circlePath">OPEN TO WORK • OPEN TO WORK • OPEN TO WORK •&nbsp;</textPath>
        </text>
      </svg>
      <span className="badge-spin__dot" />
    </div>
  );
}

function Ghost({ n }) { return <span className="ghost-num" aria-hidden="true">{n}</span>; }

const STATS = [
  { type: "counter", to: 300, suffix: "+", label: "DSA problems solved" },
  { type: "counter", to: 2026, suffix: "", label: "final-year B.Tech CSE" },
  { type: "text", value: "MERN", label: "+ Spring Boot" },
  { type: "text", value: "AWS S3", label: "certified" },
];

const EDUCATION = [
  { year: "2023 – 2026", title: "B.Tech — Computer Science", note: "Full-stack and system design specialization" },
  { year: "2020 – 2023", title: "Diploma — Computer Science", note: "Hands-on programming exposure" },
  { year: "2019", title: "12th — Intermediate", note: "Logical reasoning and problem solving focus" },
  { year: "2017", title: "10th — High School", note: "Strong math and analytical foundation" },
];

const SKILLS = {
  Frontend: ["React", "Tailwind CSS", "JavaScript"],
  Backend: ["Node.js", "Express", "MongoDB", "Spring Boot"],
  Languages: ["Java", "Python", "C++"],
  Automation: ["n8n", "Webhooks", "REST integrations", "Cron jobs"],
  Tools: ["Git", "Docker", "Postman"],
};

const CERTS = ["GeeksforGeeks DSA Challenge", "AWS S3 Certification"];

const PROJECTS = [
  { id: "01", status: "private", title: "My Workspace Platform", tagline: "SaaS-style team collaboration ecosystem, built to manage teams, communication and project workflows.", tags: ["React", "Node", "MongoDB", "JWT"], link: null },
  { id: "02", status: "microservice", title: "AI Interview Platform", tagline: "Spring Boot microservice that runs mock interviews and scores answers with AI-driven evaluation.", tags: ["Spring Boot", "Microservices", "Java", "REST API"], link: null },
  { id: "03", status: "microservice", title: "E-Commerce Microservices Platform", tagline: "Orders, inventory and payments split into independent Spring Boot services talking over REST.", tags: ["Spring Boot", "Microservices", "MySQL", "Docker"], link: null },
  { id: "04", status: "microservice", title: "URL Shortener Service", tagline: "A Spring Boot microservice generating and resolving short links with click-tracking.", tags: ["Spring Boot", "Microservices", "Redis", "MySQL"], link: null },
  { id: "05", status: "live", title: "Watch Party", tagline: "Real-time synced video rooms — play, pause and seek broadcast over WebSockets.", tags: ["React", "Socket.IO", "Node"], link: "https://watch-party-socket-io.netlify.app/" },
  { id: "06", status: "full stack", title: "Food Ordering Platform", tagline: "Responsive ordering app with cart, checkout and Razorpay payments.", tags: ["React", "Node", "Razorpay"], link: null },
  { id: "07", status: "backend", title: "Hotel Management Backend", tagline: "Spring Boot backend with JWT auth, JPA persistence and email workflows.", tags: ["Spring Boot", "MySQL", "JWT"], link: null },
  { id: "08", status: "backend", title: "Journal App Backend", tagline: "Java + MongoDB journaling API with scalable CRUD structure.", tags: ["Java", "MongoDB", "REST"], link: null },
  { id: "09", status: "dsa practice", title: "GFG 160-Day DSA Challenge", tagline: "160-day daily problem-solving streak — arrays through graphs, no skipped days.", tags: ["Java", "DSA", "Algorithms"], link: "https://github.com/sonu-maddy/GFG-160-Days-DSA-Problems" },
  { id: "10", status: "live", title: "This Portfolio", tagline: "Recruiter-facing site you're looking at right now, deployed on Netlify.", tags: ["React", "Framer Motion"], link: "https://sonu-portfolioo.netlify.app/" },
];

const EXTRA_BUILDS = [
  { label: "Task Manager (MERN)", href: "https://github.com/sonu-maddy/tast_manager" },
  { label: "Todo App", href: "https://github.com/sonu-maddy/todoapp" },
  { label: "User Directory", href: "https://github.com/sonu-maddy/userdirectory" },
  { label: "Color Switcher", href: "https://github.com/sonu-maddy/colorswitcher" },
  { label: "Interview Prep", href: "https://github.com/sonu-maddy/interview" },
  { label: "React Learning Builds", href: "https://github.com/sonu-maddy/learning-react" },
];

const SERVICES = [
  { n: "01", title: "Backend & Auth Systems", body: "APIs that don't leak data and don't fall over under load. JWT, role-based access, rate limiting — the boring stuff, done right.", stack: ["Node.js", "Express", "Spring Boot", "JWT"], good: "Best for: startups who need a backend they can trust." },
  { n: "02", title: "Workflow Automation", body: "n8n pipelines that connect your tools so your team stops doing the same copy-paste task every Monday morning.", stack: ["n8n", "Webhooks", "REST APIs", "Cron"], good: "Best for: teams drowning in manual busywork." },
  { n: "03", title: "Full-Stack MVPs", body: "Idea to working product, without six months of \"we're still in dev.\" React front, real database behind it.", stack: ["React", "MongoDB", "Tailwind", "Express"], good: "Best for: founders who want to ship, not stall." },
  { n: "04", title: "Performance & Security Pass", body: "An audit of what's slow, what's exposed, and what breaks first the day real users show up.", stack: ["Profiling", "Auth review", "DB indexing"], good: "Best for: existing products that need hardening." },
];

const SECTIONS = ["INDEX", "ABOUT", "WORK", "MANIFESTO", "SERVICES", "CONTACT"];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};

function Cursor({ label }) {
  const rx = useMotionValue(-100), ry = useMotionValue(-100);
  const dx = useMotionValue(-100), dy = useMotionValue(-100);
  const ringX = useSpring(rx, { stiffness: 220, damping: 26 });
  const ringY = useSpring(ry, { stiffness: 220, damping: 26 });
  const dotX = useSpring(dx, { stiffness: 900, damping: 40 });
  const dotY = useSpring(dy, { stiffness: 900, damping: 40 });
  useEffect(() => {
    const move = (e) => { rx.set(e.clientX); ry.set(e.clientY); dx.set(e.clientX); dy.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [rx, ry, dx, dy]);
  return (
    <>
      <motion.div className="cursor-dot" style={{ x: dotX, y: dotY, opacity: label ? 0 : 1 }} />
      <motion.div className="cursor-ring" style={{ x: ringX, y: ringY }} animate={{ scale: label ? 2.8 : 1, rotate: label ? 90 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
        <AnimatePresence>
          {label && (
            <motion.span key={label} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} className="cursor-label">
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

function Marquee({ items, reverse }) {
  const line = items.join("   //   ") + "   //   ";
  return (
    <div className="marquee">
      <div className={`marquee__track ${reverse ? "marquee__track--rev" : ""}`}>
        <span>{line}</span><span>{line}</span>
      </div>
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState(0);
  const [cursorLabel, setCursorLabel] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const refs = useRef([]);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(Number(e.target.dataset.index)); }),
      { threshold: 0.5 }
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const setRef = (i) => (el) => (refs.current[i] = el);
  const hoverLabel = (label) => ({ onMouseEnter: () => setCursorLabel(label), onMouseLeave: () => setCursorLabel(null) });
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="page">
      <div className="grain" />
      <Cursor label={cursorLabel} />

      <div className="section-index">
        {String(active + 1).padStart(2, "0")} / {String(SECTIONS.length).padStart(2, "0")}
        <span className="section-index__label">{SECTIONS[active]}</span>
      </div>

      <header className="nav">
        <span className="nav__logo">SM—©2026</span>
        <nav className={`nav__links ${menuOpen ? "is-open" : ""}`}>
          <a href="#work" onClick={() => setMenuOpen(false)} {...hoverLabel(null)}><Scramble text="WORK" /></a>
          <a href="#about" onClick={() => setMenuOpen(false)} {...hoverLabel(null)}><Scramble text="ABOUT" /></a>
          <a href="#services" onClick={() => setMenuOpen(false)} {...hoverLabel(null)}><Scramble text="SERVICES" /></a>
          <a href="#contact" onClick={() => setMenuOpen(false)} {...hoverLabel(null)}><Scramble text="CONTACT" /></a>
        </nav>
        <a href="#contact" className="btn btn--nav" {...hoverLabel("OPEN")}>GET IN TOUCH</a>
        <button className="nav__burger" onClick={() => setMenuOpen((v) => !v)} aria-label="menu"><span /></button>
      </header>

     <section ref={setRef(0)} data-index="0" className="hero">
  <div ref={heroRef} className="hero__grid">
    <div className="hero__col">
      <motion.div className="pill-live" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <span className="pill-live__dot" /> Available for freelance &amp; internships
      </motion.div>

      <p className="eyebrow">[ 01 / 06 ] — INDEX</p>
      <div className="hero__headline">
        <motion.h1 initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>BUILD FAST.</motion.h1>
        <motion.h1 initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>BREAK <em>nothing.</em></motion.h1>
      </div>
      <motion.p className="hero__sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}>
        Sonu Maddheshiya — full stack developer. Final-year B.Tech CSE.
        I build the backend nobody sees, and make sure it never breaks.
      </motion.p>
      <div className="stats">
        {STATS.map((s, i) => (
          <motion.div key={s.label} className="stat" variants={fadeUp} custom={i} initial="hidden" animate="visible">
            <p className="stat__value">{s.type === "counter" ? <Counter to={s.to} suffix={s.suffix} /> : s.value}</p>
            <p className="stat__label">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="hero__col hero__col--visual">
      <div className="hero__portrait-wrap">
        <motion.div className="hero__portrait" style={{ y: portraitY }} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }}>
          <img src={portrait} alt="Sonu Maddheshiya" />
        </motion.div>
        <RotatingBadge />
        {["Spring Boot", "Microservices", "React", "n8n"].map((tag, i) => (
          <motion.span
            key={tag}
            className={`float-tag float-tag--${i}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + i * 0.15 }}
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </div>
  </div>

  <motion.div className="scroll-cue" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
    <span className="scroll-cue__text">SCROLL</span>
    <span className="scroll-cue__line"><span className="scroll-cue__dot" /></span>
  </motion.div>

  <Marquee items={["FULL STACK DEVELOPER", "SECURE ARCHITECTURE", "MERN + SPRING BOOT", "OPEN TO WORK"]} />
</section>

      <section ref={setRef(1)} data-index="1" id="about" className="section">

        
        <Ghost n="02" />
        <p className="eyebrow">[ 02 / 06 ] — ABOUT</p>
        <motion.h2 className="pull-quote pull-quote--lg" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}>
          I like systems<br />more than screens.
        </motion.h2>
        <motion.p className="about__body about__body--lg" variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}>
          I spend more time on what's running behind a feature than the
          feature itself — auth that holds up, schemas that don't rot, APIs
          that survive real traffic. The frontend gets clean and fast; the
          hard problems live underneath, and that's where I live too.
        </motion.p>
        <motion.p className="terminal-line" variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }}>
          <span className="terminal-line__prompt">$</span> currently: <Typewriter text="automating workflows with n8n" />
        </motion.p>

        <div className="about-grid">
          <div>
            <p className="mini-label">EDUCATION</p>
            <div className="timeline">
              {EDUCATION.map((e, i) => (
                <motion.div key={e.title} className="timeline__row" variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                  <span className="timeline__year">{e.year}</span>
                  <div><p className="timeline__title">{e.title}</p><p className="timeline__note">{e.note}</p></div>
                </motion.div>
              ))}
            </div>
            <div className="certs">{CERTS.map((c) => <span key={c} className="chip">{c}</span>)}</div>
          </div>
          <div>
            <p className="mini-label">SKILLS</p>
            <div className="skills">
              {Object.entries(SKILLS).map(([group, items], i) => (
                <motion.div key={group} className="skills__group" variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                  <p className="skills__label">{group}</p>
                  <ul>{items.map((it) => <li key={it}>{it}</li>)}</ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <GithubCard hoverLabel={hoverLabel} />
      </section>

      <section ref={setRef(2)} data-index="2" id="work" className="section section--tint">
        <Ghost n="03" />
        <p className="eyebrow">[ 03 / 06 ] — WORK</p>
        <motion.h2 className="section__title section__title--lg" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          Selected work
        </motion.h2>
        <div className="work-list">
          {PROJECTS.map((p, i) => {
            const label = p.link ? "VIEW" : p.status === "private" ? "PRIVATE" : "SOON";
            const Wrap = p.link ? "a" : "div";
            return (
              <motion.div key={p.id} variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                <Wrap href={p.link || undefined} target={p.link ? "_blank" : undefined} rel={p.link ? "noreferrer" : undefined} className="work-row work-row--lg" {...hoverLabel(label)}>
                  <span className="work-row__id">{p.id}</span>
                  <div className="work-row__main">
                    <Scramble as="p" className="work-row__title work-row__title--lg" text={p.title} />
                    <p className="work-row__tagline work-row__tagline--lg">{p.tagline}</p>
                  </div>
                  <div className="work-row__tags">{p.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                  <span className={`badge badge--${p.status.replace(" ", "-")}`}>{p.status}</span>
                </Wrap>
              </motion.div>
            );
          })}
        </div>

        <div className="extra-builds">
          <p className="mini-label">MORE ON GITHUB</p>
          <div className="extra-builds__grid">
            {EXTRA_BUILDS.map((b) => (
              <a key={b.label} href={b.href} target="_blank" rel="noreferrer" className="chip chip--link" {...hoverLabel("VIEW")}>{b.label} ↗</a>
            ))}
          </div>
        </div>
      </section>

      <section ref={setRef(3)} data-index="3" id="manifesto" className="section">
        <Ghost n="04" />
        <p className="eyebrow">[ 04 / 06 ] — HOW I BUILD</p>
        <motion.h2 className="section__title" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>Pool rules</motion.h2>
        <div className="rules">
          {[
            { n: "001", title: "Ship, don't stall.", body: "A half-built feature helps no one. If it's not deployable, it's not done." },
            { n: "002", title: "If it's not secure, it's not done.", body: "Auth, roles and validation ship with the feature, not after it." },
            { n: "003", title: "Clean code over clever code.", body: "The next person reading this is probably me, six months from now." },
            { n: "004", title: "No feature without a reason.", body: "Every endpoint and table earns its place or it doesn't get built." },
            { n: "005", title: "Read the error before you Google it.", body: "Half the stack trace is usually the answer." },
            { n: "006", title: "Finish what you start.", body: "Side projects die in the 80% zone. Mine don't." },
          ].map((r, i) => (
            <motion.div key={r.n} className="rule" variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} {...hoverLabel(null)}>
              <span className="rule__n">{r.n}</span>
              <div><p className="rule__title">{r.title}</p><p className="rule__body">{r.body}</p></div>
            </motion.div>
          ))}
        </div>
      </section>

      <section ref={setRef(4)} data-index="4" id="services" className="section section--tint">
        <Ghost n="05" />
        <p className="eyebrow">[ 05 / 06 ] — SERVICES</p>
        <motion.h2 className="section__title" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>What you'd actually hire me for</motion.h2>
        <div className="services">
          {SERVICES.map((s, i) => (
            <motion.a key={s.n} href="#contact" className="service" variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} {...hoverLabel("HIRE")}>
              <span className="service__n">{s.n}</span>
              <p className="service__title">{s.title}</p>
              <p className="service__body">{s.body}</p>
              <div className="service__tags">{s.stack.map((t) => <span key={t} className="tag">{t}</span>)}</div>
              <p className="service__good">{s.good}</p>
              <span className="service__arrow">→</span>
            </motion.a>
          ))}
        </div>
      </section>

      <section ref={setRef(5)} data-index="5" id="contact" className="section section--dark">
        <Ghost n="06" />
        <p className="eyebrow eyebrow--light">[ 06 / 06 ] — CONTACT</p>
        <motion.h2 className="cta" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}>Where do<br />I sign?</motion.h2>
        <motion.div className="hero__cta" variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}>
          <a href="mailto:sonumaddheshiya718@gmail.com" className="btn btn--light" {...hoverLabel("MAIL")}>EMAIL ME ↗</a>
          <a href="https://wa.me/916307016696" target="_blank" rel="noreferrer" className="btn btn--outline" {...hoverLabel("CHAT")}>WHATSAPP ↗</a>
        </motion.div>
        <div className="socials-inline">
          <a href="https://github.com/sonu-maddy" target="_blank" rel="noreferrer" {...hoverLabel("VIEW")}>GitHub</a>
          <a href="https://linkedin.com/in/sonu-maddheshiya" target="_blank" rel="noreferrer" {...hoverLabel("VIEW")}>LinkedIn</a>
          <a href="https://leetcode.com/u/sonumaddy_1/" target="_blank" rel="noreferrer" {...hoverLabel("VIEW")}>LeetCode</a>
        </div>
      </section>

      <footer className="footer">
        <Marquee items={["AVAILABLE FOR FREELANCE", "SHIPPING WEEKLY", "DMs OPEN"]} />
        <div className="footer__wordmark">SONU MADDHESHIYA</div>
        <div className="footer__bottom">
          <span>© 2026 — built with React &amp; Framer Motion</span>
          <button className="footer__top" onClick={scrollTop} {...hoverLabel("UP")}>BACK TO TOP ↑</button>
        </div>
      </footer>
    </div>
  );
}
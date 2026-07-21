import { useState } from "react";
import {
  stats,
  projects,
  learningBuilds,
  skills,
  education,
  certifications,
  socials,
} from "./data";
import "./index.css";

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="page">
      <div className="statusbar">
        <span className="statusbar__dot" />
        <span className="statusbar__text">
          open for remote work and freelance projects
        </span>
        <span className="statusbar__meta">
          b.tech · 2026 &nbsp;/&nbsp; mern + spring &nbsp;/&nbsp; 300+ dsa
        </span>
      </div>

      <header className="nav">
        <a href="#top" className="nav__logo">
          Sonu Maddheshiya <span className="nav__logo-dot">.</span>
        </a>

        <nav className={`nav__links ${menuOpen ? "is-open" : ""}`}>
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="btn btn--ghost nav__resume"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume ↗
        </a>

        <button
          className="nav__burger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <p className="eyebrow">sec.00 — index</p>

          <h1>
           <span className=""> I build and ship production Architecture.</span> Real-time computer vision, 
            Backend services, and the infrastructure that keeps them reliable.
          </h1>

          <p className="hero__sub">
            Sonu Maddheshiya — full stack developer specializing in secure
            architecture, MERN and Spring Boot, and shipping production-ready
            applications instead of demos.
          </p>

          <div className="hero__cta">
            <a href="#work" className="btn btn--primary">
              See selected work
            </a>

            <a href="#contact" className="btn btn--ghost">
              Contact me
            </a>
          </div>

          <div className="hero__stats">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <p className="stat__value">{s.value}</p>
                <p className="stat__label">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="section">
          <p className="eyebrow">sec.01 — work</p>

          <h2 className="section__title">Selected work</h2>

          <div className="work-list">
            {projects.map((p) => (
              <article key={p.id} className="case">
                <div className="case__meta">
                  <span className="case__id">{p.id}</span>

                  <span
                    className={`badge badge--${p.status.replace(" ", "-")}`}
                  >
                    {p.status}
                  </span>

                  <span className="case__year">{p.year}</span>
                </div>

                <h3 className="case__title">{p.title}</h3>

                <p className="case__tagline">{p.tagline}</p>

                <div className="case__body">
                  <p>
                    <span className="case__label">The problem.</span>{" "}
                    {p.problem}
                  </p>

                  <p>
                    <span className="case__label">What I built.</span>{" "}
                    {p.build}
                  </p>

                  <ul>
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>

                <div className="case__stack">
                  {p.stack.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="case__links">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {l.label} ↗
                    </a>
                  ))}

                  {p.note && (
                    <span className="case__note">{p.note}</span>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="learning">
            <p className="learning__label">
              learning &amp; assessment builds
            </p>

            <div className="learning__grid">
              {learningBuilds.map((l) => (
                <span key={l} className="chip">
                  {l}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <p className="eyebrow">sec.02 — about</p>

          <h2 className="section__title">About</h2>

          <p className="about__bio">
            I am a final-year Computer Science student who spends more time on
            the system behind a feature than on the feature itself — secure
            auth, clean database schema, an API that still holds up once real
            users hit it. Frontend work stays functional and fast; the
            interesting problems, for me, live in the backend.
          </p>

          <div className="skills">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="skills__group">
                <p className="skills__label">{group}</p>

                <ul>
                  {items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <p className="eyebrow">sec.03 — education</p>

          <h2 className="section__title">
            Education &amp; certifications
          </h2>

          <div className="timeline">
            {education.map((e) => (
              <div key={e.title} className="timeline__row">
                <span className="timeline__year">{e.year}</span>

                <div>
                  <p className="timeline__title">{e.title}</p>
                  <p className="timeline__note">{e.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="certs">
            {certifications.map((c) => (
              <span key={c} className="chip chip--accent">
                {c}
              </span>
            ))}
          </div>
        </section>

        <section id="contact" className="section section--contact">
          <p className="eyebrow">sec.04 — contact</p>

          <h2 className="section__title">
            Building something that needs to ship?
          </h2>

          <p className="about__bio">
            Open to internships, freelance projects and engineering
            collaborations. Email or WhatsApp both work, and I reply to
            everything that comes in.
          </p>

          <div className="hero__cta">
            <a
              href="mailto:sonumaddheshiya718@gmail.com"
              className="btn btn--primary"
            >
              Email me
            </a>

            <a
              href="https://wa.me/916307016696"
              target="_blank"
              rel="noreferrer"
              className="btn btn--ghost"
            >
              WhatsApp
            </a>
          </div>

          <div className="socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
              >
                {s.label}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        © 2026 Sonu Maddheshiya — built with React.
      </footer>
    </div>
  );
}
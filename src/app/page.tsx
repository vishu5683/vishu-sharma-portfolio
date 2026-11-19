import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'
import { certifications, education, experience, profile, projects, skills, stats } from '@/data/profile'

const nav = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role,
    email: `mailto:${profile.email}`,
    address: { '@type': 'PostalAddress', addressLocality: 'Gurugram', addressCountry: 'IN' },
    sameAs: [profile.github, profile.linkedin],
    worksFor: { '@type': 'Organization', name: 'TCI Group (Transport Corporation of India)' },
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Chandigarh University' },
    knowsAbout: skills.flatMap((s) => s.items),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="brand">
            VS<span>.</span>
          </a>
          <nav aria-label="Sections">
            {nav.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <ThemeToggle />
            <a className="btn btn-sm" href={profile.resume} download>
              Resume
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero wrap">
          <p className="eyebrow">
            <span className="dot" /> Open to full stack roles
          </p>
          <h1>
            {profile.name}
            <span className="role">{profile.role}</span>
          </h1>
          <p className="lead">{profile.summary}</p>
          <div className="cta">
            <a className="btn" href={profile.resume} download>
              <Download size={18} /> Download resume
            </a>
            <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
              <Mail size={18} /> Email me
            </a>
            <a className="icon-btn" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
          <p className="meta">
            <MapPin size={15} /> {profile.location} &nbsp;·&nbsp; {profile.tagline}
          </p>

          <dl className="stats">
            {stats.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="experience" className="section wrap">
          <h2>Experience</h2>
          <ol className="timeline">
            {experience.map((job) => (
              <li key={job.company} className="job">
                <div className="job-head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="company">
                      {job.company} · {job.location}
                    </p>
                    {job.note && <p className="muted small">{job.note}</p>}
                  </div>
                  <span className="period">{job.period}</span>
                </div>
                <ul className="points">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <ul className="tags" aria-label="Technologies">
                  {job.stack.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section id="projects" className="section wrap">
          <h2>Projects</h2>
          <p className="muted section-sub">
            Production systems I built at work, plus side projects. Company code is private; open-source work links to GitHub.
          </p>
          <div className="grid">
            {projects.map((p) => (
              <article key={p.title} className="card">
                <p className="kind">{p.kind}</p>
                <h3>
                  {p.link ? (
                    <a href={p.link} target="_blank" rel="noopener noreferrer">
                      {p.title} <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    p.title
                  )}
                </h3>
                <p>{p.description}</p>
                <ul className="highlights">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <ul className="tags">
                  {p.stack.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section wrap">
          <h2>Skills</h2>
          <div className="skills">
            {skills.map((s) => (
              <div key={s.group} className="skill-row">
                <h3>{s.group}</h3>
                <ul className="tags">
                  {s.items.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section wrap two-col">
          <div>
            <h2>Education</h2>
            <div className="card flat">
              <h3>{education.degree}</h3>
              <p className="company">{education.school}</p>
              <p className="period">{education.period}</p>
            </div>
          </div>
          <div>
            <h2>Certifications</h2>
            <ul className="card flat cert-list">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="section wrap">
          <div className="contact">
            <h2>Let&apos;s talk</h2>
            <p className="muted">Hiring for a full stack, React or .NET role? Reach me directly.</p>
            <div className="cta center">
              <a className="btn" href={`mailto:${profile.email}`}>
                <Mail size={18} /> {profile.email}
              </a>
              <a className="btn btn-ghost" href={`tel:${profile.phone.replace(/-/g, '')}`}>
                <Phone size={18} /> {profile.phone}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer wrap">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="footer-links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={profile.leetcode} target="_blank" rel="noopener noreferrer">LeetCode</a>
        </span>
      </footer>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'
import { certifications, education, experience, profile, projects, skills } from '@/data/profile'

export const metadata: Metadata = {
  title: 'Resume | Vishu Sharma',
  description:
    'Resume of Vishu Sharma, Full Stack Developer with 3.5+ years in C#, ASP.NET Core, React, TypeScript and Oracle.',
}

export default function ResumePage() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <Link href="/" className="back">
            <ArrowLeft size={16} /> Portfolio
          </Link>
          <div className="nav-actions">
            <ThemeToggle />
            <a className="btn btn-sm" href={profile.resume} download>
              <Download size={16} /> PDF
            </a>
          </div>
        </div>
      </header>

      <main className="wrap resume">
        <section className="resume-head">
          <h1>{profile.name}</h1>
          <p className="resume-role">{profile.role}</p>
          <ul className="contact-line">
            <li>
              <MapPin size={15} /> {profile.location}
            </li>
            <li>
              <Mail size={15} /> <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <Phone size={15} /> <a href={`tel:${profile.phone.replace(/-/g, '')}`}>{profile.phone}</a>
            </li>
            <li>
              <Github size={15} /> <a href={profile.github}>github.com/vishu5683</a>
            </li>
            <li>
              <Linkedin size={15} /> <a href={profile.linkedin}>linkedin.com/in/vishu-s-314661ab</a>
            </li>
          </ul>
        </section>

        <section className="resume-block">
          <h2>Summary</h2>
          <p className="muted">{profile.summary}</p>
        </section>

        <section className="resume-block">
          <h2>Experience</h2>
          {experience.map((job) => (
            <article key={job.company} className="resume-item">
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
            </article>
          ))}
        </section>

        <section className="resume-block">
          <h2>Projects</h2>
          {projects.map((p) => (
            <article key={p.title} className="resume-item">
              <h3>
                {p.link ? <a href={p.link}>{p.title}</a> : p.title}
                <span className="muted small-inline"> · {p.stack.join(', ')}</span>
              </h3>
              <p className="muted">{p.description}</p>
            </article>
          ))}
        </section>

        <section className="resume-block">
          <h2>Technical Skills</h2>
          <dl className="skill-list">
            {skills.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>{s.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="resume-block two-col">
          <div>
            <h2>Education</h2>
            <h3>{education.degree}</h3>
            <p className="company">{education.school}</p>
            <p className="period">{education.period}</p>
          </div>
          <div>
            <h2>Certifications &amp; Achievements</h2>
            <ul className="cert-list">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}

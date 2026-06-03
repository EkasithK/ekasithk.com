import type { Metadata } from "next";
import { content } from "@/data/content";

export const metadata: Metadata = {
  title: "CV",
  robots: { index: false, follow: false },
};

/**
 * Clean, ATS-friendly CV document. Intentionally NOT the terminal theme.
 * Rendered to /public/cv/Ekasith_Kowcharoen_CV.pdf by scripts/generate-cv-pdf.mjs.
 */
export default function CvPage() {
  const { meta, about, skills, experience, projects, research, education, esports, contact } =
    content;

  return (
    <div className="cv-root">
      <style>{CV_CSS}</style>

      <header className="cv-head">
        <div>
          <h1>{meta.fullName}</h1>
          <p className="role">{meta.tagline}</p>
          <p className="contact">
            {contact.email} · {contact.location} · {contact.timezone}
          </p>
          <p className="contact">
            {meta.siteUrl.replace("https://", "")} ·{" "}
            {contact.socials
              .filter((s) => s.url.startsWith("http"))
              .map((s) => s.label)
              .join(" · ")}{" "}
            · ORCID {research.orcid}
          </p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="qr" src={content.media.qr} alt="ekasithk.com" width={92} height={92} />
      </header>

      <Section title="Summary">
        <p>{about.summary}</p>
      </Section>

      <Section title="Skills">
        {skills.map((g) => (
          <p key={g.title} className="skills-line">
            <strong>{g.title}:</strong> {g.items.join(", ")}
          </p>
        ))}
      </Section>

      <Section title="Experience">
        {experience.map((j, i) => (
          <div key={i} className="entry">
            <div className="entry-head">
              <span className="entry-title">
                {j.title} — {j.org}
              </span>
              <span className="entry-date">
                {j.start} – {j.end}
              </span>
            </div>
            <p className="entry-sub">{j.location}</p>
            <ul>
              {j.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </Section>

      <Section title="Selected Projects">
        {projects.map((p) => (
          <div key={p.name} className="entry">
            <div className="entry-head">
              <span className="entry-title">{p.name}</span>
              <span className="entry-date">{p.status}</span>
            </div>
            <p className="entry-sub">{p.role}</p>
            <p>{p.description}</p>
          </div>
        ))}
      </Section>

      <Section title="Research & Publications">
        {research.publications.map((p) => (
          <p key={p.title} className="pub">
            {p.title}. <em>{p.venue}</em>, {p.year}. DOI: {p.doi}
          </p>
        ))}
        <p className="skills-line">
          <strong>Doctoral research (in progress):</strong> {research.phd.field},{" "}
          {research.phd.institution}.
        </p>
        <p className="skills-line">
          <strong>Interests:</strong> {research.interests.join(", ")}.
        </p>
      </Section>

      <Section title="Education">
        {education.map((e, i) => (
          <div key={i} className="entry">
            <div className="entry-head">
              <span className="entry-title">
                {e.degree}, {e.field}
              </span>
              <span className="entry-date">
                {e.start} – {e.end}
              </span>
            </div>
            <p className="entry-sub">{e.institution}</p>
          </div>
        ))}
      </Section>

      <Section title="Esports — National Champion (Blade & Soul)">
        <p className="entry-sub">
          Team {esports[0].team} · {esports[0].role} · {esports[0].years}
        </p>
        <ul>
          {esports[0].achievements.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="cv-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

const CV_CSS = `
.cv-root {
  max-width: 820px;
  margin: 0 auto;
  padding: 40px 44px;
  background: #ffffff;
  color: #1f2937;
  font-family: ui-sans-serif, system-ui, "Segoe UI", Arial, sans-serif;
  font-size: 13px;
  line-height: 1.5;
}
.cv-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 24px;
  border-bottom: 2px solid #0f766e; padding-bottom: 14px; }
.cv-head h1 { font-size: 26px; font-weight: 800; color: #0f172a; letter-spacing: -0.3px; }
.cv-head .role { color: #0f766e; font-weight: 600; margin-top: 2px; }
.cv-head .contact { color: #4b5563; font-size: 11.5px; margin-top: 4px; }
.cv-head .qr { flex: none; border: 1px solid #e5e7eb; border-radius: 6px; }
.cv-section { margin-top: 18px; break-inside: avoid; }
.cv-section h2 { font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #0f766e;
  border-bottom: 1px solid #e5e7eb; padding-bottom: 3px; margin-bottom: 8px; }
.entry { margin-bottom: 10px; }
.entry-head { display: flex; justify-content: space-between; gap: 12px; }
.entry-title { font-weight: 700; color: #111827; }
.entry-date { color: #6b7280; font-size: 11.5px; white-space: nowrap; }
.entry-sub { color: #4b5563; font-size: 12px; margin-bottom: 3px; }
.skills-line { margin-bottom: 4px; }
.pub { margin-bottom: 6px; }
ul { margin: 4px 0 0 16px; }
li { margin-bottom: 2px; }
a { color: inherit; text-decoration: none; }
`;

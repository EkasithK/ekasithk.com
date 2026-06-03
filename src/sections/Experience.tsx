import { content } from "@/data/content";
import { SectionHeading } from "@/components/terminal";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16">
      <SectionHeading id="experience" command="git log --work" title="Experience & Awards" />
      <div className="space-y-5">
        {content.experience.map((job, i) => (
          <Reveal key={`${job.org}-${i}`} delay={i * 80}>
            <article className="relative rounded-xl border border-line bg-panel/60 p-6 pl-7">
              <span className="absolute left-0 top-6 h-[calc(100%-3rem)] w-0.5 bg-gradient-to-b from-cyan to-transparent" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-cyan-bright">{job.title}</h3>
                <span className="text-sm text-muted">
                  {job.start} – {job.end}
                </span>
              </div>
              <p className="mt-0.5 text-sm text-fg/90">
                {job.org} · <span className="text-muted">{job.location}</span>
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-fg/80">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-green">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}

        {content.awards.map((a, i) => (
          <Reveal key={a.title} delay={(content.experience.length + i) * 80}>
            <article className="relative rounded-xl border border-amber/30 bg-amber/5 p-6 pl-7">
              <span className="absolute left-0 top-6 h-[calc(100%-3rem)] w-0.5 bg-gradient-to-b from-amber to-transparent" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-amber">
                  <span aria-hidden>🥈</span>
                  {a.title}
                </h3>
                {a.year && <span className="text-sm text-muted">{a.year}</span>}
              </div>
              <p className="mt-0.5 text-sm text-fg/90">{a.issuer}</p>
              <p className="mt-3 text-sm leading-relaxed text-fg/80">{a.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

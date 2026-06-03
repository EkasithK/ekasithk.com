import { content } from "@/data/content";
import { SectionHeading } from "@/components/terminal";
import { Reveal } from "@/components/Reveal";

export function Education() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16">
      <SectionHeading id="education" command="education --list" title="Education" />
      <div className="grid gap-5 sm:grid-cols-3">
        {content.education.map((ed, i) => (
          <Reveal key={`${ed.degree}-${i}`} delay={i * 80}>
            <div className="flex h-full flex-col rounded-xl border border-line bg-panel/60 p-5">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-lg font-bold text-cyan-bright">{ed.degree}</span>
                <span className="text-xs text-muted">
                  {ed.start} – {ed.end}
                </span>
              </div>
              <p className="mt-1 text-sm text-fg">{ed.field}</p>
              <p className="mt-0.5 text-sm text-muted">{ed.institution}</p>
              {ed.details && ed.details.length > 0 && (
                <ul className="mt-3 space-y-1 text-xs text-fg/75">
                  {ed.details.map((d) => (
                    <li key={d} className="flex gap-1.5">
                      <span className="text-green">·</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

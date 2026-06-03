import { content } from "@/data/content";
import { SectionHeading } from "@/components/terminal";
import { Reveal } from "@/components/Reveal";

export function About() {
  const { about } = content;
  return (
    <section className="mx-auto max-w-5xl px-5 py-16">
      <SectionHeading id="about" command="cat about.md" title="About" />
      <Reveal>
        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <p className="leading-relaxed text-fg/85">{about.summary}</p>
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="text-muted"># languages</dt>
              <dd className="mt-1 space-y-1">
                {about.languages.map((l) => (
                  <div key={l.name} className="flex justify-between gap-4">
                    <span className="text-fg">{l.name}</span>
                    <span className="text-cyan">{l.level}</span>
                  </div>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-muted"># status</dt>
              <dd className="mt-1 text-cyan-bright">{about.yearsExperience}</dd>
            </div>
          </dl>
        </div>
      </Reveal>
    </section>
  );
}

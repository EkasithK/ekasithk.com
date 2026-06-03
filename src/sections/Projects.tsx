import { content } from "@/data/content";
import { SectionHeading, Tag } from "@/components/terminal";
import { Reveal } from "@/components/Reveal";
import { ExternalIcon } from "@/components/Icons";

const STATUS_COLORS: Record<string, string> = {
  "in-progress": "text-amber border-amber/40 bg-amber/10",
  live: "text-green border-green/40 bg-green/10",
  research: "text-cyan border-cyan/40 bg-cyan/10",
  private: "text-muted border-line bg-panel-2",
};

export function Projects() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16">
      <SectionHeading id="projects" command="ls -la ./projects" title="Projects" />
      <div className="grid gap-5">
        {content.projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 80}>
            <article className="group rounded-xl border border-line bg-panel/60 p-6 transition-colors hover:border-cyan/40">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-bright">{p.name}</h3>
                  <p className="mt-0.5 text-sm text-muted">{p.role}</p>
                </div>
                <span
                  className={`rounded-md border px-2.5 py-1 text-xs ${
                    STATUS_COLORS[p.status] ?? STATUS_COLORS.private
                  }`}
                >
                  {p.status}
                </span>
              </div>

              <p className="mt-4 leading-relaxed text-fg/85">{p.description}</p>

              {p.highlights.length > 0 && (
                <ul className="mt-4 space-y-1.5 text-sm text-fg/80">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="text-green">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>

              {p.links.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-4 border-t border-line pt-4 text-sm">
                  {p.links.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-cyan-bright hover:underline"
                    >
                      {l.label} <ExternalIcon />
                    </a>
                  ))}
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

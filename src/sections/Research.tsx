import { content } from "@/data/content";
import { SectionHeading, Tag } from "@/components/terminal";
import { Reveal } from "@/components/Reveal";
import { ExternalIcon, Icon } from "@/components/Icons";

export function Research() {
  const { research } = content;
  return (
    <section className="mx-auto max-w-5xl px-5 py-16">
      <SectionHeading id="research" command="cat research.md" title="Research & Publications" />

      <div className="grid gap-5 md:grid-cols-[1.6fr_1fr]">
        <Reveal>
          <div className="space-y-5">
            {research.publications.map((p) => (
              <article key={p.title} className="rounded-xl border border-line bg-panel/60 p-6">
                <span className="text-xs uppercase tracking-wider text-green">
                  Peer-reviewed · {p.venue} · {p.year}
                </span>
                <h3 className="mt-2 font-semibold leading-snug text-cyan-bright">{p.title}</h3>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-cyan-bright hover:underline"
                    >
                      Read paper <ExternalIcon />
                    </a>
                  )}
                  {p.doi && <span className="text-muted">DOI: {p.doi}</span>}
                </div>
              </article>
            ))}

            <div className="rounded-xl border border-line bg-panel/60 p-6">
              <h3 className="font-semibold text-cyan-bright">Doctoral Research (in progress)</h3>
              <p className="mt-1 text-sm text-fg/85">
                {research.phd.field} · {research.phd.institution}
              </p>
              <div className="mt-4">
                <p className="text-xs text-muted"># research interests</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {research.interests.map((r) => (
                    <Tag key={r}>{r}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="space-y-4">
            <a
              href={`https://orcid.org/${research.orcid}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-line bg-panel/60 p-5 transition-colors hover:border-cyan/40"
            >
              <span className="text-[#a6ce39]">
                <Icon name="orcid" width={28} height={28} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-fg">ORCID</span>
                <span className="block text-xs text-muted">{research.orcid}</span>
              </span>
            </a>

            <div className="rounded-xl border border-line bg-panel/60 p-5">
              <p className="text-xs text-muted"># theses</p>
              <ul className="mt-2 space-y-3 text-sm">
                {research.theses.map((t) => (
                  <li key={t.title}>
                    <span className="text-green">{t.degree}</span>
                    <p className="mt-0.5 leading-snug text-fg/85">{t.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

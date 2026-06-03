import { content } from "@/data/content";
import { SectionHeading } from "@/components/terminal";
import { Reveal } from "@/components/Reveal";
import { ExternalIcon } from "@/components/Icons";

const TAG_STYLES: Record<string, string> = {
  live: "text-green border-green/40 bg-green/10",
  paper: "text-cyan border-cyan/40 bg-cyan/10",
  wip: "text-amber border-amber/40 bg-amber/10",
  code: "text-muted border-line bg-panel-2",
};

export function QuickLinks() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16">
      <SectionHeading id="work" command="ls ~/work --quick" title="Explore my work" />
      <div className="grid gap-4 sm:grid-cols-2">
        {content.quickLinks.map((l, i) => {
          const body = (
            <>
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className={`rounded border px-2 py-0.5 text-[10px] uppercase tracking-wide ${
                      TAG_STYLES[l.tag] ?? TAG_STYLES.code
                    }`}
                  >
                    {l.tag}
                  </span>
                  <span className="font-semibold text-cyan-bright">{l.label}</span>
                </div>
                <p className="mt-1.5 text-sm text-muted">{l.desc}</p>
              </div>
              {l.url ? (
                <span className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-cyan-bright">
                  <ExternalIcon width={18} height={18} />
                </span>
              ) : (
                <span className="text-xs text-muted">soon</span>
              )}
            </>
          );
          return (
            <Reveal key={l.label} delay={i * 70}>
              {l.url ? (
                <a
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full items-center justify-between gap-4 rounded-xl border border-line bg-panel/60 p-5 transition-colors hover:border-cyan/50"
                >
                  {body}
                </a>
              ) : (
                <div className="flex h-full items-center justify-between gap-4 rounded-xl border border-dashed border-line bg-panel/40 p-5">
                  {body}
                </div>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

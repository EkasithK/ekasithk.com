import { content } from "@/data/content";
import { SectionHeading, Tag } from "@/components/terminal";
import { Reveal } from "@/components/Reveal";

export function Skills() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16">
      <SectionHeading id="skills" command="skills --list --grouped" title="Skills" />
      <div className="grid gap-5 sm:grid-cols-2">
        {content.skills.map((group, i) => (
          <Reveal key={group.title} delay={i * 80}>
            <div className="h-full rounded-xl border border-line bg-panel/60 p-5 transition-colors hover:border-cyan/40">
              <h3 className="mb-4 flex items-center gap-2 font-semibold text-cyan-bright">
                <span aria-hidden>{group.badge}</span>
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

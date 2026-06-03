import Image from "next/image";
import { content } from "@/data/content";
import { SectionHeading, Tag } from "@/components/terminal";
import { Reveal } from "@/components/Reveal";

export function Esports() {
  const e = content.esports[0];
  return (
    <section className="mx-auto max-w-5xl px-5 py-16">
      <SectionHeading
        id="esports"
        command="./run --achievement-mode esports"
        title="Esports — National Champion"
      />

      <Reveal>
        <div className="overflow-hidden rounded-xl border border-line bg-panel/60">
          {/* trophy hero banner */}
          <div className="relative">
            <Image
              src={content.media.esportsTrophy}
              alt={`${e.team} lifting the ${e.game} championship trophy`}
              width={1153}
              height={768}
              className="h-56 w-full object-cover object-center sm:h-72"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/30 to-transparent" />
            <div className="absolute bottom-0 left-0 flex items-end gap-4 p-5 sm:p-7">
              <Image
                src={content.media.teamLogo}
                alt={`Team ${e.team} logo`}
                width={88}
                height={88}
                className="h-16 w-16 animate-float rounded-full border border-cyan/40 bg-bg/70 object-contain p-1 shadow-[0_0_24px_-4px_rgba(45,212,191,0.5)] sm:h-20 sm:w-20"
              />
              <div>
                <p className="text-sm text-cyan-bright">
                  {e.game} · {e.region}
                </p>
                <h3 className="text-2xl font-bold text-fg text-glow sm:text-3xl">Team {e.team}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Tag>{e.role}</Tag>
                  <Tag>{e.years}</Tag>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 p-5 sm:p-7 md:grid-cols-[2fr_1fr]">
            <div>
              <p className="text-sm text-muted">$ cat achievements.log</p>
              <ul className="mt-3 space-y-2.5 text-sm text-fg/85">
                {e.achievements.map((a) => (
                  <li key={a} className="flex gap-2.5">
                    <span className="select-none text-amber">🏆</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-md border border-line bg-panel-2/60 p-3 text-xs leading-relaxed text-muted">
                <span className="text-green"># why it matters:</span> competing at a national and
                world level forged the teamwork, strategy, and grace under pressure I bring to
                engineering and software delivery.
              </p>
            </div>

            <div className="overflow-hidden rounded-lg border border-line">
              <Image
                src={content.media.esportsCandid}
                alt={`${content.meta.fullName} during competition day`}
                width={600}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

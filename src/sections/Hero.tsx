import Image from "next/image";
import { asciiBanner, content } from "@/data/content";
import { Prompt, TerminalWindow } from "@/components/terminal";
import { Typewriter } from "@/components/Typewriter";
import { ArrowIcon, DownloadIcon, Icon } from "@/components/Icons";

export function Hero() {
  const { hero, meta, media } = content;
  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pt-28 pb-16 sm:pt-32">
      <div className="grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
        <TerminalWindow title={`${meta.handle}@ekasithk: ~/portfolio`}>
          <div className="space-y-5 text-sm sm:text-base">
            <Prompt command="whoami" />

            <pre className="overflow-x-auto text-[6px] leading-none text-cyan-bright text-glow min-[380px]:text-[8px] sm:text-xs md:text-sm">
              {asciiBanner}
            </pre>

            <div>
              <h1 className="text-xl font-bold tracking-tight text-fg sm:text-2xl">
                {meta.fullName} <span className="text-muted">/ {meta.handle}</span>
              </h1>
              <p className="mt-1 text-cyan">{meta.tagline}</p>
            </div>

            <div className="border-t border-line pt-4">
              <Prompt command="cat role.txt" />
              <div className="mt-1 text-base sm:text-lg">
                <Typewriter phrases={hero.roles} />
              </div>
            </div>

            <p className="max-w-xl leading-relaxed text-fg/85">{hero.valueProposition}</p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
              <span>
                <span className="text-green">📍</span> {hero.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
                </span>
                {hero.availability}
              </span>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-cyan px-4 py-2 text-sm font-semibold text-[#06201c] transition-transform hover:-translate-y-0.5"
              >
                Hire me <ArrowIcon />
              </a>
              <a
                href="/cv/Ekasith_Kowcharoen_CV.pdf"
                className="inline-flex items-center gap-2 rounded-md border border-cyan/50 bg-cyan/10 px-4 py-2 text-sm text-cyan-bright transition-colors hover:bg-cyan/20"
              >
                <DownloadIcon /> Download CV
              </a>
              <a
                href="https://github.com/EkasithK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm text-fg transition-colors hover:border-cyan/50 hover:text-cyan-bright"
              >
                <Icon name="github" /> GitHub
              </a>
            </div>
          </div>
        </TerminalWindow>

        <div className="mx-auto w-full max-w-xs lg:mx-0">
          <div className="rounded-xl border border-line bg-panel/80 p-3 shadow-[0_0_40px_-12px_rgba(45,212,191,0.3)] backdrop-blur-sm">
            <div className="overflow-hidden rounded-lg border border-line">
              <Image
                src={media.heroPhoto}
                alt={`${meta.fullName} — 2nd place, Construction Innovation Challenge`}
                width={555}
                height={738}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="mt-3 space-y-1 px-1 text-xs">
              <p className="text-amber">🥈 2nd · Construction Innovation Challenge</p>
              <p className="flex items-center justify-between text-muted">
                <span className="text-green">● available for work</span>
                <span>{meta.handle}@ekasithk.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

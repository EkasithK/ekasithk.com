import type { ReactNode } from "react";
import { content } from "@/data/content";

const HOST = `${content.meta.handle}@ekasithk`;

/** A shell prompt line: kowz@ekasithk:~$ <command> */
export function Prompt({ command, dir = "~" }: { command: ReactNode; dir?: string }) {
  return (
    <span className="font-mono">
      <span className="text-green">{HOST}</span>
      <span className="text-muted">:</span>
      <span className="text-cyan">{dir}</span>
      <span className="text-muted">$ </span>
      <span className="text-fg">{command}</span>
    </span>
  );
}

/** Window chrome: title bar with traffic-light dots + framed body. */
export function TerminalWindow({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-line bg-panel/80 shadow-[0_0_40px_-12px_rgba(45,212,191,0.25)] backdrop-blur-sm ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-line bg-panel-2/80 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 truncate text-xs text-muted">{title}</span>
      </div>
      <div className="p-5 sm:p-7">{children}</div>
    </div>
  );
}

/** Section heading rendered as a terminal command, with an anchor id. */
export function SectionHeading({
  id,
  command,
  title,
}: {
  id: string;
  command: string;
  title: string;
}) {
  return (
    <div id={id} className="mb-8 scroll-mt-24">
      <div className="text-sm sm:text-base">
        <Prompt command={command} />
      </div>
      <h2 className="mt-3 text-2xl font-bold tracking-tight text-cyan-bright text-glow sm:text-3xl">
        {title}
      </h2>
      <div className="mt-3 h-px w-full bg-gradient-to-r from-cyan/60 via-line to-transparent" />
    </div>
  );
}

/** Small tag/badge chip. */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-line bg-panel-2 px-2.5 py-1 text-xs text-fg/90">
      {children}
    </span>
  );
}

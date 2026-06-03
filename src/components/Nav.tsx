"use client";

import { useEffect, useState } from "react";
import { content } from "@/data/content";
import { DownloadIcon } from "./Icons";

const LINKS = [
  { id: "work", label: "work" },
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "experience", label: "experience" },
  { id: "esports", label: "esports" },
  { id: "research", label: "research" },
  { id: "education", label: "education" },
  { id: "contact", label: "contact" },
];

export function Nav() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-40 transition-colors ${
        scrolled ? "border-b border-line bg-bg/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5">
        <a href="#top" className="font-bold tracking-tight text-cyan-bright">
          <span className="text-green">~/</span>
          {content.meta.handle}
          <span className="text-muted">.com</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`rounded-md px-2.5 py-1.5 text-sm transition-colors hover:text-cyan-bright ${
                  active === l.id ? "text-cyan-bright" : "text-muted"
                }`}
              >
                <span className="text-green">{active === l.id ? "▸ " : ""}</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="/cv/Ekasith_Kowcharoen_CV.pdf"
            className="hidden items-center gap-1.5 rounded-md border border-cyan/50 bg-cyan/10 px-3 py-1.5 text-sm text-cyan-bright transition-colors hover:bg-cyan/20 sm:inline-flex"
          >
            <DownloadIcon /> CV.pdf
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-cyan-bright md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? "✕" : "≡"}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-line bg-bg/95 px-5 py-3 backdrop-blur-md md:hidden">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-muted hover:text-cyan-bright"
              >
                <span className="text-green">$ cd </span>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/cv/Ekasith_Kowcharoen_CV.pdf"
              className="mt-2 inline-flex items-center gap-1.5 text-sm text-cyan-bright"
            >
              <DownloadIcon /> Download CV.pdf
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}

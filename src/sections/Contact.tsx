import Image from "next/image";
import { content } from "@/data/content";
import { SectionHeading } from "@/components/terminal";
import { Reveal } from "@/components/Reveal";
import { DownloadIcon, Icon } from "@/components/Icons";

export function Contact() {
  const { contact, media } = content;
  return (
    <section className="mx-auto max-w-5xl px-5 py-16">
      <SectionHeading id="contact" command="./contact --hire-me" title="Get in touch" />

      <Reveal>
        <div className="grid gap-6 rounded-xl border border-line bg-panel/60 p-6 sm:p-8 md:grid-cols-[1.6fr_1fr]">
          <div>
            <p className="leading-relaxed text-fg/85">
              {contact.availability}. Whether it&apos;s a digital-twin build, a research
              collaboration, or consulting — let&apos;s talk.
            </p>

            <div className="mt-6 space-y-2 text-sm">
              {contact.socials.map((s) => (
                <a
                  key={s.label + s.url}
                  href={s.url}
                  target={s.url.startsWith("http") ? "_blank" : undefined}
                  rel={s.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 rounded-md border border-line bg-panel-2/50 px-4 py-2.5 text-fg transition-colors hover:border-cyan/40 hover:text-cyan-bright"
                >
                  <span className="text-cyan">
                    <Icon name={s.icon} />
                  </span>
                  <span className="text-muted">{s.label}:</span>
                  <span className="truncate">{s.url.replace("mailto:", "")}</span>
                </a>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted">
              <span>📍 {contact.location}</span>
              <span>🕒 {contact.timezone}</span>
            </div>

            <a
              href="/cv/Ekasith_Kowcharoen_CV.pdf"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-cyan px-4 py-2 text-sm font-semibold text-[#06201c] transition-transform hover:-translate-y-0.5"
            >
              <DownloadIcon /> Download CV.pdf
            </a>
          </div>

          <div className="flex flex-col items-center justify-center rounded-lg border border-line bg-bg/60 p-5 text-center">
            <Image
              src={media.qr}
              alt="QR code linking to ekasithk.com"
              width={160}
              height={160}
              className="rounded-md bg-white p-2"
            />
            <p className="mt-3 text-xs text-muted">scan to open</p>
            <p className="text-sm text-cyan-bright">ekasithk.com</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

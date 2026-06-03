import { content } from "@/data/content";
import { Icon } from "./Icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="no-print mt-24 border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted sm:flex-row">
        <p>
          <span className="text-green">$</span> echo &quot;© {year} {content.meta.fullName}&quot;
        </p>
        <div className="flex items-center gap-4">
          {content.contact.socials
            .filter((s) => s.icon !== "email")
            .map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-cyan-bright"
                aria-label={s.label}
              >
                <Icon name={s.icon} />
              </a>
            ))}
        </div>
        <p className="text-xs">
          built from <span className="text-cyan">/dev/coffee</span> in Bangkok
        </p>
      </div>
    </footer>
  );
}

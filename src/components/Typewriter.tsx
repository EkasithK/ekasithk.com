"use client";

import { useEffect, useState } from "react";

/** Types through a list of phrases, then deletes and moves to the next — looping. */
export function Typewriter({ phrases }: { phrases: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length];
    const done = text === current;
    const cleared = text === "";

    let delay = deleting ? 40 : 75;
    if (done && !deleting) delay = 1600;
    if (cleared && deleting) delay = 350;

    const t = setTimeout(() => {
      if (!deleting && done) {
        setDeleting(true);
      } else if (deleting && cleared) {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
        );
      }
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, index, phrases]);

  return (
    <span className="text-cyan-bright cursor" aria-live="polite">
      {text}
    </span>
  );
}

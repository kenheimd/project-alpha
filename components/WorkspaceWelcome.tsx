"use client";

import { useEffect, useState, type CSSProperties } from "react";

function greetingForHour(hour: number) {
  if (hour >= 6 && hour < 9) return "God morgen";
  if (hour >= 9 && hour < 13) return "God formiddag";
  if (hour >= 13 && hour < 18) return "God ettermiddag";
  if (hour >= 18) return "God kveld";
  return "God natt";
}

function localDate() {
  const formatted = new Intl.DateTimeFormat("nb-NO", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

export default function WorkspaceWelcome({ userName }: { userName: string }) {
  const [welcome, setWelcome] = useState({
    date: "",
    message: "",
    started: false,
  });

  useEffect(() => {
    document.documentElement.classList.remove("workspaceReady");

    const beginWelcome = () => {
      const message = `${greetingForHour(new Date().getHours())}, ${userName}.`;
      setWelcome({ date: localDate(), message, started: true });

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const revealTimer = window.setTimeout(() => {
        document.documentElement.classList.add("workspaceReady");
      }, reducedMotion ? 0 : message.length * 52 + 420);

      return revealTimer;
    };

    let revealTimer: number | undefined;
    const onIntroComplete = () => {
      revealTimer = beginWelcome();
    };

    window.addEventListener("alpha:intro-complete", onIntroComplete, { once: true });

    if (document.documentElement.classList.contains("alphaIntroComplete")) {
      revealTimer = beginWelcome();
    }

    return () => {
      window.removeEventListener("alpha:intro-complete", onIntroComplete);
      if (revealTimer) window.clearTimeout(revealTimer);
    };
  }, [userName]);

  return (
    <header className="workspaceHeader">
      <div>
        <p className="workspaceHeaderSecondary">{welcome.date}</p>

        <h1 className="workspaceGreeting" aria-label={welcome.message}>
          {welcome.started
            ? Array.from(welcome.message).map((character, index) => (
                <span
                  key={`${character}-${index}`}
                  style={{ animationDelay: `${index * 0.052}s` } as CSSProperties}
                >
                  {character}
                </span>
              ))
            : null}
          {welcome.started ? <i className="workspaceTypingCursor" /> : null}
        </h1>

        <span className="workspaceHeaderSecondary">
          Siden sist har Alpha funnet <b>3 nye muligheter</b> og analysert{" "}
          <b>17 relevante nyheter</b>. Seks gjelder porteføljen din, og elleve
          er knyttet til mulighetene nedenfor.
        </span>
      </div>
    </header>
  );
}

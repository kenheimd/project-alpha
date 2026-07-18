"use client";

import { useEffect, useState } from "react";
import AlphaConstruction from "./AlphaConstruction";

export default function AlphaIntro() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove("alphaIntroComplete", "workspaceReady");
    const frame = window.requestAnimationFrame(() => setReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!ready) return;

    const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? 0
      : 3200;
    const timer = window.setTimeout(() => {
      document.documentElement.classList.add("alphaIntroComplete");
      window.dispatchEvent(new Event("alpha:intro-complete"));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [ready]);

  return (
    <div
      className={`introScreen ${ready ? "introScreenReady" : "introScreenWaiting"}`}
      aria-hidden="true"
    >
      {ready ? (
        <div className="introMarkStage">
          <AlphaConstruction className="introConstruction" />
        </div>
      ) : null}
    </div>
  );
}

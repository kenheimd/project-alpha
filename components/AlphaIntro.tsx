"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import AlphaConstruction from "./AlphaConstruction";
import AlphaMark from "./AlphaMark";

type IntroStyle = CSSProperties & {
  "--intro-from-left"?: string;
  "--intro-from-top"?: string;
  "--intro-from-size"?: string;
  "--intro-shift-x"?: string;
  "--intro-shift-y"?: string;
  "--intro-scale"?: string;
};

export default function AlphaIntro({ userName }: { userName: string }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [flightStyle, setFlightStyle] = useState<IntroStyle>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      const source = stageRef.current?.querySelector<SVGGElement>(".constructionFill");
      const target = document.querySelector<SVGSVGElement>(
        "[data-alpha-background] .alphaMark",
      );

      if (!source || !target) return;

      const sourceRect = source.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      if (!sourceRect.width || !targetRect.width) return;

      // The visible mark occupies 88% x 84% of AlphaMark's square viewBox.
      const sourceSize = Math.max(sourceRect.width / 0.88, sourceRect.height / 0.84);
      const sourceLeft = sourceRect.left + sourceRect.width / 2 - sourceSize / 2;
      const sourceTop = sourceRect.top + sourceRect.height / 2 - sourceSize / 2;
      const targetSize = targetRect.width;

      setFlightStyle({
        "--intro-from-left": `${sourceLeft}px`,
        "--intro-from-top": `${sourceTop}px`,
        "--intro-from-size": `${sourceSize}px`,
        "--intro-shift-x": `${targetRect.left - sourceLeft}px`,
        "--intro-shift-y": `${targetRect.top - sourceTop}px`,
        "--intro-scale": `${targetSize / sourceSize}`,
      });
      setReady(true);
    };

    frame = window.requestAnimationFrame(measure);
    window.addEventListener("resize", measure);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div className="introScreen" aria-hidden="true">
      <div className="introMarkStage" ref={stageRef}>
        <AlphaConstruction className="introConstruction" />

        <div className="introWordmark">
          <span>PROJECT</span>
          <strong>ALPHA</strong>
        </div>

        <div className="introWelcome">
          <strong>Velkommen, {userName}</strong>
          <span>Ditt investeringssystem er klart.</span>
        </div>
      </div>

      <div
        className={`introFlyingMark ${ready ? "isReady" : ""}`}
        style={flightStyle}
      >
        <AlphaMark />
      </div>
    </div>
  );
}

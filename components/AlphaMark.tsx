import type { SVGProps } from "react";

export default function AlphaMark({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={`alphaMark ${className}`.trim()}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        className="alphaOutline"
        d="M10 54 28.75 10.8a3.55 3.55 0 0 1 6.5 0L54 54"
        pathLength="1"
      />
      <path
        className="alphaSignal"
        d="m19.5 42.5 25-7.5-4.25-2.45M44.5 35l-2.1 4.55"
        pathLength="1"
      />
    </svg>
  );
}

import type { SVGProps } from "react";

export default function AlphaMark({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={`alphaMark ${className}`.trim()}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path className="alphaLeg alphaLegLeft" d="M6 92 38 8h11L27 88Z" />
      <path className="alphaLeg alphaLegRight" d="M42 8h12l40 80-22 4Z" />
      <path className="alphaBeam" d="m20 70 50-16 7 12-61 18Z" />
    </svg>
  );
}

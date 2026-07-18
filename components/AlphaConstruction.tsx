import type { SVGProps } from "react";

export default function AlphaConstruction({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={`alphaConstruction ${className}`.trim()}
      viewBox="0 0 160 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <defs>
        <pattern id="alphaConstructionGrid" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M8 0H0V8" className="constructionGridLine" />
        </pattern>
        <marker id="alphaDimensionArrow" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M0 0 8 4 0 8Z" className="constructionArrow" />
        </marker>
      </defs>

      <rect className="constructionGrid" x="14" y="6" width="132" height="118" rx="3" fill="url(#alphaConstructionGrid)" />

      <g className="constructionLogo" transform="translate(30 10)">
        <g className="constructionFill">
          <path className="constructionShape constructionLeft" d="M6 96 38 8h14L20 96Z" />
          <path className="constructionShape constructionRight" d="M46 8h14l40 88H84Z" />
          <path className="constructionShape constructionBeam" d="M18 70 78 52 84 64 14 84Z" />
        </g>

        <g className="constructionGuides">
          <path className="constructionGuide guideOne" pathLength="1" d="M6 96 38 8H52L20 96Z" />
          <path className="constructionGuide guideTwo" pathLength="1" d="M46 8H60L100 96H84Z" />
          <path className="constructionGuide guideThree" pathLength="1" d="M18 70 78 52 84 64 14 84Z" />
        </g>
      </g>

      <g className="constructionDimensions">
        <path
          className="dimensionLine dimensionHeight"
          pathLength="1"
          d="M22 18V102"
          markerStart="url(#alphaDimensionArrow)"
          markerEnd="url(#alphaDimensionArrow)"
        />
        <path
          className="dimensionLine dimensionWidth"
          pathLength="1"
          d="M36 116H124"
          markerStart="url(#alphaDimensionArrow)"
          markerEnd="url(#alphaDimensionArrow)"
        />
        <path className="dimensionLine angleOne" pathLength="1" d="M40 102a19 19 0 0 1 7-15" />
        <path className="dimensionLine angleTwo" pathLength="1" d="M112 102a18 18 0 0 0-8-15" />
        <path className="dimensionLine angleThree" pathLength="1" d="M72 79a15 15 0 0 1 14 4" />
        <text className="constructionLabel labelHeight" x="17" y="64" textAnchor="middle" transform="rotate(-90 17 64)">100u</text>
        <text className="constructionLabel labelWidth" x="80" y="128" textAnchor="middle">88u</text>
        <text className="constructionLabel labelAngleLeft" x="39" y="96">69,1°</text>
        <text className="constructionLabel labelAngleRight" x="105" y="96">63,4°</text>
        <text className="constructionLabel labelAngleBeam" x="76" y="76">17,7°</text>
      </g>
    </svg>
  );
}

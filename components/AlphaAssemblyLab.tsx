"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Play } from "lucide-react";

type Study = "blueprint" | "assembly" | "calibration" | "hybrid";

const studies: Array<{ id: Study; number: string; name: string; note: string }> = [
  {
    id: "blueprint",
    number: "01",
    name: "Konstruksjon",
    note: "Baselinjer og vinkler etableres først. De tre lukkede formene tegnes deretter presist.",
  },
  {
    id: "assembly",
    number: "02",
    name: "Sammenstilling",
    note: "Tre separate objekter føres inn langs målte bevegelsesakser og låses til sluttposisjonen.",
  },
  {
    id: "calibration",
    number: "03",
    name: "Kalibrering",
    note: "Kontrollpunkter, hovedakser og mål verifiseres før konturen blir stående alene.",
  },
  {
    id: "hybrid",
    number: "04",
    name: "Konstruksjon + kontroll",
    note: "Den faglige oppbyggingen fra studie 1 avsluttes med kontrollpunkter og skanning fra studie 3.",
  },
];

// Exact 0.5x front projection of the final pre-3D Alpha study.
const leftShape = "82.5,440.4 300,40 335,46 170,425";
const rightShape = "288.3,64.4 328.3,61.5 421.7,422.1 381.7,425";
const beamShape = "178,339 399,271 434.5,332 170,364.5";

function DefinitionSet({ prefix }: { prefix: string }) {
  return (
    <defs>
      <pattern id={`${prefix}-grid`} width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M20 0H0V20" className="studyGridLine" />
      </pattern>
      <marker id={`${prefix}-arrow`} viewBox="0 0 8 8" refX="4" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
        <path d="M0 0 8 4 0 8Z" className="studyArrow" />
      </marker>
    </defs>
  );
}

function Baselines({ prefix, compact = false }: { prefix: string; compact?: boolean }) {
  return (
    <g className={`studyMeasurements${compact ? " compact" : ""}`}>
      <path className="studyDatum" d="M58 425H520" />
      <path className="studyDatum studyDatumVertical" d="M286 26V462" />

      <path className="studyArc arcLeft" d="M202 425A72 72 0 0 0 161.8 360.3" pathLength="1" />
      <path className="studyArc arcRight" d="M330 425A72 72 0 0 1 383.9 355.3" pathLength="1" />
      <path className="studyArc arcBeam" d="M226 351.8A52 52 0 0 0 224.9 341.2" pathLength="1" />

      <text className="studyLabel labelLeftAngle" x="165" y="394">63,9°</text>
      <text className="studyLabel labelRightAngle" x="368" y="393">75,5°</text>
      <text className="studyLabel labelBeamAngle" x="224" y="344">11,7°</text>

      <path className="studyDimension dimLeft" d="M86 425 277.3 35.3" pathLength="1" markerStart={`url(#${prefix}-arrow)`} markerEnd={`url(#${prefix}-arrow)`} />
      <path className="studyDimension dimRight" d="M349 57 442.4 417.6" pathLength="1" markerStart={`url(#${prefix}-arrow)`} markerEnd={`url(#${prefix}-arrow)`} />
      <path className="studyDimension dimBeam" d="M170 310 412.8 259.8" pathLength="1" markerStart={`url(#${prefix}-arrow)`} markerEnd={`url(#${prefix}-arrow)`} />

      <text className="studyLabel labelLeftLength" x="172" y="230" transform="rotate(-63.9 172 230)">434,1 u</text>
      <text className="studyLabel labelRightLength" x="397" y="235" transform="rotate(75.5 397 235)">372,5 u</text>
      <text className="studyLabel labelBeamLength" x="285" y="282" transform="rotate(-11.7 285 282)">247,9 u</text>
    </g>
  );
}

function FinalGeometry({ className = "" }: { className?: string }) {
  return (
    <g className={`studyGeometry ${className}`.trim()}>
      <polygon className="studyObject studyLeft" points={leftShape} pathLength="1" />
      <polygon className="studyObject studyRight" points={rightShape} pathLength="1" />
      <polygon className="studyObject studyBeam" points={beamShape} pathLength="1" />
    </g>
  );
}

function BlueprintStudy() {
  return (
    <svg className="studySvg" viewBox="0 0 600 500" role="img" aria-label="Konstruksjonsanimasjon med reelle mål og vinkler">
      <DefinitionSet prefix="blueprint" />
      <rect className="studyGrid" x="62" y="28" width="476" height="432" fill="url(#blueprint-grid)" />
      <g className="blueprintSketch">
        <path className="sketchLine sketchLeft" d="M126.3 432.7 317.5 43" pathLength="1" />
        <path className="sketchLine sketchRight" d="M308.3 62.9 401.7 423.6" pathLength="1" />
        <path className="sketchLine sketchBeam" d="M174 351.8 416.8 301.5" pathLength="1" />
      </g>
      <Baselines prefix="blueprint" />
      <FinalGeometry className="blueprintGeometry" />
      <g className="studyNodes">
        <circle cx="126.3" cy="432.7" r="3" /><circle cx="317.5" cy="43" r="3" />
        <circle cx="308.3" cy="62.9" r="3" /><circle cx="401.7" cy="423.6" r="3" />
        <circle cx="174" cy="351.8" r="3" /><circle cx="416.8" cy="301.5" r="3" />
      </g>
    </svg>
  );
}

function AssemblyStudy() {
  return (
    <svg className="studySvg" viewBox="0 0 600 500" role="img" aria-label="Tre geometriske objekter føres sammen til bokstaven A">
      <DefinitionSet prefix="assembly" />
      <rect className="studyGrid faint" x="62" y="28" width="476" height="432" fill="url(#assembly-grid)" />
      <path className="motionVector vectorLeft" d="M34 346 153 280" markerEnd="url(#assembly-arrow)" />
      <path className="motionVector vectorRight" d="M548 170 430 237" markerEnd="url(#assembly-arrow)" />
      <path className="motionVector vectorBeam" d="M292 482 290 374" markerEnd="url(#assembly-arrow)" />
      <text className="studyLabel motionLabel motionLabelLeft" x="56" y="326">Δ 136,1 u</text>
      <text className="studyLabel motionLabel motionLabelRight" x="444" y="183">Δ 135,7 u</text>
      <text className="studyLabel motionLabel motionLabelBeam" x="300" y="458">Δ 108,0 u</text>
      <FinalGeometry className="assemblyGeometry" />
      <g className="lockingPoints">
        <path d="M308.5 43h18M317.5 34v18" />
        <path d="M165 351.8h18M174 342.8v18" />
        <path d="M407.8 301.5h18M416.8 292.5v18" />
      </g>
    </svg>
  );
}

function CalibrationStudy() {
  return (
    <svg className="studySvg" viewBox="0 0 600 500" role="img" aria-label="Geometrisk kalibrering av bokstaven A">
      <DefinitionSet prefix="calibration" />
      <g className="calibrationAxes">
        <path className="axisLine axisLeft" d="M126.3 432.7 317.5 43" pathLength="1" />
        <path className="axisLine axisRight" d="M308.3 62.9 401.7 423.6" pathLength="1" />
        <path className="axisLine axisBeam" d="M174 351.8 416.8 301.5" pathLength="1" />
      </g>
      <Baselines prefix="calibration" compact />
      <g className="calibrationRings">
        <circle cx="126.3" cy="432.7" r="12" /><circle cx="317.5" cy="43" r="12" />
        <circle cx="308.3" cy="62.9" r="12" /><circle cx="401.7" cy="423.6" r="12" />
        <circle cx="174" cy="351.8" r="10" /><circle cx="416.8" cy="301.5" r="10" />
      </g>
      <FinalGeometry className="calibrationGeometry" />
      <path className="calibrationScan" d="M78 54V446" />
    </svg>
  );
}

function HybridStudy() {
  return (
    <svg className="studySvg" viewBox="0 0 600 500" role="img" aria-label="Kombinert konstruksjons- og kalibreringsanimasjon">
      <DefinitionSet prefix="hybrid" />
      <rect className="studyGrid" x="62" y="28" width="476" height="432" fill="url(#hybrid-grid)" />
      <g className="hybridSketch">
        <path className="hybridSketchLine hybridSketchLeft" d="M126.3 432.7 317.5 43" pathLength="1" />
        <path className="hybridSketchLine hybridSketchRight" d="M308.3 62.9 401.7 423.6" pathLength="1" />
        <path className="hybridSketchLine hybridSketchBeam" d="M174 351.8 416.8 301.5" pathLength="1" />
      </g>
      <Baselines prefix="hybrid" />
      <g className="hybridRings">
        <circle cx="126.3" cy="432.7" r="12" /><circle cx="317.5" cy="43" r="12" />
        <circle cx="308.3" cy="62.9" r="12" /><circle cx="401.7" cy="423.6" r="12" />
        <circle cx="174" cy="351.8" r="10" /><circle cx="416.8" cy="301.5" r="10" />
      </g>
      <FinalGeometry className="hybridGeometry" />
    </svg>
  );
}

function StudyGraphic({ study }: { study: Study }) {
  if (study === "blueprint") return <BlueprintStudy />;
  if (study === "assembly") return <AssemblyStudy />;
  if (study === "calibration") return <CalibrationStudy />;
  return <HybridStudy />;
}

function StudyCard({ study }: { study: (typeof studies)[number] }) {
  const [run, setRun] = useState(0);
  return (
    <article className={`studyCard study-${study.id}`}>
      <div className="studyCardHeader">
        <div>
          <small>STUDIE {study.number}</small>
          <h2>{study.name}</h2>
          <p>{study.note}</p>
        </div>
        <button className="studyReplay" type="button" onClick={() => setRun((value) => value + 1)}>
          <Play size={14} /> Spill av
        </button>
      </div>
      <div className="studyViewport">
        <StudyGraphic key={run} study={study.id} />
      </div>
    </article>
  );
}

export default function AlphaAssemblyLab() {
  return (
    <main className="geometryLab">
      <div className="geometryTopbar">
        <Link href="/" className="geometryBack"><ArrowLeft size={16} /> Tilbake til arbeidsflaten</Link>
        <span>PROJECT ALPHA / GEOMETRISTUDIE</span>
      </div>

      <header className="geometryHeader">
        <small>ALPHA MOTION STUDY</small>
        <h1>Enklere form.<br />Reell geometri.</h1>
        <p>Tre vidt forskjellige animasjoner basert på identiske, målbare koordinater. Ingen simulert 3D eller tvunget perspektiv.</p>
      </header>

      <section className="studyList">
        {studies.map((study) => <StudyCard key={study.id} study={study} />)}
      </section>

      <style jsx global>{`
        .geometryLab { min-height:100dvh; display:block; overflow-y:auto; padding:28px clamp(18px,4vw,64px) 70px; color:#edf0ea; background:radial-gradient(circle at 82% 3%,rgba(143,184,168,.07),transparent 32%),#0b0e0d; }
        .geometryTopbar { display:flex; align-items:center; justify-content:space-between; gap:20px; color:#737d77; font-size:10px; font-weight:800; letter-spacing:.17em; }
        .geometryBack { display:inline-flex; align-items:center; gap:8px; color:#aab2ac; text-decoration:none; font-size:13px; letter-spacing:.01em; }
        .geometryHeader { display:block; max-width:780px; margin:clamp(58px,8vw,112px) 0 48px; }
        .geometryHeader small,.studyCardHeader small { color:#c2a878; font-weight:850; letter-spacing:.16em; }
        .geometryHeader h1 { margin:11px 0 17px; font-size:clamp(44px,7vw,84px); line-height:.95; letter-spacing:-.05em; }
        .geometryHeader p { max-width:650px; margin:0; color:#8e9891; line-height:1.65; }
        .studyList { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:18px; }
        .studyCard { overflow:hidden; min-width:0; border:1px solid rgba(234,239,233,.09); border-radius:17px; background:rgba(17,22,20,.86); box-shadow:0 22px 64px rgba(0,0,0,.22); }
        .studyCardHeader { min-height:166px; padding:23px; display:flex; align-items:flex-start; justify-content:space-between; gap:16px; }
        .studyCardHeader h2 { margin:6px 0 8px; font-size:25px; letter-spacing:-.025em; }
        .studyCardHeader p { max-width:300px; margin:0; color:#879089; font-size:13px; line-height:1.52; }
        .studyReplay { flex:0 0 auto; padding:9px 11px; color:#dce2dd; background:rgba(255,255,255,.03); border:1px solid rgba(234,239,233,.11); font-size:11px; cursor:pointer; }
        .studyViewport { height:min(48vw,500px); min-height:400px; border-top:1px solid rgba(234,239,233,.07); background:#0a0e0c; overflow:hidden; }
        .studySvg { display:block; width:100%; height:100%; }
        .studyGrid { opacity:.34; }
        .studyGrid.faint { opacity:.15; }
        .studyGridLine { fill:none; stroke:rgba(237,240,234,.075); stroke-width:.7; }
        .studyDatum { fill:none; stroke:rgba(194,168,120,.35); stroke-width:1; stroke-dasharray:5 7; animation:datumReveal .65s ease both; }
        .studyDatumVertical { animation-delay:.12s; }
        .studyArc,.studyDimension,.motionVector,.axisLine { fill:none; stroke:rgba(194,168,120,.62); stroke-width:1; vector-effect:non-scaling-stroke; }
        .studyArc { stroke-dasharray:1; stroke-dashoffset:1; animation:lineDraw .55s ease .5s forwards; }
        .studyDimension { stroke-dasharray:1; stroke-dashoffset:1; animation:lineDraw .8s ease .78s forwards; }
        .studyArrow { fill:#c2a878; }
        .studyLabel { fill:#9fa8a1; font-family:"Alpha Text",sans-serif; font-size:10px; font-weight:700; letter-spacing:.08em; opacity:0; animation:labelReveal .4s ease 1.35s forwards; }
        .studyObject { fill:rgba(237,240,234,.015); stroke:#d9dfda; stroke-width:1.35; vector-effect:non-scaling-stroke; stroke-linejoin:round; stroke-dasharray:1; stroke-dashoffset:1; }
        .blueprintSketch { animation:sketchSettle .7s ease 3.7s forwards; }
        .sketchLine { fill:none; stroke:rgba(143,184,168,.62); stroke-width:.9; stroke-dasharray:1; stroke-dashoffset:1; vector-effect:non-scaling-stroke; }
        .sketchLeft { animation:lineDraw .82s ease .18s forwards; }
        .sketchRight { animation:lineDraw .82s ease .46s forwards; }
        .sketchBeam { animation:lineDraw .68s ease .74s forwards; }
        .study-blueprint .studyDatum { opacity:0; animation:datumReveal .52s ease 1.12s forwards; }
        .study-blueprint .studyDatumVertical { animation-delay:1.26s; }
        .study-blueprint .studyArc { animation-delay:1.65s; }
        .study-blueprint .labelLeftAngle,
        .study-blueprint .labelRightAngle,
        .study-blueprint .labelBeamAngle { animation-delay:2.05s; }
        .study-blueprint .studyDimension { animation-delay:2.32s; }
        .study-blueprint .labelLeftLength,
        .study-blueprint .labelRightLength,
        .study-blueprint .labelBeamLength { animation-delay:2.95s; }
        .blueprintGeometry .studyLeft { animation:lineDraw 1.05s ease 3.35s forwards; }
        .blueprintGeometry .studyRight { animation:lineDraw 1.05s ease 3.55s forwards; }
        .blueprintGeometry .studyBeam { animation:lineDraw .82s ease 3.8s forwards; }
        .studyNodes circle { fill:#0a0e0c; stroke:#8fb8a8; stroke-width:1; opacity:0; animation:labelReveal .35s ease 4.7s forwards; }
        .motionVector { stroke-dasharray:5 8; opacity:0; animation:vectorReveal .7s ease .25s forwards; }
        .motionLabel { animation-delay:.72s; }
        .assemblyGeometry .studyObject { stroke-dashoffset:0; }
        .assemblyGeometry .studyLeft { animation:assembleLeft 2.5s cubic-bezier(.18,.78,.17,1) .85s both; }
        .assemblyGeometry .studyRight { animation:assembleRight 2.5s cubic-bezier(.18,.78,.17,1) .94s both; }
        .assemblyGeometry .studyBeam { animation:assembleBeam 2.5s cubic-bezier(.18,.78,.17,1) 1.03s both; }
        .lockingPoints path { fill:none; stroke:#8fb8a8; stroke-width:1; opacity:0; animation:lockPulse .8s ease 3.25s both; }
        .axisLine { stroke:#8fb8a8; stroke-dasharray:1; stroke-dashoffset:1; animation:lineDraw .9s ease forwards; }
        .axisRight { animation-delay:.18s; }.axisBeam { animation-delay:.36s; }
        .study-calibration .studyMeasurements { opacity:0; animation:labelReveal .5s ease 1s forwards; }
        .studyMeasurements.compact .studyDimension { display:none; }
        .calibrationRings circle { fill:none; stroke:#c2a878; stroke-width:1; opacity:0; transform-box:fill-box; transform-origin:center; animation:ringIn .65s ease 1.25s both; }
        .calibrationRings circle:nth-child(2n) { animation-delay:1.38s; }
        .calibrationGeometry .studyObject { animation:lineDraw .85s ease 1.85s forwards; }
        .calibrationGeometry .studyRight { animation-delay:2s; }.calibrationGeometry .studyBeam { animation-delay:2.15s; }
        .calibrationScan { fill:none; stroke:rgba(143,184,168,.5); stroke-width:1; filter:drop-shadow(0 0 7px rgba(143,184,168,.65)); animation:scanAcross 1.65s ease 2.6s both; }
        .study-hybrid .studyGrid { opacity:0; animation:hybridGridReveal .35s ease .25s forwards; }
        .hybridSketch { animation:sketchSettle .65s ease 7.35s forwards; }
        .hybridSketchLine { fill:none; stroke:rgba(143,184,168,.62); stroke-width:.9; stroke-dasharray:1; stroke-dashoffset:1; vector-effect:non-scaling-stroke; }
        .hybridSketchLeft { animation:lineDraw .72s ease 1.45s forwards; }
        .hybridSketchRight { animation:lineDraw .72s ease 2.08s forwards; }
        .hybridSketchBeam { animation:lineDraw .62s ease 2.71s forwards; }
        .study-hybrid .studyDatum { opacity:0; stroke-dashoffset:80; animation:datumTrace .55s ease .55s forwards; }
        .study-hybrid .studyDatumVertical { animation-delay:1.02s; }
        .study-hybrid .studyArc { animation-delay:3.82s; }
        .study-hybrid .arcRight { animation-delay:3.98s; }
        .study-hybrid .arcBeam { animation-delay:4.14s; }
        .study-hybrid .labelLeftAngle,
        .study-hybrid .labelRightAngle,
        .study-hybrid .labelBeamAngle { animation-delay:4.45s; }
        .study-hybrid .studyDimension { opacity:0; animation:hybridDimensionDraw .8s ease 4.72s forwards; }
        .study-hybrid .dimRight { animation-delay:5.05s; }
        .study-hybrid .dimBeam { animation-delay:5.38s; }
        .study-hybrid .labelLeftLength { animation-delay:5.17s; }
        .study-hybrid .labelRightLength { animation-delay:5.5s; }
        .study-hybrid .labelBeamLength { animation-delay:5.83s; }
        .hybridRings circle { fill:none; stroke:#c2a878; stroke-width:1; opacity:0; transform-box:fill-box; transform-origin:center; animation:ringIn .55s ease 3.28s both; }
        .hybridRings circle:nth-child(2n) { animation-delay:3.4s; }
        .hybridGeometry .studyObject { fill:none; }
        .hybridGeometry .studyLeft { animation:lineDraw 1.05s ease 6.18s forwards,polygonFill .65s ease 7.45s forwards; }
        .hybridGeometry .studyRight { animation:lineDraw 1.05s ease 6.38s forwards,polygonFill .65s ease 7.45s forwards; }
        .hybridGeometry .studyBeam { animation:lineDraw .82s ease 6.63s forwards,polygonFill .65s ease 7.45s forwards; }
        @keyframes datumReveal { from{opacity:0} to{opacity:1} }
        @keyframes datumTrace { from{opacity:0;stroke-dashoffset:80} to{opacity:1;stroke-dashoffset:0} }
        @keyframes hybridDimensionDraw { from{opacity:0;stroke-dashoffset:1} to{opacity:1;stroke-dashoffset:0} }
        @keyframes lineDraw { to{stroke-dashoffset:0} }
        @keyframes labelReveal { from{opacity:0} to{opacity:1} }
        @keyframes vectorReveal { from{opacity:0;stroke-dashoffset:30} to{opacity:1;stroke-dashoffset:0} }
        @keyframes assembleLeft { from{transform:translate(-119px,66px);opacity:.15} to{transform:translate(0,0);opacity:1} }
        @keyframes assembleRight { from{transform:translate(118px,-67px);opacity:.15} to{transform:translate(0,0);opacity:1} }
        @keyframes assembleBeam { from{transform:translate(2px,108px);opacity:.15} to{transform:translate(0,0);opacity:1} }
        @keyframes lockPulse { 0%{opacity:0;transform:scale(.7)} 45%{opacity:1} 100%{opacity:.25;transform:scale(1)} }
        @keyframes ringIn { from{opacity:0;transform:scale(1.8)} to{opacity:.7;transform:scale(1)} }
        @keyframes scanAcross { from{transform:translateX(0);opacity:0} 12%{opacity:1} 88%{opacity:1} to{transform:translateX(445px);opacity:0} }
        @keyframes sketchSettle { to{opacity:.2} }
        @keyframes hybridGridReveal { to{opacity:.34} }
        @keyframes polygonFill { from{fill:rgba(237,240,234,0)} to{fill:rgba(237,240,234,.07)} }
        @media(max-width:1180px){.studyList{grid-template-columns:1fr}.studyViewport{height:min(76vw,600px)}}
        @media(max-width:620px){.geometryLab{padding-inline:13px}.geometryTopbar>span{display:none}.studyCardHeader{min-height:0}.studyViewport{min-height:360px}}
        @media(prefers-reduced-motion:reduce){.studySvg *{animation-duration:.001ms!important;animation-delay:0s!important}}
      `}</style>
    </main>
  );
}

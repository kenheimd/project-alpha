"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Play } from "lucide-react";

type Study = "blueprint" | "assembly" | "calibration";

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
];

// Exact 4x projection of the established Project Alpha mark.
const leftShape = "104,424 232,72 288,72 160,424";
const rightShape = "264,72 320,72 480,424 416,424";
const beamShape = "152,320 392,248 416,296 136,376";

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
      <path className="studyDatum" d="M72 424H520" />
      <path className="studyDatum studyDatumVertical" d="M276 42V456" />

      <path className="studyArc arcLeft" d="M204 424A72 72 0 0 0 156.6 356.3" />
      <path className="studyArc arcRight" d="M376 424A72 72 0 0 1 418.8 358.2" />
      <path className="studyArc arcBeam" d="M196 348A52 52 0 0 0 193.9 333.4" />

      <text className="studyLabel labelLeftAngle" x="169" y="391">70,0°</text>
      <text className="studyLabel labelRightAngle" x="391" y="391">66,1°</text>
      <text className="studyLabel labelBeamAngle" x="202" y="338">16,3°</text>

      <path className="studyDimension dimLeft" d="M92 424 220 72" markerStart={`url(#${prefix}-arrow)`} markerEnd={`url(#${prefix}-arrow)`} />
      <path className="studyDimension dimRight" d="M332 72 488 424" markerStart={`url(#${prefix}-arrow)`} markerEnd={`url(#${prefix}-arrow)`} />
      <path className="studyDimension dimBeam" d="M140 304 400 228" markerStart={`url(#${prefix}-arrow)`} markerEnd={`url(#${prefix}-arrow)`} />

      <text className="studyLabel labelLeftLength" x="143" y="238" transform="rotate(-70 143 238)">374,4 u</text>
      <text className="studyLabel labelRightLength" x="420" y="238" transform="rotate(66.1 420 238)">385,0 u</text>
      <text className="studyLabel labelBeamLength" x="267" y="248" transform="rotate(-16.3 267 248)">270,9 u</text>
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
      <Baselines prefix="blueprint" />
      <FinalGeometry className="blueprintGeometry" />
      <g className="studyNodes">
        <circle cx="132" cy="424" r="3" /><circle cx="260" cy="72" r="3" />
        <circle cx="292" cy="72" r="3" /><circle cx="448" cy="424" r="3" />
        <circle cx="144" cy="348" r="3" /><circle cx="404" cy="272" r="3" />
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
        <path d="M251 72h18M260 63v18" />
        <path d="M135 348h18M144 339v18" />
        <path d="M395 272h18M404 263v18" />
      </g>
    </svg>
  );
}

function CalibrationStudy() {
  return (
    <svg className="studySvg" viewBox="0 0 600 500" role="img" aria-label="Geometrisk kalibrering av bokstaven A">
      <DefinitionSet prefix="calibration" />
      <g className="calibrationAxes">
        <path className="axisLine axisLeft" d="M132 424 260 72" pathLength="1" />
        <path className="axisLine axisRight" d="M292 72 448 424" pathLength="1" />
        <path className="axisLine axisBeam" d="M144 348 404 272" pathLength="1" />
      </g>
      <Baselines prefix="calibration" compact />
      <g className="calibrationRings">
        <circle cx="132" cy="424" r="12" /><circle cx="260" cy="72" r="12" />
        <circle cx="292" cy="72" r="12" /><circle cx="448" cy="424" r="12" />
        <circle cx="144" cy="348" r="10" /><circle cx="404" cy="272" r="10" />
      </g>
      <FinalGeometry className="calibrationGeometry" />
      <path className="calibrationScan" d="M78 54V446" />
    </svg>
  );
}

function StudyGraphic({ study }: { study: Study }) {
  if (study === "blueprint") return <BlueprintStudy />;
  if (study === "assembly") return <AssemblyStudy />;
  return <CalibrationStudy />;
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
        .studyList { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:18px; }
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
        .blueprintGeometry .studyLeft { animation:lineDraw 1.1s ease 1.65s forwards; }
        .blueprintGeometry .studyRight { animation:lineDraw 1.1s ease 1.88s forwards; }
        .blueprintGeometry .studyBeam { animation:lineDraw .8s ease 2.12s forwards; }
        .studyNodes circle { fill:#0a0e0c; stroke:#8fb8a8; stroke-width:1; opacity:0; animation:labelReveal .35s ease 2.55s forwards; }
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
        @keyframes datumReveal { from{opacity:0} to{opacity:1} }
        @keyframes lineDraw { to{stroke-dashoffset:0} }
        @keyframes labelReveal { from{opacity:0} to{opacity:1} }
        @keyframes vectorReveal { from{opacity:0;stroke-dashoffset:30} to{opacity:1;stroke-dashoffset:0} }
        @keyframes assembleLeft { from{transform:translate(-119px,66px);opacity:.15} to{transform:translate(0,0);opacity:1} }
        @keyframes assembleRight { from{transform:translate(118px,-67px);opacity:.15} to{transform:translate(0,0);opacity:1} }
        @keyframes assembleBeam { from{transform:translate(2px,108px);opacity:.15} to{transform:translate(0,0);opacity:1} }
        @keyframes lockPulse { 0%{opacity:0;transform:scale(.7)} 45%{opacity:1} 100%{opacity:.25;transform:scale(1)} }
        @keyframes ringIn { from{opacity:0;transform:scale(1.8)} to{opacity:.7;transform:scale(1)} }
        @keyframes scanAcross { from{transform:translateX(0);opacity:0} 12%{opacity:1} 88%{opacity:1} to{transform:translateX(445px);opacity:0} }
        @media(max-width:1180px){.studyList{grid-template-columns:1fr}.studyViewport{height:min(76vw,600px)}}
        @media(max-width:620px){.geometryLab{padding-inline:13px}.geometryTopbar>span{display:none}.studyCardHeader{min-height:0}.studyViewport{min-height:360px}}
        @media(prefers-reduced-motion:reduce){.studySvg *{animation-duration:.001ms!important;animation-delay:0s!important}}
      `}</style>
    </main>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Play } from "lucide-react";

type Variant = {
  id: "monolith" | "precision" | "offset";
  number: string;
  name: string;
  note: string;
};

const variants: Variant[] = [
  {
    id: "monolith",
    number: "01",
    name: "Monolitt",
    note: "Rolige, massive legemer med stor dybde og et tydelig sluttmerke.",
  },
  {
    id: "precision",
    number: "02",
    name: "Presisjon",
    note: "Slankere konstruksjon, skarpere kanter og mer teknisk karakter.",
  },
  {
    id: "offset",
    number: "03",
    name: "Forskyvning",
    note: "Større avstand mellom objektene og en mer dramatisk samling.",
  },
];

function PrismA({ variant }: { variant: Variant["id"] }) {
  return (
    <div className={`assemblyViewport assembly-${variant}`}>
      <div className="assemblyAxis" aria-hidden="true" />
      <svg
        className="assemblySvg"
        viewBox="0 0 600 520"
        role="img"
        aria-label="Tre separate objekter roterer og danner bokstaven A"
      >
        <defs>
          <linearGradient id={`${variant}-front`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#e7ebe6" />
            <stop offset="0.55" stopColor="#aeb7b1" />
            <stop offset="1" stopColor="#737d77" />
          </linearGradient>
          <linearGradient id={`${variant}-edge`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#89938d" />
            <stop offset="1" stopColor="#3f4844" />
          </linearGradient>
          <linearGradient id={`${variant}-dark`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#606a65" />
            <stop offset="1" stopColor="#222a27" />
          </linearGradient>
          <filter id={`${variant}-shadow`} x="-40%" y="-40%" width="180%" height="200%">
            <feDropShadow dx="0" dy="20" stdDeviation="18" floodColor="#000" floodOpacity=".42" />
          </filter>
        </defs>

        <g className="assemblyCamera" filter={`url(#${variant}-shadow)`}>
          <g className="prism prismLeft">
            <polygon className="prismBack" points="120,438 247,78 282,91 181,438" />
            <polygon className="prismSide" points="120,438 247,78 266,57 137,418" />
            <polygon className="prismTop" points="247,78 282,91 300,70 266,57" />
            <polygon className="prismFront" points="137,418 266,57 300,70 181,438" />
            <polygon className="prismEnd" points="120,438 137,418 181,438" />
          </g>

          <g className="prism prismRight">
            <polygon className="prismBack" points="278,87 316,72 478,438 419,438" />
            <polygon className="prismSide" points="316,72 334,52 500,418 478,438" />
            <polygon className="prismTop" points="278,87 316,72 334,52 296,67" />
            <polygon className="prismFront" points="296,67 334,52 500,418 441,438" />
            <polygon className="prismEnd" points="419,438 441,438 500,418 478,438" />
          </g>

          <g className="prism prismBeam">
            <polygon className="prismBack" points="177,326 412,263 429,296 162,365" />
            <polygon className="prismSide" points="412,263 431,243 451,277 429,296" />
            <polygon className="prismTop" points="177,326 412,263 431,243 197,306" />
            <polygon className="prismFront" points="197,306 431,243 451,277 181,347" />
            <polygon className="prismEnd" points="162,365 181,347 197,306 177,326" />
          </g>
        </g>
      </svg>
      <div className="assemblyCaption">
        <span>3 OBJEKTER</span>
        <i />
        <span>1 PERSPEKTIV</span>
      </div>
    </div>
  );
}

function VariantCard({ variant }: { variant: Variant }) {
  const [run, setRun] = useState(0);

  return (
    <article className="assemblyCard">
      <div className="assemblyCardHeader">
        <div>
          <small>RETNING {variant.number}</small>
          <h2>{variant.name}</h2>
          <p>{variant.note}</p>
        </div>
        <button type="button" className="replayButton" onClick={() => setRun((value) => value + 1)}>
          <Play size={15} />
          Spill av
        </button>
      </div>
      <PrismA key={run} variant={variant.id} />
    </article>
  );
}

export default function AlphaAssemblyLab() {
  return (
    <main className="assemblyLab">
      <div className="assemblyLabTopbar">
        <Link href="/" className="assemblyBack">
          <ArrowLeft size={16} /> Tilbake til arbeidsflaten
        </Link>
        <span>PROJECT ALPHA / FORMSTUDIE</span>
      </div>

      <header className="assemblyLabHeader">
        <small>ALPHA ASSEMBLY STUDY</small>
        <h1>Tre objekter. Ett merke.</h1>
        <p>
          Hver variant starter i sideperspektiv, viser at konstruksjonen består av tre
          separate legemer og roterer deretter inn til en tydelig A.
        </p>
      </header>

      <section className="assemblyVariants">
        {variants.map((variant) => (
          <VariantCard key={variant.id} variant={variant} />
        ))}
      </section>

      <style jsx global>{`
        .assemblyLab {
          min-height: 100dvh;
          display: block;
          overflow-y: auto;
          background:
            radial-gradient(circle at 72% 8%, rgba(143,184,168,.09), transparent 33%),
            linear-gradient(145deg, #0b0e0d, #101512 58%, #0b0e0d);
          color: #edf0ea;
          padding: 28px clamp(20px, 4vw, 68px) 64px;
        }
        .assemblyLabTopbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          color: #7f8982;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .15em;
        }
        .assemblyBack {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #aeb7b1;
          text-decoration: none;
          letter-spacing: .02em;
          font-size: 13px;
        }
        .assemblyLabHeader {
          display: block;
          max-width: 760px;
          margin: clamp(54px, 8vw, 112px) 0 48px;
        }
        .assemblyLabHeader small, .assemblyCardHeader small {
          color: #c2a878;
          font-weight: 850;
          letter-spacing: .16em;
        }
        .assemblyLabHeader h1 {
          margin: 10px 0 14px;
          font-size: clamp(42px, 7vw, 82px);
          line-height: .96;
          letter-spacing: -.045em;
        }
        .assemblyLabHeader p {
          max-width: 660px;
          color: #9aa39c;
          line-height: 1.65;
          font-size: 16px;
        }
        .assemblyVariants {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }
        .assemblyCard {
          min-width: 0;
          overflow: hidden;
          border: 1px solid rgba(234,239,233,.1);
          border-radius: 18px;
          background: rgba(17,22,20,.84);
          box-shadow: 0 24px 70px rgba(0,0,0,.24);
        }
        .assemblyCardHeader {
          min-height: 154px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
          padding: 24px 24px 18px;
        }
        .assemblyCardHeader h2 {
          margin: 6px 0 7px;
          font-size: 25px;
          letter-spacing: -.025em;
        }
        .assemblyCardHeader p {
          max-width: 310px;
          margin: 0;
          color: #89938c;
          font-size: 13px;
          line-height: 1.5;
        }
        .replayButton {
          flex: 0 0 auto;
          color: #dce2dd;
          background: rgba(255,255,255,.035);
          border: 1px solid rgba(234,239,233,.11);
          padding: 9px 11px;
          font-size: 12px;
          cursor: pointer;
        }
        .assemblyViewport {
          position: relative;
          height: min(53vw, 520px);
          min-height: 390px;
          overflow: hidden;
          border-top: 1px solid rgba(234,239,233,.07);
          background:
            linear-gradient(rgba(234,239,233,.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(234,239,233,.025) 1px, transparent 1px),
            radial-gradient(circle at 50% 55%, rgba(143,184,168,.07), transparent 52%),
            #0b0f0d;
          background-size: 32px 32px, 32px 32px, auto, auto;
          perspective: 1200px;
        }
        .assemblyAxis {
          position: absolute;
          left: 12%;
          right: 12%;
          bottom: 12%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(194,168,120,.2), transparent);
        }
        .assemblySvg {
          width: 100%;
          height: calc(100% - 42px);
          overflow: visible;
        }
        .assemblyCamera {
          transform-box: view-box;
          transform-origin: 50% 52%;
          animation: cameraResolve 5.8s cubic-bezier(.2,.74,.16,1) both;
        }
        .prism {
          transform-box: fill-box;
          transform-origin: center;
          animation: objectAssemble 5.8s cubic-bezier(.2,.74,.16,1) both;
        }
        .prismLeft { --from-x: -150px; --from-y: 28px; --from-r: -13deg; --delay: 0s; }
        .prismRight { --from-x: 158px; --from-y: -20px; --from-r: 11deg; --delay: .08s; }
        .prismBeam { --from-x: 38px; --from-y: 128px; --from-r: 19deg; --delay: .16s; }
        .prismFront { fill: url(#monolith-front); }
        .prismSide { fill: url(#monolith-edge); }
        .prismTop { fill: #dfe4df; }
        .prismBack { fill: #343c38; }
        .prismEnd { fill: url(#monolith-dark); }
        .assembly-precision .prismFront { fill: url(#precision-front); }
        .assembly-precision .prismSide { fill: url(#precision-edge); }
        .assembly-precision .prismEnd { fill: url(#precision-dark); }
        .assembly-offset .prismFront { fill: url(#offset-front); }
        .assembly-offset .prismSide { fill: url(#offset-edge); }
        .assembly-offset .prismEnd { fill: url(#offset-dark); }
        .assembly-precision .assemblyCamera { animation-name: cameraPrecision; }
        .assembly-precision .prism { animation-name: objectPrecision; }
        .assembly-precision .prismLeft { --from-x: -118px; --from-y: -68px; --from-r: -24deg; }
        .assembly-precision .prismRight { --from-x: 116px; --from-y: 74px; --from-r: 22deg; }
        .assembly-precision .prismBeam { --from-x: 0px; --from-y: 166px; --from-r: -25deg; }
        .assembly-offset .assemblyCamera { animation-name: cameraOffset; }
        .assembly-offset .prism { animation-name: objectOffset; }
        .assembly-offset .prismLeft { --from-x: -220px; --from-y: 80px; --from-r: -8deg; }
        .assembly-offset .prismRight { --from-x: 238px; --from-y: -92px; --from-r: 16deg; }
        .assembly-offset .prismBeam { --from-x: 18px; --from-y: 215px; --from-r: 31deg; }
        .assemblyCaption {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 17px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: #6f7972;
          font-size: 9px;
          font-weight: 850;
          letter-spacing: .16em;
        }
        .assemblyCaption i { height: 1px; flex: 1; background: rgba(234,239,233,.08); }
        @keyframes cameraResolve {
          0%, 12% { transform: perspective(850px) rotateY(72deg) rotateX(-7deg) scale(.74); }
          70%, 100% { transform: perspective(850px) rotateY(0deg) rotateX(0deg) scale(.88); }
        }
        @keyframes objectAssemble {
          0%, 12% { transform: translate(var(--from-x), var(--from-y)) rotate(var(--from-r)); opacity: .35; }
          28% { opacity: 1; }
          72%, 100% { transform: translate(0, 0) rotate(0); opacity: 1; }
        }
        @keyframes cameraPrecision {
          0%, 12% { transform: perspective(900px) rotateY(-78deg) rotateX(9deg) scale(.78); }
          74%, 100% { transform: perspective(900px) rotateY(0deg) rotateX(0deg) scale(.86); }
        }
        @keyframes objectPrecision {
          0%, 12% { transform: translate(var(--from-x), var(--from-y)) rotate(var(--from-r)) scale(.91); opacity: .4; }
          32% { opacity: 1; }
          74%, 100% { transform: translate(0, 0) rotate(0) scale(1); opacity: 1; }
        }
        @keyframes cameraOffset {
          0%, 15% { transform: perspective(780px) rotateY(84deg) rotateX(-13deg) scale(.67); }
          78%, 100% { transform: perspective(780px) rotateY(0deg) rotateX(0deg) scale(.9); }
        }
        @keyframes objectOffset {
          0%, 15% { transform: translate(var(--from-x), var(--from-y)) rotate(var(--from-r)) scale(.84); opacity: .28; }
          36% { opacity: 1; }
          78%, 100% { transform: translate(0, 0) rotate(0) scale(1); opacity: 1; }
        }
        @media (max-width: 1180px) {
          .assemblyVariants { grid-template-columns: 1fr; }
          .assemblyViewport { height: min(76vw, 620px); }
        }
        @media (max-width: 620px) {
          .assemblyLab { padding-inline: 14px; }
          .assemblyLabTopbar > span { display: none; }
          .assemblyCardHeader { min-height: 0; }
          .replayButton { padding-inline: 9px; }
          .assemblyViewport { min-height: 360px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .assemblyCamera, .prism { animation-duration: .001ms; animation-delay: 0s; }
        }
      `}</style>
    </main>
  );
}

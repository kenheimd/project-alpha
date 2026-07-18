import type { ReactNode } from "react";
import AppSidebar from "../../components/AppSidebar";
import AlphaIntro from "../../components/AlphaIntro";
import AlphaConstruction from "../../components/AlphaConstruction";
import AppAtmosphere from "../../components/AppAtmosphere";
import WorkspaceWelcome from "../../components/WorkspaceWelcome";
import { currentUser } from "@clerk/nextjs/server";

import {
  BriefcaseBusiness,
  CircleDollarSign,
  ShieldAlert,
  TrendingUp,
} from "lucide-react";

const positions = [
  {
    ticker: "AFG",
    name: "AF Gruppen",
    type: "Langsiktig",
    qty: 5,
    avg: 198.8,
    status: "Hold",
  },
  {
    ticker: "STB",
    name: "Storebrand",
    type: "Trading",
    qty: 2,
    avg: 197.5,
    status: "Aktiv",
  },
];

const candidates = [
  {
    ticker: "STB",
    score: 82,
    confidence: 82,
    label: "Rapportmomentum",
    intro:
      "Sterk rapport og positiv markedsreaksjon. Posisjonen følges for videre styrke.",
    news:
      "Resultatet var bedre enn forventet, men mye av oppgangen kan allerede være tatt ut.",
    action: "Behold – ikke øk ennå",
  },
  {
    ticker: "AKRBP",
    score: 68,
    confidence: 64,
    label: "Avvent bekreftelse",
    intro:
      "Mulig positivt oppsett dersom kurs og volum bekrefter videre styrke.",
    news:
      "Agentene følger oljepris, selskapsmeldinger og endringer i analytikerestimatene.",
    action: "Overvåk",
  },
  {
    ticker: "NEL",
    score: 61,
    confidence: 55,
    label: "Spekulativ",
    intro:
      "Høy risiko, men potensielt interessant ved ny katalysator og tydelig momentum.",
    news: "Ingen bekreftet kjøpskatalysator er identifisert ennå.",
    action: "Ingen handel",
  },
];

function Metric({
  label,
  value,
  helper,
  icon,
}: {
  label: string;
  value: string;
  helper: string;
  icon: ReactNode;
}) {
  return (
    <div className="metric">
      <div className="metricIcon">{icon}</div>

      <div>
        <span>{label}</span>
        <strong>{value}</strong>
        <small>{helper}</small>
      </div>
    </div>
  );
}

export default async function Home() {
  const user = await currentUser();
  const userName = user?.firstName || user?.username || "Kenneth";

  return (
    <>
      <main>
        <AppAtmosphere />

        <AlphaIntro />

        <div className="backgroundMark" data-alpha-background aria-hidden="true">
          <AlphaConstruction className="backgroundConstruction" />
        </div>

        <AppSidebar active="workspace" />

        <section className="content">
          <WorkspaceWelcome userName={userName} />

          <section
            id="muligheter"
            className="card"
            style={{ marginBottom: "24px" }}
          >
            <div className="cardTitle">
              <div>
                <small>MULIGHETER FUNNET AV ALPHA</small>
                <h2>Dette bør du vurdere før markedet åpner</h2>
              </div>

              <span>{candidates.length} muligheter</span>
            </div>

            <p style={{ marginBottom: "20px", maxWidth: "850px" }}>
              Agentene har sammenstilt nyheter, kursutvikling, momentum og
              mulige katalysatorer. Klikk på en mulighet for å åpne vurderingen.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "16px",
              }}
            >
              {candidates.map((candidate, index) => (
                <details
                  key={candidate.ticker}
                  className="card"
                  style={{ cursor: "pointer" }}
                >
                  <summary
                    style={{
                      listStyle: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "16px",
                    }}
                  >
                    <div>
                      <small>MULIGHET {index + 1}</small>
                      <h2>{candidate.ticker}</h2>
                      <span>{candidate.label}</span>
                    </div>

                    <div style={{ textAlign: "right" }}>
                      <strong>{candidate.score}/100</strong>
                      <small style={{ display: "block" }}>Alpha-score</small>
                    </div>
                  </summary>

                  <div style={{ marginTop: "20px" }}>
                    <p>{candidate.intro}</p>

                    <div style={{ marginTop: "16px" }}>
                      <small>VIKTIG NYHET ELLER SIGNAL</small>
                      <p>{candidate.news}</p>
                    </div>

                    <div style={{ marginTop: "16px" }}>
                      <small>FORELØPIG HANDLING</small>

                      <strong
                        style={{
                          display: "block",
                          marginTop: "5px",
                        }}
                      >
                        {candidate.action}
                      </strong>
                    </div>

                    <div className="miniBar" style={{ marginTop: "18px" }}>
                      <i
                        style={{
                          width: `${candidate.confidence}%`,
                        }}
                      />
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </section>

          <div className="metrics">
            <Metric
              label="Porteføljeverdi"
              value="1 389 kr"
              helper="AF Gruppen + Storebrand"
              icon={<CircleDollarSign />}
            />

            <Metric
              label="Investert"
              value="1 389 kr"
              helper="7 aksjer i 2 posisjoner"
              icon={<TrendingUp />}
            />

            <Metric
              label="Tilgjengelige kontanter"
              value="605 kr"
              helper="Tradingreserve før kurtasje"
              icon={<BriefcaseBusiness />}
            />

            <Metric
              label="Åpne posisjoner"
              value="2"
              helper="1 langsiktig · 1 trading"
              icon={<ShieldAlert />}
            />
          </div>

          <div className="grid">
            <article className="card decision">
              <div className="cardTitle">
                <div>
                  <small>ALPHAS VURDERING</small>
                  <h2>Dagens anbefaling</h2>
                </div>

                <span className="badge green">BEHOLD STB</span>
              </div>

              <p>
                Rapportmomentumet er fortsatt positivt, men vi øker ikke før
                styrken bekreftes videre.
              </p>

              <div className="scoreRow">
                <div>
                  <span>Alpha-score</span>
                  <b>82</b>
                  <i style={{ width: "82%" }} />
                </div>

                <div>
                  <span>Konfidens</span>
                  <b>82 %</b>
                  <i style={{ width: "82%" }} />
                </div>
              </div>
            </article>

            <article className="card chartCard">
              <div className="cardTitle">
                <div>
                  <small>PORTEFØLJE</small>
                  <h2>Utvikling</h2>
                </div>

                <span>6 uker</span>
              </div>

              <div className="chart">
                <svg
                  viewBox="0 0 640 210"
                  role="img"
                  aria-label="Illustrativ porteføljegraf"
                >
                  <polyline points="0,170 55,155 110,160 165,132 220,140 275,110 330,116 385,86 440,96 495,63 550,70 640,36" />
                  <line x1="0" y1="170" x2="640" y2="170" />
                </svg>
              </div>
            </article>
          </div>

          <div className="grid lower">
            <article className="card">
              <div className="cardTitle">
                <div>
                  <small>ÅPNE POSISJONER</small>
                  <h2>Portefølje</h2>
                </div>

                <span>{positions.length} posisjoner</span>
              </div>

              <div className="table">
                {positions.map((position) => (
                  <div className="row" key={position.ticker}>
                    <div className="ticker">{position.ticker}</div>

                    <div>
                      <b>{position.name}</b>
                      <span>{position.type}</span>
                    </div>

                    <div>
                      <b>{position.qty} stk</b>
                      <span>@ {position.avg.toFixed(2)}</span>
                    </div>

                    <div
                      className={
                        position.status === "Aktiv"
                          ? "status activeStatus"
                          : "status"
                      }
                    >
                      {position.status}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>

      <style>{`
        main {
          isolation: isolate;
          overflow-x: hidden;
          background: transparent;
        }

        .introScreen {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: grid;
          place-items: center;
          overflow: hidden;
          background:
            radial-gradient(circle at 50% 43%, rgba(143, 184, 168, 0.12), transparent 31%),
            #0b0e0d;
          pointer-events: none;
        }

        .introScreenReady {
          animation: introFade 4.55s cubic-bezier(0.3, 0.1, 0.2, 1) forwards;
        }

        .introScreen::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(234,239,233,.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(234,239,233,.018) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: .42;
        }

        .introMarkStage {
          position: relative;
          z-index: 1;
          display: grid;
          place-items: center;
          width: min(94vw, 130vh);
          color: var(--text);
          opacity: 0;
          transform: scale(.96);
          animation:
            introStageIn .55s cubic-bezier(.2,.75,.2,1) .05s forwards,
            introStageZoom 1.08s cubic-bezier(.56,.02,.72,.27) 3.25s forwards;
        }

        .introConstruction {
          width: 100%;
          height: auto;
          overflow: visible;
          filter: drop-shadow(0 24px 50px rgba(0,0,0,.3));
        }

        .constructionGrid {
          opacity: 0;
          animation: constructionGridIn .58s ease .1s forwards,
                     constructionGridOut .65s ease 3.02s forwards;
        }

        .constructionGridLine {
          fill: none;
          stroke: rgba(237,240,234,.085);
          stroke-width: .28;
        }

        .constructionGuide,
        .dimensionLine {
          fill: none;
          stroke-linecap: square;
          stroke-linejoin: miter;
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: constructionDraw 1.05s cubic-bezier(.55,0,.2,1) forwards;
        }

        .constructionGuide {
          stroke: rgba(237,240,234,.76);
          stroke-width: .45;
        }

        .guideOne { animation-delay: .35s; }
        .guideTwo { animation-delay: .5s; }
        .guideThree { animation-delay: .65s; }
        .guideFour { animation-delay: .8s; }
        .guideFive { animation-delay: 1s; }
        .guideSix { animation-delay: 1.18s; }

        .dimensionLine {
          stroke: rgba(194,168,120,.68);
          stroke-width: .38;
          animation-delay: 1s;
        }

        .dimensionWidth { animation-delay: 1.17s; }
        .angleOne { animation-delay: 1.33s; }
        .angleTwo { animation-delay: 1.46s; }
        .angleThree { animation-delay: 1.58s; }

        .constructionArrow {
          fill: rgba(194,168,120,.78);
        }

        .constructionLabel {
          fill: rgba(194,168,120,.88);
          font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          font-size: 4.2px;
          font-weight: 650;
          letter-spacing: .04em;
          opacity: 0;
          animation: constructionLabelIn .42s ease 1.38s forwards;
        }

        .labelWidth { animation-delay: 1.5s; }
        .labelAngleLeft { animation-delay: 1.6s; }
        .labelAngleRight { animation-delay: 1.7s; }
        .labelAngleBeam { animation-delay: 1.8s; }

        .constructionShape {
          fill: currentColor;
          opacity: 0;
          transform: translateY(3px);
          transform-origin: center;
          animation: constructionFillIn .62s cubic-bezier(.2,.75,.2,1) forwards;
        }

        .constructionLeft { animation-delay: 2s; }
        .constructionRight { animation-delay: 2.18s; }
        .constructionBeam {
          fill: var(--blue);
          animation-delay: 2.38s;
        }

        .constructionGuides,
        .constructionDimensions {
          animation: constructionDraftOut .65s ease 3.02s forwards;
        }

        .backgroundMark {
          position: fixed;
          right: -24vw;
          top: 50%;
          z-index: 0;
          width: min(112vw, 1600px);
          height: auto;
          transform: translateY(-50%) scale(.82);
          transform-origin: 68% 50%;
          color: rgba(237, 240, 234, 0.032);
          pointer-events: none;
          user-select: none;
          opacity: 0;
        }

        html.alphaIntroComplete .backgroundMark {
          animation: backgroundMarkReveal 1.45s cubic-bezier(.2,.72,.2,1) forwards;
        }

        .backgroundConstruction {
          display: block;
          width: 100%;
          height: auto;
          overflow: visible;
        }

        .backgroundConstruction .constructionGrid {
          opacity: 0;
          animation: none;
        }

        .backgroundConstruction .constructionGridLine {
          stroke: rgba(237,240,234,.12);
        }

        .backgroundConstruction .constructionGuide,
        .backgroundConstruction .dimensionLine {
          stroke-dashoffset: 1;
          animation: none;
        }

        .backgroundConstruction .constructionGuide {
          stroke: rgba(143,184,168,.28);
        }

        .backgroundConstruction .dimensionLine {
          stroke: rgba(194,168,120,.35);
        }

        .backgroundConstruction .constructionGuides,
        .backgroundConstruction .constructionDimensions {
          opacity: 1;
          animation: none;
        }

        .backgroundConstruction .constructionLabel {
          fill: rgba(194,168,120,.48);
          opacity: 0;
          animation: none;
        }

        .backgroundConstruction .constructionArrow {
          fill: rgba(194,168,120,.42);
        }

        .backgroundConstruction .constructionShape {
          opacity: 0;
          transform: none;
          animation: none;
        }

        .backgroundConstruction .constructionBeam {
          fill: rgba(194,168,120,.058);
        }

        html.alphaIntroComplete .backgroundConstruction .constructionGrid {
          animation: backgroundGridReveal 1.35s ease .12s forwards;
        }

        html.alphaIntroComplete .backgroundConstruction .constructionGuide,
        html.alphaIntroComplete .backgroundConstruction .dimensionLine {
          animation: constructionDraw 1.28s cubic-bezier(.42,0,.18,1) forwards;
        }

        html.alphaIntroComplete .backgroundConstruction .constructionLabel {
          animation: constructionLabelIn .7s ease .62s forwards;
        }

        html.alphaIntroComplete .backgroundConstruction .constructionShape {
          animation: backgroundShapeReveal 1.05s ease forwards;
        }

        html.alphaIntroComplete .backgroundConstruction .constructionLeft {
          animation-delay: .18s;
        }

        html.alphaIntroComplete .backgroundConstruction .constructionRight {
          animation-delay: .34s;
        }

        html.alphaIntroComplete .backgroundConstruction .constructionBeam {
          animation-delay: .5s;
        }

        aside {
          position: relative;
          z-index: 1;
          opacity: 0;
          transform: translateY(14px);
        }

        .content {
          position: relative;
          z-index: 1;
        }

        .workspaceHeader {
          opacity: 1;
          transform: none;
        }

        .workspaceGreeting {
          display: flex;
          align-items: baseline;
          min-height: 1.32em;
          white-space: pre;
        }

        .workspaceGreeting span {
          display: inline-block;
          opacity: 0;
          animation: typeCharacter .01s steps(1,end) forwards;
        }

        .workspaceTypingCursor {
          display: inline-block;
          width: 1px;
          height: .82em;
          margin-left: 5px;
          background: var(--blue);
          animation: typingCursor 1.9s step-end forwards;
        }

        .workspaceHeaderSecondary,
        #muligheter,
        .metrics,
        .content > .grid {
          opacity: 0;
          transform: translateY(18px);
        }

        html.workspaceReady aside {
          animation: appReveal .72s ease forwards;
        }

        html.workspaceReady .workspaceHeaderSecondary {
          animation: blockReveal .62s ease forwards;
        }

        html.workspaceReady #muligheter {
          animation: blockReveal .62s ease .08s forwards;
        }

        html.workspaceReady .metrics {
          animation: blockReveal .62s ease .16s forwards;
        }

        html.workspaceReady .content > .grid {
          animation: blockReveal .62s ease .24s forwards;
        }

        @keyframes introStageIn {
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes introStageZoom {
          0% { opacity: 1; transform: scale(1); }
          68% { opacity: 1; }
          100% { opacity: 0; transform: scale(6.5); }
        }

        @keyframes constructionGridIn {
          to { opacity: .72; }
        }

        @keyframes constructionDraw {
          to { stroke-dashoffset: 0; }
        }

        @keyframes constructionLabelIn {
          from { opacity: 0; transform: translateY(2px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes constructionFillIn {
          from { opacity: 0; transform: translateY(3px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes constructionDraftOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }

        @keyframes constructionGridOut {
          from { opacity: .72; }
          to { opacity: 0; }
        }

        @keyframes typeCharacter {
          to { opacity: 1; }
        }

        @keyframes typingCursor {
          0%, 100% { opacity: 0; }
          20%, 40%, 60%, 80% { opacity: 1; }
          30%, 50%, 70%, 90% { opacity: 0; }
        }

        @keyframes backgroundGridReveal {
          to { opacity: .2; }
        }

        @keyframes backgroundShapeReveal {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes backgroundMarkReveal {
          to { opacity: 1; transform: translateY(-50%) scale(1); }
        }

        @keyframes introFade {
          0%,
          72% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            visibility: hidden;
          }
        }

        @keyframes appReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blockReveal {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 620px) {
          .introMarkStage {
            width: 155vw;
          }

          .constructionLabel {
            font-size: 4.8px;
          }

          .backgroundMark {
            right: -48vw;
            width: 175vw;
            height: auto;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .introScreen {
            display: none;
          }

          .backgroundMark {
            opacity: 1;
            transform: translateY(-50%) scale(1);
            animation: none;
          }

          .workspaceGreeting span {
            opacity: 1;
            animation: none;
          }

          .workspaceTypingCursor {
            display: none;
          }

          aside,
          .content,
          .workspaceHeaderSecondary,
          #muligheter,
          .metrics,
          .content > .grid {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }
      `}</style>
    </>
  );
}

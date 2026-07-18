import type { ReactNode } from "react";
import AppSidebar from "../../components/AppSidebar";
import AlphaIntro from "../../components/AlphaIntro";
import AlphaConstruction from "../../components/AlphaConstruction";
import AppAtmosphere from "../../components/AppAtmosphere";

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

export default function Home() {
  return (
    <>
      <main>
        <AppAtmosphere />

        <AlphaIntro userName="Kenneth" />

        <div className="backgroundMark" data-alpha-background aria-hidden="true">
          <AlphaConstruction className="backgroundConstruction" />
        </div>

        <AppSidebar active="workspace" />

        <section className="content">
          <header>
            <div>
              <p>Torsdag 16. juli 2026</p>

              <h1>God morgen, Kenneth.</h1>

              <span>
                Siden sist har Alpha funnet <b>3 nye muligheter</b> og analysert{" "}
                <b>17 relevante nyheter</b>. Seks gjelder porteføljen din, og
                elleve er knyttet til mulighetene nedenfor.
              </span>
            </div>
          </header>

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
          animation: introFade 6.65s cubic-bezier(0.3, 0.1, 0.2, 1) forwards;
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
            introStageZoom 1.08s cubic-bezier(.56,.02,.72,.27) 5.24s forwards;
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
          stroke-width: .45;
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
          stroke-width: .8;
        }

        .guideOne { animation-delay: .35s; }
        .guideTwo { animation-delay: .5s; }
        .guideThree { animation-delay: .65s; }
        .guideFour { animation-delay: .8s; }
        .guideFive { animation-delay: 1s; }
        .guideSix { animation-delay: 1.18s; }

        .dimensionLine {
          stroke: rgba(194,168,120,.68);
          stroke-width: .55;
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

        .introGreeting {
          position: absolute;
          left: 50%;
          bottom: 3.5%;
          display: grid;
          justify-items: center;
          gap: 7px;
          width: max-content;
          max-width: 90vw;
          transform: translateX(-50%);
          animation: greetingContainerOut .3s ease 5.08s forwards;
        }

        .introGreetingText {
          display: flex;
          align-items: baseline;
          min-height: 1.4em;
          color: var(--text);
          font-size: clamp(18px, 1.75vw, 26px);
          font-weight: 800;
          letter-spacing: .025em;
          white-space: pre;
        }

        .introGreetingText span {
          display: inline-block;
          opacity: 0;
          animation: typeCharacter .01s steps(1,end) forwards;
        }

        .introTypingCursor {
          display: inline-block;
          width: 1px;
          height: .9em;
          margin-left: 4px;
          background: var(--blue);
          opacity: 0;
          animation: typingCursor 1.65s step-end 3.28s;
        }

        .introGreeting small {
          color: var(--muted);
          font-size: clamp(10px, .92vw, 13px);
          font-weight: 400;
          letter-spacing: .06em;
          opacity: 0;
          animation: greetingSubline .38s ease 4.72s forwards;
        }

        .backgroundMark {
          position: fixed;
          right: -11vw;
          top: 50%;
          z-index: 0;
          width: min(78vw, 1120px);
          height: auto;
          transform: translateY(-50%);
          color: rgba(237, 240, 234, 0.045);
          pointer-events: none;
          user-select: none;
          opacity: 0;
          animation: backgroundMarkReveal .85s ease 5.72s forwards;
        }

        .backgroundConstruction {
          display: block;
          width: 100%;
          height: auto;
          overflow: visible;
        }

        .backgroundConstruction .constructionGrid {
          opacity: .18;
          animation: none;
        }

        .backgroundConstruction .constructionGridLine {
          stroke: rgba(237,240,234,.12);
        }

        .backgroundConstruction .constructionGuide,
        .backgroundConstruction .dimensionLine {
          stroke-dashoffset: 0;
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
          opacity: 1;
          animation: none;
        }

        .backgroundConstruction .constructionArrow {
          fill: rgba(194,168,120,.42);
        }

        .backgroundConstruction .constructionShape {
          opacity: 1;
          transform: none;
          animation: none;
        }

        .backgroundConstruction .constructionBeam {
          fill: rgba(194,168,120,.075);
        }

        aside,
        .content {
          position: relative;
          z-index: 1;
          opacity: 0;
          transform: translateY(14px);
          animation: appReveal 0.76s ease 5.92s forwards;
        }

        .content > header {
          animation: blockReveal 0.62s ease 5.98s both;
        }

        #muligheter {
          animation: blockReveal 0.62s ease 6.06s both;
        }

        .metrics {
          animation: blockReveal 0.62s ease 6.14s both;
        }

        .content > .grid {
          animation: blockReveal 0.62s ease 6.22s both;
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

        @keyframes greetingSubline {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes greetingOut {
          to { opacity: 0; transform: translateY(-4px); }
        }

        @keyframes greetingContainerOut {
          to { opacity: 0; transform: translate(-50%, -4px); }
        }

        @keyframes backgroundMarkReveal {
          to { opacity: 1; }
        }

        @keyframes introFade {
          0%,
          91% {
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
            right: -24vw;
            width: 115vw;
            height: auto;
          }

          .introGreeting {
            bottom: 1.5%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .introScreen {
            display: none;
          }

          .backgroundMark {
            opacity: 1;
            animation: none;
          }

          aside,
          .content,
          .content > header,
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

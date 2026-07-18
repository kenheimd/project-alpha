import type { ReactNode } from "react";
import AppSidebar from "../../components/AppSidebar";
import AlphaMark from "../../components/AlphaMark";
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

        <div className="introScreen" aria-hidden="true">
          <div className="introMarkStage">
            <AlphaConstruction className="introConstruction" />
            <div className="introWordmark"><span>PROJECT</span><strong>ALPHA</strong></div>
          </div>
        </div>

        <div className="backgroundMark" aria-hidden="true">
          <AlphaMark />
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
          animation: introFade 4.2s cubic-bezier(0.3, 0.1, 0.2, 1) forwards;
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
          width: min(62vw, 620px);
          color: var(--text);
          animation: introMarkTransfer 3.85s cubic-bezier(0.2, 0.72, 0.18, 1) forwards;
        }

        .introConstruction {
          width: 100%;
          height: auto;
          overflow: visible;
          filter: drop-shadow(0 24px 50px rgba(0,0,0,.3));
        }

        .constructionGrid {
          opacity: 0;
          animation: constructionGridIn .45s ease .08s forwards,
                     constructionGridOut .55s ease 2.42s forwards;
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
          animation: constructionDraw .85s cubic-bezier(.55,0,.2,1) forwards;
        }

        .constructionGuide {
          stroke: rgba(237,240,234,.76);
          stroke-width: .8;
        }

        .guideOne { animation-delay: .28s; }
        .guideTwo { animation-delay: .4s; }
        .guideThree { animation-delay: .52s; }
        .guideFour { animation-delay: .64s; }
        .guideFive { animation-delay: .82s; }
        .guideSix { animation-delay: .94s; }

        .dimensionLine {
          stroke: rgba(194,168,120,.68);
          stroke-width: .55;
          animation-delay: .78s;
        }

        .dimensionWidth { animation-delay: .92s; }
        .angleOne { animation-delay: 1.03s; }
        .angleTwo { animation-delay: 1.12s; }
        .angleThree { animation-delay: 1.21s; }

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
          animation: constructionLabelIn .35s ease 1.08s forwards;
        }

        .labelWidth { animation-delay: 1.16s; }
        .labelAngleLeft { animation-delay: 1.22s; }
        .labelAngleRight { animation-delay: 1.29s; }
        .labelAngleBeam { animation-delay: 1.36s; }

        .constructionShape {
          fill: currentColor;
          opacity: 0;
          transform: translateY(3px);
          transform-origin: center;
          animation: constructionFillIn .52s cubic-bezier(.2,.75,.2,1) forwards;
        }

        .constructionLeft { animation-delay: 1.48s; }
        .constructionRight { animation-delay: 1.63s; }
        .constructionBeam {
          fill: var(--blue);
          animation-delay: 1.8s;
        }

        .constructionGuides,
        .constructionDimensions {
          animation: constructionDraftOut .55s ease 2.42s forwards;
        }

        .introWordmark {
          display: flex;
          align-items: baseline;
          gap: 10px;
          margin-top: -4px;
          letter-spacing: .2em;
          opacity: 0;
          animation: wordmarkReveal .58s ease 2.18s forwards,
                     wordmarkOut .42s ease 3.12s forwards;
        }

        .introWordmark span {
          color: var(--muted);
          font-size: 11px;
          font-weight: 700;
        }

        .introWordmark strong {
          color: var(--text);
          font-size: 19px;
        }

        .backgroundMark {
          position: fixed;
          right: -7vw;
          top: 50%;
          z-index: 0;
          width: min(68vw, 920px);
          height: min(68vw, 920px);
          transform: translateY(-48%);
          color: rgba(237, 240, 234, 0.014);
          --alpha-accent:rgba(194,168,120,.032);
          pointer-events: none;
          user-select: none;
          opacity: 0;
          animation: backgroundMarkReveal 1.25s ease 3.02s forwards;
        }

        aside,
        .content {
          position: relative;
          z-index: 1;
          opacity: 0;
          transform: translateY(14px);
          animation: appReveal 0.82s ease 3.55s forwards;
        }

        .content > header {
          animation: blockReveal 0.65s ease 3.62s both;
        }

        #muligheter {
          animation: blockReveal 0.65s ease 3.72s both;
        }

        .metrics {
          animation: blockReveal 0.65s ease 3.82s both;
        }

        .content > .grid {
          animation: blockReveal 0.65s ease 3.92s both;
        }

        @keyframes introMarkTransfer {
          0% {
            opacity: 0;
            transform: scale(.92);
          }

          8%,
          72% {
            opacity: 1;
            transform: scale(1);
          }

          100% {
            opacity: .04;
            transform: translate3d(19vw, 1vh, 0) scale(1.48);
          }
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

        @keyframes wordmarkReveal {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes wordmarkOut {
          to { opacity: 0; transform: translateY(-5px); }
        }

        @keyframes backgroundMarkReveal {
          to { opacity: 1; }
        }

        @keyframes introFade {
          0%,
          75% {
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
            width: min(92vw, 500px);
          }

          .constructionLabel {
            font-size: 4.8px;
          }

          .backgroundMark {
            right: -18vw;
            width: 92vw;
            height: 92vw;
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

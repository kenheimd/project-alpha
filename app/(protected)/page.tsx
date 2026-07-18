import type { ReactNode } from "react";
import AppSidebar from "../../components/AppSidebar";
import AlphaMark from "../../components/AlphaMark";
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
            <AlphaMark className="introMark" />
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
            radial-gradient(circle at 50% 43%, rgba(143, 184, 168, 0.1), transparent 28%),
            #0b0e0d;
          perspective: 1800px;
          pointer-events: none;
          animation: introFade 3.15s cubic-bezier(0.3, 0.1, 0.2, 1) forwards;
        }

        .introScreen::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(234,239,233,.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(234,239,233,.025) 1px, transparent 1px);
          background-size: 72px 72px;
          opacity: .45;
        }

        .introMarkStage {
          position: relative;
          z-index: 1;
          display: grid;
          place-items: center;
          color: var(--green);
          transform-style: preserve-3d;
          animation: introMarkSettle 2.65s cubic-bezier(0.2, 0.72, 0.18, 1) forwards;
        }

        .introMark {
          width: min(26vw, 260px);
          height: min(26vw, 260px);
          filter: drop-shadow(0 22px 38px rgba(0,0,0,.32));
        }

        .introMark .alphaOutline,
        .introMark .alphaSignal {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: alphaDraw 1.45s cubic-bezier(.65,0,.2,1) .25s forwards;
        }

        .introMark .alphaSignal {
          animation-delay: .75s;
        }

        .introWordmark {
          display: flex;
          align-items: baseline;
          gap: 10px;
          margin-top: 24px;
          letter-spacing: .2em;
          opacity: 0;
          animation: wordmarkReveal .7s ease 1.15s forwards;
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
          right: -8vw;
          top: 50%;
          z-index: 0;
          width: min(68vw, 920px);
          height: min(68vw, 920px);
          transform: translateY(-48%);
          color: rgba(237, 240, 234, 0.018);
          pointer-events: none;
          user-select: none;
          opacity: 0;
          animation: backgroundMarkReveal 1.6s ease 1.8s forwards;
        }

        .backgroundMark .alphaSignal {
          stroke: rgba(194,168,120,.55);
        }

        aside,
        .content {
          position: relative;
          z-index: 1;
          opacity: 0;
          transform: translateY(14px);
          animation: appReveal 0.85s ease 2.45s forwards;
        }

        .content > header {
          animation: blockReveal 0.7s ease 2.55s both;
        }

        #muligheter {
          animation: blockReveal 0.7s ease 2.68s both;
        }

        .metrics {
          animation: blockReveal 0.7s ease 2.8s both;
        }

        .content > .grid {
          animation: blockReveal 0.7s ease 2.92s both;
        }

        @keyframes introMarkSettle {
          0% {
            opacity: 0;
            transform: rotateY(-105deg) rotateX(8deg) scale(.68);
          }

          20% {
            opacity: 1;
          }

          66% {
            opacity: 1;
            transform: rotateY(6deg) rotateX(0) scale(1);
          }

          100% {
            opacity: 0;
            transform: translate3d(29vw, 1vh, 0) rotateY(0) scale(4.3);
          }
        }

        @keyframes alphaDraw { to { stroke-dashoffset: 0; } }

        @keyframes wordmarkReveal {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes backgroundMarkReveal {
          to { opacity: 1; }
        }

        @keyframes introFade {
          0%,
          68% {
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

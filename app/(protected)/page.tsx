import type { ReactNode } from "react";
import AppSidebar from "../../components/AppSidebar";

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
        <div className="introScreen" aria-hidden="true">
          <div className="introA">A</div>
        </div>

        <div className="backgroundA" aria-hidden="true">
          A
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
        }

        .introScreen {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: grid;
          place-items: center;
          overflow: hidden;
          background: #08111f;
          perspective: 1600px;
          pointer-events: none;
          animation: introFade 3.4s ease forwards;
        }

        .introA {
          font-size: min(78vw, 900px);
          font-weight: 900;
          line-height: 0.8;
          color: rgba(255, 255, 255, 0.1);
          transform-style: preserve-3d;
          animation: introSpin 2.55s cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
        }

        .backgroundA {
          position: fixed;
          right: -5vw;
          top: 50%;
          z-index: 0;
          transform: translateY(-50%);
          font-size: min(72vw, 940px);
          font-weight: 900;
          line-height: 0.75;
          color: rgba(255, 255, 255, 0.022);
          pointer-events: none;
          user-select: none;
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

        @keyframes introSpin {
          0% {
            opacity: 0;
            transform: rotateY(-125deg) scale(0.7);
          }

          18% {
            opacity: 1;
          }

          72% {
            opacity: 0.55;
            transform: rotateY(20deg) scale(1);
          }

          100% {
            opacity: 0.14;
            transform: rotateY(0deg) scale(1.08);
          }
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

        @media (prefers-reduced-motion: reduce) {
          .introScreen {
            display: none;
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

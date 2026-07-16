import {
  Activity, ArrowUpRight, BarChart3, BrainCircuit, BriefcaseBusiness,
  CircleDollarSign, Clock3, ShieldAlert, TrendingUp
} from "lucide-react";

const positions = [
  { ticker: "AFG", name: "AF Gruppen", type: "Langsiktig", qty: 5, avg: 198.80, status: "Hold" },
  { ticker: "STB", name: "Storebrand", type: "Trading", qty: 2, avg: 197.50, status: "Aktiv" }
];

const candidates = [
  {
    ticker: "STB",
    score: 82,
    confidence: 82,
    label: "Rapportmomentum",
    intro: "Sterk rapport og positiv markedsreaksjon. Posisjonen følges for videre styrke.",
    news: "Resultatet var bedre enn forventet, men mye av oppgangen kan allerede være tatt ut.",
    action: "Behold – ikke øk ennå"
  },
  {
    ticker: "AKRBP",
    score: 68,
    confidence: 64,
    label: "Avvent bekreftelse",
    intro: "Mulig positivt oppsett dersom kurs og volum bekrefter videre styrke.",
    news: "Agentene følger oljepris, selskapsmeldinger og endringer i analytikerestimatene.",
    action: "Overvåk"
  },
  {
    ticker: "NEL",
    score: 61,
    confidence: 55,
    label: "Spekulativ",
    intro: "Høy risiko, men potensielt interessant ved ny katalysator og tydelig momentum.",
    news: "Ingen bekreftet kjøpskatalysator er identifisert ennå.",
    action: "Ingen handel"
  }
];

function Metric({ label, value, helper, icon }: { label: string; value: string; helper: string; icon: React.ReactNode }) {
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
    <main>
      <aside>
        <div className="brand">
          <div className="mark">A</div>
          <div><b>PROJECT</b><strong>ALPHA</strong></div>
        </div>
        <nav>
          <a className="active"><BarChart3 size={18}/> Workspace</a>
          <a><BriefcaseBusiness size={18}/> Portfolio</a>
          <a><TrendingUp size={18}/> Opportunities</a>
          <a><BrainCircuit size={18}/> Agents</a>
          <a><Activity size={18}/> Knowledge</a>
          <a><Clock3 size={18}/> Settings</a>
        </nav>
        <div className="systemStatus">
          <span className="pulse"/>
          System online
          <small>v0.1 prototype</small>
        </div>
      </aside>

      <section className="content">
        <header>
          <div>
            <p>Thursday · 16 July 2026</p>
        
            <h1>Good morning, Kenneth.</h1>
        
            <span>
              Siden sist er det flere elementer som trenger din oppmerksomhet, du har
              <b> 3 nye muligheter </b> and
              <b> 17 nyheter </b> som du bør lese. Av disse er 6 av de tilknyttet porteføljen din og 11 koblet til dine muligheter!
            </span>             
          <button>
            Open Morning Brief
            <ArrowUpRight size={17} />
          </button>
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
    Agentene har sammenstilt nyheter, kursutvikling, momentum og mulige
    katalysatorer. Klikk på en mulighet for å se bakgrunnen.
  </p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "16px"
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
            gap: "16px"
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
            <small>VIKTIG NYHET / SIGNAL</small>
            <p>{candidate.news}</p>
          </div>

          <div style={{ marginTop: "16px" }}>
            <small>FORELØPIG HANDLING</small>
            <strong style={{ display: "block", marginTop: "5px" }}>
              {candidate.action}
            </strong>
          </div>

          <div className="miniBar" style={{ marginTop: "18px" }}>
            <i style={{ width: `${candidate.confidence}%` }} />
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
              <div><small>AI DECISION ENGINE</small><h2>Dagens beslutning</h2></div>
              <span className="badge green">HOLD STB</span>
            </div>
            <p>Rapportmomentumet er fortsatt positivt, men vi øker ikke før styrken bekreftes videre.</p>
            <div className="scoreRow">
              <div><span>AI-score</span><b>82</b><i style={{width:"82%"}}/></div>
              <div><span>Konfidens</span><b>82%</b><i style={{width:"82%"}}/></div>
            </div>
          </article>

          <article className="card chartCard">
            <div className="cardTitle"><div><small>PORTEFØLJE</small><h2>Utvikling</h2></div><span>6 uker</span></div>
            <div className="chart">
              <svg viewBox="0 0 640 210" role="img" aria-label="Illustrativ porteføljegraf">
                <polyline points="0,170 55,155 110,160 165,132 220,140 275,110 330,116 385,86 440,96 495,63 550,70 640,36"/>
                <line x1="0" y1="170" x2="640" y2="170"/>
              </svg>
            </div>
          </article>
        </div>

        <div className="grid lower">
          <article className="card">
            <div className="cardTitle"><div><small>ÅPNE POSISJONER</small><h2>Portefølje</h2></div><span>2 posisjoner</span></div>
            <div className="table">
              {positions.map(p => (
                <div className="row" key={p.ticker}>
                  <div className="ticker">{p.ticker}</div>
                  <div><b>{p.name}</b><span>{p.type}</span></div>
                  <div><b>{p.qty} stk</b><span>@ {p.avg.toFixed(2)}</span></div>
                  <div className={p.status === "Aktiv" ? "status activeStatus" : "status"}>{p.status}</div>
                </div>
              ))}
            </div>
          </article>

          <article className="card">
            <div className="cardTitle"><div><small>WATCHLIST</small><h2>Dagens kandidater</h2></div><span>3 vurdert</span></div>
            <div className="table">
              {candidates.map((c, i) => (
                <div className="row candidate" key={c.ticker}>
                  <div className="rank">{i+1}</div>
                  <div><b>{c.ticker}</b><span>{c.label}</span></div>
                  <div><b>{c.score}/100</b><span>AI-score</span></div>
                  <div className="miniBar"><i style={{width:`${c.confidence}%`}}/></div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

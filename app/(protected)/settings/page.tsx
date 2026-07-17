"use client";

import Link from "next/link";
import { SignOutButton, UserButton, useUser } from "@clerk/nextjs";
import {
  Bell,
  Bot,
  Check,
  ChevronRight,
  CircleHelp,
  CreditCard,
  FileCheck2,
  Languages,
  LayoutDashboard,
  LogOut,
  MonitorCog,
  Palette,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { useEffect, useState } from "react";
import AppSidebar from "../../../components/AppSidebar";

type Section =
  | "account"
  | "agents"
  | "notifications"
  | "appearance"
  | "homepage"
  | "subscription"
  | "help"
  | "legal";

const sections = [
  { id: "account", label: "Konto og sikkerhet", icon: UserRound },
  { id: "agents", label: "AI-agenter", icon: Bot },
  { id: "notifications", label: "Varsler", icon: Bell },
  { id: "appearance", label: "Språk og utseende", icon: Palette },
  { id: "homepage", label: "Startside", icon: LayoutDashboard },
  { id: "subscription", label: "Abonnement", icon: CreditCard },
  { id: "help", label: "Hjelp og veiledning", icon: CircleHelp },
  { id: "legal", label: "Juridisk", icon: FileCheck2 },
] as const;

const agentOptions = [
  { id: "analyst", name: "Alpha Analyst", description: "Selskaper, rapporter og fundamentale signaler", enabled: true },
  { id: "market", name: "Alpha Market", description: "Kurs, volum, momentum og markedsregime", enabled: true },
  { id: "risk", name: "Alpha Risk", description: "Eksponering, stop-nivåer og risikobudsjett", enabled: true },
  { id: "news", name: "Alpha News", description: "Nyheter, børsmeldinger og katalysatorer", enabled: true },
  { id: "journal", name: "Alpha Journal", description: "Handelslogg, evaluering og læringspunkter", enabled: true },
  { id: "quant", name: "Alpha Quant", description: "Backtesting og statistiske mønstre", enabled: false, soon: true },
];

function Toggle({ initial = true, label }: { initial?: boolean; label: string }) {
  const [enabled, setEnabled] = useState(initial);
  return (
    <button
      type="button"
      className={`settingsToggle ${enabled ? "isOn" : ""}`}
      onClick={() => setEnabled(!enabled)}
      role="switch"
      aria-checked={enabled}
      aria-label={label}
    >
      <span />
    </button>
  );
}

function SettingRow({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="settingRow">
      <div>
        <strong>{title}</strong>
        <span>{description}</span>
      </div>
      {children}
    </div>
  );
}

export default function SettingsPage() {
  const { user, isLoaded } = useUser();
  const [active, setActive] = useState<Section>("account");
  const [theme, setTheme] = useState<"dark" | "light" | "system">("dark");
  const [agents, setAgents] = useState<Record<string, boolean>>(
    Object.fromEntries(agentOptions.map((agent) => [agent.id, agent.enabled])),
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const displayName = user?.fullName || user?.firstName || "Project Alpha-bruker";
  const email = user?.primaryEmailAddress?.emailAddress || "Laster brukerdata …";

  return (
    <main className="settingsShell">
      <div className="backgroundA" aria-hidden="true">A</div>
      <AppSidebar active="settings" />

      <section className="content settingsContent">
        <header className="settingsHeader">
          <div>
            <p>DIN PROJECT ALPHA-PROFIL</p>
            <h1>Innstillinger</h1>
            <span>Tilpass kontoen, agentene og hvordan Alpha arbeider for deg.</span>
          </div>
          <div className="profilePill">
            <UserButton />
            <div>
              <strong>{isLoaded ? displayName : "Laster …"}</strong>
              <span>{email}</span>
            </div>
          </div>
        </header>

        <div className="settingsLayout">
          <nav className="settingsNav" aria-label="Innstillingsmeny">
            <div className="settingsNavLabel">PERSONLIG</div>
            {sections.slice(0, 6).map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={active === item.id ? "active" : ""}
                  onClick={() => setActive(item.id)}
                >
                  <Icon size={17} />
                  <span>{item.label}</span>
                  <ChevronRight size={15} />
                </button>
              );
            })}

            <div className="settingsNavLabel supportLabel">STØTTE OG VILKÅR</div>
            {sections.slice(6).map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={active === item.id ? "active" : ""}
                  onClick={() => setActive(item.id)}
                >
                  <Icon size={17} />
                  <span>{item.label}</span>
                  <ChevronRight size={15} />
                </button>
              );
            })}

            <SignOutButton redirectUrl="/sign-in">
              <button type="button" className="logoutButton">
                <LogOut size={17} /> Logg ut
              </button>
            </SignOutButton>
          </nav>

          <div className="settingsPanel">
            {active === "account" && (
              <>
                <div className="sectionIntro">
                  <small>KONTO</small>
                  <h2>Konto og sikkerhet</h2>
                  <p>Identitet og innlogging håndteres sikkert av Clerk. Project Alpha lagrer ikke passordet ditt.</p>
                </div>

                <div className="profileCard">
                  <UserButton />
                  <div>
                    <strong>{displayName}</strong>
                    <span>{email}</span>
                    <small>Privat beta-bruker</small>
                  </div>
                  <Link className="primaryAction" href="/user-profile">
                    Administrer konto <ChevronRight size={16} />
                  </Link>
                </div>

                <div className="settingsGroup">
                  <SettingRow title="Passord og innloggingsmetoder" description="Endre passord, legg til innlogging eller aktiver tofaktor.">
                    <Link className="textAction" href="/user-profile">Åpne sikkerhet</Link>
                  </SettingRow>
                  <SettingRow title="Aktive økter" description="Se og avslutt innlogginger på andre enheter.">
                    <Link className="textAction" href="/user-profile">Administrer</Link>
                  </SettingRow>
                  <SettingRow title="Personalisering av AI" description="Tillat at Alpha bruker portefølje og beslutningshistorikk i svarene.">
                    <Toggle label="Personalisering av AI" />
                  </SettingRow>
                </div>
              </>
            )}

            {active === "agents" && (
              <>
                <div className="sectionIntro">
                  <small>ALPHA INTELLIGENCE</small>
                  <h2>Velg AI-agentene dine</h2>
                  <p>Du møter én Project Alpha-assistent. Disse spesialistene bestemmer hvilke analyser som kjøres under panseret.</p>
                </div>
                <div className="agentGrid">
                  {agentOptions.map((agent) => (
                    <button
                      key={agent.id}
                      type="button"
                      disabled={agent.soon}
                      className={`agentChoice ${agents[agent.id] ? "selected" : ""}`}
                      onClick={() => setAgents({ ...agents, [agent.id]: !agents[agent.id] })}
                    >
                      <div className="agentChoiceTop">
                        <Bot size={19} />
                        {agent.soon ? <span className="soonBadge">Kommer</span> : <span className="agentCheck"><Check size={13} /></span>}
                      </div>
                      <strong>{agent.name}</strong>
                      <span>{agent.description}</span>
                    </button>
                  ))}
                </div>
                <div className="infoStrip"><ShieldCheck size={18} /> Alpha Risk kan ikke deaktiveres når du har åpne tradingposisjoner.</div>
              </>
            )}

            {active === "notifications" && (
              <>
                <div className="sectionIntro">
                  <small>VARSLER</small>
                  <h2>Bare det som krever oppmerksomhet</h2>
                  <p>Varsler grupperes etter alvorlighetsgrad og kanal, slik at kritiske salgssignaler ikke drukner i markedsstøy.</p>
                </div>
                <div className="settingsGroup">
                  <SettingRow title="Kritiske salgs- og risikovarsler" description="Sendes umiddelbart i app og på e-post."><Toggle label="Kritiske varsler" /></SettingRow>
                  <SettingRow title="Nye kjøpsmuligheter" description="Varsle når en kandidat passerer Alpha-grensen."><Toggle label="Kjøpsmuligheter" /></SettingRow>
                  <SettingRow title="Morgenrapport" description="Daglig oppsummering kl. 07.00 norsk tid."><Toggle label="Morgenrapport" /></SettingRow>
                  <SettingRow title="Ukesrapport" description="Resultater, benchmark og læringspunkter hver søndag."><Toggle label="Ukesrapport" /></SettingRow>
                  <SettingRow title="Markedsoppdateringer uten handling" description="Lavere prioritet og samles i varslingssenteret."><Toggle initial={false} label="Markedsoppdateringer" /></SettingRow>
                </div>
              </>
            )}

            {active === "appearance" && (
              <>
                <div className="sectionIntro">
                  <small>PREFERANSER</small>
                  <h2>Språk og utseende</h2>
                  <p>Innstillingene skal følge brukeren på tvers av mobil og nettleser.</p>
                </div>
                <div className="settingsGroup">
                  <SettingRow title="Tema" description="Velg Project Alpha dark, light eller følg enheten.">
                    <div className="segmented">
                      {(["dark", "light", "system"] as const).map((option) => (
                        <button key={option} type="button" className={theme === option ? "active" : ""} onClick={() => setTheme(option)}>
                          {option === "dark" ? "Mørk" : option === "light" ? "Lys" : "System"}
                        </button>
                      ))}
                    </div>
                  </SettingRow>
                  <SettingRow title="Språk" description="Språk i grensesnitt og rapporter.">
                    <select defaultValue="nb"><option value="nb">Norsk bokmål</option><option value="en">English</option></select>
                  </SettingRow>
                  <SettingRow title="Tidssone" description="Brukes for rapporter, markedsåpning og varsler.">
                    <select defaultValue="oslo"><option value="oslo">Europe/Oslo</option><option value="auto">Automatisk</option></select>
                  </SettingRow>
                  <SettingRow title="Redusert bevegelse" description="Begrens intro- og grensesnittanimasjoner."><Toggle initial={false} label="Redusert bevegelse" /></SettingRow>
                </div>
              </>
            )}

            {active === "homepage" && (
              <>
                <div className="sectionIntro">
                  <small>ARBEIDSFLATE</small>
                  <h2>Tilpass startsiden</h2>
                  <p>Velg hvilken informasjon som skal møte deg først. Kritiske varsler vises alltid.</p>
                </div>
                <div className="settingsGroup">
                  <SettingRow title="Muligheter øverst" description="Vis nye kandidater før porteføljeoversikten."><Toggle label="Muligheter øverst" /></SettingRow>
                  <SettingRow title="Porteføljegraf" description="Vis samlet utvikling og benchmark."><Toggle label="Porteføljegraf" /></SettingRow>
                  <SettingRow title="Åpne posisjoner" description="Vis aktive trading- og langsiktige posisjoner."><Toggle label="Åpne posisjoner" /></SettingRow>
                  <SettingRow title="Agentaktivitet" description="Vis hvilke analyser Alpha arbeider med akkurat nå."><Toggle initial={false} label="Agentaktivitet" /></SettingRow>
                  <SettingRow title="Standard startvisning" description="Siden som åpnes etter innlogging.">
                    <select defaultValue="workspace"><option value="workspace">Arbeidsflate</option><option value="portfolio">Portefølje</option><option value="opportunities">Muligheter</option></select>
                  </SettingRow>
                </div>
              </>
            )}

            {active === "subscription" && (
              <>
                <div className="sectionIntro">
                  <small>PLAN OG BRUK</small>
                  <h2>Abonnement</h2>
                  <p>Planen avgjør datakilder, antall overvåkede posisjoner, rapporter og AI-kapasitet.</p>
                </div>
                <div className="planCard">
                  <div><span>DIN PLAN</span><h3>Private Beta</h3><p>Full tilgang mens Project Alpha utvikles.</p></div>
                  <span className="planBadge">Aktiv</span>
                </div>
                <div className="usageGrid">
                  <div><span>AI-analyser denne måneden</span><strong>—</strong><small>Måling kommer med backend</small></div>
                  <div><span>Overvåkede posisjoner</span><strong>2</strong><small>Ingen grense i beta</small></div>
                  <div><span>Neste fakturering</span><strong>Ingen</strong><small>Beta er kostnadsfri</small></div>
                </div>
                <button type="button" className="secondaryAction" disabled>Administrer abonnement – kommer senere</button>
              </>
            )}

            {active === "help" && (
              <>
                <div className="sectionIntro">
                  <small>HJELPESENTER</small>
                  <h2>Hjelp og veiledning</h2>
                  <p>Korte guider som forklarer både plattformen og beslutningssystemet bak anbefalingene.</p>
                </div>
                <div className="linkCards">
                  {[
                    ["Kom i gang", "Portefølje, kandidater og første handel"],
                    ["Slik leser du Alpha-score", "Forskjellen på score, konfidens og risiko"],
                    ["Varsler og rapporter", "Hva sendes når – og hvorfor"],
                    ["Kontakt og tilbakemelding", "Rapporter feil eller foreslå forbedringer"],
                  ].map(([title, description]) => (
                    <button type="button" key={title}><div><strong>{title}</strong><span>{description}</span></div><ChevronRight size={18} /></button>
                  ))}
                </div>
              </>
            )}

            {active === "legal" && (
              <>
                <div className="sectionIntro">
                  <small>JURIDISK OG PERSONVERN</small>
                  <h2>Åpenhet før handling</h2>
                  <p>Disse dokumentene må ferdigstilles juridisk før Project Alpha tilbys kommersielt.</p>
                </div>
                <div className="legalNotice"><FileCheck2 size={20} /><div><strong>Dokumentene er foreløpige utkast</strong><span>De er strukturert nå, men skal gjennomgås av juridisk fagperson før lansering.</span></div></div>
                <div className="linkCards">
                  {[
                    ["Brukervilkår", "Rettigheter, ansvar og bruk av tjenesten"],
                    ["Personvernerklæring", "Hvilke data som lagres og hvorfor"],
                    ["Risiko og investeringsansvar", "AI-analyse er beslutningsstøtte, ikke garanti"],
                    ["Informasjonskapsler og datakilder", "Teknisk lagring, markedskilder og lisenser"],
                    ["Eksporter eller slett data", "Innsyn, dataportabilitet og sletting"],
                  ].map(([title, description]) => (
                    <button type="button" key={title}><div><strong>{title}</strong><span>{description}</span></div><span className="draftBadge">Utkast</span><ChevronRight size={18} /></button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <style jsx global>{`
        .settingsShell { isolation: isolate; width: 100%; height: 100vh; min-height: 0; overflow: hidden; grid-template-columns: 240px minmax(0,1fr); }
        .settingsShell > aside { grid-column: 1; }
        .settingsContent { grid-column: 2; min-width: 0; max-width: 1460px; height: 100vh; overflow: hidden; display: flex; flex-direction: column; }
        .settingsHeader { align-items: center; }
        .settingsHeader p { color: var(--blue); letter-spacing: .14em; font-weight: 800; }
        .profilePill { display: flex; align-items: center; gap: 12px; min-width: 250px; padding: 10px 14px; border: 1px solid var(--border); border-radius: 14px; background: rgba(13,26,44,.78); }
        .profilePill strong, .profilePill span { display: block; }
        .profilePill span { color: var(--muted); font-size: 12px; margin-top: 3px; }
        .settingsLayout { flex: 1; display: grid; grid-template-columns: 230px minmax(520px,1fr); gap: 20px; align-items: stretch; width: 100%; min-width: 0; min-height: 0; overflow: hidden; }
        .settingsNav { min-height: 0; height: 100%; overflow-y: auto; overscroll-behavior: contain; display: flex; flex-direction: column; gap: 5px; border: 1px solid var(--border); background: rgba(9,22,38,.84); border-radius: 18px; padding: 12px; }
        .settingsNavLabel { color: var(--muted); font-size: 10px; font-weight: 900; letter-spacing: .15em; padding: 10px 11px 6px; }
        .supportLabel { margin-top: 9px; border-top: 1px solid var(--border); padding-top: 18px; }
        .settingsNav button { width: 100%; border: 0; background: transparent; color: var(--muted); padding: 11px; border-radius: 10px; display: grid; grid-template-columns: 20px 1fr 16px; align-items: center; text-align: left; font-weight: 650; }
        .settingsNav button:hover, .settingsNav button.active { color: var(--text); background: rgba(75,163,255,.1); }
        .settingsNav button.active { box-shadow: inset 3px 0 0 var(--blue); }
        .settingsNav .logoutButton { display: flex; justify-content: center; gap: 9px; margin-top: 14px; border-top: 1px solid var(--border); border-radius: 0 0 10px 10px; padding-top: 17px; color: #ff9b7c; }
        .settingsPanel { min-width: 520px; min-height: 0; height: 100%; border: 1px solid var(--border); background: linear-gradient(145deg,var(--panel),rgba(12,29,48,.9)); border-radius: 20px; padding: 28px; overflow-x: hidden; overflow-y: auto; overscroll-behavior: contain; scrollbar-gutter: stable; }
        .settingsNav, .settingsPanel { scrollbar-width: thin; scrollbar-color: rgba(75,163,255,.4) transparent; }
        .settingsNav::-webkit-scrollbar, .settingsPanel::-webkit-scrollbar { width: 8px; height: 8px; }
        .settingsNav::-webkit-scrollbar-thumb, .settingsPanel::-webkit-scrollbar-thumb { background: rgba(75,163,255,.32); border-radius: 999px; }
        .settingsNav::-webkit-scrollbar-track, .settingsPanel::-webkit-scrollbar-track { background: transparent; }
        .sectionIntro { max-width: 760px; margin-bottom: 26px; }
        .sectionIntro small { color: var(--blue); font-weight: 900; letter-spacing: .14em; }
        .sectionIntro h2 { font-size: 26px; margin: 6px 0 8px; }
        .sectionIntro p { color: var(--muted); line-height: 1.6; margin: 0; }
        .profileCard { display: grid; grid-template-columns: auto minmax(0,1fr) auto; align-items: center; gap: 16px; padding: 20px; border: 1px solid var(--border); border-radius: 16px; background: rgba(75,163,255,.055); margin-bottom: 20px; }
        .profileCard strong, .profileCard span, .profileCard small { display: block; }
        .profileCard span { color: var(--muted); margin: 4px 0; }
        .profileCard small { color: var(--green); }
        .primaryAction, .secondaryAction { display: inline-flex; align-items: center; gap: 7px; padding: 10px 13px; border-radius: 10px; text-decoration: none; font-weight: 800; }
        .primaryAction { background: var(--green); color: #04130d; }
        .secondaryAction { margin-top: 20px; background: rgba(255,255,255,.05); color: var(--muted); border: 1px solid var(--border); }
        .settingsGroup { border-top: 1px solid var(--border); }
        .settingRow { display: grid; grid-template-columns: minmax(0,1fr) auto; gap: 24px; align-items: center; min-height: 78px; border-bottom: 1px solid var(--border); padding: 14px 2px; }
        .settingRow strong, .settingRow span { display: block; }
        .settingRow > div > span { color: var(--muted); font-size: 13px; margin-top: 5px; line-height: 1.45; }
        .textAction { color: var(--blue); font-size: 13px; font-weight: 800; text-decoration: none; white-space: nowrap; }
        .settingsToggle { width: 44px !important; height: 25px; padding: 3px !important; border-radius: 999px !important; background: rgba(255,255,255,.13) !important; display: block !important; }
        .settingsToggle span { width: 19px; height: 19px; border-radius: 50%; background: #dbe5ef; transition: transform .2s ease; }
        .settingsToggle.isOn { background: var(--green) !important; }
        .settingsToggle.isOn span { transform: translateX(19px); background: #07111f; }
        .agentGrid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 13px; }
        .agentChoice { min-height: 145px; display: flex; flex-direction: column; align-items: flex-start; text-align: left; color: var(--text); background: rgba(255,255,255,.025); border: 1px solid var(--border); border-radius: 15px; padding: 17px; }
        .agentChoice.selected { border-color: rgba(61,220,151,.45); background: rgba(61,220,151,.055); }
        .agentChoice:disabled { opacity: .52; cursor: not-allowed; }
        .agentChoiceTop { width: 100%; display: flex; justify-content: space-between; color: var(--blue); margin-bottom: 16px; }
        .agentChoice strong { margin-bottom: 6px; }
        .agentChoice > span { color: var(--muted); font-size: 13px; line-height: 1.45; }
        .agentCheck { display: grid !important; place-items: center; width: 20px; height: 20px; border-radius: 50%; color: #04130d !important; background: var(--green); }
        .soonBadge, .planBadge, .draftBadge { border-radius: 999px; font-size: 10px !important; font-weight: 900; padding: 5px 8px; }
        .soonBadge, .draftBadge { background: rgba(255,122,69,.12); color: var(--orange) !important; }
        .infoStrip, .legalNotice { display: flex; gap: 12px; margin-top: 18px; padding: 14px 16px; border: 1px solid rgba(75,163,255,.2); border-radius: 12px; background: rgba(75,163,255,.06); color: #bcd7f3; font-size: 13px; }
        .segmented { display: flex; padding: 3px; background: rgba(255,255,255,.05); border-radius: 10px; }
        .segmented button { padding: 7px 10px; background: transparent; color: var(--muted); border-radius: 7px; }
        .segmented button.active { background: var(--panel2); color: var(--text); }
        select { color: var(--text); background: var(--panel2); border: 1px solid var(--border); border-radius: 9px; padding: 9px 12px; }
        .planCard { display: flex; justify-content: space-between; align-items: flex-start; padding: 22px; border-radius: 17px; background: linear-gradient(135deg,rgba(61,220,151,.12),rgba(75,163,255,.09)); border: 1px solid rgba(61,220,151,.25); }
        .planCard span { color: var(--green); font-size: 11px; font-weight: 900; letter-spacing: .12em; }
        .planCard h3 { font-size: 27px; margin: 7px 0; }
        .planCard p { color: var(--muted); margin: 0; }
        .planBadge { background: rgba(61,220,151,.13); }
        .usageGrid { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; margin-top: 16px; }
        .usageGrid > div { padding: 16px; border: 1px solid var(--border); border-radius: 13px; }
        .usageGrid span, .usageGrid strong, .usageGrid small { display: block; }
        .usageGrid span, .usageGrid small { color: var(--muted); font-size: 12px; }
        .usageGrid strong { font-size: 21px; margin: 8px 0 5px; }
        .linkCards { display: flex; flex-direction: column; border-top: 1px solid var(--border); }
        .linkCards button { display: grid; grid-template-columns: 1fr auto auto; gap: 13px; align-items: center; text-align: left; padding: 17px 3px; border-bottom: 1px solid var(--border); border-radius: 0; background: transparent; color: var(--text); }
        .linkCards button:hover { color: var(--blue); }
        .linkCards strong, .linkCards span { display: block; }
        .linkCards div > span { color: var(--muted); font-size: 13px; margin-top: 5px; }
        .legalNotice { margin: 0 0 18px; border-color: rgba(255,122,69,.22); background: rgba(255,122,69,.06); color: #ffd0c1; }
        .legalNotice strong, .legalNotice span { display: block; }
        .legalNotice span { color: var(--muted); margin-top: 4px; }
        html[data-theme="light"] { --bg:#eef3f8; --panel:#ffffff; --panel2:#e8eff6; --border:rgba(7,17,31,.11); --text:#102033; --muted:#607287; }
        html[data-theme="light"] body { background: linear-gradient(145deg,#edf3f8,#f7fafc 58%,#e9f0f6); }
        html[data-theme="light"] aside { background: rgba(242,247,251,.92); }
        html[data-theme="light"] .profilePill, html[data-theme="light"] .settingsNav { background: rgba(255,255,255,.86); }
        @media (max-width: 1000px) {
          .settingsShell { grid-template-columns: 76px minmax(0,1fr); }
          .settingsLayout { grid-template-columns: 190px minmax(420px,1fr); gap: 16px; }
          .settingsPanel { min-width: 420px; }
        }
        @media (max-width: 760px) {
          .settingsLayout { grid-template-columns: minmax(0,1fr); grid-template-rows: auto minmax(0,1fr); }
          .settingsPanel { min-width: 0; }
          .settingsNav { position: relative; top: auto; z-index: 15; display: flex; flex-direction: row; gap: 6px; width: 100%; height: auto; overflow-x: auto; overflow-y: hidden; padding: 8px; border-radius: 14px; backdrop-filter: blur(18px); scrollbar-width: thin; }
          .settingsNavLabel { display: none; }
          .settingsNav button { flex: 0 0 auto; width: auto; min-height: 40px; display: flex; grid-template-columns: none; gap: 8px; padding: 9px 12px; white-space: nowrap; }
          .settingsNav button svg:last-child { display: none; }
          .settingsNav button.active { box-shadow: inset 0 -3px 0 var(--blue); }
          .settingsNav .logoutButton { width: auto; margin: 0 0 0 auto; padding: 9px 12px; border: 0; border-radius: 10px; }
        }
        @media (max-width: 720px) { .settingsHeader { align-items: flex-start; } .profilePill { display: none; } .settingsPanel { padding: 20px; } .agentGrid, .usageGrid { grid-template-columns: 1fr; } .profileCard { grid-template-columns: auto minmax(0,1fr); } .profileCard .primaryAction { grid-column: 1/-1; justify-content: center; } }
        @media (max-width: 520px) { .settingRow { grid-template-columns: minmax(0,1fr); gap: 10px; } }
      `}</style>
    </main>
  );
}

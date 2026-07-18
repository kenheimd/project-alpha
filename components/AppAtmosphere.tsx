export default function AppAtmosphere({ quiet = false }: { quiet?: boolean }) {
  return (
    <div className={`appAtmosphere${quiet ? " isQuiet" : ""}`} aria-hidden="true">
      <div className="atmosphereGlow atmosphereGlowOne" />
      <div className="atmosphereGlow atmosphereGlowTwo" />
      <svg className="marketField" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <path className="marketTrace traceOne" d="M-80 690 C 130 650, 230 720, 405 575 S 710 490, 855 385 S 1130 420, 1510 165" />
        <path className="marketTrace traceTwo" d="M-110 775 C 170 680, 285 790, 480 650 S 770 610, 965 480 S 1230 505, 1510 310" />
        <path className="marketTrace traceThree" d="M-60 425 C 170 365, 300 460, 535 350 S 865 300, 1045 235 S 1290 245, 1510 95" />
      </svg>
    </div>
  );
}

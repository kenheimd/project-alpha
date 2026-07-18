import { SignIn } from "@clerk/nextjs";
import AlphaMark from "../../../components/AlphaMark";
import AppAtmosphere from "../../../components/AppAtmosphere";

export default function SignInPage() {
  return (
    <main className="signInPage">
      <AppAtmosphere quiet />
      <section className="signInContent">
        <div className="signInBrand">
          <span className="signInMark"><AlphaMark /></span>
          <span className="signInWordmark"><small>PROJECT</small><strong>ALPHA</strong></span>
        </div>
        <SignIn
          appearance={{
            variables: {
              colorPrimary: "#8fb8a8",
              colorBackground: "#151a18",
              colorText: "#edf0ea",
              colorTextSecondary: "#919a92",
              colorInputBackground: "#101411",
              colorInputText: "#edf0ea",
              borderRadius: "0.75rem",
              fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
            },
            elements: {
              rootBox: { width: "100%" },
              cardBox: { width: "100%", boxShadow: "0 28px 80px rgba(0,0,0,.28)" },
              card: { border: "1px solid rgba(234,239,233,.09)" },
            },
          }}
        />
      </section>
    </main>
  );
}

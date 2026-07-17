import { UserProfile } from "@clerk/nextjs";
import AppSidebar from "../../../../components/AppSidebar";

export default function UserProfilePage() {
  return (
    <main>
      <div className="backgroundA" aria-hidden="true">A</div>
      <AppSidebar active="settings" />
      <section className="content">
        <header>
          <div>
            <p>KONTO OG SIKKERHET</p>
            <h1>Administrer konto</h1>
            <span>Profil, passord, innloggingsmetoder og aktive økter.</span>
          </div>
        </header>
        <UserProfile path="/user-profile" routing="path" />
      </section>
    </main>
  );
}

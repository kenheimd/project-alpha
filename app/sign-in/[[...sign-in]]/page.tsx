import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main
      style={{
        width: "100%",
        minWidth: 0,
        minHeight: "100dvh",
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr)",
        placeItems: "center",
        padding: "24px",
        background: "#08111f",
      }}
    >
      <SignIn />
    </main>
  );
}

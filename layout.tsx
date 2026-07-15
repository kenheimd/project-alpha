import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Alpha",
  description: "AI-støttet investeringssystem og beslutningsmotor"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nb">
      <body>{children}</body>
    </html>
  );
}

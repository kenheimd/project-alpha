import "./globals.css";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Project Alpha",
  description: "AI-støttet investeringssystem og beslutningsmotor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="nb">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}

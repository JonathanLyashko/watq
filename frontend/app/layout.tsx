import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WatQ",
  description: "Quantum design team based in Waterloo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter_Tight, SF_Pro_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const sfProDisplay = SF_Pro_Display({
  variable: "--font-sf-pro-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "AuroraSaaS",
  description: "Deliver a clean Apple-inspired futuristic single-page landing.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${sfProDisplay.variable} antialiased bg-background text-foreground`}>{children}</body>
    </html>
  );
}

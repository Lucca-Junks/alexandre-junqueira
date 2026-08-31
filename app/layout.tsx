import type { Metadata } from "next";

import {
  Inter,
  Source_Serif_4,
} from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "./theme-provider";
import Header from "../components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: [
    "200",
    "300",
    "400",
    "500",
    "600",
  ],
  style: [
    "normal",
    "italic",
  ],
});

export const metadata: Metadata = {
  title:
    "Alexandre Junqueira | Advocacia e Consultoria",

  description:
    "Direito público, empresarial e consultoria estratégica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
    >
      <body
        className={`
          ${inter.variable}
          ${sourceSerif.variable}
        `}
      >
        <ThemeProvider>

          <Header />

          {children}

        </ThemeProvider>
      </body>
    </html>
  );
}
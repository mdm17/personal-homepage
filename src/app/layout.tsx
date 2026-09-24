import type { Metadata } from "next";
import localFont from "next/font/local";
import { Fraunces } from "next/font/google";
import "./globals.css";
import Header from "./_component/Header";
import ReactThreeScene from "./_component/ReactThreeScene";
import Starfield from "./_component/StarField";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "M Dicky Maulana — Pengembang perangkat lunak full-stack",
  description:
    "Portofolio M Dicky Maulana, pengembang perangkat lunak full-stack di Palembang. Lulusan D4 Manajemen Informatika Politeknik Negeri Sriwijaya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} font-sans antialiased`}>
        <Header />
        <div className="galaxy-wash" aria-hidden="true" />
        <ReactThreeScene />
        <Starfield />
        {children}
      </body>
    </html>
  );
}

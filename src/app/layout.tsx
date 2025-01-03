import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./_component/Header";
import ReactThreeScene from "./_component/ReactThreeScene";

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

export const metadata: Metadata = {
  title: "Personal Homepage - M Dicky Maulana",
  description: "Fullstack Developer di Palembang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} max-h-screen antialiased transition-all duration-500 ease-in-out dark:bg-gray-800 dark:bg-[url('./_img/stars.png')]`}
      >
        <Header />
        <ReactThreeScene />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HOARD | Smart Bookmark App",
  description: "A digital hoard for web artifacts. Built with existential dread and caffeine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen selection:bg-accent selection:text-black`}
      >
        <div className="fixed inset-0 bg-[radial-gradient(#111_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none opacity-20" />
        <main className="relative z-10 px-4 py-8 max-w-5xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}

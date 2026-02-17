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
  metadataBase: new URL("https://link-cemetery.vercel.app"),
  title: "The Link Cemetery | Smart Bookmark App",
  description: "A digital artifact cemetery for the links you'll never actually visit. Built with Neuralink and caffeine.",
  keywords: ["bookmark", "links", "digital cemetery", "productivity", "web tools"],
  authors: [{ name: "Kiran SR" }],
  openGraph: {
    title: "The Link Cemetery",
    description: "A digital artifact cemetery for the links you'll never actually visit.",
    url: "https://link-cemetery.vercel.app",
    siteName: "The Link Cemetery",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Link Cemetery",
    description: "A digital artifact cemetery for the links you'll never actually visit.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
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

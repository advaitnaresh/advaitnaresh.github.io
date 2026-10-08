import type { Metadata } from "next";
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LenisScroll } from "@/components/LenisScroll";
import { Navigation } from "@/components/Navigation";
import { PROFILE } from "@/lib/data";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${PROFILE.name} | ${PROFILE.role}`,
  description: PROFILE.engineeringFocus,
  openGraph: {
    title: `${PROFILE.name} | ${PROFILE.role}`,
    description: PROFILE.engineeringFocus,
    url: "https://advaitjishnani.com",
    siteName: PROFILE.name,
    images: [
      {
        url: "/photos/og.jpg",
        width: 1200,
        height: 630,
        alt: `${PROFILE.name} - ${PROFILE.role}`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.name} | ${PROFILE.role}`,
    description: PROFILE.engineeringFocus,
    images: ["/photos/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${interTight.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-paper text-ink selection:bg-ink selection:text-paper">
        <LenisScroll />
        <Navigation />
        {children}
      </body>
    </html>
  );
}

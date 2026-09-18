import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../components/effects/FaultyTerminal.css";
import FaultyTerminal from "@/components/effects/FaultyTerminal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    template: "%s | IETE SFIT",
    default: "IETE SFIT",
  },
  description: "Official website foundation for IETE SFIT.",
  openGraph: {
    title: "IETE SFIT",
    description: "Institution of Electronics and Telecommunication Engineers, St. Francis Institute of Technology.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-screen text-slate-900">
        <FaultyTerminal
          className="site-background"
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.1}
          timeScale={0.5}
          scanlineIntensity={0.2}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.1}
          tint="#99fcf7"
          dpr={1}
          mouseReact={false}
          pageLoadAnimation
          brightness={0.2}
        />
        <div className="site-shell flex min-h-screen flex-col">
          <Navbar />
          <main className="site-main flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

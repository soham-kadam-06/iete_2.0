"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Events", href: "/events" },
];

const quickLinks = [
  { href: "https://drive.google.com/drive/folders/18e-vmhSyp6MWnVtSb_HHEsKup_q0BYsb?usp=sharing", label: "Magazine" },
  { href: "https://drive.google.com/drive/folders/18e-vmhSyp6MWnVtSb_HHEsKup_q0BYsb?usp=sharing", label: "Report" },
  { href: "https://www.sfit.ac.in", label: "SFIT" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[90%] max-w-6xl -translate-x-1/2">
      <nav
        aria-label="Main navigation"
        className="rounded-full border border-slate-800 bg-slate-950/90 px-6 py-2.5 backdrop-blur-md"
      >
        <div className="flex items-center justify-between gap-4">
          <Link
            className="flex items-center gap-2 text-lg font-extrabold tracking-wider text-white"
            href="/"
            onClick={() => setMobileOpen(false)}
          >
            <Image src="/iete-logo.png" alt="IETE SFIT" width={108} height={48} priority className="h-10 w-auto object-contain" />
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 hover:bg-white/5 hover:text-primary ${
                    isActive ? "border border-primary/30 bg-primary/10 text-primary" : "text-gray-300"
                  }`}
                  href={link.href}
                >
                  {link.name}
                </Link>
              );
            })}
            {quickLinks.map((link) => (
              <a
                key={link.label}
                className="rounded-full px-4 py-1.5 text-sm font-medium text-gray-300 transition-colors duration-200 hover:bg-white/5 hover:text-primary"
                href={link.href}
                rel="noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link
              className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-black transition-colors hover:bg-gray-200"
              href="/join"
              onClick={() => setMobileOpen(false)}
            >
              Join Us
            </Link>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 text-gray-300 transition-colors hover:border-primary/40 hover:text-primary md:hidden"
              aria-controls="mobile-navigation"
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setMobileOpen((open) => !open)}
            >
              <span className="sr-only">Toggle navigation menu</span>
              <span aria-hidden="true" className="text-lg leading-none">{mobileOpen ? "×" : "☰"}</span>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div id="mobile-navigation" className="mt-3 flex flex-col gap-1 border-t border-white/10 pt-3 md:hidden">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-white/5 hover:text-primary ${
                    isActive ? "bg-primary/10 text-primary" : "text-gray-300"
                  }`}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            {quickLinks.map((link) => (
              <a
                key={link.label}
                className="rounded-full px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-primary"
                href={link.href}
                onClick={() => setMobileOpen(false)}
                rel="noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

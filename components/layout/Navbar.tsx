"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
];

const quickLinks = [
  { href: "#", label: "Magazine" },
  { href: "#", label: "Report" },
  { href: "#", label: "SFIT" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#2DE0CB]/30 bg-black/85 backdrop-blur-sm">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="IETE SFIT home">
          <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#2DE0CB]/50 bg-[#2DE0CB]/10 text-sm font-semibold text-[#2DE0CB]">
            IETE
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold uppercase tracking-[0.15em] text-white">IETE</div>
            <div className="text-[10px] text-[#80AAA4]">SFIT</div>
          </div>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  active ? "text-[#2DE0CB]" : "text-[#B4D1CD] hover:text-[#2DE0CB]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {quickLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-[#B4D1CD] transition hover:text-[#2DE0CB]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-[#2DE0CB]/40 p-2 text-[#2DE0CB] md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((value) => !value)}
        >
          <span className="sr-only">Open navigation menu</span>
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm1 4a1 1 0 100 2h12a1 1 0 100-2H4z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div id="mobile-menu" className="border-t border-[#2DE0CB]/30 bg-black/95 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    active ? "bg-[#2DE0CB]/15 text-[#2DE0CB]" : "text-[#B4D1CD] hover:bg-[#2DE0CB]/10"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="mt-2 flex flex-col gap-1">
              {quickLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-[#B4D1CD] hover:bg-[#2DE0CB]/10 hover:text-[#2DE0CB]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

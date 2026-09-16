import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-600 bg-slate-800 text-sm font-semibold text-slate-100">
              IETE
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.15em] text-white">IETE</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">SFIT</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
            A student-focused platform for electronics, innovation, and technology learning at St. Francis Institute of Technology.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">Navigation</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>hello@ietesfit.example</li>
            <li>+91 00000 00000</li>
            <li>St. Francis Institute of Technology</li>
            <li>
              <div className="flex gap-4 pt-2 text-slate-400">
                <a href="https://instagram.com" className="hover:text-white" aria-label="Instagram">
                  Instagram
                </a>
                <a href="https://linkedin.com" className="hover:text-white" aria-label="LinkedIn">
                  LinkedIn
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-xs text-slate-400 sm:px-6 lg:px-8">
          <p>© 2026 IETE SFIT. All rights reserved.</p>
          <p>Website skeleton for future content integration</p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="border-b border-[#2DE0CB]/20 bg-black/70">
      <Container className="grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">IETE SFIT</p>
          <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Student-led innovation and technology community.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
            Placeholder hero content for the official website of the Institution of Electronics and Telecommunication Engineers,
            St. Francis Institute of Technology.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/events"
              className="inline-flex items-center justify-center rounded-md bg-[#2DE0CB] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#72F3E3]"
            >
              Explore Events
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-md border border-[#2DE0CB]/50 bg-black/60 px-5 py-3 text-sm font-medium text-[#B4D1CD] transition hover:border-[#2DE0CB] hover:bg-[#2DE0CB]/10"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-[#2DE0CB]/25 bg-black/60 p-4 shadow-sm">
          <div className="flex min-h-[420px] items-end rounded-2xl border border-dashed border-[#2DE0CB]/35 bg-[linear-gradient(135deg,#031114_0%,#071D20_55%,#020506_100%)] p-6">
            <div className="rounded-2xl border border-[#2DE0CB]/30 bg-black/65 p-5 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#80AAA4]">Featured</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Technology & learning</h2>
              <p className="mt-2 text-sm text-[#B4D1CD]">Hero image placeholder area for future design phase.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

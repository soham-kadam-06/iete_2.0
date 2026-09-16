import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="border-b border-slate-200 bg-white">
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
              className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              Explore Events
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 p-4 shadow-sm">
          <div className="flex min-h-[420px] items-end rounded-2xl border border-dashed border-slate-300 bg-[linear-gradient(135deg,#f8fafc_0%,#e2e8f0_100%)] p-6">
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Featured</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Technology & learning</h2>
              <p className="mt-2 text-sm text-slate-600">Hero image placeholder area for future design phase.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

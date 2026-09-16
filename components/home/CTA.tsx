import Link from "next/link";
import Container from "@/components/ui/Container";

export default function CTA() {
  return (
    <section className="bg-slate-900 py-16 text-white">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">Get involved</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Join the next technical chapter.</h2>
        </div>

        <Link
          href="/events"
          className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
        >
          View upcoming events
        </Link>
      </Container>
    </section>
  );
}

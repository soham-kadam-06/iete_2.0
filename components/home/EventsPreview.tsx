import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const sampleEvents = [
  { title: "Tech Talk Series", date: "12 Sep 2026", type: "Talk" },
  { title: "Innovation Workshop", date: "19 Sep 2026", type: "Workshop" },
  { title: "Orientation Day", date: "02 Oct 2026", type: "Event" },
];

export default function EventsPreview() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          eyebrow="Featured Events"
          title="Upcoming highlights"
          description="A quick look at upcoming chapter events and activities."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {sampleEvents.map((event) => (
            <article key={event.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                <span>{event.type}</span>
                <span>{event.date}</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{event.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">Placeholder summary for an upcoming event.</p>
              <Link href="/events" className="mt-6 inline-block text-sm font-semibold text-slate-900 underline-offset-4 hover:underline">
                View details →
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

import Link from "next/link";

type EventCardProps = {
  title: string;
  slug: string;
  shortDescription: string;
  eventDate: string;
  eventType: string;
};

export default function EventCard({ title, slug, shortDescription, eventDate, eventType }: EventCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
      <div className="flex h-52 items-center justify-center border-b border-slate-200 bg-slate-100 text-sm text-slate-500">
        Event cover
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
          <span>{eventType}</span>
          <span>{eventDate}</span>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-slate-900">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{shortDescription}</p>
        <Link href={`/events/${slug}`} className="mt-5 inline-block text-sm font-semibold text-slate-900 underline-offset-4 hover:underline">
          Read more →
        </Link>
      </div>
    </article>
  );
}

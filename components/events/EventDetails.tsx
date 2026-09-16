type EventDetailsProps = {
  event: {
    title: string;
    slug: string;
    shortDescription: string;
    description: string;
    eventDate: string;
    startTime: string;
    endTime: string;
    location: string;
    coverImage: string;
    galleryImages: string[];
    registrationLink: string;
    eventType: string;
    featured: boolean;
    status: string;
  };
};

export default function EventDetails({ event }: EventDetailsProps) {
  return (
    <article className="mx-auto max-w-4xl">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="flex h-64 items-center justify-center border-b border-slate-200 bg-slate-100 text-slate-500">
          Event cover image placeholder
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
            <span>{event.eventType}</span>
            <span>{event.status}</span>
            {event.featured && <span>Featured</span>}
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{event.title}</h1>
          <p className="mt-4 text-lg text-slate-600">{event.shortDescription}</p>

          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-4">
              <dt className="text-xs uppercase tracking-[0.12em] text-slate-500">Date</dt>
              <dd className="mt-2 text-base font-medium text-slate-900">{event.eventDate}</dd>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <dt className="text-xs uppercase tracking-[0.12em] text-slate-500">Location</dt>
              <dd className="mt-2 text-base font-medium text-slate-900">{event.location}</dd>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <dt className="text-xs uppercase tracking-[0.12em] text-slate-500">Starts</dt>
              <dd className="mt-2 text-base font-medium text-slate-900">{event.startTime}</dd>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <dt className="text-xs uppercase tracking-[0.12em] text-slate-500">Ends</dt>
              <dd className="mt-2 text-base font-medium text-slate-900">{event.endTime}</dd>
            </div>
          </dl>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">About this event</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">{event.description}</p>
          </div>

          <a
            href={event.registrationLink}
            className="mt-8 inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Register now
          </a>
        </div>
      </div>
    </article>
  );
}

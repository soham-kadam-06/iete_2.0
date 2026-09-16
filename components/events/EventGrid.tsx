import EventCard from "@/components/events/EventCard";

const events = [
  {
    title: "Tech Talk Series",
    slug: "tech-talk-series",
    shortDescription: "An insightful discussion on current trends in electronics and communication.",
    eventDate: "12 Sep 2026",
    eventType: "Talk",
  },
  {
    title: "Innovation Workshop",
    slug: "innovation-workshop",
    shortDescription: "A hands-on workshop that explores practical implementation and problem solving.",
    eventDate: "19 Sep 2026",
    eventType: "Workshop",
  },
  {
    title: "Orientation Day",
    slug: "orientation-day",
    shortDescription: "A welcoming session for new members and a chance to discover club opportunities.",
    eventDate: "02 Oct 2026",
    eventType: "Event",
  },
];

export default function EventGrid() {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {events.map((event) => (
        <EventCard key={event.slug} {...event} />
      ))}
    </div>
  );
}

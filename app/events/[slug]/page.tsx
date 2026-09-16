import { notFound } from "next/navigation";
import EventDetails from "@/components/events/EventDetails";
import Container from "@/components/ui/Container";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return {
    title: `Event: ${slug}`,
    description: "Detailed event information for IETE SFIT.",
  };
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const event = {
    title: "Sample Event",
    slug,
    shortDescription: "A placeholder event description for the development phase.",
    description:
      "This event page is scaffolded and ready to load real content from Sanity once the CMS is configured.",
    eventDate: "2026-09-30",
    startTime: "11:00",
    endTime: "13:00",
    location: "IETE SFIT Campus",
    coverImage: "/images/placeholder-event.jpg",
    galleryImages: [],
    registrationLink: "#",
    eventType: "Workshop",
    featured: true,
    status: "upcoming",
  };

  if (!event) {
    notFound();
  }

  return (
    <Container className="py-16">
      <EventDetails event={event} />
    </Container>
  );
}

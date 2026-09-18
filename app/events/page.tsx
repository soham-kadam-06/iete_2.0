import EventGrid from "@/components/events/EventGrid";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Events",
  description: "Explore upcoming and past events by IETE SFIT.",
};

export default function EventsPage() {
  return (
    <Container className="py-16">
      <SectionHeading
        eyebrow="Events"
        title="Events"
        description="The events archive is ready for chapter events and dynamic routing."
      />
      <EventGrid />
    </Container>
  );
}

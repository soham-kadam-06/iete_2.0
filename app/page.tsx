import AboutPreview from "@/components/home/AboutPreview";
import CTA from "@/components/home/CTA";
import EventsPreview from "@/components/home/EventsPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import Hero from "@/components/home/Hero";
import TeamPreview from "@/components/home/TeamPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <EventsPreview />
      <TeamPreview />
      <GalleryPreview />
      <CTA />
    </>
  );
}

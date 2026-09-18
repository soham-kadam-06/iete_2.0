import GalleryGrid from "@/components/gallery/GalleryGrid";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Gallery",
  description: "Explore highlights from IETE SFIT events and activities.",
};

export default function GalleryPage() {
  return (
    <Container className="py-16">
      <SectionHeading
        eyebrow="Gallery"
        title="Gallery"
        description="Album-based gallery layout prepared for future chapter photography."
      />

      <GalleryGrid />
    </Container>
  );
}

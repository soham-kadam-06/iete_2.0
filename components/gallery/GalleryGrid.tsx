import GalleryCard from "@/components/gallery/GalleryCard";

const albums = [
  {
    title: "Technovation 2026",
    description: "A showcase of campus innovation and student creativity.",
    date: "2026",
  },
  {
    title: "Orientation",
    description: "Welcoming new members and introducing the chapter vision.",
    date: "2026",
  },
  {
    title: "Workshops",
    description: "Hands-on sessions that encourage learning beyond the classroom.",
    date: "2026",
  },
  {
    title: "Tech Fest",
    description: "A collaborative event that brings students together around technology.",
    date: "2025",
  },
];

export default function GalleryGrid() {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {albums.map((album) => (
        <GalleryCard key={album.title} {...album} />
      ))}
    </div>
  );
}

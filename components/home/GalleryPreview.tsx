import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const albums = [
  { title: "Technovation 2026", description: "Campus innovation showcase" },
  { title: "Orientation", description: "Freshers and welcome session" },
  { title: "Workshops", description: "Technical learning activities" },
];

export default function GalleryPreview() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="Moments from the chapter"
          description="A visual preview of chapter events, workshops, and activities."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {albums.map((album) => (
            <article key={album.title} className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
              <div className="flex h-52 items-center justify-center border-b border-slate-200 bg-slate-100 text-sm text-slate-500">
                Cover image
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{album.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{album.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/gallery" className="text-sm font-semibold text-slate-900 underline-offset-4 hover:underline">
            Explore gallery →
          </Link>
        </div>
      </Container>
    </section>
  );
}

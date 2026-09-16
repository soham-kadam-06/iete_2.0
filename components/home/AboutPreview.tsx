import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutPreview() {
  return (
    <section className="bg-slate-50 py-16">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="A platform for technical growth"
          description="This preview section is structured for future Sanity content and planned to highlight the chapter’s mission and purpose."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { title: "Innovation", text: "Encouraging practical learning, curiosity, and experimentation." },
            { title: "Leadership", text: "Developing initiative through events, teamwork, and responsibilities." },
            { title: "Community", text: "Building a collaborative environment for students and professionals." },
          ].map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/about" className="text-sm font-semibold text-slate-900 underline-offset-4 hover:underline">
            Read more about IETE SFIT →
          </Link>
        </div>
      </Container>
    </section>
  );
}

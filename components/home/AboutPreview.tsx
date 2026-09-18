import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutPreview() {
  return (
    <section id="about" className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="A platform for technical growth"
          description="A concise look at the chapter’s mission, purpose, and technical community."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { title: "Innovation", text: "Encouraging practical learning, curiosity, and experimentation." },
            { title: "Leadership", text: "Developing initiative through events, teamwork, and responsibilities." },
            { title: "Community", text: "Building a collaborative environment for students and professionals." },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-colors hover:border-slate-700"
            >
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

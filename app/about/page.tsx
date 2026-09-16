import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "About",
  description: "Learn about IETE SFIT and its mission.",
};

export default function AboutPage() {
  return (
    <Container className="py-16">
      <SectionHeading eyebrow="About" title="About IETE SFIT" description="A foundation page prepared for future Sanity-driven content." />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">About IETE</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            IETE is a national professional body focused on advancing the fields of electronics, telecommunication,
            and information technology through technical activities, learning, and community engagement.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">About IETE SFIT</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            This section will eventually describe the student chapter’s culture, initiatives, and impact at St. Francis
            Institute of Technology.
          </p>
        </section>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-slate-100 p-8">
          <h3 className="text-xl font-semibold text-slate-900">Vision</h3>
          <p className="mt-4 text-base leading-7 text-slate-700">
            To create a vibrant ecosystem that nurtures technical curiosity, leadership, and professional growth.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-slate-100 p-8">
          <h3 className="text-xl font-semibold text-slate-900">Mission</h3>
          <p className="mt-4 text-base leading-7 text-slate-700">
            To empower students through workshops, events, knowledge-sharing, and opportunities that connect theory with practice.
          </p>
        </section>
      </div>
    </Container>
  );
}

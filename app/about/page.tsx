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
        <section className="rounded-2xl border border-emerald-400/30 bg-slate-950/75 p-8 shadow-[0_0_30px_rgba(45,224,203,0.12)] backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-emerald-100">About IETE</h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            IETE is a national professional body focused on advancing the fields of electronics, telecommunication,
            and information technology through technical activities, learning, and community engagement.
          </p>
        </section>

        <section className="rounded-2xl border border-emerald-400/30 bg-slate-950/75 p-8 shadow-[0_0_30px_rgba(45,224,203,0.12)] backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-emerald-100">About IETE SFIT</h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            This section will eventually describe the student chapter’s culture, initiatives, and impact at St. Francis
            Institute of Technology.
          </p>
        </section>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <section className="rounded-2xl border border-emerald-400/30 bg-slate-900/80 p-8 shadow-[0_0_30px_rgba(45,224,203,0.1)] backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-emerald-100">Vision</h3>
          <p className="mt-4 text-base leading-7 text-slate-300">
            To create a vibrant ecosystem that nurtures technical curiosity, leadership, and professional growth.
          </p>
        </section>

        <section className="rounded-2xl border border-emerald-400/30 bg-slate-900/80 p-8 shadow-[0_0_30px_rgba(45,224,203,0.1)] backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-emerald-100">Mission</h3>
          <p className="mt-4 text-base leading-7 text-slate-300">
            To empower students through workshops, events, knowledge-sharing, and opportunities that connect theory with
            practice.
          </p>
        </section>
      </div>
    </Container>
  );
}

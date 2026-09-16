import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const teamMembers = [
  { name: "Team Member 1", position: "Joint Head" },
  { name: "Team Member 2", position: "Technical Lead" },
  { name: "Team Member 3", position: "Event Coordinator" },
];

export default function TeamPreview() {
  return (
    <section className="bg-slate-50 py-16">
      <Container>
        <SectionHeading
          eyebrow="Team"
          title="Student leadership"
          description="The committee section is ready for a structured team profile list from Sanity."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {teamMembers.map((member) => (
            <article key={member.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex h-28 w-full items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-100 text-sm text-slate-500">
                Photo
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{member.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{member.position}</p>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/team" className="text-sm font-semibold text-slate-900 underline-offset-4 hover:underline">
            Meet the full team →
          </Link>
        </div>
      </Container>
    </section>
  );
}

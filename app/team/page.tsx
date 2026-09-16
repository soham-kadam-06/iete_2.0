import TeamGrid from "@/components/team/TeamGrid";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Team",
  description: "Meet the IETE SFIT team.",
};

export default function TeamPage() {
  return (
    <Container className="py-16">
      <SectionHeading
        eyebrow="Team"
        title="Meet the team"
        description="This section will eventually render team members from Sanity, with placeholder cards during development."
      />
      <TeamGrid />
    </Container>
  );
}

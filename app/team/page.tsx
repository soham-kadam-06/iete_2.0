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
        description="This section will present team members with structured profiles."
      />
      <TeamGrid />
    </Container>
  );
}

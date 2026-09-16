import TeamCard from "@/components/team/TeamCard";

const members = [
  {
    name: "Member One",
    position: "Joint Head",
    department: "Electronics & Telecommunication",
    year: "TY",
    bio: "Placeholder bio for a team member. This will eventually be managed through Sanity.",
  },
  {
    name: "Member Two",
    position: "Technical Lead",
    department: "Information Technology",
    year: "SY",
    bio: "Placeholder bio for a team member. This will eventually be managed through Sanity.",
  },
  {
    name: "Member Three",
    position: "Event Coordinator",
    department: "Computer Engineering",
    year: "FY",
    bio: "Placeholder bio for a team member. This will eventually be managed through Sanity.",
  },
  {
    name: "Member Four",
    position: "Marketing Lead",
    department: "Electronics",
    year: "TY",
    bio: "Placeholder bio for a team member. This will eventually be managed through Sanity.",
  },
];

export default function TeamGrid() {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {members.map((member) => (
        <TeamCard key={member.name} {...member} />
      ))}
    </div>
  );
}

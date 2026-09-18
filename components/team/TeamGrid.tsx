import TeamCard from "@/components/team/TeamCard";

const members = [
  {
    name: "Member One",
    position: "Joint Head",
    department: "Electronics & Telecommunication",
    year: "TY",
    bio: "A student leader contributing to the chapter’s technical community.",
  },
  {
    name: "Member Two",
    position: "Technical Lead",
    department: "Information Technology",
    year: "SY",
    bio: "A student leader contributing to the chapter’s technical community.",
  },
  {
    name: "Member Three",
    position: "Event Coordinator",
    department: "Computer Engineering",
    year: "FY",
    bio: "A student leader contributing to the chapter’s technical community.",
  },
  {
    name: "Member Four",
    position: "Marketing Lead",
    department: "Electronics",
    year: "TY",
    bio: "A student leader contributing to the chapter’s technical community.",
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

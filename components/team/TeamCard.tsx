type TeamMember = {
  name: string;
  position: string;
  department: string;
  year: string;
  bio: string;
};

export default function TeamCard({ name, position, department, year, bio }: TeamMember) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex h-40 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-100 text-sm text-slate-500">
        Photo placeholder
      </div>
      <div className="mt-5">
        <h3 className="text-xl font-semibold text-slate-900">{name}</h3>
        <p className="mt-1 text-sm font-medium text-slate-600">{position}</p>
      </div>
      <div className="mt-3 space-y-1 text-sm text-slate-500">
        <p>{department}</p>
        <p>{year}</p>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600">{bio}</p>
    </article>
  );
}

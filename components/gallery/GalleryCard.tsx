type GalleryAlbum = {
  title: string;
  description: string;
  date: string;
};

export default function GalleryCard({ title, description, date }: GalleryAlbum) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex h-52 items-center justify-center border-b border-slate-200 bg-slate-100 text-sm text-slate-500">
        Cover image placeholder
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <span className="text-xs uppercase tracking-[0.12em] text-slate-500">{date}</span>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      </div>
    </article>
  );
}

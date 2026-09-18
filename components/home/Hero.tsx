import RotatingText from "@/components/ui/RotatingText";

export default function Hero() {
  return (
    <section className="hero-section flex min-h-[80vh] flex-col items-center justify-center border-b border-primary/20 bg-black/35 px-7 pb-20 pt-32 text-center sm:px-8">
      <div className="hero-content flex max-w-5xl flex-col items-center">
        <h1 className="mb-6 flex flex-wrap items-center justify-center gap-3 text-center text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          <span className="text-white">WE ARE IETE SFIT </span>
          <RotatingText
            texts={["Hardware", "Software", "Communication", "Innovators"]}
            initial={{ y: "-120%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            rotationInterval={3500}
            splitLevelClassName="overflow-hidden pb-1"
            staggerDuration={0.04}
            staggerFrom="last"
            mainClassName="px-4 py-1.5 bg-slate-900 text-emerald-400 border border-slate-800 rounded-full inline-flex justify-center items-center min-w-[200px] md:min-w-[280px] text-center font-semibold text-2xl sm:text-3xl md:text-4xl"
          />
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-[#B4D1CD] sm:text-xl">
          A community of curious minds building, learning, and shaping what comes next.
        </p>
        <a href="#about" className="hero-scroll mt-20 inline-flex flex-col items-center gap-3 text-[#80AAA4] transition-colors hover:text-primary">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Discover IETE</span>
          <span aria-hidden="true" className="text-2xl leading-none">↓</span>
        </a>
      </div>
    </section>
  );
}

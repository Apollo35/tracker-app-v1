function StatCard({ title, value }) {
  return (
    <div className="border border-zinc-800 bg-zinc-950 p-5 transition hover:border-green-900">
      <p className="text-green-500 text-[10px] font-bold uppercase tracking-[0.2em]">
        {title}
      </p>

      <div className="mt-4 flex items-end justify-between gap-4">
        <h2 className="iron-display text-5xl leading-none md:text-6xl">
          {value}
        </h2>

        <span className="iron-data mb-1 text-[9px] uppercase tracking-widest text-zinc-600"></span>
      </div>
    </div>
  );
}

export default StatCard;

function HeaderSection({ level, diamonds }) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs">
          PERFORMANCE SYSTEM
        </p>

        <h2 className="text-3xl md:text-5xl font-black uppercase mt-3">
          Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-6">
        <div className="border border-zinc-800 bg-zinc-950 px-5 py-3">
          <p className="text-zinc-500 text-xs uppercase tracking-widest">
            ACTIVE LEVEL
          </p>

          <p className="text-2xl font-black text-green-500 mt-1">{level}</p>
        </div>

        <div className="border border-yellow-500/40 bg-yellow-500/5 px-5 py-3">
          <p className="text-zinc-500 text-xs uppercase tracking-widest">
            DIAMONDS
          </p>

          <p className="text-2xl font-black text-yellow-400 mt-1">
            💎 {diamonds}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;

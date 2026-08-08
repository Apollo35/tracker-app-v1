function HeaderSection({ level, diamonds }) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-green-500 text-xs uppercase tracking-[0.3em]">
          PERFORMANCE SYSTEM
        </p>

        <h2 className="iron-display mt-2 text-5xl leading-none md:text-7xl">
          Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-3">
        <div className="border border-zinc-800 bg-zinc-950 px-5 py-3">
          <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            ACTIVE LEVEL
          </p>

          <p className="iron-data mt-2 text-2xl font-bold text-green-500">
            {level}
          </p>
        </div>

        <div className="border border-green-900 bg-green-950/20 px-5 py-3">
          <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            DIAMONDS
          </p>

          <p className="iron-data mt-2 text-2xl font-bold text-yellow-400">
            💎 {diamonds}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
